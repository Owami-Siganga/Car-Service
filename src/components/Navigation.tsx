import React from 'react';
import { Button } from './ui/button';
import { Car, MapPin, Clock, Phone, User, LogOut } from 'lucide-react';

type User = {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
};

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

export function Navigation({ currentPage, onNavigate, user, onLogin, onLogout }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'book-appointment', label: 'Book Appointment' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="w-full">
      {/* Main Navigation */}
      <div className="bg-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex justify-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "secondary"}
                onClick={() => onNavigate(item.id)}
                className={`px-6 py-2 rounded-none ${
                  currentPage === item.id 
                    ? 'bg-orange-500 text-white hover:bg-orange-600' 
                    : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>

      {/* Business Info Header */}
      <div className="bg-orange-500 text-white py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Car className="h-5 w-5" />
              <span className="font-medium">Los Mechanics</span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>12 Alpha Street Parkhood</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mon- Friday 8AM- 6PM</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123 6478</span>
              </div>
            </div>

            {/* Auth Section */}
            <div className="flex items-center gap-2">
              {user ? (
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    onClick={() => onNavigate(user.role === 'admin' ? 'admin-dashboard' : 'user-dashboard')}
                    className="text-white hover:bg-orange-600 flex items-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    {user.name} ({user.role})
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={onLogout}
                    className="text-white hover:bg-orange-600"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  onClick={onLogin}
                  className="text-white hover:bg-orange-600 flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}