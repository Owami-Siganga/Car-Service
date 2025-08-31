import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Car,
  MessageSquare,
  Send
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      info: '(555) 123-6478',
      action: 'tel:(555)1236478'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email', 
      info: 'info@losmecanics.com',
      action: 'mailto:info@losmecanics.com'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      info: '12 Alpha Street, Parkhood\nSpringfield, MA 01101',
      action: 'https://maps.google.com'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      info: 'Mon-Fri: 8AM-6PM\nSat: 8AM-4PM\nSun: Closed',
      action: null
    }
  ];

  const services = [
    'Engine Repair & Diagnostics',
    'Brake Service & Repair',
    'Oil Change & Maintenance',
    'Transmission Service',
    'Electrical System Repair',
    'A/C & Heating Service',
    'Tire Service & Alignment',
    'General Auto Repair'
  ];

  return (
    <div className="w-full py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-gray-900 mb-4">
            Contact Los Mechanics
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any questions, concerns, or to schedule your automotive service. 
            We're here to help keep your vehicle running smoothly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-orange-500" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-orange-500 mt-1">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      {item.action ? (
                        <a
                          href={item.action}
                          className="text-gray-600 hover:text-orange-600 transition-colors whitespace-pre-line"
                          target={item.action.startsWith('http') ? '_blank' : undefined}
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">
                          {item.info}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="mt-6">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Need Emergency Service?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    For urgent automotive issues, call us directly
                  </p>
                  <Button
                    onClick={() => window.open('tel:(555)1236478')}
                    className="w-full bg-red-600 text-white hover:bg-red-700"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Emergency Line
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-orange-500" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your vehicle issue or question..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-500 text-white hover:bg-orange-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Overview */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Our Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  {service}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button
                onClick={() => onNavigate('services')}
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50"
              >
                View All Services
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Map Placeholder */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Find Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 mb-2">Interactive Map</p>
                <p className="text-sm text-gray-400">
                  12 Alpha Street, Parkhood<br />
                  Springfield, MA 01101
                </p>
                <Button
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                  variant="outline"
                  className="mt-4"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-orange-50 rounded-lg p-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            Ready to Schedule Your Service?
          </h2>
          <p className="text-gray-600 mb-6">
            Don't wait for small problems to become big ones. Book your appointment today 
            and let our expert mechanics take care of your vehicle.
          </p>
          <Button
            onClick={() => onNavigate('book-appointment')}
            className="bg-orange-500 text-white hover:bg-orange-600 px-8"
          >
            Book Appointment Now
          </Button>
        </div>
      </div>
    </div>
  );
}