import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Traditional Architecture Meets Modern Functionality",
    excerpt: "Exploring how traditional Indian architectural elements can be integrated into contemporary government and public buildings.",
    category: "Cultural Integration",
    readTime: "5 min read",
    date: "March 15, 2024",
    author: "Niharika Singh",
    image: "/images/blog1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Industrial Architecture in Belgium: Lessons Learned",
    excerpt: "Insights from working on industrial campus projects and the unique challenges of port and manufacturing architecture.",
    category: "Industrial Design",
    readTime: "7 min read",
    date: "February 28, 2024",
    author: "Niharika Singh",
    image: "/images/blog2.jpg"
  },
  {
    id: 3,
    title: "From India to Belgium: An Architect's Journey",
    excerpt: "Reflections on practicing architecture across cultures and adapting design approaches to different contexts and climates.",
    category: "Professional Journey",
    readTime: "6 min read",
    date: "January 20, 2024",
    author: "Niharika Singh",
    image: "/images/blog3.jpg"
  },
  {
    id: 4,
    title: "Wine Tourism Architecture: Creating Experiential Spaces",
    excerpt: "Designing spaces that enhance the wine experience through thoughtful architecture and landscape integration.",
    category: "Hospitality Design",
    readTime: "4 min read",
    date: "December 10, 2023",
    author: "Niharika Singh",
    image: "/images/blog4.jpg"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold mb-6">Insights & Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thoughts and insights on sustainable architecture, urban planning, and the future of built environments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {blogPosts.filter(post => post.featured).map(post => (
              <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/80 text-white">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Other Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-6">Recent Articles</h3>
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover:shadow-md transition-shadow duration-300 group cursor-pointer"
              >
                <div className="flex">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-24 h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <CardContent className="flex-1 p-4">
                    <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-2 group-hover:text-gray-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                  </CardContent>
                </div>
              </Card>
            ))}
            
            <Button variant="outline" className="w-full mt-6">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;