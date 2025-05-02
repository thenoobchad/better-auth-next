import { z } from "zod"

export const signUpSchema = z.object({
    username: z.string().min(2, {message: "Name must be at least 2 characters long"}).max(50, {message:"username cannot exceed 50 characters"}),
    email: z.string().email({message: "Please enter a valid email address"}),
    password: z.string().min(8, {message:"Password must be at least 8 characters long"}).max(20,{ message:"Password cannot exceed 20 characters"}),
});

export const signInSchema = signUpSchema.pick({email: true,
    password: true
})

