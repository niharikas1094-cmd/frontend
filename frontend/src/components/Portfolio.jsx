import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/toaster";
import { 
  X, 
  Download, 
  Menu, 
  ExternalLink, 
  MapPin, 
  Calendar,
  Award,
  GraduationCap,
  Mail,
  Linkedin,
  Phone,
  Filter,
  Clock,
  User
} from "lucide-react";
import Navigation from "./Navigation";
import ProjectModal from "./ProjectModal";
import BlogSection from "./BlogSection";
import ContactForm from "./ContactForm";

const projects = [
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
    description: "Government building designed to blend governance, learning, and public engagement. Uses local materials and traditional patterns.",
    details: "A comprehensive farmers' cooperative building that serves as both an administrative center and learning hub. The design incorporates traditional Odishan architectural elements with modern functionality, creating spaces for farmer education, government services, and community gatherings.",
    area: "12,000 m²",
    budget: "Confidential",
    team: "Design Architect",
    tags: ["Government Building", "Traditional Architecture", "Community Engagement", "Local Materials"]
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
    description: "Design for a winery transformed into an experiential wine tourism hub. Focuses on immersive visitor experiences and sustainable design.",
    details: "This thesis project explores the transformation of traditional winery operations into a comprehensive wine tourism destination. The design integrates wine production facilities with visitor experiences, including tasting rooms, educational spaces, and accommodation, all set within the scenic landscape of Nashik's wine country.",
    area: "22 acres",
    budget: "Academic Study",
    team: "Individual Thesis Project",
    tags: ["Wine Tourism", "Hospitality Design", "Experiential Architecture", "Landscape Integration"]
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
    description: "Extension to existing office and production building, incorporating a showroom and additional office space.",
    details: "A carefully planned extension that doubles the functionality of an existing industrial facility. The project includes new office spaces, a product showroom, and enhanced production areas, all designed to work harmoniously with the existing structure while meeting modern workplace standards.",
    area: "7,900 m²",
    budget: "Confidential",
    team: "Project Architect (LPH 1-9)",
    tags: ["Office Extension", "Industrial Architecture", "Workplace Design", "Adaptive Reuse"]
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
    description: "A cohesive ensemble of eight buildings supporting port and industrial operations including admin, maintenance, warehouse, and security facilities.",
    details: "This comprehensive campus development creates a unified administrative and operational hub for port activities. The design addresses the complex functional requirements of modern port operations while maintaining architectural coherence across multiple building types and uses.",
    area: "Multiple Buildings",
    budget: "Confidential",
    team: "Project Architect (LPH 1-9)",
    tags: ["Industrial Campus", "Port Architecture", "Multi-Building Complex", "Infrastructure"]
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
    description: "Redevelopment of a printing press focusing on modernization, sustainable practices, and green integration.",
    details: "This redevelopment project transforms an existing printing facility into a model of sustainable industrial architecture. The design emphasizes energy efficiency, green technologies, and environmental integration while maintaining the operational efficiency required for modern printing operations.",
    area: "7,900 m²",
    budget: "Tender Stage",
    team: "Lead Designer (LPH 1-7)",
    tags: ["Sustainable Design", "Industrial Renovation", "Green Technology", "Adaptive Reuse"]
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
    description: "Research project focusing on traditional settlement patterns and building designs in Chanderi, inspired by Baiju Bawra Haveli.",
    details: "An in-depth research project examining the architectural heritage and cultural traditions of Chanderi. The study documents traditional building techniques, settlement patterns, and cultural practices, providing insights for contemporary applications of traditional design principles.",
    area: "Research Study",
    budget: "Academic Research",
    team: "Research Team Member (16 collaborators)",
    tags: ["Heritage Research", "Traditional Architecture", "Cultural Documentation", "Academic Study"]
  }
];

const skills = [
  { name: "Architectural Design", level: 95 },
  { name: "BIM (Revit, ArchiCAD)", level: 90 },
  { name: "Master Planning", level: 85 },
  { name: "3D Visualization (SketchUp)", level: 88 },
  { name: "Adobe Creative Suite", level: 85 },
  { name: "Construction Management", level: 80 },
  { name: "Heritage Conservation", level: 75 },
  { name: "Sustainable Design", level: 82 }
];

