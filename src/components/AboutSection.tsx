
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-bakery-cream/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="/lovable-uploads/236351a3-d1c5-4acb-b78b-da1c97423068.png" 
              alt="Dave, the master baker" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="section-heading">Meet Dave</h2>
            <p className="text-lg mb-6">
              With over 20 years of experience in the art of baking, Dave has mastered the perfect 
              balance of flavors and textures to create unforgettable treats.
            </p>
            <p className="text-lg mb-6">
              What started as a passion in his mother's kitchen has grown into Dave's Bakery, 
              where every item is crafted with care using traditional methods and premium ingredients.
            </p>
            <p className="text-lg mb-6">
              Dave believes that baking is an expression of love, and this philosophy is evident 
              in every bite of his delicious creations. From classic cookies to elaborate cakes, 
              each product reflects his dedication to quality and taste.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-1 bg-bakery-gold"></div>
              <p className="text-lg font-playfair italic">"Baking is my language of love."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
