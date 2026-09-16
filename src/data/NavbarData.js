const NavbarData = [
  {
    name: "Home",
    path: "/",
    image: "/images/home.png",
  },
  {
    name: "About",
    path: "/about",
    image: "/images/about.png",
  },
  {
    name: "Blog",
    path: "/Blog",
    image: "/images/Blog.png",
     children: [
      {
        name: "Technology",
        path: "/blog/category/technology",
      },
      {
        name: "Education",
        path: "/blog/category/education",
      },
      {
        name: "Health",
        path: "/blog/category/health",
      },
      {
        name: "Travel",
        path: "/blog/category/travel",
      },
      {
        name: "Business",
        path: "/blog/category/business",
      },
      {
        name: "Programming",
        path: "/blog/category/programming",
      },
      {
        name: "Productivity",
        path: "/blog/category/productivity",
      },
    ],
  },
  {
    name: "Categories",
    path: "/categories",
    image: "/images/categories.png",
  },
  {
    name: "Pages",
    path: "/pages",
    image: "/images/pages.png",
  },
  {
    name: "Contact",
    path: "/contact",    
    image: "/images/contact.png",
  }
];

export default NavbarData;
