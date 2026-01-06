import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Letter } from "@/components/Letter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <main className="py-12 sm:py-16 md:py-24 px-4">
        {/* The letter - hero section */}
        <section className="mb-16 sm:mb-24">
          <Letter />
        </section>

        {/* About section */}
        <AboutSection />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Index;

