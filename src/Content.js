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
      },
      {
        name: "Adobe Photoshop",
        para: "",
        logo: ps,
      },
      {
        name: "Python",
        para: "",
        logo: python,
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
      },
      {
        title: "Tutoring",
        para: "",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "",
        logo: services_logo3,
      },
      {
        title: "Gym Training",
        para: "",
        logo: services_logo4,
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
      },
      {
        title: "y",
        image: project2,
      },
      {
        title: "z",
        image: project3,
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
        text: "vinsisr@gmail.com",
        icon: GrMail,
        link: "mailto:vinsisr@gmail.com",
      },
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
