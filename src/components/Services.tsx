import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  Wrench, 
  Disc, 
  Droplets, 
  Battery, 
  Settings, 
  Gauge,
  Shield,
  Zap,
  Thermometer
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      id: 'engine-repair',
      title: 'Engine Repair & Diagnostics',
      icon: <Wrench className="h-8 w-8 text-orange-500" />,
      description: 'Complete engine diagnostics, repair, and maintenance services',
      features: [
        'Engine diagnostics scanning',
        'Check engine light repair', 
        'Timing belt replacement',
        'Engine tune-ups',
        'Performance optimization'
      ],
      price: 'Starting at $150'
    },
    {
      id: 'brake-service',
      title: 'Brake Service & Repair',
      icon: <Disc className="h-8 w-8 text-orange-500" />,
      description: 'Comprehensive brake system inspection and repair services',
      features: [
        'Brake pad replacement',
        'Brake fluid change',
        'Rotor resurfacing',
        'Brake line inspection',
        'ABS system diagnostics'
      ],
      price: 'Starting at $120'
    },
    {
      id: 'oil-service',
      title: 'Oil Change & Fluids',
      icon: <Droplets className="h-8 w-8 text-orange-500" />,
      description: 'Regular maintenance for optimal vehicle performance',
      features: [
        'Conventional oil change',
        'Synthetic oil service',
        'Transmission fluid',
        'Coolant system flush',
        'Power steering fluid'
      ],
      price: 'Starting at $45'
    },
    {
      id: 'battery-electrical',
      title: 'Battery & Electrical',
      icon: <Battery className="h-8 w-8 text-orange-500" />,
      description: 'Electrical system diagnostics and battery services',
      features: [
        'Battery testing',
        'Alternator diagnostics',
        'Starter motor repair',
        'Wiring harness inspection',
        'Fuse replacement'
      ],
      price: 'Starting at $80'
    },
    {
      id: 'transmission',
      title: 'Transmission Service',
      icon: <Settings className="h-8 w-8 text-orange-500" />,
      description: 'Transmission maintenance and repair services',
      features: [
        'Transmission fluid change',
        'Filter replacement',
        'Clutch repair',
        'Transmission diagnostics',
        'Rebuild services'
      ],
      price: 'Starting at $200'
    },
    {
      id: 'tire-service',
      title: 'Tire & Wheel Service',
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      description: 'Complete tire and wheel maintenance services',
      features: [
        'Tire installation',
        'Wheel balancing',
        'Tire rotation',
        'Alignment service',
        'Tire pressure monitoring'
      ],
      price: 'Starting at $60'
    },
    {
      id: 'ac-heating',
      title: 'A/C & Heating',
      icon: <Thermometer className="h-8 w-8 text-orange-500" />,
      description: 'Climate control system repair and maintenance',
      features: [
        'A/C system diagnostics',
        'Refrigerant recharge',
        'Heater core replacement',
        'Blower motor repair',
        'Thermostat replacement'
      ],
      price: 'Starting at $100'
    },
    {
      id: 'diagnostic',
      title: 'Computer Diagnostics',
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      description: 'Advanced computer diagnostics for modern vehicles',
      features: [
        'OBD-II scanning',
        'ECU programming',
        'Sensor diagnostics',
        'Emissions testing',
        'Performance tuning'
      ],
      price: 'Starting at $90'
    },
    {
      id: 'maintenance',
      title: 'Preventive Maintenance',
      icon: <Gauge className="h-8 w-8 text-orange-500" />,
      description: 'Regular maintenance to keep your vehicle running smoothly',
      features: [
        'Multi-point inspection',
        'Filter replacements',
        'Fluid top-offs',
        'Belt & hose inspection',
        'Maintenance scheduling'
      ],
      price: 'Starting at $75'
    }
  ];

  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-gray-900 mb-4">
            Our Professional Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive automotive repair and maintenance services 
            with over 20 years of experience serving the Springfield community.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {service.icon}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-orange-600">{service.price}</span>
                  <Button
                    onClick={() => onNavigate('book-appointment')}
                    size="sm"
                    className="bg-orange-500 text-white hover:bg-orange-600"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            Need a Service Not Listed?
          </h2>
          <p className="text-gray-600 mb-6">
            We provide many additional automotive services. Contact us to discuss your specific needs.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-orange-500 text-white hover:bg-orange-600"
            >
              Contact Us
            </Button>
            <Button
              onClick={() => onNavigate('book-appointment')}
              variant="outline"
              className="border-orange-500 text-orange-600 hover:bg-orange-50"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}