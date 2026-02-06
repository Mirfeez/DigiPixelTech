import React from "react";
import { NavLink } from "react-router-dom";

const Services = () => {
  // const Services = [
  //   {
  //     title: "Web Design & Development",
  //     li1: "Custom website development (no templates unless requested)",
  //     li2: "Responsive design (mobile-first, always)",
  //     li3: "Performance-focused builds (fast load times, clean code)",
  //     li4: "CMS integration (WordPress / Headless / Custom) ",
  //     note: "👉 Outcome: A site that loads fast, looks professional, and converts users",
  //   },
  //   {
  //     title: "Web Design & Development",
  //     li1: "Custom website development (no templates unless requested)",
  //     li2: "Responsive design (mobile-first, always)",
  //     li3: "Performance-focused builds (fast load times, clean code)",
  //     li4: "CMS integration (WordPress / Headless / Custom) ",
  //     note: "👉 Outcome: A site that loads fast, looks professional, and converts users",
  //   },
  //   {
  //     title: "Web Design & Development",
  //     li1: "Custom website development (no templates unless requested)",
  //     li2: "Responsive design (mobile-first, always)",
  //     li3: "Performance-focused builds (fast load times, clean code)",
  //     li4: "CMS integration (WordPress / Headless / Custom) ",
  //     note: "👉 Outcome: A site that loads fast, looks professional, and converts users",
  //   },
  //   {
  //     title: "Web Design & Development",
  //     li1: "Custom website development (no templates unless requested)",
  //     li2: "Responsive design (mobile-first, always)",
  //     li3: "Performance-focused builds (fast load times, clean code)",
  //     li4: "CMS integration (WordPress / Headless / Custom) ",
  //     note: "👉 Outcome: A site that loads fast, looks professional, and converts users",
  //   },
  // ];

  return (
    <>
      <div className="bg-[url('img/banner/services.png')] w-full h-150">
        <h1>Services</h1>
      </div>
      <div className="ml-10 overflow-x-hidden mb-20">
        <h1 className="text-2xl mt-20 p-8">Clear Service Categories</h1>
        <div className="services flex flex-nowrap gap-10 h-full w-full">
          <div className="card-grp">
            <div className="card w-1/4 h-80 p-10 relative shrink-0">
              <h1 className="text-xl">Web Design & Development</h1>
              <li>
                Custom website development (no templates unless requested)
              </li>
              <li>Responsive design (mobile-first, always)</li>
              <li>
                {" "}
                Performance-focused builds (fast load times, clean code){" "}
              </li>
              <li>CMS integration (WordPress / Headless / Custom) </li>
              <p>
                👉 Outcome: A site that loads fast, looks professional, and
                converts users
              </p>
            </div>

            <div className="card w-1/4 h-80 p-10 relative shrink-0">
              <h1 className="text-xl">Frontend Development</h1>
              <li>ReactJs interfaces</li>
              <li> Component-based architecture</li>
              <li>Accessibility-focused UI </li>
              <li>Cross-browser consistency </li>
              <p>👉 Outcome: Smooth, usable interfaces that don’t break</p>
            </div>

            <div className="card w-1/4 h-80 p-10 relative shrink-0">
              <h1 className="text-xl">Website Performance Optimization</h1>
              <li>Page speed optimization</li>
              <li>Core Web Vitals improvements</li>
              <li>Image & asset optimization</li>
              <li>JavaScript bundle cleanup </li>
              <p>
                👉 Outcome: Lower bounce rates, better SEO, faster load times.
              </p>
            </div>
            <div className="card w-1/4 h-80 p-10 relative shrink-0">
              <h1 className="text-xl">UI/UX Improvements & Redesigns</h1>
              <li>UX audits</li>
              <li>Accessibility fixes (WCAG basics)</li>
              <li>Layout & flow improvements</li>
              <li>Conversion-focused tweaks</li>
              <p>
                👉 Outcome: Users understand the site faster and stay longer.
              </p>
            </div>
          </div>
          {/* duplicate  */}
          <div className="card-grp">
            <div className="card w-1/4 h-80 p-10 relative shrink-0">
              <h1 className="text-xl">Web Design & Development</h1>
              <li>
                Custom website development (no templates unless requested)
              </li>
              <li>Responsive design (mobile-first, always)</li>
              <li>
                {" "}
                Performance-focused builds (fast load times, clean code){" "}
              </li>
              <li>CMS integration (WordPress / Headless / Custom) </li>
              <p>
                👉 Outcome: A site that loads fast, looks professional, and
                converts users
              </p>
            </div>

            <div className="card w-1/4 h-80 p-10 relative shrink-0">
              <h1 className="text-xl">Frontend Development</h1>
              <li>ReactJs interfaces</li>
              <li> Component-based architecture</li>
              <li>Accessibility-focused UI </li>
              <li>Cross-browser consistency </li>
              <p>👉 Outcome: Smooth, usable interfaces that don’t break</p>
            </div>

            <div className="card w-1/4 h-80 p-10 relative shrink-0">
              <h1 className="text-xl">Website Performance Optimization</h1>
              <li>Page speed optimization</li>
              <li>Core Web Vitals improvements</li>
              <li>Image & asset optimization</li>
              <li>JavaScript bundle cleanup </li>
              <p>
                👉 Outcome: Lower bounce rates, better SEO, faster load times.
              </p>
            </div>
            <div className="card w-1/4 h-80 p-10 relative shrink-0">
              <h1 className="text-xl">UI/UX Improvements & Redesigns</h1>
              <li>UX audits</li>
              <li>Accessibility fixes (WCAG basics)</li>
              <li>Layout & flow improvements</li>
              <li>Conversion-focused tweaks</li>
              <p>
                👉 Outcome: Users understand the site faster and stay longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p>
        For projects requiring backend systems, we collaborate with trusted
        backend partners or work alongside your existing team.
      </p>
      <div className="mt-20">
        <h1 className="text-2xl flex justify-self-center mb-20">Who Each Service Is For</h1>
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
        <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg cursor-pointer">
          {" "}
          Discuss your project
        </button>
      </div>
    </>
  );
};

export default Services;
