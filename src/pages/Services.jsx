import React from "react";
import { NavLink } from "react-router-dom";
// import firstCard from "../img/service-card/1st-card.jpg";
// import secondCard from "../img/service-card/2nd-card.jpg";
// import thirdCard from "../img/service-card/3rd-card.jpg";
// import fourthCard from "../img/service-card/4th-card.jpg";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const Services = () => {
  const servicesCard = [
    {
      title: "Web Design & Development",
      li1: "Custom website development (no templates unless requested)",
      li2: "Responsive design (mobile-first, always)",
      li3: "Performance-focused builds (fast load times, clean code)",
      li4: "CMS integration (WordPress / Headless / Custom) ",
      note: "A site that loads fast, looks professional, and converts users",
      image:
        "https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
    },
    {
      title: "Frontend Development",
      li1: "ReactJs interfaces",
      li2: "Component-based architecture",
      li3: "Accessibility-focused UI ",
      li4: "Cross-browser consistency",
      note: "Smooth, usable interfaces that don’t break",
      image:
        "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
    },
    {
      title: "Website Performance Optimizationt",
      li1: "Page speed optimization",
      li2: "Core Web Vitals improvements",
      li3: "Image & asset optimization",
      li4: "JavaScript bundle cleanup",
      note: "Lower bounce rates, better SEO, faster load times.",
      image:
        "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
    },
    {
      title: "UI/UX Improvements & Redesigns",
      li1: "UX audits",
      li2: "Accessibility fixes (WCAG basics)",
      li3: "Layout & flow improvements",
      li4: "Conversion-focused tweak",
      note: "Users understand the site faster and stay longer.",
      image:
        "https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Web Design & Development",
      li1: "Custom website development (no templates unless requested)",
      li2: "Responsive design (mobile-first, always)",
      li3: "Performance-focused builds (fast load times, clean code)",
      li4: "CMS integration (WordPress / Headless / Custom) ",
      note: "A site that loads fast, looks professional, and converts users",
      image:
        "https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
    },
    {
      title: "Frontend Development",
      li1: "ReactJs interfaces",
      li2: "Component-based architecture",
      li3: "Accessibility-focused UI ",
      li4: "Cross-browser consistency",
      note: "Smooth, usable interfaces that don’t break",
      image:
        "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
    },
    {
      title: "Website Performance Optimizationt",
      li1: "Page speed optimization",
      li2: "Core Web Vitals improvements",
      li3: "Image & asset optimization",
      li4: "JavaScript bundle cleanup",
      note: "Lower bounce rates, better SEO, faster load times.",
      image:
        "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
    },
    {
      title: "UI/UX Improvements & Redesigns",
      li1: "UX audits",
      li2: "Accessibility fixes (WCAG basics)",
      li3: "Layout & flow improvements",
      li4: "Conversion-focused tweak",
      note: "Users understand the site faster and stay longer.",
      image:
        "https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <>
      {/* <div className="bg-[url('img/banner/services.png')] w-full h-150">
				<h1 className="text-5xl flex justify-self-center relative top-7 text-purple-600 font-bold">
					Services
				</h1>
			</div> */}
      <div className="service-main mb-20">
        {/* section  */}
        <div className="flex justify-between">
          {/* left side  */}
          <div className="h-130 flex flex-col justify-between w-1/3 font-[m]">
            <div className="service-head p-6">
              <h3 className="mb-2 text-6xl font-bold">Services</h3>
              <h3 className="font-[cursive] text-gray-400 mb-3 text-2xl">
                For Customers
              </h3>
              <h3 className="mb-7 text-6xl font-bold">We Provide</h3>
              <p className="text-sm font-medium text-gray-600">
                We design and build fast, responsive, and performance-focused
                websites with clean code and modern UI to help businesses grow,
                improve user experience, and create strong digital presence.
              </p>
              <div className="flex text-5xl mt-8">
                <p>Scroll</p>
                <ArrowRight size={50} className="arrow" />
              </div>
            </div>
          </div>
          {/* right side  */}
          <motion.div className="rightcard h-130 p-5 w-1/2 flex overflow-x-auto rounded flex-nowrap">
            {/* right card  */}
            {servicesCard.map((p, id) => {
              return (
                <motion.div
                  animate={{ x: ["0%", "-400%"] }}
                  transition={{
                    ease: "linear",
                    duration: 25,
                    repeat: Infinity,
					delay: 0.7,
                  }}
				//   whileHover={{
				// 	x: 0,
				//   }}
                  key={id}
                  className="h-full shrink-0 w-80 rounded-4xl overflow-hidden relative mr-4"
                >
                  <img
                    className="h-full object-cover"
                    src={p.image}
                    alt={p.title}
                  />
                  <div className="right-card-card absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between bg-black/53">
                    <h2 className="bg-white text-black rounded-full h-10 w-10 flex justify-center items-center text-xl font-semibold">
                      {id + 1}
                    </h2>
                    <div className="flex justify-between h-2/5 flex-col">
                      <h1 className="text-2xl font-bold capitalize">
                        {p.title}
                      </h1>
                      <p className="text-lg leading-normal mb-10 text-gray-300">
                        {p.note}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className="service-best mt-20">
        <h1 className="font-serif text-2xl flex justify-self-center mb-20 bg-black rounded-full px-5 py-3">
          Service is Best & Not for...
        </h1>
        <div className="flex justify-around">
          <div className="service-for">
            <h1 className="text-xl font-semibold">Best for:</h1>
            <li>Startups needing an MVP</li>
            <li> Businesses redesigning outdated websites</li>
            <li> Companies scaling traffic and users</li>
          </div>
          <div className="service-for">
            <h1 className="text-xl font-semibold">Not for:</h1>
            <li> People wanting “cheap and fast” </li>
            <li>Projects without clear goals</li>
            <li> Clients who just want a logo and vibes</li>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xl m-5 flex justify-self-center text-center font-mono bg-transparent shadow-[inset_1px_2px_6px_black]">
          Discuss Your Project by contacting us using Links in the Footer Below
          by clicking icons
        </p>
      </div>
    </>
  );
};

export default Services;
