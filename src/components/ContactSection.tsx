
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-bakery-cream/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-6">Get in Touch</h3>
            <p className="text-lg mb-8">
              Whether you'd like to place an order, have questions about our products, or want to discuss 
              custom creations for your special occasion, we're here to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-bakery" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <a href="mailto:davesebastienghermino@gmail.com" className="text-lg text-gray-700 hover:text-bakery">
                    davesebastienghermino@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-bakery" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <a href="tel:09942553507" className="text-lg text-gray-700 hover:text-bakery">
                    09942553507
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-playfair font-semibold mb-4">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-playfair font-semibold mb-6">Send Us a Message</h3>
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="What would you like to know?"
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <Button className="w-full bg-bakery hover:bg-bakery-dark">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
