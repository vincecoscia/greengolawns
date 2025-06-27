import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
      
      <div className="relative max-w-6xl mx-auto px-8 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Beautiful Lawns, 
                <span className="text-primary"> Professional Care</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your outdoor space with our expert lawn care and landscaping services. 
                We&apos;ve been creating stunning landscapes for over {siteConfig.company.yearsInBusiness} years.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Licensed & Insured",
                `${siteConfig.company.yearsInBusiness} Years Experience`,
                "Free Estimates",
                "Satisfaction Guaranteed"
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                <span>{siteConfig.contact.phone}</span>
              </Button>
            </div>
          </div>

          {/* Image/Card */}
          <div className="lg:justify-self-end">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center">Our Services</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      🌱
                    </div>
                    <h4 className="font-semibold">Lawn Care</h4>
                    <p className="text-sm text-muted-foreground">Mowing, edging, trimming</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      🌳
                    </div>
                    <h4 className="font-semibold">Landscaping</h4>
                    <p className="text-sm text-muted-foreground">Design & installation</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      🍂
                    </div>
                    <h4 className="font-semibold">Cleanups</h4>
                    <p className="text-sm text-muted-foreground">Seasonal maintenance</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      🏠
                    </div>
                    <h4 className="font-semibold">Maintenance</h4>
                    <p className="text-sm text-muted-foreground">Year-round care</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}