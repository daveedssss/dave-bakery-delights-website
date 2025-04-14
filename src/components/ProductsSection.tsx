import { useState } from 'react';

const products = {
  cookies: [
    {
      id: 1,
      name: "Chocolate Chip Cookies",
      description: "Classic cookies with premium Belgian chocolate chips and a soft, chewy texture.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Butter Cookies",
      description: "Delicate, melt-in-your-mouth butter cookies with a hint of vanilla.",
      image: "/lovable-uploads/4121e759-1d02-4938-bed0-1241137ac40c.png"
    },
    {
      id: 3,
      name: "Almond Cookies",
      description: "Crisp and nutty almond cookies with a subtle sweetness.",
      image: "/lovable-uploads/236351a3-d1c5-4acb-b78b-da1c97423068.png"
    }
  ],
  cakes: [
    {
      id: 1,
      name: "Chocolate Fudge Cake",
      description: "Rich, moist chocolate cake with a decadent fudge frosting.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Vanilla Bean Cheesecake",
      description: "Creamy cheesecake infused with real vanilla beans on a graham cracker crust.",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Red Velvet Cake",
      description: "Velvety smooth red cake with cream cheese frosting.",
      image: "https://images.unsplash.com/photo-1586788224331-947f68671cf1?auto=format&fit=crop&w=800&q=80"
    }
  ],
  brownies: [
    {
      id: 1,
      name: "Fudge Brownies",
      description: "Dense and fudgy brownies made with dark chocolate.",
      image: "https://images.unsplash.com/photo-1589375025852-a66cca98a805?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Walnut Brownies",
      description: "Fudgy brownies loaded with crunchy walnuts.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Caramel Swirl Brownies",
      description: "Rich chocolate brownies with a sweet caramel swirl.",
      image: "https://images.unsplash.com/photo-1590841609987-4ac211afdde1?auto=format&fit=crop&w=800&q=80"
    }
  ]
};

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('cookies');
  
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Our Delicious Products</h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {['cookies', 'cakes', 'brownies'].map((category) => (
              <button
                key={category}
                className={`px-6 py-2 text-sm font-medium capitalize ${
                  activeCategory === category
                    ? 'bg-bakery text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } ${
                  category === 'cookies'
                    ? 'rounded-l-md'
                    : category === 'brownies'
                    ? 'rounded-r-md'
                    : ''
                } border border-gray-300 focus:outline-none`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products[activeCategory as keyof typeof products].map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
