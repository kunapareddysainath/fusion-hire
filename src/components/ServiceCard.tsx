import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: typeof LucideIcon;
  features: string[];
  color: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, features, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className={`${color} p-6`}>
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-3 rounded-lg">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-neutral-600 mb-6 leading-relaxed">{description}</p>
        
        <div className="space-y-3">
          <h4 className="font-semibold text-neutral-900 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-neutral-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;