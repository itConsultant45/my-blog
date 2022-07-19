# my-blog

Steps:

<!-- 1. In a tempory location run commands : (https://nextjs.org/docs/api-reference/cli, https://github.com/vercel/next.js/tree/canary/examples/blog-starter) -->

<!-- ```bash
yarn create next-app -e blog-starter
cd blog-starter
yarn
yarn dev
``` -->

1. Following the [tutorial](https://nextjs.org/learn/excel/typescript)

```bash
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/basics-final"

cd nextjs-blog

touch tsconfig.json

yarn add --dev typescript @types/react @types/node

mv components/date.js components/date.tsx
mv components/layout.js components/layout.tsx
mv lib/posts.js lib/posts.tsx
mv "pages/posts/[id].js" "pages/posts/[id].tsx"
mv pages/index.js pages/index.tsx
mv pages/_app.js pages/_app.tsx
mv pages/api/hello.js pages/api/hello.ts

yarn dev
```

2. From [Deploy static-rendered Next.js websites on Azure Static Web Apps](https://docs.microsoft.com/en-gb/azure/static-web-apps/deploy-nextjs), create temptory repo from template [HERE](https://github.com/staticwebdev/nextjs-starter/generate) and clone

3. In my-blog create a vanilla NextJS site

```bash
npx create-next-app@latest --ts # name=static-site
```

4. Copy nextjs-blog to my-blog/static-site. Using "PluralSight\react-prototyping-ux-design\01\demos\working-sample" as reference munge them into my-blog/static_site...

A. Copy over prettier, playwright and setup export

```bash
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
yarn add -D @playwright/test
```

update package.json

```json
  "build": "next build && next export",
  "fix": "next lint --fix",
  "test": "playwright test",
```

update next.config.js

```js
swcMinify: true,
  images: {
    loader: "akamai",
    path: ""
  }
```

create file tests/example.spec.ts

```ts
import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const title = page.locator("title");
  await expect(title).toHaveText("Create Next App");
});
```

From nextjs-starter

Copy files:-
.github ..
.prettierrc.json
playwright.config.ts
staticwebapp.config.json

update lint.yml and playwright.js.yml replaceing "npm" with "cd static-site && yarn"
B. Deploy your static website

Commit and checkin code

In the "Azure Resource" VC plugin, right click "Static Web Apps" and select "Create Static Web App..."

```
name=my-blog
static-site
Western Europe
Custom
app location=/static-site
build output=out
```
