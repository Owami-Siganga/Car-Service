import React from 'react';
import { Button } from './ui/button';
import { Wrench, Disc, Droplets, ChevronRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      id: 'engine-repair',
      title: 'Engine Repair',
      icon: <Wrench className="h-8 w-8" />,
      description: 'Complete engine diagnostics and repair services'
    },
    {
      id: 'brake-service', 
      title: 'Brake Service',
      icon: <Disc className="h-8 w-8" />,
      description: 'Brake inspection, pad replacement, and system maintenance'
    },
    {
      id: 'oil-check',
      title: 'Oil Check',
      icon: <Droplets className="h-8 w-8" />,
      description: 'Oil change and fluid level inspection services'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gray-300 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-medium text-gray-900 mb-4">
            Expert Auto Repair Services
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Trusted mechanics serving Springfield for 20+ years
          </p>
          
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => onNavigate('book-appointment')}
              className="bg-gray-400 text-gray-900 hover:bg-gray-500 px-8 py-3"
            >
              Book Appointment
            </Button>
            <Button
              onClick={() => window.open('tel:(555)1236478')}
              className="bg-gray-400 text-gray-900 hover:bg-gray-500 px-8 py-3"
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-medium text-center text-gray-900 mb-12">
            Our Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-200 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4 text-gray-700">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <div className="bg-gray-400 h-2 rounded mb-4"></div>
                <div className="bg-gray-400 h-1 rounded mb-6 w-3/4 mx-auto"></div>
                
                <p className="text-gray-700 text-sm mb-6">
                  {service.description}
                </p>
                
                <Button
                  onClick={() => onNavigate('services')}
                  className="bg-gray-400 text-gray-900 hover:bg-gray-500"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium text-gray-900 mb-8">
            Why Choose Los Mechanics?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <ChevronRight className="h-5 w-5 text-orange-500" />
                <span>20+ years of experience</span>
              </div>
              <div className="flex items-center gap-3">
                <ChevronRight className="h-5 w-5 text-orange-500" />
                <span>Certified mechanics</span>
              </div>
              <div className="flex items-center gap-3">
                <ChevronRight className="h-5 w-5 text-orange-500" />
                <span>Quality guaranteed</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <ChevronRight className="h-5 w-5 text-orange-500" />
                <span>Competitive pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <ChevronRight className="h-5 w-5 text-orange-500" />
                <span>Free diagnostics</span>
              </div>
              <div className="flex items-center gap-3">
                <ChevronRight className="h-5 w-5 text-orange-500" />
                <span>Quick turnaround</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button
              onClick={() => onNavigate('book-appointment')}
              className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-3"
            >
              Schedule Your Service Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}