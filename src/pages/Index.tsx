import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const destinations = [
    {
      id: 1,
      name: "Tropical Paradise",
      location: "Maldives",
      image: "https://cdn.poehali.dev/projects/ac24abd5-bf60-4859-a964-664b683a49c5/files/a8fcb1ce-58eb-4713-965a-79e432415c8b.jpg",
      description: "Crystal clear waters and white sandy beaches await you"
    },
    {
      id: 2,
      name: "Alpine Adventure",
      location: "Swiss Alps",
      image: "https://cdn.poehali.dev/projects/ac24abd5-bf60-4859-a964-664b683a49c5/files/12ad8763-7986-44b0-be13-a57ba77206ac.jpg",
      description: "Experience breathtaking mountain views and thrilling activities"
    },
    {
      id: 3,
      name: "Historic Charm",
      location: "Prague, Czech Republic",
      image: "https://cdn.poehali.dev/projects/ac24abd5-bf60-4859-a964-664b683a49c5/files/7fee248c-6967-41c3-8d97-6af1da875570.jpg",
      description: "Explore centuries of culture and stunning architecture"
    }
  ];

  const tours = [
    {
      id: 1,
      title: "Beach Escape",
      duration: "7 Days",
      price: "$1,299",
      highlights: ["All-inclusive resort", "Spa treatments", "Water sports"],
      icon: "Waves"
    },
    {
      id: 2,
      title: "Mountain Trek",
      duration: "10 Days",
      price: "$1,899",
      highlights: ["Expert guides", "Camping gear included", "Summit experience"],
      icon: "Mountain"
    },
    {
      id: 3,
      title: "Cultural Journey",
      duration: "5 Days",
      price: "$899",
      highlights: ["Museum passes", "Local cuisine tours", "Historical sites"],
      icon: "Landmark"
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Wanderlust
            </h1>
            <div className="flex gap-8">
              {["home", "destinations", "tours"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === section
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 animate-fade-in">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Explore the World<br />Your Way
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing destinations, create unforgettable memories, and experience the journey of a lifetime
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8"
              onClick={() => scrollToSection("destinations")}
            >
              Explore Destinations
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => scrollToSection("tours")}
            >
              View Tours
            </Button>
          </div>
        </div>
      </section>

      <section id="destinations" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Popular Destinations
            </h3>
            <p className="text-gray-600 text-lg">Choose your next adventure</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <Card
                key={dest.id}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-2xl font-bold mb-1">{dest.name}</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="MapPin" size={16} />
                      <span>{dest.location}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">{dest.description}</p>
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary text-white">
                    Learn More
                    <Icon name="ChevronRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Featured Tours
            </h3>
            <p className="text-gray-600 text-lg">Carefully crafted experiences for every traveler</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Card
                key={tour.id}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 bg-white"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Icon name={tour.icon as any} size={32} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-3">{tour.title}</h4>
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">{tour.price}</div>
                </div>
                <div className="space-y-2 mb-6">
                  {tour.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-600">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-secondary to-accent text-white hover:opacity-90">
                  Book Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Wanderlust
          </h2>
          <p className="text-gray-400 mb-6">Making travel dreams come true since 2024</p>
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="Facebook" size={24} className="cursor-pointer hover:text-primary transition-colors" />
            <Icon name="Instagram" size={24} className="cursor-pointer hover:text-secondary transition-colors" />
            <Icon name="Twitter" size={24} className="cursor-pointer hover:text-accent transition-colors" />
          </div>
          <p className="text-gray-500 text-sm">© 2024 Wanderlust. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
