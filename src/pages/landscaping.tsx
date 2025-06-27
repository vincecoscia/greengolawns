import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Leaf, Palette, Wrench, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Landscaping() {
  const services = [
    {
      name: "Custom Landscape Design",
      description: "Complete landscape design tailored to your property, lifestyle, and budget.",
      features: [
        "Site analysis and planning",
        "3D design concepts",
        "Plant selection guidance",
        "Hardscape integration",
        "Seasonal planning"
      ],
      price: "Get a Free Estimate!"
    },
    {
      name: "Planting & Installation",
      description: "Professional installation of trees, shrubs, flowers, and garden beds.",
      features: [
        "Native plant specialists",
        "Soil preparation",
        "Proper planting techniques",
        "Initial watering setup",
        "Growth guarantee"
      ],
      price: "Get a Free Estimate!"
    },
    {
      name: "Hardscape Installation",
      description: "Patios, walkways, retaining walls, and outdoor living spaces.",
      features: [
        "Paver installation",
        "Natural stone work",
        "Retaining walls",
        "Garden paths",
        "Drainage solutions"
      ],
      price: "Get a Free Estimate!"
    },
    {
      name: "Garden Maintenance",
      description: "Ongoing care to keep your landscape healthy and beautiful year-round.",
      features: [
        "Pruning and trimming",
        "Mulching services",
        "Weed control",
        "Fertilization",
        "Seasonal cleanup"
      ],
      price: "Get a Free Estimate!"
    }
  ];

  const beforeAfterProjects = [
    {
      title: "Suburban Front Yard Transformation",
      description: "Complete redesign of a 1,200 sq ft front yard with native plants and stone pathways.",
      beforeImage: "https://greengolawncare.s3.amazonaws.com/static/before1.jpg",
      afterImage: "https://greengolawncare.s3.amazonaws.com/static/after1.jpg"
    },
    {
      title: "Backyard Patio & Garden",
      description: "Added paver patio, raised garden beds, and perennial flower borders.",
      beforeImage: "https://greengolawncare.s3.amazonaws.com/static/before2.jpg",
      afterImage: "https://greengolawncare.s3.amazonaws.com/static/after2.jpg"
    },
    {
      title: "Commercial Landscape Renovation",
      description: "Modern landscape design for office building with low-maintenance plantings.",
      beforeImage: "https://greengolawncare.s3.amazonaws.com/static/before3.jpg",
      afterImage: "https://greengolawncare.s3.amazonaws.com/static/after3.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      location: "Oakwood Estates",
      rating: 5,
      comment: "GreenGo completely transformed our backyard into an outdoor paradise. The design was perfect and the installation team was professional and efficient."
    },
    {
      name: "Robert Chen",
      location: "Downtown District",
      rating: 5,
      comment: "We hired them for our front yard landscaping and couldn&apos;t be happier. The plant selection was excellent and everything has thrived for two years now."
    },
    {
      name: "Sarah Williams",
      location: "Maple Heights",
      rating: 5,
      comment: "From design to completion, the process was smooth and the results exceeded our expectations. Our property value definitely increased!"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation & Design",
      description: "We meet with you to understand your vision, assess your property, and create a custom design plan.",
      icon: <Palette className="h-8 w-8 text-primary" />
    },
    {
      step: "2",
      title: "Planning & Permits",
      description: "We handle all necessary permits and create a detailed project timeline and material list.",
      icon: <Wrench className="h-8 w-8 text-primary" />
    },
    {
      step: "3",
      title: "Installation",
      description: "Our experienced team brings your vision to life with professional installation and attention to detail.",
      icon: <Leaf className="h-8 w-8 text-primary" />
    },
    {
      step: "4",
      title: "Care & Maintenance",
      description: "We provide ongoing support and maintenance plans to ensure your landscape thrives for years to come.",
      icon: <Star className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-8 lg:px-0 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional Landscaping Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Transform your outdoor space with custom landscape design and installation. 
            From concept to completion, we create beautiful, sustainable landscapes 
            that enhance your property value and lifestyle.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Landscaping Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive landscaping solutions for residential and commercial properties
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.name}>
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">
                      {service.price}
                    </span>
                    <Button asChild>
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-8 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              How we bring your landscape vision to life
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <Card key={item.step} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold text-primary mb-2">Step {item.step}</div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Before & After Gallery</h2>
            <p className="text-xl text-muted-foreground">
              See the dramatic transformations we&apos;ve created for our clients
            </p>
          </div>
          <Tabs defaultValue="project-1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {beforeAfterProjects.map((project, index) => (
                <TabsTrigger key={index} value={`project-${index + 1}`}>
                  Project {index + 1}
                </TabsTrigger>
              ))}
            </TabsList>
            {beforeAfterProjects.map((project, index) => (
              <TabsContent key={index} value={`project-${index + 1}`}>
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-center">Before</h4>
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <p className="text-muted-foreground">Before Image</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-center">After</h4>
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                          <p className="text-primary font-semibold">After Image</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-8 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from satisfied landscaping customers
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">&ldquo;{testimonial.comment}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8 lg:px-0 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Landscape?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let&apos;s discuss your vision and create a custom landscape design that 
            brings your outdoor dreams to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get Design Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={`tel:${siteConfig.contact.phone}`}>Call {siteConfig.contact.phone}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}