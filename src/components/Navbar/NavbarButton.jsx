import { FaArrowDownLong } from "react-icons/fa6";
import kush from "../../../public/images/Priya-Kushwaha.pdf";
const NavbarButton = () => {
  // Resume file URL (Update with your actual resume link)
  // const resumeUrl = "/Priya-Kushwaha.pdf"; // Ensure the file is in the public folder

  return (
    <a
      href={kush}
      download="Priya-Kushwaha.pdf"
      className="px-4 py-2 rounded-full text-black text-xl border-cyan border flex items-center gap-1 
                 bg-gradient-to-r from-cyan to-pink hover:border-pink hover:scale-110 
                 transition-all duration-500 hover:shadow-cyanShadow"
    >
      Resume
      <div className="sm:hidden md:block">
      <FaArrowDownLong />
      </div>
    </a>
  );
};

export default NavbarButton;

