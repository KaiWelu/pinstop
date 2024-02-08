import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Name must be at least two characters" }),
  username: z.string().min(2, { message: "Too short" }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least eight characters.",
  }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least eight characters.",
  }),
});
