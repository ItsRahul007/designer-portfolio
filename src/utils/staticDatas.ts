import { I_ImageComponent, I_MyBlog, T_Reviews } from "./myTypes";

export const navList = [
  {
    label: "About me",
    link: "#about",
  },
  {
    label: "Portfolio",
    link: "#portfolio",
  },
  {
    label: "Testimonials",
    link: "#testimonials",
  },
  {
    label: "Contact",
    link: "#contact",
  },
  {
    label: "Blog",
    link: "#blog",
  },
];

export const portfolioOptions: I_ImageComponent[] = [
  {
    src: "/images/portfolio-imgs/donut.jpg",
    alt: "donut country",
    tags: ["design", "branding"],
  },
  {
    src: "/images/portfolio-imgs/furni.jpg",
    alt: "furni",
    tags: ["design"],
  },
  {
    src: "/images/portfolio-imgs/udesign.jpg",
    alt: "udesign",
    tags: ["design", "branding", "logo"],
  },
  {
    src: "/images/portfolio-imgs/proknife.jpg",
    alt: "proknife",
    tags: ["design"],
  },
  {
    src: "/images/portfolio-imgs/flora.jpg",
    alt: "flora paradise",
    tags: ["design", "branding"],
  },
  {
    src: "/images/portfolio-imgs/poultrix.jpg",
    alt: "poultrix",
    tags: ["design"],
  },
];

export const myClients: T_Reviews[] = [
  {
    name: "Emma Wilson",
    image: "/images/avatars/emma.png",
    comment:
      "James spends quite a bit of time getting to know his clients and their projects to be able to add tremendous value to them.",
  },
  {
    name: "John McMillan",
    image: "/images/avatars/jhon.png",
    comment:
      "James is exceptionally talented and very well-versed in both design and web technologies. I highly recommend him.",
  },
  {
    name: "Kate Peters",
    image: "/images/avatars/kate.png",
    comment:
      "James is one of the most talented designers we've had the opportunity to work with. His elegant design execution comes with great precision.",
  },
];

export const brandImgs = [
  "/images/brands/zemez.png",
  "/images/brands/templateMonster.png",
  "/images/brands/mataPress.png",
  "/images/brands/monstorid.png",
  "/images/brands/roxxe.png",
  "/images/brands/lintense.png",
];

export const blogArr: I_MyBlog[] = [
  {
    date: "April 25, 2020",
    header: "Why Are All Sites Optimizing For Smartphones?",
    paragraph:
      "Sites were developed for desktop devices at first but as the worldwide smartphone usage rate increased so did the site developers look for...",
    image: "/images/blog-imgs/apple.jpg",
  },
  {
    date: "April 25, 2020",
    header: "How to Start Promoting Your Own Blog",
    paragraph:
      "Promoting your blog is sometimes more difficult than creating it at all. But it is still wholly possible without paid advertisement or being a celebrity...",
    image: "/images/blog-imgs/bulb.jpg",
  },
  {
    date: "April 25, 2020",
    header: "25 Steps to Make Sure that Your Website is Pleasant to Use",
    paragraph:
      "Using the internet means browsing various websites for important information. Or, if you’re one of those people who like to browse YouTube...",
    image: "/images/blog-imgs/flower.jpg",
  },
];
