import {z} from "zod";

export const blogSchema = z.object({
    title: z
    .string()
    .min(3 , "Title cannot be less than 3 characters")
    .max(50, "Title cannot be more than 50 characters"),

    image: z
    .string()
    .min(1 , "enter atleast 1 image URL"),

    content: z
    .string()
    .min(50 , "Content cannot be less than 50 characters")
    .max(250, "Content cannot be more than 250 characters"),

    category: z
    .string()
    .min(3 , "Category cannot be less than 3 characters")
    .max(8, "Category cannot be more than 8 characters"),

    date: z
    .string()
    .min(1 , "minimum 1 date is required "),

    author: z
    .string()
    .min(3 , "Author cannot be less than 3 characters")
    .max(10, "Author cannot be more than 10 characters"),

})