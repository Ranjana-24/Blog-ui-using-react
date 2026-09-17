// export const validateBlog = (blog) => {
//   const errors = {};

//   if (blog.title.length === 0) {
//     errors.title = "Title is required";
//   } else if (blog.title.length < 3) {
//     errors.title = "Title cannot be less than 3 characters";
//   } else if (blog.title.length > 50) {
//     errors.title = "Title cannot be more than 20 characters";
//   }

//   if (blog.content.length === 0) {
//     errors.content = "Content is required";
//   } else if (blog.content.length < 3) {
//     errors.content = "Content cannot be less than 3 characters";
//   } else if (blog.content.length > 250) {
//     errors.content = "Content cannot be more than 500 characters";
//   }

//  if (blog.category.length === 0) {
//   errors.category = "Category is required";
// } else if (blog.category.length < 2) {
//   errors.category = "Category cannot be less than 2 characters";
// } else if (blog.category.length
//    > 10) {
//   errors.category = "Category cannot be more than 10 characters";
// }


//   if (blog.date.length === 0) {
//     errors.date = "Date is required";
//   }

//   if (blog.author.length === 0) {
//     errors.author = "Author is required";
//   } else if (blog.author.length < 2) {
//     errors.author = "Author cannot be less than 2 characters";
//   } else if (blog.author.length > 10) {
//     errors.author = "Author cannot be more than 10 characters";
//   }

//   return errors;
// };