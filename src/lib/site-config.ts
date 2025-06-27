export const siteConfig = {
  // Company Information
  company: {
    name: "GreenGo Lawncare",
    tagline: "Professional Lawn Care & Landscaping Services",
    foundedYear: 2003,
    yearsInBusiness: "20+",
  },

  // Contact Information
  contact: {
    phone: "(305) 798-0000",
    email: "green.go.lawnsllc@gmail.com",
    location: "Located in South Miami, FL",
    // For structured data and forms
    businessHours: {
      weekdays: "Mon-Fri: 7am-6pm",
      saturday: "Sat: 8am-4pm",
      sunday: "Closed",
      display: "Mon-Fri: 7am-6pm, Sat: 8am-4pm"
    }
  },

  // Business Details
  business: {
    licensed: true,
    insured: true,
    freeEstimates: true,
    emergencyService: true,
    satisfactionGuarantee: true,
  },

  // Social Media
  social: {
    instagram: "https://instagram.com/greengo.llc",
    // Social handles for structured data
    handles: {
      instagram: "@greengo.llc"
    }
  },

  // Website Information
  website: {
    url: "https://greengolawncare.com",
    domain: "greengolawncare.com"
  },

  // Service Areas (update as needed)
  serviceAreas: [
    "South Miami",
    "Coral Gables", 
    "Pinecrest",
    "Palmetto Bay",
    "Kendall"
  ],

  // Key Statistics
  stats: {
    yearsExperience: "20+",
    customersServed: "500+",
    lawnsManaged: "1000+",
    satisfactionRate: "98%"
  },

  // Services Configuration
  services: {
    // Main service categories for homepage tabs
    categories: [
      {
        id: "lawn-maintenance",
        name: "Lawn Maintenance",
        description: "Regular care to keep your lawn healthy and beautiful",
        items: [
          {
            name: "Mowing",
            description: "We offer weekly mowing services to keep your lawn looking its best.",
            image: "https://greengolawncare.s3.amazonaws.com/static/mowing.jpg"
          },
          {
            name: "Edging", 
            description: "We edge your lawn to give it a clean, professional look.",
            image: "https://greengolawncare.s3.amazonaws.com/static/edging.jpg"
          },
          {
            name: "Trimming",
            description: "We trim your lawn to keep it looking neat and tidy.",
            image: "https://greengolawncare.s3.amazonaws.com/static/trimming.jpg"
          }
        ]
      },
      {
        id: "landscaping",
        name: "Landscaping",
        description: "Design and installation services for beautiful landscapes",
        items: [
          {
            name: "Planting",
            description: "We offer planting services to help you create a beautiful landscape.",
            image: "https://greengolawncare.s3.amazonaws.com/static/planting.jpg"
          },
          {
            name: "Mulching",
            description: "We offer mulching services to help protect your plants and soil.",
            image: "https://greengolawncare.s3.amazonaws.com/static/mulching.jpg"
          },
          {
            name: "Sodding",
            description: "We offer sodding services to help you create a lush, green lawn.",
            image: "https://greengolawncare.s3.amazonaws.com/static/sodding.jpg"
          }
        ]
      },
      {
        id: "cleanups",
        name: "Cleanups",
        description: "Seasonal maintenance and cleanup services",
        items: [
          {
            name: "Leaf Removal",
            description: "We offer leaf removal services to help keep your lawn clean and tidy.",
            image: "https://greengolawncare.s3.amazonaws.com/static/leaf_removal.jpg"
          },
          {
            name: "Debris Removal", 
            description: "We offer debris removal services to help keep your lawn looking its best.",
            image: "https://greengolawncare.s3.amazonaws.com/static/debris_removal.jpg"
          },
          {
            name: "Gutter Cleaning",
            description: "We offer gutter cleaning services to help protect your home from water damage.",
            image: "https://greengolawncare.s3.amazonaws.com/static/gutter_cleaning.jpg"
          }
        ]
      }
    ],

    // Detailed services for services page
    detailed: [
      {
        name: "Weekly Lawn Mowing",
        description: "Regular mowing service to keep your lawn healthy and well-maintained.",
        features: ["Professional equipment", "Grass collection", "Edging included", "Seasonal schedule"],
        image: "https://greengolawncare.s3.amazonaws.com/static/mowing.jpg"
      },
      {
        name: "Landscape Design",
        description: "Complete landscape design and installation services for your property.",
        features: ["Custom design", "Plant selection", "Installation", "Maintenance plan"],
        image: "https://greengolawncare.s3.amazonaws.com/static/planting.jpg"
      },
      {
        name: "Seasonal Cleanups",
        description: "Spring and fall cleanup services to prepare your lawn for each season.",
        features: ["Leaf removal", "Debris cleaning", "Pruning", "Mulching"],
        image: "https://greengolawncare.s3.amazonaws.com/static/leaf_removal.jpg"
      },
      {
        name: "Fertilization Program",
        description: "Comprehensive fertilization and weed control program for healthy grass.",
        features: ["Soil analysis", "Custom treatment", "Weed prevention", "Year-round care"],
        image: "https://greengolawncare.s3.amazonaws.com/static/fertilization.jpg"
      },
      {
        name: "Gutter Cleaning",
        description: "Professional gutter cleaning and maintenance to protect your home.",
        features: ["Debris removal", "Downspout cleaning", "Inspection", "Minor repairs"],
        image: "https://greengolawncare.s3.amazonaws.com/static/gutter_cleaning.jpg"
      },
      {
        name: "Hedge Trimming",
        description: "Professional hedge and shrub trimming to maintain your landscape.",
        features: ["Precision cutting", "Shape maintenance", "Cleanup included", "Scheduled service"],
        image: "https://greengolawncare.s3.amazonaws.com/static/trimming.jpg"
      }
    ],

    // Simple list for dropdowns and quick references
    list: [
      "Lawn Mowing",
      "Landscaping",
      "Seasonal Cleanup", 
      "Fertilization",
      "Gutter Cleaning",
      "Hedge Trimming",
      "Other"
    ]
  },

  // Key Features/Benefits
  features: {
    // Main selling points
    keyPoints: [
      "Licensed & Insured",
      "Free Estimates",
      "Satisfaction Guaranteed",
      "Emergency Service Available"
    ],
    
    // Detailed features for services page
    whyChooseUs: [
      {
        title: "Experienced Team",
        description: "Over a decade of professional lawn care experience",
        icon: "users"
      },
      {
        title: "Licensed & Insured", 
        description: "Fully licensed and insured for your peace of mind",
        icon: "check-circle"
      },
      {
        title: "Reliable Service",
        description: "Consistent, on-time service you can depend on",
        icon: "clock"
      },
      {
        title: "Fair Pricing",
        description: "Competitive rates with no hidden fees",
        icon: "dollar-sign"
      }
    ]
  }
};