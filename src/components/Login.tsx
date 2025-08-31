import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ArrowLeft, Car } from 'lucide-react';

interface LoginProps {
  isLoginMode: boolean;
  onLogin: (email: string, password: string, isSignup: boolean, name?: string) => void;
  onToggleMode: () => void;
  onBack: () => void;
}

export function Login({ isLoginMode, onLogin, onToggleMode, onBack }: LoginProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onLogin(formData.email, formData.password, !isLoginMode, formData.name);
    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-orange-500 mb-2">
            <Car className="h-8 w-8" />
            <span className="text-2xl font-medium text-gray-900">Los Mechanics</span>
          </div>
          <p className="text-gray-600">Professional Auto Repair Services</p>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {isLoginMode ? 'Sign In' : 'Create Account'}
            </CardTitle>
            <CardDescription>
              {isLoginMode
                ? 'Welcome back! Please sign in to your account.'
                : 'Join us to book appointments and track your services.'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLoginMode && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required={!isLoginMode}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {!isLoginMode && (
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                    required={!isLoginMode}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-orange-500 text-white hover:bg-orange-600"
                disabled={isLoading}
              >
                {isLoading
                  ? 'Please wait...'
                  : isLoginMode
                  ? 'Sign In'
                  : 'Create Account'
                }
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {isLoginMode ? "Don't have an account?" : 'Already have an account?'}
                <Button
                  variant="link"
                  onClick={onToggleMode}
                  className="text-orange-600 hover:text-orange-700 p-0 ml-1"
                >
                  {isLoginMode ? 'Sign up' : 'Sign in'}
                </Button>
              </p>
            </div>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs font-medium text-gray-700 mb-2">Demo Credentials:</p>
              <div className="space-y-1 text-xs text-gray-600">
                <div><strong>Admin:</strong> admin@losmecanics.com / admin123</div>
                <div><strong>User:</strong> user@example.com / user123</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}