const categories = ["All", "Public", "Hospitality", "Commercial", "Industrial", "Research"];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleDownloadResume = () => {
    // Create a mock resume download
    const link = document.createElement('a');
    link.href = '/resume/niharika-singh-cv.pdf';
    link.download = 'Niharika-Singh-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-gray-200 border-t-gray-900 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600">Loading Portfolio...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center p-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Niharika Singh
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Architect with international experience across India and Belgium, passionate about 
            sustainable design and cultural integration. Currently based in Leuven, Belgium.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="px-8 py-3 text-lg"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg"
              onClick={handleDownloadResume}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold mb-6">Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            A selection of architectural projects spanning residential, commercial, and cultural spaces,
            each designed with sustainability and human experience at their core.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card 
                  className="cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  onClick={() => setActiveProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900">
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/90 text-gray-900 border-gray-200">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-2 group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.year}
                      <Separator orientation="vertical" className="mx-2 h-4" />
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description.substring(0, 120)}...
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-6">Skills & Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive skill set developed through years of practice in architectural design,
              sustainable building practices, and project management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-semibold mb-6">Software Proficiency</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Revit", "ArchiCAD", "AutoCAD", "SketchUp", "Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator", "Enscape", "Twinmotion", "Microsoft Office"].map((software) => (
                <Badge key={software} variant="secondary" className="px-4 py-2 text-sm">
                  {software}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <BlogSection />

      {/* Awards & Education Section */}
      <section id="awards" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-6">Awards & Education</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognition for design excellence and a strong educational foundation in architecture and sustainable design.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3" />
                Education
              </h3>
              <div className="space-y-8">
                <div className="border-l-4 border-gray-200 pl-6">
                  <h4 className="font-semibold text-lg">Bachelor of Architecture</h4>
                  <p className="text-gray-600">School of Planning and Architecture, Bhopal</p>
                  <p className="text-sm text-gray-500 mb-2">2012 – 2017</p>
                  <p className="text-sm">5-year professional degree including internship</p>
                </div>
                <div className="border-l-4 border-gray-200 pl-6">
                  <h4 className="font-semibold text-lg">Primary & Secondary Education</h4>
                  <p className="text-gray-600">Bal Bhavan School, Bhopal</p>
                  <p className="text-sm text-gray-500 mb-2">2000 – 2012</p>
                  <p className="text-sm">School Prefect (2010-2012), Academic Excellence</p>
                </div>
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Award className="w-6 h-6 mr-3" />
                Awards & Recognition
              </h3>
              <div className="space-y-8">
                <div className="border-l-4 border-gray-200 pl-6">
                  <h4 className="font-semibold text-lg">COA-TRC National Awards</h4>
                  <p className="text-gray-600">Council of Architecture - India</p>
                  <p className="text-sm text-gray-500 mb-2">2017</p>
                  <p className="text-sm">Top 10, Zone 1 - Excellence in Architectural Thesis</p>
                </div>
                <div className="border-l-4 border-gray-200 pl-6">
                  <h4 className="font-semibold text-lg">UNESCO Louis I Kahn Trophy</h4>
                  <p className="text-gray-600">NASA (National Association of Students of Architecture)</p>
                  <p className="text-sm text-gray-500 mb-2">2015</p>
                  <p className="text-sm">Top 6 - National Level Architecture Competition</p>
                </div>
                <div className="border-l-4 border-gray-200 pl-6">
                  <h4 className="font-semibold text-lg">National Student's Design Competition</h4>
                  <p className="text-gray-600">UNESCO and Berkeley</p>
                  <p className="text-sm text-gray-500 mb-2">2015</p>
                  <p className="text-sm">3rd Prize Winner - Ujjain Kumbh Festival Temporary Shelter Design</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Let's discuss your next architectural project or collaboration opportunity.
              I'm always interested in challenging and meaningful work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:ariakas1094@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                      ariakas1094@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+32466704611" className="text-gray-300 hover:text-white transition-colors">
                      +32 466 704 611
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      linkedin.com/in/niharika-singh
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-300">Leuven, Belgium</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Niharika Singh</h3>
            <p className="text-gray-400 mb-6">
              Architectural Design • Master Planning • Cultural Integration • Sustainable Design
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:ariakas1094@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © 2024 Niharika Singh. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal 
        project={activeProject} 
        onClose={() => setActiveProject(null)} 
      />
      
      {/* Toaster for notifications */}
      <Toaster />
    </div>
  );
}