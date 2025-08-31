import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner@2.0.3';
import type { Appointment } from '../App';

type User = {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
};

interface BookAppointmentProps {
  user: User | null;
  onAddAppointment: (appointment: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => void;
  onNavigate: (page: string) => void;
}

export function BookAppointment({ user, onAddAppointment, onNavigate }: BookAppointmentProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    service: '',
    time: '',
    notes: ''
  });

  const services = [
    'Engine Repair & Diagnostics',
    'Brake Service & Repair', 
    'Oil Change & Fluids',
    'Battery & Electrical',
    'Transmission Service',
    'Tire & Wheel Service',
    'A/C & Heating',
    'Computer Diagnostics',
    'Preventive Maintenance',
    'General Inspection'
  ];

  const timeSlots = [
    '8:00', '9:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('Please log in to book an appointment');
      onNavigate('login');
      return;
    }

    if (!selectedDate || !formData.service || !formData.time) {
      toast.error('Please fill in all required fields');
      return;
    }

    const appointment: Omit<Appointment, 'id' | 'createdAt' | 'status'> = {
      userId: user.id,
      userName: formData.name,
      userEmail: formData.email,
      userPhone: formData.phone,
      service: formData.service,
      date: format(selectedDate, 'yyyy-MM-dd'),
      time: formData.time,
      notes: formData.notes
    };

    onAddAppointment(appointment);
    toast.success('Appointment booked successfully!');
    onNavigate('user-dashboard');
  };

  return (
    <div className="w-full py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-medium text-gray-900 mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg text-gray-600">
            Schedule your vehicle service with our expert mechanics
          </p>
        </div>

        {!user && (
          <Card className="mb-6 border-orange-200 bg-orange-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-orange-800 mb-4">
                  Please log in to book an appointment and track your services.
                </p>
                <Button
                  onClick={() => onNavigate('login')}
                  className="bg-orange-500 text-white hover:bg-orange-600"
                >
                  Sign In / Sign Up
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Appointment Details</CardTitle>
            <CardDescription>
              Fill out the form below to schedule your service appointment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
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
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                    required
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

              {/* Service Selection */}
              <div className="space-y-2">
                <Label>Service Type *</Label>
                <Select onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Selection */}
              <div className="space-y-2">
                <Label>Preferred Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <p className="text-xs text-gray-500">
                  We're open Monday through Saturday, 8 AM - 6 PM
                </p>
              </div>

              {/* Time Selection */}
              <div className="space-y-2">
                <Label>Preferred Time *</Label>
                <Select onValueChange={(value) => handleInputChange('time', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {time}:00
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Describe the issue or any specific requests..."
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-orange-500 text-white hover:bg-orange-600"
                disabled={!user}
              >
                Book Appointment
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium mb-1">Call Us</p>
                <p className="text-gray-600">(555) 123-6478</p>
              </div>
              <div>
                <p className="font-medium mb-1">Business Hours</p>
                <p className="text-gray-600">Monday - Saturday: 8 AM - 6 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}