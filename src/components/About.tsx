import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Wrench, 
  Star,
  CheckCircle,
  MapPin
} from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  const stats = [
    { icon: <Clock className="h-6 w-6" />, label: 'Years in Business', value: '20+' },
    { icon: <Users className="h-6 w-6" />, label: 'Happy Customers', value: '5,000+' },
    { icon: <Wrench className="h-6 w-6" />, label: 'Services Completed', value: '15,000+' },
    { icon: <Award className="h-6 w-6" />, label: 'Certified Mechanics', value: '8' }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: 'Quality Guarantee',
      description: 'We stand behind our work with comprehensive warranties on all repairs and services.'
    },
    {
      icon: <Star className="h-8 w-8 text-orange-500" />,
      title: 'Expert Technicians',
      description: 'Our ASE-certified mechanics have decades of combined experience with all vehicle makes and models.'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: 'Fast Turnaround',
      description: 'We understand your time is valuable. Most services are completed the same day.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-500" />,
      title: 'Honest Pricing',
      description: 'Transparent, upfront pricing with no hidden fees. We provide detailed estimates for all work.'
    }
  ];

  const team = [
    {
      name: 'Carlos Rodriguez',
      role: 'Owner & Master Mechanic',
      experience: '25+ years',
      speciality: 'Engine Diagnostics & Repair'
    },
    {
      name: 'Maria Santos',
      role: 'Lead Technician',
      experience: '15+ years', 
      speciality: 'Transmission & Electrical Systems'
    },
    {
      name: 'Diego Martinez',
      role: 'Brake Specialist',
      experience: '12+ years',
      speciality: 'Brake Systems & Safety Inspections'
    },
    {
      name: 'Ana Lopez',
      role: 'Service Advisor',
      experience: '8+ years',
      speciality: 'Customer Relations & Scheduling'
    }
  ];

  return (
    <div className="w-full py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-medium text-gray-900 mb-6">
            About Los Mechanics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over two decades, Los Mechanics has been Springfield's trusted automotive service center, 
            providing honest, reliable, and professional auto repair services to our community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center text-orange-500 mb-3">
                  {stat.icon}
                </div>
                <p className="text-3xl font-medium text-gray-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Los Mechanics was founded in 2005 by Carlos Rodriguez, a master mechanic with a passion 
                  for automotive excellence and customer service. What started as a small neighborhood garage 
                  has grown into Springfield's most trusted auto repair facility.
                </p>
                <p>
                  Our commitment to quality workmanship, honest pricing, and exceptional customer service 
                  has earned us the loyalty of thousands of customers throughout the years. We treat every 
                  vehicle as if it were our own and every customer like family.
                </p>
                <p>
                  Today, our team of certified technicians continues to uphold the values that Carlos 
                  established: integrity, expertise, and a genuine care for our community's automotive needs.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Visit Our Shop</h3>
                  <p className="text-gray-600">
                    12 Alpha Street, Parkhood<br />
                    Springfield, MA 01101
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 8:00 AM - 4:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-medium text-gray-900 text-center mb-12">
            Why Choose Los Mechanics?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-xl text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-medium text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-medium text-lg text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {member.experience}
                  </p>
                  <p className="text-xs text-gray-500">
                    {member.speciality}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-medium text-gray-900 text-center mb-8">
            Certifications & Memberships
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Award className="h-12 w-12 text-orange-500 mx-auto mb-3" />
              <h3 className="font-medium text-gray-900 mb-2">ASE Certified</h3>
              <p className="text-sm text-gray-600">
                All our technicians are ASE certified professionals
              </p>
            </div>
            <div>
              <Shield className="h-12 w-12 text-orange-500 mx-auto mb-3" />
              <h3 className="font-medium text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-sm text-gray-600">
                Fully licensed and insured for your peace of mind
              </p>
            </div>
            <div>
              <Star className="h-12 w-12 text-orange-500 mx-auto mb-3" />
              <h3 className="font-medium text-gray-900 mb-2">Better Business Bureau</h3>
              <p className="text-sm text-gray-600">
                A+ rated member of the Better Business Bureau
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            Ready to Experience the Los Mechanics Difference?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their automotive needs. 
            Schedule your appointment today and discover why we're Springfield's #1 choice for auto repair.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => onNavigate('book-appointment')}
              className="bg-orange-500 text-white hover:bg-orange-600 px-8"
            >
              Book Appointment
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              variant="outline"
              className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}