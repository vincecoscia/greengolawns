import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, DollarSign, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Services() {
  const services = [
    {
      name: "Weekly Lawn Mowing",
      description: "Regular mowing service to keep your lawn healthy and well-maintained.",
      features: ["Professional equipment", "Grass collection", "Edging included", "Seasonal schedule"],
      image: "https://greengolawncare.s3.amazonaws.com/static/mowing.jpg",
    },
    {
      name: "Landscape Design",
      description: "Complete landscape design and installation services for your property.",
      features: ["Custom design", "Plant selection", "Installation", "Maintenance plan"],
      image: "https://greengolawncare.s3.amazonaws.com/static/planting.jpg",
    },
    {
      name: "Seasonal Cleanups",
      description: "Spring and fall cleanup services to prepare your lawn for each season.",
      features: ["Leaf removal", "Debris cleaning", "Pruning", "Mulching"],
      image: "https://greengolawncare.s3.amazonaws.com/static/leaf_removal.jpg",
    },
    {
      name: "Fertilization Program",
      description: "Comprehensive fertilization and weed control program for healthy grass.",
      features: ["Soil analysis", "Custom treatment", "Weed prevention", "Year-round care"],
      image: "https://greengolawncare.s3.amazonaws.com/static/fertilization.jpg",
    },
    {
      name: "Gutter Cleaning",
      description: "Professional gutter cleaning and maintenance to protect your home.",
      features: ["Debris removal", "Downspout cleaning", "Inspection", "Minor repairs"],
      image: "https://greengolawncare.s3.amazonaws.com/static/gutter_cleaning.jpg",
    },
    {
      name: "Hedge Trimming",
      description: "Professional hedge and shrub trimming to maintain your landscape.",
      features: ["Precision cutting", "Shape maintenance", "Cleanup included", "Scheduled service"],
      image: "https://greengolawncare.s3.amazonaws.com/static/trimming.jpg",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Experienced Team",
      description: `Over ${siteConfig.stats.yearsExperience} years of professional lawn care experience`
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your peace of mind"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Reliable Service",
      description: "Consistent, on-time service you can depend on"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Fair Pricing",
      description: "Competitive rates with no hidden fees"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-6xl mx-auto px-8 lg:px-0 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional Lawn Care Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive lawn care and landscaping services to keep your property 
            looking beautiful year-round. From weekly maintenance to complete transformations.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Free Estimate</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8 lg:px-0">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.name} className="overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
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
                      Get a Free Estimate!
                    </span>
                    <Button asChild>
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-8 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose GreenGo Lawncare?</h2>
            <p className="text-xl text-muted-foreground">
              We&apos;re committed to providing exceptional service and results
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8 lg:px-0 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Lawn?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for a free estimate and see how we can help make your 
            outdoor space beautiful and healthy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get Free Estimate</Link>
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