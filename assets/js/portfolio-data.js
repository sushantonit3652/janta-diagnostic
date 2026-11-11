/**
 * ====================================================================
 * SUSHANT THAKUR - PORTFOLIO DATA CONFIGURATION
 * ====================================================================
 * All personal details, live store links, real screenshots, skills,
 * services, and work history are centralized here in ONE place!
 * ====================================================================
 */

const PORTFOLIO_DATA = {
  // ------------------------------------------------------------------
  // 1. Personal & Professional Profile
  // ------------------------------------------------------------------
  profile: {
    name: "Sushant Thakur",
    title: "React Native Developer",
    experienceYears: "2+", // Over 2+ years of professional experience
    experienceLabel: "2+ Years Experience",
    specialization: "Mobile Application Engineering (Android & iOS)",
    focus: "Building high-performing, scalable Android & iOS applications using React Native, REST APIs, Firebase, and background location services.",
    headline: "Building Production Mobile & Web Experiences with <span class=\"text-gradient\">React Native &amp; React.js</span>",
    subtitle: "React Native Developer with 2+ years of experience in creating high-performing Android & iOS applications. Creator of production apps live on Apple App Store & Google Play.",
    
    // Detailed About summary from official resume
    aboutBio: [
      "I am a dedicated React Native Developer with more than 2+ years of hands-on experience in creating high-performing Android & iOS applications using the React Native framework. My core focus is building scalable mobile architectures, seamless REST API integrations, and robust offline-first synchronization.",
      "My production engineering background includes deep expertise in Firebase, Push Notifications, Background Location Tracking (GPS), Google Maps, Redux Toolkit, and various native third-party libraries. I have contributed to production applications live on the Apple App Store (such as SubSource and Securely Sync) and Google Play (such as Biorich and Airopass).",
      "I possess strong problem-solving skills for mobile app optimization, debugging, memory profiling, and deployment of production-ready apps across both Google Play Console and Apple App Store Connect."
    ],

    // Contact Information directly from official resume
    email: "sushantthakur3211@gmail.com",
    phone: "+91 7807268475",
    location: "Himachal Pradesh, Chamba, Dalhousie, India",
    availabilityBadge: "Open to High-Impact Opportunities & Freelance",

    // Links
    linkedinUrl: "https://www.linkedin.com/in/sushant-thakur-053261259",
    githubUrl: "https://github.com/sushant-thakur",
    resumeUrl: "assets/resume/Sushant_Thakur_Resume.pdf",
    avatarImage: "assets/img/profile-avatar.svg",
    
    // Quick Stats Counters
    stats: [
      { count: "2", suffix: "+", label: "Years Experience", description: "Android & iOS Development" },
      { count: "5", suffix: "+", label: "Live Production Apps", description: "App Store & Play Store" },
      { count: "100", suffix: "%", label: "Cross-Platform", description: "React Native & Web" },
      { count: "60", suffix: "fps", label: "Smooth Performance", description: "Fluid Animations & UX" }
    ]
  },

  // ------------------------------------------------------------------
  // 2. Technical Skills Matrix
  // ------------------------------------------------------------------
  skillCategories: [
    {
      id: "mobile",
      title: "Mobile & Core Engineering",
      icon: "bi-phone",
      badgeColor: "primary",
      description: "Cross-platform mobile apps and frontend architecture from official resume.",
      skills: [
        { name: "React Native", level: "Primary Expertise (2+ Yrs)", icon: "fa-brands fa-react" },
        { name: "Expo", level: "Managed & Bare Workflow", icon: "bi-rocket-takeoff-fill" },
        { name: "Flutter & Dart", level: "Cross-Platform Framework", icon: "bi-layers-half" },
        { name: "JavaScript (ES6+)", level: "Core Language", icon: "fa-brands fa-js" },
        { name: "TypeScript & React.js", level: "Web & Type-Safe Architecture", icon: "fa-brands fa-react" },
        { name: "HTML5 & CSS3", level: "Markup & Responsive Styling", icon: "fa-brands fa-html5" },
        { name: "UI/UX Design", level: "Pixel-Perfect Implementation", icon: "bi-palette-fill" },
        { name: "Background Location / GPS", level: "Live Telemetry & Tracking", icon: "bi-geo-alt-fill" }
      ]
    },
    {
      id: "tools",
      title: "Tools & State Architecture",
      icon: "bi-tools",
      badgeColor: "warning",
      description: "Development tools, state stores, native environments, and APIs.",
      skills: [
        { name: "Redux Toolkit", level: "Global State Management", icon: "bi-diagram-3-fill" },
        { name: "Context API & Hooks", level: "Modular State Sharing", icon: "bi-recycle" },
        { name: "AsyncStorage & Firestore", level: "Local & Cloud Data", icon: "bi-database-fill-gear" },
        { name: "REST APIs & Postman", level: "API Testing & Integration", icon: "bi-arrow-left-right" },
        { name: "Android Studio & Xcode", level: "Emulators, SDK & Build Config", icon: "fa-brands fa-android" },
        { name: "GitHub & VS Code", level: "Version Control & Workflow", icon: "fa-brands fa-git-alt" },
        { name: "Figma", level: "Design Hand-off & Wireframes", icon: "bi-bezier2" },
        { name: "Push Notifications", level: "FCM & Expo Notifications", icon: "bi-bell-fill" }
      ]
    },
    {
      id: "ai",
      title: "AI Tools & AI Engineering",
      icon: "bi-cpu-fill",
      badgeColor: "info",
      description: "Accelerated development using modern LLMs and intelligent workflow automation.",
      skills: [
        { name: "ChatGPT & Claude AI", level: "Architecture & Code Generation", icon: "bi-robot" },
        { name: "GitHub Copilot & Cursor AI", level: "AI-Assisted Pair Programming", icon: "bi-terminal-fill" },
        { name: "Gemini AI & Perplexity", level: "Deep Technical Research", icon: "bi-stars" },
        { name: "Prompt Engineering", level: "Complex Context Framing", icon: "bi-chat-left-quote-fill" },
        { name: "AI Code Generation & Debugging", level: "Fast Prototyping & Bug Fixing", icon: "bi-code-square" },
        { name: "AI UI Generation", level: "Rapid Interface Prototyping", icon: "bi-window-sidebar" }
      ]
    }
  ],

  // ------------------------------------------------------------------
  // 3. Featured Projects with Real App Store & Play Store Assets
  // ------------------------------------------------------------------
  projects: [
    {
      id: "subsource",
      title: "Subsource- Virtual Manager",
      tagline: "Workforce & Schedule Virtual Management Application",
      category: "enterprise",
      categoryLabel: "Live on App Store",
      status: "Live on Apple App Store",
      storeType: "apple",
      storeUrl: "https://apps.apple.com/us/app/subsource-virtual-manager/id6499141041",
      storeBadgeText: "Available on App Store",
      image: "assets/img/projects/subsource/home.jpg",
      screenshots: [
        "assets/img/projects/subsource/home.jpg",
        "assets/img/projects/subsource/schedule.jpg",
        "assets/img/projects/subsource/shop.jpg"
      ],
      appIcon: "assets/img/projects/subsource/icon.png",
      isLiveApp: true,
      shortDescription: "Live production iOS mobile application on the Apple App Store tailored to streamline workforce management. Seamlessly manage employee profiles and availability, synchronize store schedules effortlessly, and communicate via in-app messaging.",
      technologies: ["React Native", "iOS (App Store)", "Store Scheduling", "REST APIs", "In-App Messaging", "Shift Tracking"],
      myContribution: "Engineered core schedule synchronization workflows, interactive employee availability selectors, real-time store schedule views, in-app messaging components, and iOS App Store deployment.",
      highlights: [
        "Live on Apple App Store (ID: 6499141041) for iPhone",
        "Employee profile & availability management module",
        "Multi-store shift synchronization and upcoming schedule feeds",
        "In-app team communication & leave management tools",
        "Optimized for smooth 60fps scrolling on iOS 18+"
      ],
      caseStudy: {
        problem: "Store managers faced fragmented employee communication, scheduling conflicts across store locations, and complicated leave requests.",
        solution: "Delivered Subsource- Virtual Manager with clean schedule grids, automated shift conflict checks, fast profile management, and direct messaging.",
        architecture: "React Native cross-platform engine with native iOS optimizations, modular store state providers, tokenized REST endpoints, and App Store Connect signing pipelines.",
        keyResults: "Published on the official Apple App Store with verified production adoption across retail and store management teams."
      }
    },
    {
      id: "securityapp",
      title: "SecurityApp & SecureSync",
      tagline: "Security & Cloud Telemetry Mobile Application on Google Play",
      category: "security",
      categoryLabel: "Live on Google Play",
      status: "Live on Google Play Store",
      storeType: "google",
      storeUrl: "https://play.google.com/store/apps/details?id=com.SecurityApp",
      storeBadgeText: "Get it on Google Play",
      image: "assets/img/projects/securityapp/screen2.jpg",
      screenshots: [
        "assets/img/projects/securityapp/screen1.jpg",
        "assets/img/projects/securityapp/screen2.jpg",
        "assets/img/projects/securityapp/screen3.jpg"
      ],
      appIcon: "assets/img/projects/securityapp/icon.png",
      isLiveApp: true,
      shortDescription: "Live Android application on Google Play (`com.SecurityApp`) offering security telemetry, cloud synchronization, device protection, encrypted local vault, and real-time status reporting.",
      technologies: ["React Native", "Android (Google Play)", "AES-256 Vault", "Secure Sync", "Biometrics", "REST APIs"],
      myContribution: "Implemented encrypted cloud data synchronization, background device telemetry workers, biometric unlock protection, and Google Play Store build compilation & release checklists.",
      highlights: [
        "Live on Google Play Store (Package: com.SecurityApp)",
        "End-to-end encrypted telemetry and device event logs",
        "Real-time background sync engine with delta updates",
        "Biometric sensor authentication (Fingerprint / FaceID)",
        "Android Studio Gradle build optimization and signed AAB publishing"
      ],
      caseStudy: {
        problem: "Users needed a lightweight security app that syncs telemetry reliably without draining battery or risking sensitive unencrypted records in transit.",
        solution: "Engineered SecurityApp with client-side encrypted vaults, battery-friendly sync scheduling, and instant device status indicators.",
        architecture: "React Native Android bindings, native security enclave key management, SQLite encrypted storage, and Google Play Console release management.",
        keyResults: "Successfully launched on Google Play with high stability, fast startup times, and seamless cloud sync."
      }
    },
    {
      id: "airopass",
      title: "Airopass",
      tagline: "Wherever You Go, We're With You — Live on App Store & Google Play",
      category: "travel",
      categoryLabel: "Live on iOS & Android",
      status: "Live on Apple App Store & Google Play",
      storeType: "dual",
      storeUrl: "https://play.google.com/store/apps/details?id=com.airopass.app",
      iosUrl: "https://apps.apple.com/us/app/airopass/id6749050934",
      androidUrl: "https://play.google.com/store/apps/details?id=com.airopass.app",
      storeBadgeText: "Available on App Store & Google Play",
      image: "assets/img/projects/airopass/airopass_flight_screen.jpg",
      appIcon: "assets/img/projects/airopass/store-icon.png",
      realLogo: "assets/img/projects/airopass/logo.png",
      screenshots: [
        "assets/img/projects/airopass/airopass_flight_screen.jpg",
        "assets/img/projects/airopass/airopass_visa_screen.jpg",
        "assets/img/projects/airopass/airopass_hotel_screen.jpg",
        "assets/img/projects/airopass/airopass_tour_screen.jpg",
        "assets/img/projects/airopass/screenshot_1.jpg",
        "assets/img/projects/airopass/screenshot_2.jpg"
      ],
      isLiveApp: true,
      shortDescription: "Official cross-platform production travel ecosystem live on both the Apple App Store (ID: 6749050934) and Google Play (com.airopass.app). Delivering streamlined visa services, flight booking assistance, curated holiday packages, travel insurance, digital wallet transactions, and partner mode role switching.",
      technologies: ["React Native", "iOS & Android", "Expo", "Firebase Auth", "Firestore", "REST APIs", "Digital Wallet", "Biometrics"],
      myContribution: "Architected modular flight booking user flows (TripTypeSelector, dynamic airport search), visa application multi-document processing modules, in-app digital wallet transactions, and dual-store production release pipelines for iOS App Store and Google Play.",
      highlights: [
        "Live on Apple App Store (ID: 6749050934) and Google Play (com.airopass.app)",
        "Interactive Trip Type Selector & dynamic airport search filters",
        "Visa requirement wizard & multi-document upload verification",
        "Curated tour packages & integrated travel insurance quoting",
        "Role-based partner mode with tailored privileges and ledger",
        "Secure wallet balance ledger with real-time transaction history"
      ],
      caseStudy: {
        problem: "Travelers frequently have to switch between disparate platforms for visas, tour packages, travel insurance, and flight ticketing, leading to a fragmented customer experience.",
        solution: "Engineered Airopass with a modular React Native architecture combining visa processing, insurance quoting, tour discovery, and wallet payments into an intuitive single mobile interface with dual-store publishing.",
        architecture: "Leveraged React Native with custom navigational routers, Firebase Firestore for realtime status updates, secure tokenized REST APIs for booking backends, and decoupled role-based view layers.",
        keyResults: "Successfully launched on both the Apple App Store and Google Play Store, delivering 60 FPS screen transitions, responsive search, and flexible partner-mode switching."
      }
    },
    {
      id: "instaclone",
      title: "InstaClone",
      tagline: "High-Fidelity Social Networking Mobile Application",
      category: "social",
      categoryLabel: "Social & Media",
      status: "Portfolio Project",
      storeType: "portfolio",
      image: "assets/img/projects/instaclone-mockup.svg",
      screenshots: [
        "assets/img/projects/instaclone-mockup.svg"
      ],
      isLiveApp: false,
      shortDescription: "A modern social media client featuring user authentication, photo capture with cloud uploads, interactive likes, comment threads, and real-time follow/unfollow social graphs.",
      technologies: ["React Native", "Firebase Auth", "Cloud Firestore", "Cloudinary", "Image Picker", "Vector Icons"],
      myContribution: "Designed the responsive image feed, implemented email/password authentication with validation, built image capture and Cloudinary media upload pipelines, and configured Firestore real-time listeners.",
      highlights: [
        "Secure user authentication and session persistence with Firebase Auth",
        "Camera & gallery image picker with automatic client-side compression",
        "Cloudinary integration for scalable cloud image hosting & CDN delivery",
        "Interactive social feed with double-tap like animations & comments",
        "Follow & unfollow social graph with real-time profile counters"
      ],
      caseStudy: {
        problem: "Building a performant social feed in mobile requires handling heavy media assets, preventing re-render stutters, and managing complex real-time follower relationships.",
        solution: "Integrated Cloudinary for thumbnail transformations, implemented FlatList memoization with `getItemLayout` for smooth 60fps scrolling, and normalized Firestore document models for follow relationships.",
        architecture: "React Native frontend, Firebase Auth for security rules, Cloud Firestore realtime snapshot listeners, and Cloudinary REST API for image uploads.",
        keyResults: "Achieved instant image loading via responsive CDN transformations, butter-smooth infinite scroll feeds, and immediate UI updates via optimistic state mutations."
      }
    },
    {
      id: "biorich",
      title: "Biorich International",
      tagline: "Business & Customer Sales Management Application",
      category: "security",
      categoryLabel: "Live on Google Play",
      status: "Live on Google Play Store",
      storeType: "google",
      storeUrl: "https://play.google.com/store/apps/details?id=com.bio.rich&hl=en_US",
      storeBadgeText: "Get it on Google Play",
      image: "assets/img/projects/biorich/biorich_screen_1.jpg",
      appIcon: "assets/img/projects/biorich/icon.png",
      screenshots: [
        "assets/img/projects/biorich/biorich_screen_1.jpg",
        "assets/img/projects/biorich/biorich_screen_2.jpg",
        "assets/img/projects/biorich/biorich_screen_3.jpg",
        "assets/img/projects/biorich/biorich_screen_4.jpg",
        "assets/img/projects/biorich/biorich_screen_5.jpg",
        "assets/img/projects/biorich/biorich_screen_6.jpg"
      ],
      isLiveApp: true,
      shortDescription: "Official live business management mobile application on Google Play (`com.bio.rich`) developed at Pixel Bharat LLP to simplify customer management, sales pipeline tracking, inventory orders, and enterprise business processes via mobile.",
      technologies: ["React Native", "Android (Google Play)", "REST APIs", "Customer Mgmt", "Sales Analytics", "Redux Toolkit"],
      myContribution: "Engineered core customer management modules, interactive sales transaction tracking screens, integrated backend REST APIs with resilient offline caching, and managed Google Play production release.",
      highlights: [
        "Live on Google Play Store (Package: com.bio.rich)",
        "Customer profile management & automated sales order tracking",
        "Interactive dashboard with business performance analytics",
        "Secure tokenized REST API client with offline storage support",
        "Built and released during tenure at Pixel Bharat LLP"
      ],
      caseStudy: {
        problem: "Sales representatives and business managers struggled with disconnected paper-based record keeping, delayed order dispatch confirmations, and lack of real-time client sales insights on the road.",
        solution: "Delivered Biorich International as a streamlined React Native Android application with real-time customer directory lookup, instant order logging, and intuitive business metric cards.",
        architecture: "React Native frontend, Redux Toolkit for centralized transaction states, Axios interceptor architecture for token management, and Google Play Console release management.",
        keyResults: "Launched on the official Google Play Store, boosting operational visibility and streamlining sales order processing across mobile devices."
      }
    }
  ],

  // ------------------------------------------------------------------
  // 4. Professional Development Services
  // ------------------------------------------------------------------
  services: [
    {
      title: "React Native App Development",
      short: "Full-cycle cross-platform mobile development for Android & iOS from a unified, maintainable codebase with App Store and Play Store releases.",
      icon: "fa-brands fa-react",
      tags: ["Cross-Platform", "App Store", "Google Play"]
    },
    {
      title: "React.js Web Application Development",
      short: "Modern responsive web applications, Single Page Apps (SPAs), dashboard portals, and UI component libraries built with React.js and modern state management.",
      icon: "bi-laptop",
      tags: ["React.js", "Responsive Web", "State Mgmt", "Clean Code"]
    },
    {
      title: "Secure Data & Cloud Synchronization",
      short: "Offline-first data architectures, background data replication, conflict resolution, encrypted client vaults (AES-256), and biometric unlock integration.",
      icon: "bi-arrow-repeat",
      tags: ["Secure Sync", "Offline-First", "AES-256", "Replication"]
    },
    {
      title: "Android & iOS Application Engineering",
      short: "Platform-aware mobile engineering addressing Android hardware back buttons, iOS swipe gestures, safe areas, and native performance.",
      icon: "bi-phone-flip",
      tags: ["Android Studio", "Xcode", "Platform Nuances"]
    },
    {
      title: "API Integration & Backend Connectivity",
      short: "Integrating robust RESTful endpoints, third-party SDKs, token-based authentication, and offline data caching strategies.",
      icon: "bi-arrow-left-right",
      tags: ["REST APIs", "Axios", "Caching", "Error Boundaries"]
    },
    {
      title: "Firebase Cloud Integration",
      short: "End-to-end Firebase setup: Auth, Cloud Firestore, Cloud Storage, Push Notifications (FCM), and security rules.",
      icon: "bi-fire",
      tags: ["Firebase Auth", "Firestore", "FCM Notifications"]
    },
    {
      title: "GPS & Location Tracking",
      short: "Real-time geolocation telemetry, background location sync, geofencing, and battery-efficient location tracking.",
      icon: "bi-geo-alt-fill",
      tags: ["Geolocation", "Background Tasks", "Battery Optimization"]
    },
    {
      title: "App Maintenance & Performance Profiling",
      short: "Performance profiling, resolving Android/iOS build issues, upgrading React Native / Expo dependencies, and fixing UI bugs.",
      icon: "bi-bug-fill",
      tags: ["Debugging", "Profiling", "SDK Upgrades", "Stability"]
    },
    {
      title: "Mobile App UI Implementation",
      short: "Transforming Figma, Adobe XD, or Sketch designs into pixel-perfect, responsive 60fps mobile screens with smooth micro-interactions.",
      icon: "bi-palette-fill",
      tags: ["Pixel Perfect", "Fluid Animations", "Figma to Code"]
    }
  ],

  // ------------------------------------------------------------------
  // 5. Work Experience Timeline (Editable)
  // ------------------------------------------------------------------
  experience: [
    {
      period: "Nov 2025 – Apr 2026",
      role: "React Native Developer",
      company: "Business WebSoft Private Limited",
      location: "India",
      badge: "Enterprise App",
      bullets: [
        "SubSource: Developed an enterprise app that includes GPS tracking, attendance management, shift scheduling, store visit management, offline sync, and live location tracking.",
        "Utilized Redux Toolkit, Firestore, REST APIs, background geolocation, Google Maps, push notifications, and AsyncStorage to implement mobile architecture.",
        "Maintained and updated production release on the Apple App Store."
      ]
    },
    {
      period: "Sep 2023 – Apr 2025",
      role: "React Native Developer",
      company: "Pixel Bharat LLP",
      location: "India",
      badge: "Mobile Apps & AI Sync",
      bullets: [
        "Securely Sync App: Built an AI-driven workforce management software that includes employee management, task management in real time, cloud-based synchronization, QR code scanning, push notifications, and REST API integration (Live on App Store & Play Store).",
        "Boosted performance by optimizing React Native modules and APIs.",
        "Kutton: Designed and built a restaurant table booking software that includes real-time booking of tables, table availability, and customer management.",
        "Superwin: Developed a skill-based gaming mobile app with security, digital wallet, and payment integrations.",
        "Biorich: Developed a business application management tool to simplify customer management, sales, and business processes via a mobile app (Live on Google Play)."
      ]
    },
    {
      period: "May 2023 – Sep 2023",
      role: "React Native Developer Intern (Training)",
      company: "Nama Infotech",
      location: "India",
      badge: "Internship",
      bullets: [
        "Developed reusable UI components using React Native.",
        "Worked with REST APIs and JSON data.",
        "Learned React Hooks, navigation, state management, and mobile app architecture."
      ]
    },
    {
      period: "Oct 2022 – Mar 2023",
      role: "Frontend Development Trainee",
      company: "Growing Seed Technologies",
      location: "India",
      badge: "Training",
      bullets: [
        "Completed professional training in HTML5, CSS3, JavaScript, and Responsive Web Design.",
        "Strengthened problem-solving and frontend development skills."
      ]
    }
  ],

  // ------------------------------------------------------------------
  // 6. Education & Certifications (from Official Resume)
  // ------------------------------------------------------------------
  education: [
    {
      degree: "Bachelor of Science: Non Medical",
      institution: "DAV College, Dharamshala, HP",
      period: "Jun 2022"
    },
    {
      degree: "12th : Non Medical",
      institution: "H.P Board Dharamshala",
      period: "Mar 2019"
    }
  ],
  certifications: [
    "(NSS) 'B' Certificate",
    "(NCC) 'B' Certificate"
  ],

  // ------------------------------------------------------------------
  // 6. Frequently Asked Questions (FAQ) for Clients / Employers
  // ------------------------------------------------------------------
  faqs: [
    {
      question: "Are these real apps available on the App Store and Google Play?",
      answer: "Yes! Subsource- Virtual Manager is published and live on the Apple App Store (ID: 6499141041), and SecurityApp is published on the Google Play Store (Package: com.SecurityApp). You can click the App Store and Google Play badges directly on the project cards to verify them live in store."
    },
    {
      question: "Do you build both Mobile (React Native) and Web (React.js) applications?",
      answer: "Yes! With strong proficiency in both React Native and React.js, I build unified frontend ecosystems. I can deliver both your cross-platform Android/iOS mobile application and your web-based client portal or admin dashboard sharing design patterns, business logic, and API clients."
    },
    {
      question: "How does the secure sync and offline-first architecture work?",
      answer: "In applications like SecurityApp and Subsource, I utilize local SQLite or encrypted storage for instant offline access. A background worker periodically synchronizes delta changes with cloud endpoints using cryptographic checksums and conflict-resolution rules, ensuring zero data loss even in intermittent network environments."
    },
    {
      question: "Can you assist with app store deployments and builds?",
      answer: "Yes! I utilize Expo Application Services (EAS Build) as well as native Android Studio (Gradle / APK / AAB) and Xcode (Archives / TestFlight) to generate signed production builds and guide applications through Google Play Store and Apple App Store review checklists."
    }
  ]
};

// Expose globally
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
