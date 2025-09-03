// Projects Data
export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    link: "#",
    client: "TechCorp Solutions",
    duration: "4 months",
    year: "2024",
    features: [
      "Real-time inventory management",
      "Payment processing with Stripe",
      "Admin dashboard",
      "Customer reviews and ratings",
      "Mobile responsive design"
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Mobile Development",
    description: "A cross-platform mobile app for project management with real-time collaboration features and offline synchronization.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    link: "#",
    client: "Productivity Inc",
    duration: "6 months",
    year: "2024",
    features: [
      "Real-time collaboration",
      "Offline synchronization",
      "Push notifications",
      "File sharing",
      "Progress tracking"
    ]
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    category: "Web Development",
    description: "A comprehensive healthcare management system with patient records, appointment scheduling, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "Charts.js"],
    link: "#",
    client: "MedTech Solutions",
    duration: "8 months",
    year: "2023",
    features: [
      "Patient record management",
      "Appointment scheduling",
      "Analytics dashboard",
      "HIPAA compliance",
      "Report generation"
    ]
  },
  {
    id: 4,
    title: "Social Media Analytics",
    category: "Data Analytics",
    description: "Advanced analytics platform for social media performance tracking with AI-powered insights and predictive analytics.",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Angular", "Python", "TensorFlow", "D3.js", "Redis"],
    link: "#",
    client: "Digital Marketing Pro",
    duration: "5 months",
    year: "2024",
    features: [
      "AI-powered insights",
      "Predictive analytics",
      "Multi-platform integration",
      "Custom reporting",
      "Real-time monitoring"
    ]
  },
  {
    id: 5,
    title: "Learning Management System",
    category: "Web Development",
    description: "Educational platform with video streaming, progress tracking, interactive quizzes, and certification management.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary", "Stripe"],
    link: "#",
    client: "EduTech Academy",
    duration: "7 months",
    year: "2023",
    features: [
      "Video streaming",
      "Progress tracking",
      "Interactive quizzes",
      "Certification management",
      "Course marketplace"
    ]
  },
  {
    id: 6,
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Property listing and management platform with virtual tours, mortgage calculator, and advanced search filters.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Express.js", "MySQL", "Google Maps API", "AWS S3"],
    link: "#",
    client: "PropTech Innovations",
    duration: "6 months",
    year: "2024",
    features: [
      "Virtual property tours",
      "Mortgage calculator",
      "Advanced search filters",
      "Agent profiles",
      "Neighborhood insights"
    ]
  },
  {
    id: 7,
    title: "Restaurant Ordering System",
    category: "Mobile Development",
    description: "Mobile app for restaurant ordering with table reservation, menu customization, and payment integration.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Flutter", "Firebase", "Stripe", "Google Maps API"],
    link: "#",
    client: "FoodTech Solutions",
    duration: "4 months",
    year: "2023",
    features: [
      "Online ordering",
      "Table reservations",
      "Menu customization",
      "Payment integration",
      "Order tracking"
    ]
  },
  {
    id: 8,
    title: "Financial Dashboard",
    category: "Data Analytics",
    description: "Comprehensive financial analytics platform with portfolio tracking, market insights, and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    link: "#",
    client: "FinTech Analytics",
    duration: "9 months",
    year: "2023",
    features: [
      "Portfolio tracking",
      "Market insights",
      "Automated reporting",
      "Risk analysis",
      "Investment recommendations"
    ]
  }
];

// Project categories
export const projectCategories = ["All", "Web Development", "Mobile Development", "Data Analytics"];

// Utility functions
export const getProjectsByCategory = (category) => {
  if (category === "All") {
    return projectsData;
  }
  return projectsData.filter(project => project.category === category);
};

export const getProjectById = (id) => {
  return projectsData.find(project => project.id === parseInt(id));
};

export const getFeaturedProjects = (count = 3) => {
  return projectsData.slice(0, count);
};

export const getRecentProjects = (count = 4) => {
  return projectsData
    .sort((a, b) => new Date(b.year) - new Date(a.year))
    .slice(0, count);
};
