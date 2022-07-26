import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');
// Get file names under /posts
const fileNames = fs.readdirSync(postsDirectory);

export function getSortedPostsData() {
  const allPostsData = fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');
    const matterResult = getMatterResult(fileName);

    var excerpt = matterResult.excerpt;
    if (!excerpt) {
      var s = matterResult.content.substring(0, 250);
      excerpt = s.substring(0, s.lastIndexOf(' ')) + ' ...';
    }

    // Combine the data with the id
    return {
      id,
      excerpt,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getCategoriesData() {
  const allCategories = fileNames.map((fileName) => {
    const matterResult = getMatterResult(fileName);

    return {
      categories: matterResult.data.categories as string[],
    };
  });

  var counts: { name: string; count: number }[] = [];
  allCategories.forEach((x) => {
    x.categories.forEach((y) => {
      var name = y;
      var o = counts.find((z) => {
        return z.name === name;
      });

      if (o) o.count++;
      else counts[counts.length] = { name, count: 1 };
    });
  });

  return counts;
}

export function getTagsData() {
  const allTags = fileNames.map((fileName) => {
    const matterResult = getMatterResult(fileName);

    return {
      tags: matterResult.data.tags as string[],
    };
  });

  var counts: { name: string; count: number }[] = [];
  allTags.forEach((x) => {
    x.tags.forEach((y) => {
      var name = y;
      var o = counts.find((z) => {
        return z.name === name;
      });

      if (o) o.count++;
      else counts[counts.length] = { name, count: 1 };
    });
  });

  return counts;
}

export function getAllPostIds() {
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string) {
  const matterResult = getMatterResult(`${id}.md`);
  const contentHtml = await formatHtml(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export async function formatHtml(content: string) {
  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
}
function getMatterResult(fileName: string) {
  // Remove ".md" from file name to get id
  const id = fileName.replace(/\.md$/, '');

  // Read markdown file as string
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  return matter(fileContents);
}
