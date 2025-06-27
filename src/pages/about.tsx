import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Leaf, Shield, Star, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function About() {
  const teamMembers = [
    {
      name: "Gabriel Coscia",
      role: "Founder & CEO",
      experience: "10+ years",
      description: "Gabriel founded GreenGo Lawncare with a passion for creating beautiful outdoor spaces. His expertise in horticulture and business management has led the company to become a trusted name in lawn care.",
      image: "👨‍💼"
    }
  ];

  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Environmental Responsibility",
      description: "We use eco-friendly practices and organic treatments whenever possible to protect the environment and your family&apos;s health."
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Quality Excellence",
      description: "Every job is completed to the highest standards with attention to detail and professional craftsmanship."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen to your needs and deliver personalized solutions that exceed expectations."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Reliability & Trust",
      description: "Fully licensed, insured, and committed to honest, transparent communication in all our business dealings."
    }
  ];

  const stats = [
    { number: siteConfig.stats.yearsExperience, label: "Years in Business" },
    { number: siteConfig.stats.customersServed, label: "Happy Customers" },
    { number: siteConfig.stats.lawnsManaged, label: "Lawns Maintained" },
    { number: siteConfig.stats.satisfactionRate, label: "Customer Satisfaction" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-8 lg:px-0 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About GreenGo Lawncare
          </h1>
          <p className="text-xl text-muted-foreground">
            For over a decade, we&apos;ve been transforming outdoor spaces and helping 
            families create the perfect lawn and landscape for their homes.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8 lg:px-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  GreenGo Lawncare was founded in 2023 by Gabriel Coscia, a passionate horticulturist 
                  who believed that every homeowner deserved a beautiful, healthy lawn. What started 
                  as a one-person operation with a single mower has grown into a full-service 
                  landscaping company serving {siteConfig.stats.customersServed} satisfied customers.
                </p>
                <p>
                  Over the years, we&apos;ve built our reputation on three core principles: quality 
                  workmanship, reliable service, and genuine care for our customers&apos; needs. 
                  We&apos;ve watched neighborhoods transform, helped families create outdoor spaces 
                  for memories, and contributed to making our community more beautiful.
                </p>
                <p>
                  Today, our experienced team continues this tradition of excellence, combining 
                  time-tested techniques with modern equipment and sustainable practices to 
                  deliver outstanding results for every project.
                </p>
              </div>
            </div>
            <Card className="h-80 overflow-hidden">
              <div className="h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🏡</div>
                  <p className="text-lg font-semibold">Family-Owned Business</p>
                  <p className="text-muted-foreground">Serving the community since 2015</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-8 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-muted-foreground">
              Numbers that speak to our commitment and experience
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-8 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals dedicated to your lawn&apos;s success
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name}>
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>
                    {member.role} • {member.experience}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Licensed & Certified</h2>
            <p className="text-xl text-muted-foreground">
              Professional certifications and licenses you can trust
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center p-6">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Licensed Contractors</h3>
              <p className="text-sm text-muted-foreground">
                Fully licensed for landscaping and lawn care services
              </p>
            </Card>
            <Card className="text-center p-6">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fully Insured</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive liability and workers&apos; compensation insurance
              </p>
            </Card>
            <Card className="text-center p-6">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Certified Professionals</h3>
              <p className="text-sm text-muted-foreground">
                Team members certified in pesticide application and safety
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-8 lg:px-0 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join {siteConfig.stats.customersServed} satisfied customers who trust GreenGo Lawncare 
            with their outdoor spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}