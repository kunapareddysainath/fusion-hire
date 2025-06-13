import React from 'react';
import { 
  Building2, Calculator, Compass, HardHat, Crown, Heart, 
  Monitor, Shield, Cog, Megaphone, Factory, Pill, 
  TrendingUp, Microscope, Code, Cpu, Plane, ArrowRight 
} from 'lucide-react';

const Industries = () => {
  const industries = [
    { 
      name: 'Administration', 
      icon: Building2, 
      color: 'bg-blue-500',
      description: 'Executive assistants, office managers, and administrative professionals who keep businesses running smoothly.',
      roles: ['Executive Assistant', 'Office Manager', 'Administrative Coordinator', 'Receptionist']
    },
    { 
      name: 'Accounting & Finance', 
      icon: Calculator, 
      color: 'bg-green-500',
      description: 'Financial experts, accountants, and analysts who drive fiscal responsibility and growth.',
      roles: ['Financial Analyst', 'Accountant', 'Controller', 'CFO']
    },
    { 
      name: 'Architecture', 
      icon: Compass, 
      color: 'bg-purple-500',
      description: 'Creative architects and designers who shape the built environment around us.',
      roles: ['Architect', 'Design Manager', 'Project Architect', 'Urban Planner']
    },
    { 
      name: 'Construction', 
      icon: HardHat, 
      color: 'bg-orange-500',
      description: 'Skilled construction professionals who build the infrastructure of tomorrow.',
      roles: ['Project Manager', 'Site Supervisor', 'Construction Engineer', 'Safety Coordinator']
    },
    { 
      name: 'Executive Services', 
      icon: Crown, 
      color: 'bg-yellow-500',
      description: 'C-suite executives and senior leaders who drive organizational strategy and vision.',
      roles: ['CEO', 'COO', 'VP of Operations', 'Division President']
    },
    { 
      name: 'Healthcare', 
      icon: Heart, 
      color: 'bg-red-500',
      description: 'Healthcare professionals dedicated to improving patient outcomes and advancing medical care.',
      roles: ['Nurse Practitioner', 'Healthcare Administrator', 'Medical Director', 'Clinical Research Coordinator']
    },
    { 
      name: 'Information Technology', 
      icon: Monitor, 
      color: 'bg-indigo-500',
      description: 'IT professionals who build, maintain, and secure the digital infrastructure of modern business.',
      roles: ['System Administrator', 'Network Engineer', 'IT Manager', 'Cybersecurity Specialist']
    },
    { 
      name: 'Insurance', 
      icon: Shield, 
      color: 'bg-teal-500',
      description: 'Insurance professionals who protect individuals and businesses from risk.',
      roles: ['Insurance Agent', 'Claims Adjuster', 'Underwriter', 'Risk Manager']
    },
    { 
      name: 'Machinery', 
      icon: Cog, 
      color: 'bg-gray-500',
      description: 'Mechanical engineers and technicians who design and maintain industrial equipment.',
      roles: ['Mechanical Engineer', 'Equipment Technician', 'Maintenance Manager', 'Process Engineer']
    },
    { 
      name: 'Marketing', 
      icon: Megaphone, 
      color: 'bg-pink-500',
      description: 'Creative marketing professionals who build brands and drive customer engagement.',
      roles: ['Marketing Manager', 'Brand Strategist', 'Digital Marketing Specialist', 'Content Creator']
    },
    { 
      name: 'Manufacturing', 
      icon: Factory, 
      color: 'bg-amber-500',
      description: 'Manufacturing experts who optimize production processes and ensure quality standards.',
      roles: ['Production Manager', 'Quality Engineer', 'Manufacturing Supervisor', 'Lean Specialist']
    },
    { 
      name: 'Pharmaceuticals', 
      icon: Pill, 
      color: 'bg-cyan-500',
      description: 'Pharmaceutical professionals who develop and bring life-saving medications to market.',
      roles: ['Research Scientist', 'Regulatory Affairs Manager', 'Clinical Trial Manager', 'Drug Safety Specialist']
    },
    { 
      name: 'Sales & Marketing', 
      icon: TrendingUp, 
      color: 'bg-emerald-500',
      description: 'Sales professionals who drive revenue growth and build lasting customer relationships.',
      roles: ['Sales Director', 'Account Manager', 'Business Development Manager', 'Sales Engineer']
    },
    { 
      name: 'Science', 
      icon: Microscope, 
      color: 'bg-violet-500',
      description: 'Research scientists and laboratory professionals advancing scientific knowledge.',
      roles: ['Research Scientist', 'Lab Manager', 'Data Scientist', 'Biostatistician']
    },
    { 
      name: 'Software', 
      icon: Code, 
      color: 'bg-slate-500',
      description: 'Software developers and engineers who create the applications that power our digital world.',
      roles: ['Software Engineer', 'Full Stack Developer', 'DevOps Engineer', 'Technical Lead']
    },
    { 
      name: 'Technology', 
      icon: Cpu, 
      color: 'bg-blue-600',
      description: 'Technology leaders and specialists who drive digital transformation and innovation.',
      roles: ['CTO', 'Solutions Architect', 'Product Manager', 'Technology Consultant']
    },
    { 
      name: 'Aerospace', 
      icon: Plane, 
      color: 'bg-sky-500',
      description: 'Aerospace professionals who push the boundaries of flight and space exploration.',
      roles: ['Aerospace Engineer', 'Flight Test Engineer', 'Systems Engineer', 'Program Manager']
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From aerospace to technology, we connect top talent with leading companies across 17 diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.name}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${industry.color} p-6`}>
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-neutral-900">Key Roles:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.roles.map((role, roleIndex) => (
                          <span
                            key={roleIndex}
                            className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Focus */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Specialized Industry Focus
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              While we serve all industries, we have particular expertise in these high-growth sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-primary-100 p-3 rounded-lg w-fit mb-4">
                <Plane className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Aerospace Partnership
              </h3>
              <p className="text-neutral-600 mb-4">
                Through our collaboration with Azista Aerospace, we provide specialized talent solutions for the aerospace industry, from engineering to program management.
              </p>
              <div className="text-sm text-primary-600 font-medium">
                Featured Partnership
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-accent-100 p-3 rounded-lg w-fit mb-4">
                <Code className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Technology & Software
              </h3>
              <p className="text-neutral-600 mb-4">
                Deep expertise in placing software engineers, data scientists, and technology leaders with a special focus on diversity and inclusion in tech.
              </p>
              <div className="text-sm text-accent-600 font-medium">
                Women in Tech Initiative
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-emerald-100 p-3 rounded-lg w-fit mb-4">
                <Crown className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Executive Leadership
              </h3>
              <p className="text-neutral-600 mb-4">
                Executive search across all industries, with particular strength in placing diverse leaders in C-suite and senior management roles.
              </p>
              <div className="text-sm text-emerald-600 font-medium">
                Executive Search Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Industry's Top Talent?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            No matter what industry you're in, we have the expertise and network to connect you with exceptional professionals who will drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Start Your Search</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;