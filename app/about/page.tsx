'use client';

import { motion } from 'framer-motion';
import { Award, Code, Coffee, Heart, Sparkles, Users } from 'lucide-react';

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Lead Developer",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Full-stack wizard with a passion for creating seamless user experiences.",
    skills: ["React", "Node.js", "AI/ML", "UI/UX"]
  },
  {
    name: "Sarah Kim",
    role: "Design Director",
    image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Creative visionary who transforms ideas into beautiful, functional designs.",
    skills: ["Design", "Figma", "Animation", "Strategy"]
  },
  {
    name: "Marcus Johnson",
    role: "Tech Lead",
    image: "https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Systems architect with expertise in scalable solutions and performance.",
    skills: ["Backend", "DevOps", "Cloud", "Security"]
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager",
    image: "https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Strategic thinker who bridges technology and business requirements.",
    skills: ["Strategy", "Analytics", "Leadership", "Growth"]
  }
];

const stats = [
  { icon: <Code className="w-6 h-6" />, label: "Projects Delivered", value: "50+" },
  { icon: <Users className="w-6 h-6" />, label: "Happy Clients", value: "100+" },
  { icon: <Coffee className="w-6 h-6" />, label: "Cups of Coffee", value: "2,500+" },
  { icon: <Award className="w-6 h-6" />, label: "Awards Won", value: "15" }
];

export default function About() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Meet the Team</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of creators, innovators, and problem-solvers dedicated to crafting exceptional digital experiences that push the boundaries of what's possible.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-colors"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.15)'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
            >
              <div className="text-purple-400 mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Amazing Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative mb-6">
                  <motion.div
                    className="w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </motion.div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="text-center p-12 rounded-3xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ 
            boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.2)'
          }}
        >
          <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            To create digital experiences that not only meet today's needs but anticipate tomorrow's possibilities. 
            We believe in the power of thoughtful design, cutting-edge technology, and human-centered innovation 
            to transform how people interact with the digital world.
          </p>
        </motion.div>
      </div>
    </div>
  );
}