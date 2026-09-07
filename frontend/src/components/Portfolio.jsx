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
import { ProjectImage } from "./ProjectImage";
import { profile, projects, categories, skills, software, education, awards } from "../data/portfolio";

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
    link.href = profile.cvPath;
    link.download = profile.cvFileName;
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
            {profile.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {profile.tagline}
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
                    <ProjectImage
                      src={project.thumbnail}
                      alt={project.title}
                      title={project.title}
                      category={project.category}
                      testId={`project-thumb-${project.id}`}
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
              {software.map((item) => (
                <Badge key={item} variant="secondary" className="px-4 py-2 text-sm">
                  {item}
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
                {education.map((item) => (
                  <div key={item.degree} className="border-l-4 border-gray-200 pl-6" data-testid="education-item">
                    <h4 className="font-semibold text-lg">{item.degree}</h4>
                    <p className="text-gray-600">{item.institution}</p>
                    <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                    <p className="text-sm">{item.note}</p>
                  </div>
                ))}
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
                {awards.map((item) => (
                  <div key={item.title} className="border-l-4 border-gray-200 pl-6" data-testid="award-item">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.organization}</p>
                    <p className="text-sm text-gray-500 mb-2">{item.year}</p>
                    <p className="text-sm">{item.note}</p>
                  </div>
                ))}
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
                    <a href={`mailto:${profile.email}`} className="text-gray-300 hover:text-white transition-colors" data-testid="contact-email-link">
                      {profile.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href={profile.phoneHref} className="text-gray-300 hover:text-white transition-colors" data-testid="contact-phone-link">
                      {profile.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href={profile.linkedinUrl} className="text-gray-300 hover:text-white transition-colors" data-testid="contact-linkedin-link">
                      {profile.linkedinLabel}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-300">{profile.location}</p>
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
            <h3 className="text-2xl font-semibold mb-4">{profile.name}</h3>
            <p className="text-gray-400 mb-6">
              {profile.footerLine}
            </p>
            <div className="flex justify-center space-x-6">
              <a href={`mailto:${profile.email}`} className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href={profile.linkedinUrl} className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} {profile.name}. All rights reserved.
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