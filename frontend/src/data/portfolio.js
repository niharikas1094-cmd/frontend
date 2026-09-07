// ============================================================
//  PORTFOLIO CONTENT — edit this file to update the website.
//  Images live in  frontend/public/images/  (see README.md there).
//  Paths always start with "/images/".
// ============================================================

export const profile = {
  name: "Niharika Singh",
  initials: "NS",
  tagline:
    "Architect with international experience across India and Belgium, passionate about sustainable design and cultural integration. Currently based in Leuven, Belgium.",
  footerLine: "Architectural Design • Master Planning • Cultural Integration • Sustainable Design",
  location: "Leuven, Belgium",
  email: "ariakas1094@gmail.com",
  phone: "+32 466 704 611",
  phoneHref: "tel:+32466704611",
  linkedinLabel: "linkedin.com/in/niharika-singh",
  linkedinUrl: "#",
  cvPath: "/resume/niharika-singh-cv.pdf",
  cvFileName: "Niharika-Singh-CV.pdf",
};

export const categories = ["All", "Public", "Hospitality", "Commercial", "Industrial", "Research"];

export const projects = [
  {
    id: 1,
    title: "Farmer's Cooperative (Krishi Bhavan)",
    year: "2018",
    category: "Public",
    location: "Bhubaneswar, Odisha, India",
    status: "Completed",
    client: "Government of Odisha",
    thumbnail: "/images/project1_thumb.jpg",
    images: ["/images/project1_1.jpg", "/images/project1_2.jpg", "/images/project1_3.jpg"],
    description:
      "Government building designed to blend governance, learning, and public engagement. Uses local materials and traditional patterns.",
    details:
      "A comprehensive farmers' cooperative building that serves as both an administrative center and learning hub. The design incorporates traditional Odishan architectural elements with modern functionality, creating spaces for farmer education, government services, and community gatherings.",
    area: "12,000 m²",
    budget: "Confidential",
    team: "Design Architect",
    tags: ["Government Building", "Traditional Architecture", "Community Engagement", "Local Materials"],
  },
  {
    id: 2,
    title: "Experiential Wine Tourism Hub",
    year: "2017",
    category: "Hospitality",
    location: "Nashik, India",
    status: "Thesis Project",
    client: "Academic Project",
    thumbnail: "/images/project2_thumb.jpg",
    images: ["/images/project2_1.jpg", "/images/project2_2.jpg", "/images/project2_3.jpg"],
    description:
      "Design for a winery transformed into an experiential wine tourism hub. Focuses on immersive visitor experiences and sustainable design.",
    details:
      "This thesis project explores the transformation of traditional winery operations into a comprehensive wine tourism destination. The design integrates wine production facilities with visitor experiences, including tasting rooms, educational spaces, and accommodation, all set within the scenic landscape of Nashik's wine country.",
    area: "22 acres",
    budget: "Academic Study",
    team: "Individual Thesis Project",
    tags: ["Wine Tourism", "Hospitality Design", "Experiential Architecture", "Landscape Integration"],
  },
  {
    id: 3,
    title: "Stacked Office Space Extension",
    year: "Ongoing",
    category: "Commercial",
    location: "Geraardsbergen, Belgium",
    status: "In Progress",
    client: "Private Client",
    thumbnail: "/images/project3_thumb.jpg",
    images: ["/images/project3_1.jpg", "/images/project3_2.jpg"],
    description:
      "Extension to existing office and production building, incorporating a showroom and additional office space.",
    details:
      "A carefully planned extension that doubles the functionality of an existing industrial facility. The project includes new office spaces, a product showroom, and enhanced production areas, all designed to work harmoniously with the existing structure while meeting modern workplace standards.",
    area: "7,900 m²",
    budget: "Confidential",
    team: "Project Architect (LPH 1-9)",
    tags: ["Office Extension", "Industrial Architecture", "Workplace Design", "Adaptive Reuse"],
  },
  {
    id: 4,
    title: "Industrial Administrative Campus",
    year: "Ongoing",
    category: "Industrial",
    location: "Antwerp, Belgium",
    status: "In Progress",
    client: "Port Authority",
    thumbnail: "/images/project4_thumb.jpg",
    images: ["/images/project4_1.jpg", "/images/project4_2.jpg"],
    description:
      "A cohesive ensemble of eight buildings supporting port and industrial operations including admin, maintenance, warehouse, and security facilities.",
    details:
      "This comprehensive campus development creates a unified administrative and operational hub for port activities. The design addresses the complex functional requirements of modern port operations while maintaining architectural coherence across multiple building types and uses.",
    area: "Multiple Buildings",
    budget: "Confidential",
    team: "Project Architect (LPH 1-9)",
    tags: ["Industrial Campus", "Port Architecture", "Multi-Building Complex", "Infrastructure"],
  },
  {
    id: 5,
    title: "Greenprint for the Future",
    year: "Tender Phase",
    category: "Industrial",
    location: "Herentals, Belgium",
    status: "Tender",
    client: "Printing Press Company",
    thumbnail: "/images/project5_thumb.jpg",
    images: ["/images/project5_1.jpg", "/images/project5_2.jpg"],
    description:
      "Redevelopment of a printing press focusing on modernization, sustainable practices, and green integration.",
    details:
      "This redevelopment project transforms an existing printing facility into a model of sustainable industrial architecture. The design emphasizes energy efficiency, green technologies, and environmental integration while maintaining the operational efficiency required for modern printing operations.",
    area: "7,900 m²",
    budget: "Tender Stage",
    team: "Lead Designer (LPH 1-7)",
    tags: ["Sustainable Design", "Industrial Renovation", "Green Technology", "Adaptive Reuse"],
  },
  {
    id: 6,
    title: "Architectural and Cultural Traditions in India",
    year: "2015",
    category: "Research",
    location: "Chanderi, India",
    status: "Completed",
    client: "UNESCO & Berkeley Collaboration",
    thumbnail: "/images/project6_thumb.jpg",
    images: ["/images/project6_1.jpg", "/images/project6_2.jpg"],
    description:
      "Research project focusing on traditional settlement patterns and building designs in Chanderi, inspired by Baiju Bawra Haveli.",
    details:
      "An in-depth research project examining the architectural heritage and cultural traditions of Chanderi. The study documents traditional building techniques, settlement patterns, and cultural practices, providing insights for contemporary applications of traditional design principles.",
    area: "Research Study",
    budget: "Academic Research",
    team: "Research Team Member (16 collaborators)",
    tags: ["Heritage Research", "Traditional Architecture", "Cultural Documentation", "Academic Study"],
  },
];

