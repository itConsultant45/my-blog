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

4. Using nextjs-starter, nextjs-blog and blog-starter as reference munge them into my-blog/static_site...

A. Setup prettier, playwright and setup export

```bash
yarn add -D prettier eslint eslint-config-prettier eslint-plugin-prettier
yarn add -D @playwright/test
yarn add --dev @types/react @types/node
```

update package.json

```json
    "build": "next build && next export",
    "lint": "next lint",
    "fix": "next lint --fix",
    "test": "playwright test",
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
.github to ..
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

C. Install tailwind css

```bash
yarn add -D postcss tailwindcss
npx tailwindcss init
npx tailwindcss-cli@latest init
```

update tailwind.config.js

```js
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
```

create postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

update next.config.js

```js
  swcMinify: false,
  images: {
    loader: "akamai",
    path: "/",
  },
```

replace global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

update index.tsx

```html
<div>
  <head>
    <title>Create Next App</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </head>

  <header>
    <p>Header</p>
  </header>

  <main>
    <h1>Welcome to <a href="https://nextjs.org">Next.js!</a></h1>
  </main>

  <footer>
    <p>Footer</p>
  </footer>
</div>
```

D. Copy more stuff

From blog-starter

Copy:-
@types
interfaces

From nextjs-blog

Copy:-
components
lib
pages/posts
posts
public/images

```bash
yarn add gray-matter remark remark-html date-fns
yarn add react-icons
```

Fix lint and build errors....

Copy:-
pages/index.tsx

Fix lint and build errors....

Commit and push (WIP)

```

```
