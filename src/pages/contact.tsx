import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/lib/site-config";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // EmailJS service configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please set up environment variables.");
      }

      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        to_email: siteConfig.contact.email,
        company_name: siteConfig.company.name,
        submission_date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error instanceof Error ? error.message : "Failed to send message. Please try again or call us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    "Lawn Mowing",
    "Landscaping",
    "Seasonal Cleanup",
    "Fertilization",
    "Gutter Cleaning",
    "Hedge Trimming",
    "Other"
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: siteConfig.contact.phone,
      link: `tel:${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: siteConfig.contact.email,
      link: `mailto:${siteConfig.contact.email}`
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      details: siteConfig.contact.location,
      link: "#"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Hours",
      details: siteConfig.contact.businessHours.display,
      link: "#"
    },
  ];

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-8 lg:px-0 text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
              <p className="text-lg text-muted-foreground">
                We&apos;ve received your message and will get back to you within 24 hours 
                with a free estimate for your lawn care needs.
              </p>
            </div>
            <Button onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-8 lg:px-0 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get Your Free Estimate
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to transform your lawn? Contact us today for a free, no-obligation estimate. 
            We&apos;ll assess your needs and provide a customized solution for your property.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8 lg:px-0">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you with a free estimate.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Your full name"
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder={siteConfig.contact.phone}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder={siteConfig.contact.email}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed *</Label>
                    <select
                      id="service"
                      {...register("service")}
                      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                        errors.service ? "border-red-500" : ""
                      }`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-sm text-red-500">{errors.service.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell us about your lawn care needs, property size, and any specific requirements..."
                      rows={5}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {error && (
                    <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-md">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We&apos;re here to help with all your lawn care needs. Reach out to us 
                  using any of the methods below, and we&apos;ll respond promptly.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <Card key={item.title}>
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="text-primary">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.details}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Emergency Services</h3>
                  <p className="text-muted-foreground text-sm">
                    For urgent lawn care issues like storm damage cleanup, 
                    call us anytime at {siteConfig.contact.phone}. We offer 24/7 emergency response 
                    for our existing customers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}