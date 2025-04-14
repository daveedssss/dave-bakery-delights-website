
const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-texture bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4">
            Artisanal Baking with Passion
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Handcrafted cookies, cakes, and brownies made with the finest ingredients
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#products" 
              className="py-3 px-6 bg-bakery text-white font-medium rounded-md hover:bg-bakery-dark transition-colors"
            >
              Explore Our Products
            </a>
            <a 
              href="#contact" 
              className="py-3 px-6 bg-white text-bakery font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
