
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
