import React from 'react';
import { 
  Building2, Calculator, Compass, HardHat, Crown, Heart, 
  Monitor, Shield, Cog, Megaphone, Factory, Pill, 
  TrendingUp, Microscope, Code, Cpu, Plane 
} from 'lucide-react';

const industries = [
  { name: 'Administration', icon: Building2, color: 'bg-blue-500' },
  { name: 'Accounting & Finance', icon: Calculator, color: 'bg-green-500' },
  { name: 'Architecture', icon: Compass, color: 'bg-purple-500' },
  { name: 'Construction', icon: HardHat, color: 'bg-orange-500' },
  { name: 'Executive Services', icon: Crown, color: 'bg-yellow-500' },
  { name: 'Healthcare', icon: Heart, color: 'bg-red-500' },
  { name: 'Information Technology', icon: Monitor, color: 'bg-indigo-500' },
  { name: 'Insurance', icon: Shield, color: 'bg-teal-500' },
  { name: 'Machinery', icon: Cog, color: 'bg-gray-500' },
  { name: 'Marketing', icon: Megaphone, color: 'bg-pink-500' },
  { name: 'Manufacturing', icon: Factory, color: 'bg-amber-500' },
  { name: 'Pharmaceuticals', icon: Pill, color: 'bg-cyan-500' },
  { name: 'Sales & Marketing', icon: TrendingUp, color: 'bg-emerald-500' },
  { name: 'Science', icon: Microscope, color: 'bg-violet-500' },
  { name: 'Software', icon: Code, color: 'bg-slate-500' },
  { name: 'Technology', icon: Cpu, color: 'bg-blue-600' },
  { name: 'Aerospace', icon: Plane, color: 'bg-sky-500' },
];

const IndustryGrid = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From aerospace to technology, we connect top talent with leading companies across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${industry.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-900 text-sm leading-tight">
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;