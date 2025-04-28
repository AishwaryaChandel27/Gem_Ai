import dynamic from 'next/dynamic';
import HeroContent from './UI/HeroContent';

// Dynamically import Spline with SSR disabled
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen w-screen overflow-hidden">
      {/* Hero Content */}
      <HeroContent />
    </div>
  );
};

export default Hero;
