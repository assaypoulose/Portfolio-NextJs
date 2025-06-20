import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import slack from './slack.png';
import postman from './postman.png';
import github from './github.png';
import tailwindcss from './tailwindcss.png';
import salesforce from './salesforce.png';
import restapi from './restapi.png';
import logo1 from './logo1.png';
import logo2 from './logo_white.png';
import react from './react.png';
import download_icon_white from './download_white.png';
import assay_white from './assay_white.png';

import { FaGithub, FaXing, FaSalesforce } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const assets = {
    react,
    assay_white,
    download_icon_white,
    logo2,
    logo1,
    restapi,
    salesforce,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    slack,
    github,
    tailwindcss,
    postman,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const socials = [
    { icon: <FaGithub />, path: "https://github.com/assaypoulose" },
    { icon: <FaXing />, path: "https://www.xing.com/profile/AssayPoulose_Peenikkaparamban/web_profiles" },
    { icon: <SiLeetcode />, path: "https://leetcode.com/u/assaypoulose" },
    { icon: <FaSalesforce />, path: "https://www.salesforce.com/trailblazer/assaypoulosepeenikkaparamban" },
]

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
        link: 'https://amazon-clone-pi-navy.vercel.app/',
    },
    {
        title: 'Full-Stack project',
        description: 'Food Delivery App',
        bgImage: '/work-2.png',
        link: 'https://food-delivery-frontend-pguf.onrender.com/',
    },
    {
        title: 'Backend project',
        description: 'Web Design',
        bgImage: '/work-3.png',
        link: 'https://clinic-booking-frontend.onrender.com/',
    },
    {
        title: 'Portfolio project',
        description: 'UI/UX designing',
        bgImage: '/work-4.png',
        link: 'https://assay-portfolio.vercel.app/',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web/Full-Stack Development', description: 'Web development is the process of building and programming, web applications using React.js from stunning frontend designs to powerful backend architectures. I create scalable, high-performance solutions tailored to your needs.', link: '' },
    { icon: assets.salesforce, title: 'Salesforce CRM', description: 'Salesforce Agentforce implementation, CRM customization, user administration, AI associate creation, workflow automation, reports & dashboards, and hands-on experience with Salesforce LWC and end-to-end implementation.', link: '' },
    { icon: assets.restapi, title: 'REST API Development', description: 'Secure and Scalable RESTful APIs for seamless data exchange, authentication, and third-party integrations, ensuring high performance and reliability.', link: '' },
    { icon: assets.graphics_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience by combining intuitive navigation, visually appealing interfaces, and user-centric interactions. ', link: '' },

    // { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app Development involves creating software for mobile devices, ensuring seamless functionality, intuitive user experiences, and optimal performance across various platforms.', link: '' },
]

export const infoList = [
    {
        icon: assets.code_icon,
        iconDark: assets.code_icon_dark,
        title: 'Languages',
        description: ['HTML5, CSS3, JavaScript', 'Java, C/C#, SQL, Python', 'Salesforce Apex, Visualforce, LWC']
    },
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: 'Education',
        description: ['42 Heilbronn', 'MSc.Aviatoin transport', 'B.E.Aeronautical Engineering']
    },
    {
        icon: assets.project_icon,
        iconDark: assets.project_icon_dark,
        title: 'Certifications',
        description: ['Full-Stack Development', 'Oracle: Java Foundations Associate', 'Salesforce: Administrator, CPQ Specialist, Agentforce & AI Associate']
    }
];


export const toolsData = [
    assets.vscode, assets.react, assets.tailwindcss, assets.mongodb, assets.figma, assets.slack, assets.firebase, assets.postman, assets.git
];