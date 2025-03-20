import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { PiLinkSimple } from "react-icons/pi";
import SingleContactSocial from "./SingleContactSocial";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactSocial = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex gap-4"
    >
      <SingleContactSocial
        link="https://github.com/Priya-kusingh"
        Icon={FaGithub}
      />
      <SingleContactSocial
        link="https://www.linkedin.com/in/priya-kushwaha-901786232"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://kushwahapriya.netlify.app/"
        Icon={PiLinkSimple}
      />
    </motion.div>
  );
};

export default ContactSocial;
