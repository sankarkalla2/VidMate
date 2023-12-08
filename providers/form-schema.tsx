import * as z from "zod";

export const formSchema = z.object({
  title: z.string().min(2).max(50, { message: "enter atleast 1 character" }),
});