export const skills = [
  { name: "Architectural Design", level: 95 },
  { name: "BIM (Revit, ArchiCAD)", level: 90 },
  { name: "Master Planning", level: 85 },
  { name: "3D Visualization (SketchUp)", level: 88 },
  { name: "Adobe Creative Suite", level: 85 },
  { name: "Construction Management", level: 80 },
  { name: "Heritage Conservation", level: 75 },
  { name: "Sustainable Design", level: 82 },
];

export const software = [
  "Revit",
  "ArchiCAD",
  "AutoCAD",
  "SketchUp",
  "Adobe InDesign",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Enscape",
  "Twinmotion",
  "Microsoft Office",
];

export const education = [
  {
    degree: "Bachelor of Architecture",
    institution: "School of Planning and Architecture, Bhopal",
    period: "2012 – 2017",
    note: "5-year professional degree including internship",
  },
  {
    degree: "Primary & Secondary Education",
    institution: "Bal Bhavan School, Bhopal",
    period: "2000 – 2012",
    note: "School Prefect (2010-2012), Academic Excellence",
  },
];

export const awards = [
  {
    title: "COA-TRC National Awards",
    organization: "Council of Architecture - India",
    year: "2017",
    note: "Top 10, Zone 1 - Excellence in Architectural Thesis",
  },
  {
    title: "UNESCO Louis I Kahn Trophy",
    organization: "NASA (National Association of Students of Architecture)",
    year: "2015",
    note: "Top 6 - National Level Architecture Competition",
  },
  {
    title: "National Student's Design Competition",
    organization: "UNESCO and Berkeley",
    year: "2015",
    note: "3rd Prize Winner - Ujjain Kumbh Festival Temporary Shelter Design",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Traditional Architecture Meets Modern Functionality",
    excerpt:
      "Exploring how traditional Indian architectural elements can be integrated into contemporary government and public buildings.",
    category: "Cultural Integration",
    readTime: "5 min read",
    date: "March 15, 2024",
    author: "Niharika Singh",
    image: "/images/blog1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Industrial Architecture in Belgium: Lessons Learned",
    excerpt:
      "Insights from working on industrial campus projects and the unique challenges of port and manufacturing architecture.",
    category: "Industrial Design",
    readTime: "7 min read",
    date: "February 28, 2024",
    author: "Niharika Singh",
    image: "/images/blog2.jpg",
  },
  {
    id: 3,
    title: "From India to Belgium: An Architect's Journey",
    excerpt:
      "Reflections on practicing architecture across cultures and adapting design approaches to different contexts and climates.",
    category: "Professional Journey",
    readTime: "6 min read",
    date: "January 20, 2024",
    author: "Niharika Singh",
    image: "/images/blog3.jpg",
  },
  {
    id: 4,
    title: "Wine Tourism Architecture: Creating Experiential Spaces",
    excerpt:
      "Designing spaces that enhance the wine experience through thoughtful architecture and landscape integration.",
    category: "Hospitality Design",
    readTime: "4 min read",
    date: "December 10, 2023",
    author: "Niharika Singh",
    image: "/images/blog4.jpg",
  },
];
