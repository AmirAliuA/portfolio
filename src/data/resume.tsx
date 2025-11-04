import { Icons } from "@/components/icons";
import { FolderKanban, HomeIcon, NotebookIcon, SquareUserRound } from "lucide-react";

export const DATA = {
  name: "Amir Aliu",
  initials: "AA",
  url: "https://amiraliu.vercel.app",
  location: "Kosovo",
  description:
    "A full-stack developer from Kosovo with a passion for building things across web, software, and game development — and a growing curiosity for cybersecurity and networking.",
  summary:
    "I enjoy building reliable, well-structured solutions. I've worked with a range of technologies and tools, and I'm always looking to improve how I work and what I create. Right now, I'm focused on shipping useful, polished projects and growing my skill set through hands-on work.",
  avatarUrl: "/me.jpg",
  skills: [
    "HTML & CSS",
    "Javascript",
    "Typescript",
    "React.js",
    "Next.js",
    "Node.js",
    "C#",
    "Python",
    "Docker",
    "MongoDB",
    "MySQL",
    "MSSQL",
    "Windows OS",
    "Windows Server",
    "Ubuntu OS",
    "Ubuntu Server",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: FolderKanban, label: "Projects" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/amir-aliu-resume.pdf", icon: SquareUserRound, label: "Resume" },
  ],
  contact: {
    email: "amiraliudev@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AmirAliuA",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amiraliu/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/amiraliudev",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:amiraliudev@gmail",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Independent",
      href: "https://amiraliu.vercel.app/",
      badges: [],
      location: "Remote",
      title: "Freelance Web Developer",
      logoUrl: "",
      start: "Present",
      end: "",
      description: 
        "Website design, development, and maintenance for communities and small-to-medium clients. Delivered responsive, user-focused solutions and ongoing technical support.",
    },
    {
      company: "Independent",
      href: "https://amiraliu.vercel.app/",
      badges: [],
      location: "Remote",
      title: "Community Manager, Developer, and Systems Administrator",
      logoUrl: "",
      start: "2014",
      end: "2018",
      description:
        "Managed gaming communities as a Developer and Systems Administrator, designing and maintaining high-availability servers on Windows, Ubuntu, and CentOS. Developed custom game modes, automated server tasks, and optimized performance and reliability. Built and maintained community websites and forums, coordinated events, and fostered a positive player environment.",
    },
    {
      company: "Musa Zajmi",
      href: "https://amiraliu.vercel.app/",
      badges: [],
      location: "Gjilan, Kosovo",
      title: "Technical Support Volunteer",
      logoUrl: "",
      start: "2013",
      end: "2018",
      description: 
        `Provided technical support for PCs, laptops, and printers in a school environment. Assisted with setup and maintenance of classroom technology, supported staff and students during daily activities and events, and guided users in software tools like Microsoft Office and educational platforms.`,
    },
  ],
  education: [
    {
      school: "Kolegji Universum",
      href: "https://universum-ks.org/",
      degree: "Bachelor's Degree of Computer Science (BSc)",
      logoUrl: "/education/universum-logo.webp",
      start: "2021",
      end: "Paused",
    },
    {
      school: "Zenel Hajdini",
      href: "https://www.facebook.com/profile.php?id=100039793735877",
      degree: "Socio-linguistic Studies",
      logoUrl: "/education/zenel-hajdini-logo.jpg",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "NASA APOD Explorer",
      href: "/projects/nasa-apod-explorer",
      dates: "June 2025 - Present",
      active: true,
      description:
        "A sleek and responsive web app for discovering [NASA's Astronomy Picture of the Day archive](https://apod.nasa.gov/apod) — from today back to 1995.",
      technologies: [
        "Next.js",
        "Typescript",
        "Shadcn UI",
        "TailwindCSS",
        "Magic UI",
        "REST API",
      ],
      links: [
        {
          type: "Website",
          href: "https://v0-next-js15-with-nasa-api.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/amiraliua/nasa-apod-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/projects/nasa-apod-api/capture.mp4",
      postImages: [
        {
          src: "/projects/nasa-apod-api/dark-theme.jpeg",
          alt: "NASA APOD Explorer - Dark Theme",
          caption: "The main interface showing NASA's Astronomy Picture of the Day in dark mode",
        },
        {
          src: "/projects/nasa-apod-api/light-theme.jpeg",
          alt: "NASA APOD Explorer - Light Theme",
          caption: "Light theme variant with clean, accessible design",
        },
      ],
    },
    {
      title: "Artist Portfolio",
      href: "/projects/artist-portfolio",
      dates: "May 2025 - Present",
      active: true,
      description:
        "Built an artist portfolio site featuring artwork and an embedded Spotify profile to showcase both visual and musical projects in a unified, responsive design.",
      technologies: [
        "Next.js",
        "Shadcn UI",
        "TailwindCSS",
        "Spotify API",
      ],
      links: [
        {
          type: "Website",
          href: "https://artist-page-iota.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/artist-portfolio/capture.mp4",
      postImages: [
        {
          src: "/projects/artist-portfolio/tour.png",
          alt: "Tour Page",
          caption: "Showcasing the tour page of the artist portfolio",
        },
        {
          src: "/projects/artist-portfolio/homepage.png",
          alt: "Homepage",
          caption: "Showcasing the homepage of the artist portfolio",
        },
      ],
    },
    {
      title: "InvoMate - Invoice Platform",
      href: "/projects/invomate-invoice-platform",
      dates: "June 2025 - Present",
      active: true,
      description:
        "Built a professional invoice platform that generates and sends PDF invoices via email, with secure payment tracking to simplify billing for freelancers and small businesses.",
      technologies: [
        "Next.js",
        "Typescript",
        "Prisma",
        "Auth.js",
        "Magic Link",
        "Shadcn UI",
        "TailwindCSS",
        "Magic UI",
        "Mailtrap",
        "Nodemailer",
        "PDFjs",
        "Zod",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/invoice-platform/capture.mp4",
      postImages: [
        {
          src: "/projects/invoice-platform/landing-page-dark-theme.png",
          alt: "Landing Page Dark Theme",
          caption: "Showcasing the platform's landing page in dark mode",
        },
        {
          src: "/projects/invoice-platform/landing-page-light-theme.png",
          alt: "Landing Page",
          caption: "Showcasing the platform's landing page in light mode",
        },
        {
          src: "/projects/invoice-platform/login-page.png",
          alt: "Login Page",
          caption: "Showcasing the platform's login page",
        },
        {
          src: "/projects/invoice-platform/email-confirmation.png",
          alt: "Login Email Confirmation",
          caption: "Showcasing the platform's email confirmation page",
        },
        {
          src: "/projects/invoice-platform/onboarding-page.png",
          alt: "Onboarding Page",
          caption: "Showcasing the platform's onboarding page",
        },
        {
          src: "/projects/invoice-platform/dashboard-noinvoices.png",
          alt: "Dashboard Page",
          caption: "Dashboard when there are no invoices",
        },
        {
          src: "/projects/invoice-platform/dashboard-invoices.png",
          alt: "Dashboard Page 2",
          caption: "Dashboard when there are invoices",
        },
        {
          src: "/projects/invoice-platform/create-invoice.png",
          alt: "Create Invoice Page",
          caption: "Showcasing the platform's create invoice page",
        },
        {
          src: "/projects/invoice-platform/mark-invoice-as-paid.png",
          alt: "Mark Invoices as Paid",
          caption: "Showcasing the platform's mark invoice as paid page",
        },
        {
          src: "/projects/invoice-platform/delete-invoice.png",
          alt: "Delete Invoice Page",
          caption: "Showcasing the platform's delete invoice page",
        },
        {
          src: "/projects/invoice-platform/invoices-actions.png",
          alt: "Invoice Actions",
          caption: "Showcasing the platform's invoice actions page",
        },
        {
          src: "/projects/invoice-platform/invoice-email.png",
          alt: "Invoice Email",
          caption: "Showcasing the platform's invoice email page",
        },
        {
          src: "/projects/invoice-platform/invoice-pdf.png",
          alt: "Invoice PDF",
          caption: "Showcasing the platform's invoice PDF page",
        },
      ],
    },
    {
      title: "Steam Kosovo Flag",
      href: "/projects/steam-kosovo-flag",
      dates: "June 2024 - Present",
      active: true,
      description:
        "A browser extension that fixes the missing Kosovo flag on Steam community profile.",
      technologies: [
        "Javascript",
        "Browser Extension",
        "Browser API",
      ],
      links: [
        {
          type: "Firefox Addon Store",
          href: "https://addons.mozilla.org/en-US/firefox/addon/kosovo-flag-fixer-for-steam/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AmirAliuA/steam-kosovo-flag",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/steam-kosovo-flag-fixer-extension/result.png",
      video: "",
      postImages: [
        {
          src: "/projects/steam-kosovo-flag-fixer-extension/result.png",
          alt: "Steam Kosovo Flag Extension",
          caption: "Showcasing the Steam Kosovo Flag Extension",
        },
        {
          src: "/projects/steam-kosovo-flag-fixer-extension/firefox-addon-store.png",
          alt: "Extension Installation",
          caption: "Easy installation process from Firefox Add-ons store",
        },
      ]
    },
    {
      title: "Medtime Mobile Application",
      href: "/projects/medtime-mobile-application",
      dates: "June 2025",
      active: false,
      description:
        "Medtime reminds you when to take your meds, how much, and when to refill—keeping your medication routine easy and on time.",
      technologies: [
        "Typescript",
        "React Native",
        "React Expo",
        "AsyncStorage",
        "Expo Notifications"
      ],
      links: [
        {
          type: "Download APK",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/medtime/react-native-icon.png",
      video: "",
      postImages: [
        {
          src: "/projects/medtime/react-native-icon.png",
          alt: "React Native Icons",
          caption: "Displaying React Native icons, no app screenshots for now",
        },
      ]
    },
    {
      title: "Doom Clone",
      href: "/projects/doom-clone",
      dates: "January 2025 - Present",
      active: true,
      description:
        "A faithful remake of the classic DOOM built in Unity, recreating core mechanics, level design, and visuals with modern development tools.",
      technologies: [
        "C#",
        "Unity",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmirAliuA/doom-unity",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/doom-clone/doom-logo.png",
      video: "",
      postImages: [
        {
          src: "/projects/doom-clone/doom-logo.png",
          alt: "Doom Logo",
          caption: "Preview of Doom Logo",
        },
      ]
    },
    {
      title: "Tom and Jerry Remake",
      href: "/projects/tom-and-jerry-remake",
      dates: "January 2025 - Present",
      active: true,
      description:
        "A faithful remake, in Unity, of the classic Tom and Jerry games, recreating core mechanics, level design, and visuals with modern development tools.",
      technologies: [
        "C#",
        "Unity",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmirAliuA/tom-and-jerry-remake",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/tom-and-jerry-remake/tom-and-jerry.jpg",
      video: "",
      postImages: [
        {
          src: "/projects/tom-and-jerry-remake/tom-and-jerry.jpg",
          alt: "Tom and Jerry Logo",
          caption: "Preview of Tom and Jerry Logo",
        },
      ]
    },
    {
      title: "Snake Game",
      href: "/projects/snake-game",
      dates: "August 2024",
      active: false,
      description:
        "A classic snake game built in Java.",
      technologies: [
        "Java 22",
        "OpenJDK 22",
        "JFrame",
        "JPanel",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmirAliuA/snake-game",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/snake-game/logo.png",
      video: "",
      postImages: [
        {
          src: "/projects/snake-game/logo.png",
          alt: "Snake Game Logo",
          caption: "Preview of Snake Game Logo",
        },
      ]
    },
    {
      title: "Banking App",
      href: "/projects/banking-app",
      dates: "May 2024",
      active: false,
      description:
        "This C# program is a simple banking application that follows the Interpreter Pattern.",
      technologies: [
        "C#",
        "Xunit",
        "Interpreted Pattern Design",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmirAliuA/banking-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/banking-app/banking-logo.png",
      video: "",
      postImages: [
        {
          src: "/projects/banking-app/console-banking-app.png",
          alt: "Banking App Console",
          caption: "Showcasing the banking app in console",
        },
      ]
    },
    {
      title: "AI Language Detection",
      href: "/projects/ai-language-detection",
      dates: "May 2024",
      active: false,
      description:
        "This code is a language detection model that uses the Naive Bayes algorithm to classify a given text into one of the 22 languages present in the dataset.",
      technologies: [
        "Python",
        "Pandas",
        "Numpy",
        "Sci-Kit Learn",
        "Tabulate",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmirAliuA/banking-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/ai-language-detection/python-logo.png",
      video: "",
      postImages: [
        {
          src: "/projects/ai-language-detection/flowchart.png",
          alt: "Flowchart",
          caption: "Flowchart detailing the steps of the Naive Bayes algorithm",
        },
        {
          src: "/projects/ai-language-detection/dataset-1-language-count.png",
          alt: "Dataset 1 language count",
          caption: "Dataset 1 language count",
        },
        {
          src: "/projects/ai-language-detection/dataset-2-language-count.png",
          alt: "Dataset 2 language count",
          caption: "Dataset 2 language count",
        },
        {
          src: "/projects/ai-language-detection/language-prediction.png",
          alt: "Language Prediction",
          caption: "Language Prediction",
        },
      ]
    },
    {
      title: "Billing System",
      href: "/projects/billing-system",
      dates: "March 2022",
      active: false,
      description:
        "A simple Billing System written for a University Assignment.",
      technologies: [
        "C#",
        "Tier 3 Architecture",
        "Winforms",
        "Microsoft SQL Server 2018",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmirAliuA/billing-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/billing-system/c-sharp-logo.png",
      video: "",
      postImages: [
        {
          src: "/projects/billing-system/login-dashboard.png",
          alt: "Login Dashboard",
          caption: "Showcasing the login menu",
        },
        {
          src: "/projects/billing-system/admin-dashboard.png",
          alt: "Admin Dashboard",
          caption: "Showcasing the admin dashboard",
        },
        {
          src: "/projects/billing-system/users-dashboard.png",
          alt: "Users Dashboard",
          caption: "Showcasing the users dashboard and their information",
        },
        {
          src: "/projects/billing-system/products-dashboard.png",
          alt: "Products Dashboard",
          caption: "Showcasing the products dashboard",
        },
        {
          src: "/projects/billing-system/categories-dashboard.png",
          alt: "Categories Dashboard",
          caption: "Showcasing the categories dashboard",
        },
      ]
    },
    {
      title: "Arduino Uno Traffic Lights",
      href: "/projects/arduino-uno-traffic-lights",
      dates: "January 2022",
      active: false,
      description:
        "A very basic traffic light project in Arduino Uno for a University Assignment.",
      technologies: [
        "C++",
        "Arduino Uno",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmirAliuA/Basic-Arduino-Traffic-Light",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/arduino-project/arduino.png",
      video: "",
      postImages: [
        {
          src: "/projects/arduino-project/circuit-design.png",
          alt: "Circuit Design",
          caption: "Showcasing the actual circuit design of the traffic lights",
        },
      ]
    },
    {
      title: "E-Commerce Web Application",
      href: "/projects/e-commerce-web-application",
      dates: "June 2024",
      active: false,
      description:
        "Led a team of 6 to build a full-stack e-commerce app with Next.js and PayPal integration during a university bootcamp, earning a perfect score of 100/100.",
      technologies: [
        "Nextjs",
        "MongoDB",
        "PayPal SDK"
      ],
      links: [
        {
          type: "Word Document",
          href: "/projects/ecommerce-web-application/ecommerce-word.pdf",
          icon: <Icons.pdf className="size-3" />,
        },
        {
          type: "Powerpoint Presentation",
          href: "/projects/ecommerce-web-application/powerpoint-presentation.pdf",
          icon: <Icons.pdf className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/ecommerce-web-application/homepage-view.mp4",
      postImages: [
        {
          src: "/projects/ecommerce-web-application/home.png",
          alt: "Home",
          caption: "Before and after comparison showing the Kosovo flag properly displayed",
        },
        {
          src: "/projects/ecommerce-web-application/product-screen.png",
          alt: "Product Screen",
          caption: "Product screen showcasing the product details",
        },
        {
          src: "/projects/ecommerce-web-application/products-main-screen.png",
          alt: "Products Main Screen",
          caption: "The main screen, showcasing the products and categories",
        },
        {
          src: "/projects/ecommerce-web-application/eCommerce-logo.png",
          alt: "Shop Logo",
          caption: "Showcasing the e-commerce logo",
        },
      ],
    },
    {
      title: "Covid Dashboard",
      href: "/projects/covid-dashboard",
      dates: "April 2021",
      active: false,
      description:
        "A COVID Dashboard implemented in Java & Spring Boot.",
      technologies: [
        "Java",
        "Spring Boot",
      ],
      links: [
      ],
      image: "/projects/covid-dashboard/java-logo.png",
      video: "",
      postImages: [
        {
          src: "/projects/covid-dashboard/covid-dashboard.png",
          alt: "Covid Dashboard",
          caption: "A COVID Dashboard implemented in Java & Spring Boot.",
        },
      ]
    },
    {
      title: "Login Form",
      href: "/projects/login-form",
      dates: "April 2021",
      active: false,
      description:
        "Final assignment given by the university professor during C# training class before enrolling to college.",
      technologies: [
        "C#",
        "Winforms",
        "Microsoft SQL Server 2019",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmirAliuA/loginform_amiraliu",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/projects/login-form/c-sharp-logo.png",
      video: "",
      postImages: [
        {
          src: "/projects/login-form/login-screen.png",
          alt: "C# Login Form",
          caption: "Showcasing the login screen",
        },
        {
          src: "/projects/login-form/wrong-password.png",
          alt: "Login Interface",
          caption: "Clean login interface with validation and error handling",
        },
        {
          src: "/projects/login-form/users-list.png",
          alt: "Database Integration",
          caption: "SQL Server integration for user authentication and data management",
        },
        {
          src: "/projects/login-form/fetched-users-list.png",
          alt: "Database Integration",
          caption: "SQL Server integration for user authentication and data management",
        },
      ]
    },
    {
      title: "Snapchat Usernames",
      href: "/projects/snapchat-usernames",
      dates: "April 2021",
      active: false,
      description: "A python script to check if snapchat usernames are available or not.",
      technologies: [
        "Python",
        "Requests",
        "PySimpleGUI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmirAliuA/snapchat-username",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/projects/snapchat-usernames/snapchat-logo.png",
      video: "",
      postImages: [
        {
          src: "/projects/snapchat-usernames/su-start.png",
          alt: "Snapchat Username Checker",
          caption: "Python GUI application for checking username availability",
        },
        {
          src: "/projects/snapchat-usernames/su-result.png",
          alt: "Application Interface",
          caption: "Simple and intuitive PySimpleGUI interface",
        },
      ]
    },
  ],
  certifications: [
    {
      title: "Hardware and Upgrade Support",
      dates: "September 11, 2025",
      location: "Remote, Cisco Networking Academy",
      description: 
        "Focused on diagnosing, repairing, and upgrading computer components. Gained hands-on experience troubleshooting hardware issues such as power supply and hard drive failures, performing system upgrades including RAM and storage installations, and following proper safety procedures. Developed foundational skills in PC maintenance and hardware optimization for entry-level IT support roles.",
      image: "/certifications/badges/security-and-connectivity-support.png",
      links: [
        {
          title: "Course",
          icon: <Icons.cisco className="h-4 w-4" />,
          href: "https://www.netacad.com/courses/security-connectivity-support?courseLang=en-US",
        },
        {
          title: "Credly Badge",
          icon: <Icons.credly className="h-4 w-4" />,
          href: "https://www.credly.com/badges/f8e0b6e3-4ef0-4ae2-8652-870ba9a1dc17",
        },
        {
          title: "Certificate",
          icon: <Icons.cisco className="h-4 w-4" />,
          href: "/certifications/pdfs/Hardware-and-Upgrade-Support-Certificate.pdf",
        },
      ],
    },
    {
      title: "Security and Connectivity Support",
      dates: "September 10, 2025",
      location: "Remote, Cisco Networking Academy",
      description: 
        "Focused on diagnosing network and device connectivity issues while maintaining strong cybersecurity practices. Learned to identify and mitigate common security threats, recognize social engineering tactics, and apply data protection policies. Developed skills in troubleshooting network resources and ensuring secure, reliable IT support operations.",
      image: "/certifications/badges/security-and-connectivity-support.png",
      links: [
        {
          title: "Course",
          icon: <Icons.cisco className="h-4 w-4" />,
          href: "https://www.netacad.com/courses/security-connectivity-support?courseLang=en-US",
        },
        {
          title: "Credly Badge",
          icon: <Icons.credly className="h-4 w-4" />,
          href: "https://www.credly.com/badges/6daf4e9b-71a9-461e-87a7-bd86c59aedca",
        },
        {
          title: "Certificate",
          icon: <Icons.cisco className="h-4 w-4" />,
          href: "/certifications/pdfs/Security-and-Connectivity-Support-Certificate.pdf",
        },
      ],
    },
    {
      title: "Operating Systems Support",
      dates: "September 09, 2025",
      location: "Remote, Cisco Networking Academy",
      description: 
        "Foundational course on Operating Systems Support focused on troubleshooting Windows, macOS, and mobile platforms. Gained hands-on experience diagnosing and resolving common IT issues such as software crashes, boot failures, and connectivity problems. Developed skills in customer service, software installation, and cross-platform compatibility to prepare for entry-level IT support roles.",
      image: "/certifications/badges/operating-systems-support.png",
      links: [
        {
          title: "Course",
          icon: <Icons.cisco className="h-4 w-4" />,
          href: "https://www.netacad.com/courses/operating-systems-support?courseLang=en-US",
        },
        {
          title: "Credly Badge",
          icon: <Icons.credly className="h-4 w-4" />,
          href: "https://www.credly.com/badges/0643c0dd-ef4e-4043-bd1c-c1693b0e7803",
        },
        {
          title: "Certificate",
          icon: <Icons.cisco className="h-4 w-4" />,
          href: "/certifications/pdfs/Operating-Systems-Support-Certificate.pdf",
        },
      ],
    },
    {
      title: "IT Customer Support Basics",
      dates: "August 31, 2025",
      location: "Remote, Cisco Networking Academy",
      description: 
        "Introductory course on IT Customer Support covering help desk operations, troubleshooting, and customer communication. Gained hands-on experience with remote support tools, issue management, and problem resolution in diverse computing environments.",
      image: "/certifications/badges/it-customer-support-basics.png",
      links: [
        {
          title: "Course",
          icon: <Icons.cisco className="h-4 w-4" />,
          href: "https://www.netacad.com/courses/it-customer-support-basics?courseLang=en-US",
        },
        {
          title: "Credly Badge",
          icon: <Icons.credly className="h-4 w-4" />,
          href: "https://www.credly.com/badges/326f59f3-0d8c-4cb1-8896-d95c7b6faf8e",
        },
        {
          title: "Certificate",
          icon: <Icons.cisco className="h-4 w-4" />,
          href: "/certifications/pdfs/IT-Customer-Support-Basics-Certificate.pdf",
        },
      ],
    },
    {
      title: "Python Essentials 1",
      dates: "January 01, 2025",
      location: "Remote, Cisco Networking Academy & OpenEDG Python Institute",
      description: 
        "Introductory Python course covering syntax, control structures, functions, and data types, with hands-on programming exercises.",
      image: "/certifications/badges/python-essentials-i.png",
      links: [
        {
          title: "Course",
          icon: <Icons.cisco className="h-4 w-4" />,
          href: "https://www.netacad.com/courses/python-essentials-1?courseLang=en-US",
        },
        {
          title: "OpenEDG Python Institute",
          icon: <Icons.cisco className="h-4 w-4" />,
          href: "https://pythoninstitute.org/python-essentials-1",
        },
        {
          title: "Certificate",
          icon: <Icons.cisco className="h-4 w-4" />,
          href: "/certifications/pdfs/python-essentials-1-cisco.pdf",
        },
      ],
    },
    {
      title: "Introduction to Cybersecurity",
      dates: "June 15, 2024",
      location: "Remote, Cisco Networking Academy & Netdevgroup",
      description: 
        "Introductory cybersecurity course covering foundational concepts such as threat types, attack vectors, cybersecurity principles, and the importance of security in the digital world. Gained insight into careers in cybersecurity and best practices for protecting data, devices, and networks.",
      image: "/certifications/badges/introduction-to-cybersecurity.png",
      links: [
        {
          title: "Course",
          icon: <Icons.cisco className="h-4 w-4" />,
          href: "https://www.netacad.com/courses/introduction-to-cybersecurity",
        },
        {
          title: "Credly Badge",
          icon: <Icons.credly className="h-4 w-4" />,
          href: "https://www.credly.com/badges/0af3c054-436a-4ad2-8d92-b0f821a9c982",
        },
        {
          title: "Certificate",
          icon: <Icons.pdf className="h-4 w-4" />,
          href: "/certifications/pdfs/introduction-to-cybersecurity-badge-cisco.pdf",
        },
      ],
    },
    {
      title: "NDG LINUX UNHATCHED ENGLISH 0723B CGA",
      dates: "July 30, 2023",
      location: "Remote, Cisco Networking Academy & Netdevgroup",
      description: 
        "Introductory Linux course covering fundamental command-line operations, file system navigation, user and permissions management, and basic shell commands. Gained practical experience using the Linux terminal to perform system tasks and understand open-source operating systems.",
      image: "/certifications/badges/ndg-linux-unhatched.jpg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Course",
          icon: <Icons.cisco className="h-4 w-4" />,
          href: "https://www.netacad.com/courses/linux-unhatched?courseLang=en-US",
        },
        {
          title: "Cisco Certificate",
          icon: <Icons.pdf className="h-4 w-4" />,
          href: "/certifications/pdfs/ndg-linux-unhatched-certificate-cisco.pdf",
        },
        {
          title: "Netdevgroup Certificate",
          icon: <Icons.pdf className="h-4 w-4" />,
          href: "/certifications/pdfs/ndg-linux-unhatched-certificate-ndg.pdf",
        },
      ],
    },
  ],
} as const;