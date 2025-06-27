import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Menu, Image as ImageIcon, ChevronRight } from "lucide-react";

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
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-8 lg:px-0 py-4">
          <Button variant="outline" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
          <div className="flex items-center justify-center p-2 bg-emerald-950 rounded-lg">
          <img
            src="/greengologo.svg"
            alt="GreenGo Lawncare"
            className="w-20 lg:w-36"
          />
          </div>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </nav>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-8 lg:px-0 py-16">
        <h1 className="text-4xl font-bold mb-10 text-center">Our Services</h1>
        
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
      </section>

      {/* About Section */}
      <section className="bg-muted/50">
        <div className="max-w-6xl mx-auto py-16 px-8 lg:px-0">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-muted-foreground leading-7 text-lg">
                GreenGo Lawncare is a family-owned business that has been
                serving the community for over 20 years. We take pride in
                providing high-quality, reliable services to our customers. Our
                team of experienced professionals is dedicated to keeping your
                lawn looking its best. Whether you need mowing, landscaping, or
                cleanups, we have you covered. Contact us today to schedule a
                service.
              </p>
              <Button className="mt-6" size="lg">
                Contact Us Today
              </Button>
            </div>
            <Card className="h-80">
              <div className="h-full bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">About Image Placeholder</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
