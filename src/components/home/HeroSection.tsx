import Button from '../shared/Button';

const HeroSection = () => (
  <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24 pb-20 md:pt-32 md:pb-28">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transform Your Future with Quality Education
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Join our expert-led courses and unlock your full potential in academics
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            variant="primary"
            className="border-white text-white hover:bg-blue-700"
          >
            Explore Courses
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-blue-700"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;