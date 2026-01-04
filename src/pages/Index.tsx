import { useState, useEffect } from 'react';
import ClimberAnimation from '@/components/ClimberAnimation';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContentSections from '@/components/ContentSections';
import FloatingContact from '@/components/FloatingContact';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClimberAtBottom, setIsClimberAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
      
      const climberPosition = Math.min(progress * 6.5, 82);
      setIsClimberAtBottom(climberPosition >= 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ClimberAnimation 
        scrollProgress={scrollProgress} 
        isClimberAtBottom={isClimberAtBottom} 
      />
      <Header />
      <HeroSection />
      <ContentSections />
      <FloatingContact shouldBlink={isClimberAtBottom} />
    </div>
  );
};

export default Index;
