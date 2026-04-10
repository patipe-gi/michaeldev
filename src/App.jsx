import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Layout from './components/Layout/Layout';
import { Toaster } from 'react-hot-toast';
import { LanguageProvider } from './contexts/LanguageContext';
import NoInternetConnection from './components/NoInternetConnection';

// Lazy loading des pages
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Skills = lazy(() => import('./pages/Skills'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const [initialLoading, setInitialLoading] = useState(true);
    const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Détecter les changements de connexion
    const handleOnline = () => {
      setIsOnline(true);
      // Recharger automatiquement quand la connexion revient
      setTimeout(() => window.location.reload(), 1500);
    };
    
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
    if (!isOnline) {
    return <NoInternetConnection onRetry={() => setIsOnline(navigator.onLine)} />;
  }


  if (initialLoading) {
    return <Loader />;
  }

  return (
     <LanguageProvider>
    <BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          
          duration: 4000,
          style: {
            background: '#1c202c',
            color: '#fff',
            border: '1px solid rgba(24, 197, 164, 0.3)',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
          },
         
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#18c5a4',
              secondary: '#fff',
            },
          },
         
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="project/:id" element={<ProjectDetail />} />
            <Route path="skills" element={<Skills />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;