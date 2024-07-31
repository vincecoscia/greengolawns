import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Lawn Maintenance");
  const categories = ["Lawn Maintenance", "Landscaping", "Cleanups"];
  const services = [
    {
      category: "Lawn Maintenance",
      name: "Mowing",
      description:
        "We offer weekly mowing services to keep your lawn looking its best.",
      img: "https://greengolawncare.s3.amazonaws.com/static/mowing.jpg",
    },
    {
      category: "Lawn Maintenance",
      name: "Edging",
      description: "We edge your lawn to give it a clean, professional look.",
      img: "https://greengolawncare.s3.amazonaws.com/static/edging.jpg",
    },
    {
      category: "Lawn Maintenance",
      name: "Trimming",
      description: "We trim your lawn to keep it looking neat and tidy.",
      img: "https://greengolawncare.s3.amazonaws.com/static/trimming.jpg",
    },
    {
      category: "Landscaping",
      name: "Planting",
      description:
        "We offer planting services to help you create a beautiful landscape.",
      img: "https://greengolawncare.s3.amazonaws.com/static/planting.jpg",
    },
    {
      category: "Landscaping",
      name: "Mulching",
      description:
        "We offer mulching services to help protect your plants and soil.",
      img: "https://greengolawncare.s3.amazonaws.com/static/mulching.jpg",
    },
    {
      category: "Landscaping",
      name: "Sodding",
      description:
        "We offer sodding services to help you create a lush, green lawn.",
      img: "https://greengolawncare.s3.amazonaws.com/static/sodding.jpg",
    },
    {
      category: "Cleanups",
      name: "Leaf Removal",
      description:
        "We offer leaf removal services to help keep your lawn clean and tidy.",
      img: "https://greengolawncare.s3.amazonaws.com/static/leaf_removal.jpg",
    },
    {
      category: "Cleanups",
      name: "Debris Removal",
      description:
        "We offer debris removal services to help keep your lawn looking its best.",
      img: "https://greengolawncare.s3.amazonaws.com/static/debris_removal.jpg",
    },
    {
      category: "Cleanups",
      name: "Gutter Cleaning",
      description:
        "We offer gutter cleaning services to help protect your home from water damage.",
      img: "https://greengolawncare.s3.amazonaws.com/static/gutter_cleaning.jpg",
    },
  ];

  const categoryRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const previousCategory = useRef<string | null>(null);
  const [backgroundStyle, setBackgroundStyle] = useState<React.CSSProperties>(
    {}
  );

  useEffect(() => {
    if (selectedCategory !== previousCategory.current) {
      const activeButton =
        categoryRefs.current[categories.indexOf(selectedCategory)];
      const container = containerRef.current;
      if (activeButton && container) {
        const rect = activeButton.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const scrollLeft = container.scrollLeft;

        setBackgroundStyle({
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          transform: `translateX(${
            rect.left - containerRect.left + scrollLeft
          }px)`,
        });

        previousCategory.current = selectedCategory;
      }
    }
  }, [selectedCategory, categories]);

  return (
    <main className="">
      {/* Nav */}
      <nav>
        <div className="max-w-6xl mx-auto grid px-8 lg:px-0 grid-cols-3 items-center pt-16">
          <button className="button w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <img
            src="/greengologo.svg"
            alt="GreenGo Lawncare"
            className="justify-self-center w-20 lg:w-36"
          />
        </div>
      </nav>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 lg:px-0 mt-16">
        <div>
          <h1 className="text-4xl font-bold mb-10">Services</h1>
          <div
            className="flex lg:gap-4 gap-2 overflow-x-auto relative"
            ref={containerRef}
          >
            <div
              className="absolute top-0 left-0 bg-green-600 rounded-lg transition-transform ease-out duration-300"
              style={backgroundStyle}
            ></div>
            {categories.map((category, index) => (
              <button
                key={category}
                ref={(el) => {
                  categoryRefs.current[index] = el;
                }}
                className="py-2 px-4 text-sm font-semibold text-white text-nowrap z-10"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-8 flex gap-x-8 overflow-x-auto w-full py-4 px-2">
            {services
              .filter((service) => service.category === selectedCategory)
              .map((service) => (
                <div
                  key={service.name}
                  className="card p-4 min-w-[80vw] lg:min-w-72 lg:w-96"
                >
                  <div
                    className="h-48 rounded-lg mb-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.img})` }}
                  ></div>
                  <h2 className="text-xl font-semibold mb-4">{service.name}</h2>
                  <p className="text-gray-400 text-sm leading-6">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between w-full mt-6">
                    <button className="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </button>
                    <button className="p-4 rounded-lg bg-green-600 text-white ml-4 shadow-green-950 hover:shadow-green-950 shadow-md hover:shadow-lg transition-all hover:transition-transform hover:scale-105 active:scale-95">
                      <div className="flex items-center">
                        <p className="font-bold">Book Now</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="  bg-green-950">
        <div className="max-w-6xl mx-auto py-16 px-8 lg:px-0 mt-16">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">About Us</h2>
              <p className="text-gray-400 leading-8">
                GreenGo Lawncare is a family-owned business that has been
                serving the community for over 20 years. We take pride in
                providing high-quality, reliable services to our customers. Our
                team of experienced professionals is dedicated to keeping your
                lawn looking its best. Whether you need mowing, landscaping, or
                cleanups, we have you covered. Contact us today to schedule a
                service.
              </p>
            </div>
            <div className="h-72 bg-cover bg-center rounded-lg"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
