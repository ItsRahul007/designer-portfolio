import { I_ImageComponent, T_Reviews } from "./myTypes";

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
