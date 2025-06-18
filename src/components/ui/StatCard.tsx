import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  number, 
  label, 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {number}
      </div>
      <div className="text-primary-100 text-lg">
        {label}
      </div>
    </motion.div>
  );
};