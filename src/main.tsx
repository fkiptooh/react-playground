import { z } from "zod";

const schema = z.object({
  username: z.string(),
});

type User = z.infer<typeof schema>;

const user: User = { username: "Felix" };

console.log(schema.parse(user));
