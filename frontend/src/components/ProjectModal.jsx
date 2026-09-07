import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  X, 
  ExternalLink, 
  MapPin, 
  Calendar, 
  User, 
  Building, 
  DollarSign,
  Users
} from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 flex justify-center items-center p-4 z-50 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, scale: 0.9 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 50, scale: 0.9 }}
          className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
          >
            <X className="w-5 h-5" />
          </Button>

          {/* Hero Image */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.year}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Project Info Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Status</span>
                    <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Category</span>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Client</span>
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Area</span>
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Budget</span>
                    <span>{project.budget}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Role</span>
                    <span>{project.team}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {project.details}
                </p>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Additional Images */}
            {project.images.length > 1 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Project Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.slice(1).map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="overflow-hidden rounded-lg"
                    >
                      <img
                        src={image}
                        alt={`${project.title} ${index + 2}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button>
                <ExternalLink className="w-4 h-4 mr-2" />
                View Full Case Study
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;