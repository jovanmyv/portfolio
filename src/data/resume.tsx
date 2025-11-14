import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jovan Mayvia",
  initials: "CAKJO",
  url: "https://jovanmyv.my.id",
  location: "MAGETAN, EAST JAVA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "IT Enthusiast | System Administrator | Network & Infrastructure System | Web Developer | Blockchain Analyst",
  summary:
    "I am an IT Enthusiast, I can adapt quickly to work, communicate well, and work optimally to develop new technologies. My work usually involves setting up servers to meet system goals, planning business IT for industrial environments, and troubleshooting IT problems.",
  avatarUrl: "/me.png",

  skills: [
    "WebHostManager",
    "cPanel",
    "Mikrotik",
    "PHP",
    "Laravel",
    "CodeIgniter",
    "WordPress/CMS",
    "Node.JS",
    "MySQL",
    "iGate/Micro-Gate",
    "Troubleshooting",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "jobs.jovanmyv@gmail.com",
    tel: "0811982025",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jovanmyv",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/jovanmyv",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/jovanmyv",
        icon: Icons.x,
        navbar: true,
      },
      YouTube: {
        name: "YouTube",
        url: "https://www.youtube.com/@jovanmyv/videos",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PT Telkom Indonesia",
      href: "https://www.telkom.co.id/",
      badges: [],
      location: "Surabaya - East Java",
      title: "IT SUPPORT",
      logoUrl: "/telkom.png",
      start: "September 2018",
      end: "Desember 2018",
      description:
        "Maintenance and Management Network IP Address on Linux & Windows Server | Setting WLAN DHCP, Static Router Mikrotik | Installing Web Server WHM & cPanel on VPS Internal | Building Fiber Optic with Fusion Splicer",
    },
    {
      company: "CV Meubel VV",
      href: "#",
      badges: [],
      location: "Sidoarjo - East Java",
      title: "UI/UX Designer",
      logoUrl: "/meubel.svg",
      start: "Januari 2021",
      end: "November 2021",
      description:
        "• Design Posters | • Web Social Marketing and Monitoring Product Percentage.",
    },
    {
      company: "PT INKA Multi Solusi",
      href: "https://inkamultisolusi.co.id/",
      badges: [],
      location: "Madiun - East Java",
      title: "FullStack Developer",
      logoUrl: "/inka.png",
      start: "Juni 2022",
      end: "Desember 2022",
      description:
        "• Developed Application for Financial Management with Laravel 9 | • Troubleshooting Malware, Devices, and Database issues | • Built SAP/ERP Project for Business Planning.",
    },
    {
      company: "PT Assefa Mulia Persada",
      href: "#",
      badges: [],
      location: "Bogor - West Java",
      title: "SITE COORDINATOR",
      logoUrl: "/assefa.svg",
      start: "Januari 2023",
      end: "Desember 2023",
      description:
        "• Controlled HVAC Project on Site | • Assisted Management with Purchasing | • Material and Equipment Control | • Created Project Reports (Daily, Weekly, Progress).",
    },
    {
      company: "PT Rhapsody Outflash Creatiflock",
      href: "https://rock.id",
      badges: [],
      location: "Bandung - West Java",
      title: "IT STAFF",
      logoUrl: "/rock.svg",
      start: "Februari 2024",
      end: "Januari 2025",
      description:
        "• Maintained Server (WHM, cPanel, VPS) | • Maintained Website Djava Vista Internusa | • Troubleshooted PCs & Electronics | • Migrated Data from Old Vendors | • Handled Client Website Projects.",
    },
    {
      company: "PT Sarana Pactindo",
      href: "https://pactindo.com",
      badges: [],
      location: "Bandung - West Java",
      title: "Helpdesk IT Support",
      logoUrl: "/pac.png",
      start: "Mei 2025",
      end: "Now",
      description:
        "• Solved IT Issues for All Users | • Monitored Zabbix & Elastic-Kibana | • Monitored iGate/Middleware Services | • Maintained Apps on iGate/Middleware | • Analyzed Logs & Transactions | • Solved Issues on Mobile Banking & Internet Banking | • Modified Customer Data Upon Request.",
    },
  ],

  education: [
    {
      school: "SMKS ANTARTIKA 2 SIDOARJO",
      href: "https://smkantartika2-sda.sch.id/",
      degree: "Teknik Informatika Jaringan Komputer",
      logoUrl: "/antartika2.jpg",
      start: "2017",
      end: "2020",
    },
    {
      school: "Electronic Engineering Polytechnic Institute of Surabaya",
      href: "https://www.pens.ac.id/",
      degree: "Diploma 3 Informatics Engineering",
      logoUrl: "/pens.png",
      start: "2020",
      end: "2023",
    },
  ],

  projects: [
    {
      title: "Website Travel",
      href: "https://goplesir.co.id",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description: "Website Development, Website Migration, Scalable Solution",
      technologies: [
        "Next.js",
        "JavaScript",
        "Laravel",
        "Filament",
        "TailwindCSS",
        "Vue.js",
        "TypeScript",
        "Cloudflare",
      ],
      links: [
        {
          type: "Demo Website",
          href: "https://goplesir.co.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "#",
    },
    {
      title: "Document Management System",
      href: "https://dmskeu.inkamultisolusi.co.id",
      dates: "June 2022 - Dec 2022",
      active: true,
      description: "Website Development, Website Migration, Scalable Solution.",
      technologies: [
        "Next.js",
        "JavaScript",
        "Laravel",
        "Filament",
        "TailwindCSS",
        "Vue.js",
        "TypeScript",
        "Cloudflare",
      ],
      links: [
        {
          type: "Demo Website",
          href: "https://dmskeu.inkamultisolusi.co.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "#",
    },
  ],
} as const;
