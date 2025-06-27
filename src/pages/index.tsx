import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image as ImageIcon, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  const services = [
    {
      category: "lawn-maintenance",
      categoryName: "Lawn Maintenance",
      name: "Mowing",
      description:
        "We offer weekly mowing services to keep your lawn looking its best.",
      img: "https://greengolawncare.s3.amazonaws.com/static/mowing.jpg",
    },
    {
      category: "lawn-maintenance",
      categoryName: "Lawn Maintenance",
      name: "Edging",
      description: "We edge your lawn to give it a clean, professional look.",
      img: "https://greengolawncare.s3.amazonaws.com/static/edging.jpg",
    },
    {
      category: "lawn-maintenance",
      categoryName: "Lawn Maintenance",
      name: "Trimming",
      description: "We trim your lawn to keep it looking neat and tidy.",
      img: "https://greengolawncare.s3.amazonaws.com/static/trimming.jpg",
    },
    {
      category: "landscaping",
      categoryName: "Landscaping",
      name: "Planting",
      description:
        "We offer planting services to help you create a beautiful landscape.",
      img: "https://greengolawncare.s3.amazonaws.com/static/planting.jpg",
    },
    {
      category: "landscaping",
      categoryName: "Landscaping",
      name: "Mulching",
      description:
        "We offer mulching services to help protect your plants and soil.",
      img: "https://greengolawncare.s3.amazonaws.com/static/mulching.jpg",
    },
    {
      category: "landscaping",
      categoryName: "Landscaping",
      name: "Sodding",
      description:
        "We offer sodding services to help you create a lush, green lawn.",
      img: "https://greengolawncare.s3.amazonaws.com/static/sodding.jpg",
    },
    {
      category: "cleanups",
      categoryName: "Cleanups",
      name: "Leaf Removal",
      description:
        "We offer leaf removal services to help keep your lawn clean and tidy.",
      img: "https://greengolawncare.s3.amazonaws.com/static/leaf_removal.jpg",
    },
    {
      category: "cleanups",
      categoryName: "Cleanups",
      name: "Debris Removal",
      description:
        "We offer debris removal services to help keep your lawn looking its best.",
      img: "https://greengolawncare.s3.amazonaws.com/static/debris_removal.jpg",
    },
    {
      category: "cleanups",
      categoryName: "Cleanups",
      name: "Gutter Cleaning",
      description:
        "We offer gutter cleaning services to help protect your home from water damage.",
      img: "https://greengolawncare.s3.amazonaws.com/static/gutter_cleaning.jpg",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-8 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From regular maintenance to complete landscape transformations, 
              we provide comprehensive lawn care services tailored to your needs.
            </p>
          </div>
        
        <Tabs defaultValue="lawn-maintenance" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="lawn-maintenance">Lawn Maintenance</TabsTrigger>
            <TabsTrigger value="landscaping">Landscaping</TabsTrigger>
            <TabsTrigger value="cleanups">Cleanups</TabsTrigger>
          </TabsList>
          
          <TabsContent value="lawn-maintenance" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((service) => service.category === "lawn-maintenance")
                .map((service) => (
                  <Card key={service.name} className="overflow-hidden">
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.img})` }}
                    />
                    <CardHeader>
                      <CardTitle>{service.name}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <Button variant="outline" size="icon">
                        <ImageIcon className="h-4 w-4" />
                      </Button>
                      <Button className="ml-4">
                        Book Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="landscaping" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((service) => service.category === "landscaping")
                .map((service) => (
                  <Card key={service.name} className="overflow-hidden">
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.img})` }}
                    />
                    <CardHeader>
                      <CardTitle>{service.name}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <Button variant="outline" size="icon">
                        <ImageIcon className="h-4 w-4" />
                      </Button>
                      <Button className="ml-4">
                        Book Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="cleanups" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((service) => service.category === "cleanups")
                .map((service) => (
                  <Card key={service.name} className="overflow-hidden">
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.img})` }}
                    />
                    <CardHeader>
                      <CardTitle>{service.name}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <Button variant="outline" size="icon">
                        <ImageIcon className="h-4 w-4" />
                      </Button>
                      <Button className="ml-4">
                        Book Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8 lg:px-0">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About GreenGo Lawncare</h2>
              <p className="text-muted-foreground leading-7 text-lg mb-6">
                GreenGo Lawncare is a family-owned business that has been
                serving the community for over 20 years. We take pride in
                providing high-quality, reliable services to our customers. Our
                team of experienced professionals is dedicated to keeping your
                lawn looking its best.
              </p>
              <p className="text-muted-foreground leading-7 mb-6">
                Whether you need mowing, landscaping, or cleanups, we have you covered. 
                We use professional-grade equipment and eco-friendly practices to ensure 
                your lawn thrives while protecting the environment.
              </p>
              <Button className="mt-6" size="lg">
                Learn More About Us
              </Button>
            </div>
            <Card className="h-80 overflow-hidden">
              <div className="h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🌿</div>
                  <p className="text-lg font-semibold">{siteConfig.stats.yearsExperience} Years of Excellence</p>
                  <p className="text-muted-foreground">Trusted by {siteConfig.stats.customersServed} families</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
