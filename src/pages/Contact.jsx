import { ArrowDown } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* <p className="text-6xl">*idg thel style add aakava /// </p> */}
      <div className="contact-head grid md:grid-cols-3 gap-6 px-6 py-12 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div
          className="bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 
  transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20"
        >
          <h1 className="text-xl font-semibold text-purple-400 mb-4">
            Let's Talk — If It's the Right Fit
          </h1>

          <p className="text-gray-300 leading-relaxed">
            We specialize in frontend-focused web development and UI work. We
            don't take on backend-heavy projects or rushed builds. If you care
            about quality and performance, you're in the right place.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 
  transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20"
        >
          <h1 className="text-xl font-semibold text-purple-400 mb-4">
            What Happens Next
          </h1>

          <div className="space-y-2 text-gray-300">
            <p>• We review your request within 24–48 hours</p>
            <p>• If it's a fit, we'll suggest a short call or next steps</p>
            <p>• If it's not, we'll tell you honestly — no ghosting</p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="before-reach bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 
  transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20"
        >
          <h1 className="text-xl font-semibold text-purple-400 mb-4">
            Before You Reach Out
          </h1>

          <div className="space-y-2 text-gray-300">
            <p>• Have a clear project or goal</p>
            <p>• Understand we focus on frontend work only</p>
            <p>• Be open to focused scope and clear requirements</p>
          </div>
        </div>
      </div>

      <div className="contact relative w-full min-h-screen flex items-center justify-center px-4">
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/70 "></div>

        {/* form container */}
        <div className="form-start relative z-10 w-full max-w-xl backdrop-blur-md bg-white/3 border border-purple-500/30 rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center text-white mb-8">
            Contact Us
          </h1>

          <form className="flex flex-col gap-4 text-sm font-mono leading-5">
            <div className="bg-black/5 rounded-2xl p-2 shadow-[0_0_5px_black]">
              <div>
                <lable className="flex gap-2">
                  Enter your Details...
                  <ArrowDown size={20} />{" "}
                </lable>
                <input
                  type="text"
                  placeholder="Your Name..."
                  className="w-full bg-transparent border-b border-purple-400 focus:border-purple-500 outline-none text-white py-2"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email..."
                  className="w-full bg-transparent border-b border-purple-400 focus:border-purple-500 outline-none text-white py-2"
                  required
                />
              </div>
            </div>

            <div className="form-select grid grid-cols-2 bg-black/5 rounded-2xl p-2 shadow-[0_0_5px_black]">
              <div className="">
                <p>Project Type :</p>
                <select
                  name="project-type"
                  id=""
                  required
                  className="options bg-transparent"
                >
                  <option value="" disabled selected>
                    Select a project type
                  </option>
                  <option value="Landing-page" className="text-black">
                    Landing page
                  </option>
                  <option
                    value="UI-implementation(design→code)"
                    className="text-black"
                  >
                    UI implementation (design → code)
                  </option>
                  <option value="Frontend-optimization" className="text-black">
                    Frontend optimization
                  </option>
                  <option value="other" className="text-black">
                    other
                  </option>
                </select>
              </div>

              <div className="ml-10">
                <p>Project Scope :</p>
                <select
                  name="project-scope"
                  id=""
                  className="options bg-transparent"
                  required
                >
                  <option value="" disabled selected>
                    Select a project scope
                  </option>
                  <option value="1-3-pages">1-3 pages</option>
                  <option value="4-6-pages">4-6 page</option>
                  <option value="Design-only">Design only</option>
                  <option value="custom">custom</option>
                </select>
              </div>

              <div className="mt-5">
                <p>Timeline :</p>
                <select
                  name="Timeline"
                  id=""
                  className="options bg-transparent"
                  required
                >
                  <option value="" disabled selected>
                    Select a Timeline
                  </option>
                  <option value="ASAP (1-2 weeks)">ASAP (1-2 weeks)</option>
                  <option value="Design-only">3-4 weeks</option>
                  <option value="Design-only">Flexible</option>
                </select>
              </div>

              <div className="ml-10 mt-5">
                <p>Budget Range </p>
                <select
                  name="budget"
                  id=""
                  className="options bg-transparent"
                  required
                >
                  <option value="" disabled selected>
                    Select abudget range
                  </option>
                  <option value="Under-₹15,000">Under ₹15,000</option>
                  <option value="₹15,000-₹25,000">₹15,000-₹25,000</option>
                  <option value="₹25,000-₹35,000">₹25,000-₹35,000</option>
                  <option value="above ₹35,000">above ₹35,000</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p>Design Availability</p>
              <div className="flex">
                <input
                  type="radio"
                  name="Availability"
                  value="Yes"
                  className=""
                  required
                />
                Yes
                <input
                  type="radio"
                  name="Availability"
                  value="No"
                  className="ml-5"
                  required
                />
                No
              </div>
            </div>
            <div className=" bg-black/5 rounded-2xl p-2 shadow-[0_0_5px_black]">
              <p>Project Details</p>
              <textarea
                placeholder="Briefly describe what you want to build and the goal of the project.."
                rows="4"
                className="w-full bg-transparent border-b border-purple-400 focus:border-purple-500 outline-none text-white py-2 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-500 transition-all duration-300 py-3 rounded-xl font-semibold text-white shadow-lg"
              onsubmit={() => {
                alert("We will soon get in touch");
              }}
            >
              Send Message
            </button>
          </form>
          <p className="text-gray-400 mt-1 flex justify-self-center text-sm text-center font-[cursive]">
            *We focus on frontend-only projects and limited scopes. While our
            studio is growing, our standards for clarity, communication, and
            execution are not.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
