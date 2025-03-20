import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";

const links = [
  { link: "Home", section: "home" },
  { link: "About Us", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact Us", section: "contact" },
];

const FooterMain = () => {
  return (
    <div className="px-4 bg-gray-900 text-white bg-black mb-[-20px] cursor-pointer">
      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-600 mt-24"></div>

      {/* Large Screen Layout */}
      <div className="hidden md:flex justify-between items-center max-w-[1200px] mt-4 mx-auto">
        {/* Left Side: Name */}
        <p className="text-3xl font-semibold">Priya Kushwaha</p>

        {/* Center: Navigation Links */}
        <ul className="flex text-xl flex-col ">
          {links.map((item, index) => (
            <li key={index} className="hover:text-darkPink hover:border-b-[1px] hover:border-darkPink">
              <a
                href={`#${item.section}`}
                className="hover:text-pink-400 transition-all duration-500"
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Contact Info */}
        <div className="text-center  ">
          <h3 className="text-lg font-semibold text-pink hover:text-white">Contact</h3>
          <p className="flex items-center gap-2 mt-1">
            <MdEmail className="text-pink-400" />
            <a
              href="mailto:priyakushwaha1643@gmail.com"
              className="hover:text-pink-400"
            >
              priyakushwaha1643@gmail.com
            </a>
          </p>
          
        </div>
      </div>

      {/* Medium & Small Screen Layout */}
      <div className="md:hidden flex flex-col items-center text-center mt-6">
        {/* Name at Center */}
        <p className="text-3xl font-semibold">Priya Kushwaha</p>

        {/* Navigation Links - One by One, Centered */}
        <ul className="mt-2 space-y-2">
          {links.map((item, index) => (
            <li key={index} className="hover:text-darkPink hover:border-b-[1px] hover:border-darkPink">
              <a
                href={`#${item.section}`}
                className="text-lg hover:text-pink-400 transition-all duration-500"
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="flex items-center justify-center gap-2 mt-1">
            <MdEmail className="text-pink-400" />
            <a
              href="mailto:priyakushwaha1643@gmail.com"
              className="hover:text-pink-400"
            >
              priyakushwaha1643@gmail.com
            </a>
          </p>
          {/* <p className="flex items-center justify-center gap-2 mt-1">
            <FaPhoneAlt className="text-pink-400" />
            <a href="tel:+919900018276" className="hover:text-pink-400">
              +91 9900018276
            </a>
          </p> */}
        </div>
      </div>

      {/* Bottom Centered Text */}
      <p className="text-center mt-6 mb-4 text-sm">
        @2025 Priya | <a href="#" className="hover:text-pink-400">Privacy Policy</a>
      </p>
    </div>
  );
};

export default FooterMain;

