// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import ps from "./assets/images/Skills/ps.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import services_logo4 from "./assets/images/Services/logo4.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";


import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "RTU IZV skolēns",
    firstName: "VINSENTS",
    LastName: "ROMEIKO",
    btnText: "Hire Me",
    btnLink: "https://www.wolframalpha.com/input?i=%28x%5E2+%2B+y%5E2%29%28z%5E2+%2B+1%29+%2B+4*x*y*z+%2B+%28x+%2B+y%29*%28z+%2B+1%29",
    image: Hero_person,
    hero_content: [
      {
        count: "10+",
        text: "Years of Experience in School",
      },
      {
        count: "2+",
        text: "Years of Gym Experience",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Adobe Premiere Pro",
        para: "",
        logo: figma,
        description: "Adobe premiere pro, sito es rakstiju blablabla"
      },
      {
        name: "Adobe Photoshop",
        para: "",
        logo: ps,
        description: "Adobe photoshop, sito es rakstiju blablabla"
      },
      {
        name: "Python",
        para: "",
        logo: python,
        description: "python, sito es rakstiju blablabla",
        link:'https://github.com/VinsisONG'
      },
      
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Video Editing",
        para: "",
        logo: services_logo1,
        link: "https://www.e-klase.lv/"
      },
      {
        title: "Tutoring",
        para: "",
        logo: services_logo2,
        link: "https://www.wolframalpha.com/input?i=%28x%5E2+%2B+y%5E2%29%28z%5E2+%2B+1%29+%2B+4*x*y*z+%2B+%28x+%2B+y%29*%28z+%2B+1%29"
      },
      {
        title: "PhotoShop Editing",
        para: "",
        logo: services_logo3,
        link: "https://www.e-klase.lv/"
      },
      {
        title: "Gym Training",
        para: "",
        logo: services_logo4,
        link: "https://www.e-klase.lv/"
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "x",
        image: project1,
        description:"es sito sarakstiju diezgan atri,",
      },
      {
        title: "y",
        image: project2,
        description:"sito ari",
      },
      {
        title: "z",
        image: project3,
        description:"sito bikit lenak,"
      },
    ],
  },
  
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I'm a reliable student, who can get things done!",
    btnText: "Hire Me",

  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      
      {
        text: "+371 29 416 014",
        icon: MdCall,
        link: "https://wa.me/+37129416014",
      },
      {
        text: "breadsticko_",
        icon: BsInstagram,
        link: "https://www.instagram.com/breadsticko_/",
      },
    ],
  },
  Footer: {
    text: "<3",
  },
};
