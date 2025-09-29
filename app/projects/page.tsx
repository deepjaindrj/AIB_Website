'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const projects = [
  {
    title: "Neural Dashboard",
    description: "AI-powered analytics dashboard with real-time data visualization and predictive insights.",
    image: "https://images.pexels.com/photos/5439/business-computer-finance-laptop.jpg?auto=compress&cs=tinysrgb&w=600",
    tech: ["React", "TypeScript", "D3.js", "AI/ML"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Quantum UI Kit",
    description: "Modern component library with advanced animations and accessibility features.",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["React", "Framer Motion", "Storybook", "SCSS"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Crypto Tracker Pro",
    description: "Real-time cryptocurrency tracking with advanced portfolio management features.",
    image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["Next.js", "WebSocket", "Chart.js", "Firebase"],
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "AR Shopping App",
    description: "Augmented reality shopping experience with 3D product visualization.",
    image: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["React Native", "Three.js", "AR Kit", "Node.js"],
    gradient: "from-purple-600 to-red-500"
  },
  {
    title: "Smart Home Hub",
    description: "IoT device management platform with voice control and automation.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["Vue.js", "IoT", "WebRTC", "Python"],
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Blockchain Explorer",
    description: "Advanced blockchain explorer with transaction analysis and security features.",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["React", "Web3", "GraphQL", "Solidity"],
    gradient: "from-yellow-500 to-purple-600"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Featured Work</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of innovative solutions built with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.2)'
              }}
            >
              <div className="aspect-video overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}