import React, { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { BookAppointment } from './components/BookAppointment';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { UserDashboard } from './components/UserDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { Navigation } from './components/Navigation';
import { Toaster } from './components/ui/sonner';

type User = {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
};

type AppointmentStatus = 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';

export type Appointment = {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  service: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  notes?: string;
  createdAt: string;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState<User | null>(null);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Initialize with some mock appointments
  useEffect(() => {
    const mockAppointments: Appointment[] = [
      {
        id: '1',
        userId: 'user1',
        userName: 'John Doe',
        userEmail: 'john@example.com',
        userPhone: '(555) 123-4567',
        service: 'Engine Repair',
        date: '2025-09-15',
        time: '10:00',
        status: 'confirmed',
        notes: 'Check engine light issue',
        createdAt: '2025-09-01'
      },
      {
        id: '2',
        userId: 'user2',
        userName: 'Jane Smith',
        userEmail: 'jane@example.com',
        userPhone: '(555) 987-6543',
        service: 'Brake Service',
        date: '2025-09-16',
        time: '14:00',
        status: 'pending',
        notes: 'Brake pads replacement needed',
        createdAt: '2025-09-02'
      }
    ];
    setAppointments(mockAppointments);
  }, []);

  const handleLogin = (email: string, password: string, isSignup: boolean, name?: string) => {
    // Mock authentication logic
    const mockUser: User = {
      id: email === 'admin@losmecanics.com' ? 'admin' : Date.now().toString(),
      email,
      name: name || email.split('@')[0],
      role: email === 'admin@losmecanics.com' ? 'admin' : 'user'
    };
    setUser(mockUser);
    setCurrentPage(mockUser.role === 'admin' ? 'admin-dashboard' : 'user-dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const addAppointment = (appointmentData: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => {
    const newAppointment: Appointment = {
      ...appointmentData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    setAppointments(prev => [...prev, newAppointment]);
  };

  const updateAppointment = (id: string, updates: Partial<Appointment>) => {
    setAppointments(prev => 
      prev.map(apt => apt.id === id ? { ...apt, ...updates } : apt)
    );
  };

  const deleteAppointment = (id: string) => {
    setAppointments(prev => prev.filter(apt => apt.id !== id));
  };

  const renderPage = () => {
    if (!user && (currentPage === 'login' || currentPage === 'signup')) {
      return (
        <Login
          isLoginMode={isLoginMode}
          onLogin={handleLogin}
          onToggleMode={() => setIsLoginMode(!isLoginMode)}
          onBack={() => setCurrentPage('home')}
        />
      );
    }

    if (user && currentPage === 'user-dashboard') {
      return (
        <UserDashboard
          user={user}
          appointments={appointments.filter(apt => apt.userId === user.id)}
          onNavigate={setCurrentPage}
        />
      );
    }

    if (user && user.role === 'admin' && currentPage === 'admin-dashboard') {
      return (
        <AdminDashboard
          appointments={appointments}
          onUpdateAppointment={updateAppointment}
          onDeleteAppointment={deleteAppointment}
          onNavigate={setCurrentPage}
        />
      );
    }

    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'book-appointment':
        return (
          <BookAppointment
            user={user}
            onAddAppointment={addAppointment}
            onNavigate={setCurrentPage}
          />
        );
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        user={user}
        onLogin={() => {
          setIsLoginMode(true);
          setCurrentPage('login');
        }}
        onLogout={handleLogout}
      />
      <main>
        {renderPage()}
      </main>
      <Toaster />
    </div>
  );
}