# React + TypeScript + Vite

This is a simple react app created using `npx create vite@latest` command. Here in we will be looking on a lot of concepts and features that have come along to ease the life of a developer and make them a fast and better developers.

Some of the things that I would be covering will be included below and the list will keep growing as well:

- Zod Library [(https://zod.dev/)]
- TanStack [(https://tanstack.com/query/latest)] 

## Zod Libray

If you are developing a form and need of robust validation and all the check in place then look no further; Zod had your back.

- Zod installation and simple code snippet:

```ts
`installation` : npm i zod

  import { z } from "zod";

  const schema = z.object({
    username: z.string(),
  });

  type User = z.infer<typeof schema>;

  const user: User = { username: "Felix" };

  console.log(schema.parse(user));
```
