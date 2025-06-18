import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  icon: typeof LucideIcon;
  title: string;
  description: string;
  skills: string[];
  delay?: number;
}
export const IndustryCard: React.FC<IndustryCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  skills, 
  delay = 0 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="h-80 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full preserve-3d cursor-pointer"
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
            <Icon className="h-8 w-8 text-primary-500" />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">
            Hover to see more
          </p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-primary-500 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-semibold mb-3">
            {title}
          </h3>
          <p className="text-primary-100 text-sm mb-4 leading-relaxed">
            {description}
          </p>
          <div>
            <h4 className="font-medium mb-2">Key Skills:</h4>
            <div className="flex flex-wrap gap-1">
              {skills.slice(0, 4).map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/20 rounded text-xs"
                >
                  {skill}
                </span>
              ))}
              {skills.length > 4 && (
                <span className="px-2 py-1 bg-white/20 rounded text-xs">
                  +{skills.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};