import React from "react";
import { NavLink } from "react-router-dom";
import firstCard from "../img/service-card/1st-card.jpg";
import secondCard from "../img/service-card/2nd-card.jpg";
import thirdCard from "../img/service-card/3rd-card.jpg";
import fourthCard from "../img/service-card/4th-card.jpg";

const Services = () => {
  const servicesCard = [
    {
      title: "Web Design & Development",
      li1: "Custom website development (no templates unless requested)",
      li2: "Responsive design (mobile-first, always)",
      li3: "Performance-focused builds (fast load times, clean code)",
      li4: "CMS integration (WordPress / Headless / Custom) ",
      note: "👉 Outcome: A site that loads fast, looks professional, and converts users",
      image: firstCard,
    },
    {
      title: "Frontend Development",
      li1: "ReactJs interfaces",
      li2: "Component-based architecture",
      li3: "Accessibility-focused UI ",
      li4: "Cross-browser consistency",
      note: "👉 Outcome: Smooth, usable interfaces that don’t break",
      image: secondCard,
    },
    {
      title: "Website Performance Optimizationt",
      li1: "Page speed optimization",
      li2: "Core Web Vitals improvements",
      li3: "Image & asset optimization",
      li4: "JavaScript bundle cleanup",
      note: " 👉 Outcome: Lower bounce rates, better SEO, faster load times.",
      image: thirdCard
    },
    {
      title: "UI/UX Improvements & Redesigns",
      li1: "UX audits",
      li2: "Accessibility fixes (WCAG basics)",
      li3: "Layout & flow improvements",
      li4: "Conversion-focused tweak",
      note: "👉 Outcome: Users understand the site faster and stay longer.",
      image: fourthCard
    },
  ];

  return (
    <>
      <div className="bg-[url('img/banner/services.png')] w-full h-150">
        <h1 className="text-5xl flex justify-self-center relative top-7 text-purple-600 font-bold">Services</h1>
      </div>
      <div className="mb-20 ">
        <h1 className="text-2xl mt-20 p-8">Clear Service Categories</h1>
        <div className="services flex flex-nowrap overflow-x-auto shrink-0 gap-10 h-full w-full">
           {servicesCard.map((elem) => {
            return(
              <div className="w-1/3 h-100 p-10 relative shrink-0">
             <img
                src={elem.image}
                alt=""
                className="h-full w-full object-cover card-bg"
              />
               <div className="absolute top-0 left-0 h-full w-full  p-20 pb-25">
                <h1 className="text-xl">{elem.title}</h1>
                <div>
                  <li>
                   {elem.li1}
                  </li>
                  <li>
                   {elem.li2}
                  </li>
                  <li>
                   {elem.li3}
                  </li>
                  <li>
                   {elem.li4}
                  </li>
                
                  <p>
                    {elem.note}
                  </p>
                </div>
              </div>
              </div>
            )
           })
           }
        </div>
      </div>
      <p>
        For projects requiring backend systems, we collaborate with trusted
        backend partners or work alongside your existing team.
      </p>
      <div className="mt-20">
        <h1 className="text-2xl flex justify-self-center mb-20">
          Who Each Service Is For
        </h1>
        <div className="flex justify-around">
          <div className="service-for">
            <h1 className="text-lg">Best for:</h1>
            <li>Startups needing an MVP</li>
            <li> Businesses redesigning outdated websites</li>
            <li> Companies scaling traffic and users</li>
          </div>
          <div className="service-for">
            <h1 className="text-lg">Not for:</h1>
            <li> People wanting “cheap and fast” </li>
            <li>Projects without clear goals</li>
            <li> Clients who just want a logo and vibes</li>
          </div>
        </div>
      </div>

      <div>
        <button className="mt-15 px-6 py-3 bg-purple-600 text-white rounded-lg cursor-pointer flex justify-self-center">
          Discuss your project
        </button>
      </div>
    </>
  );
};

export default Services;
