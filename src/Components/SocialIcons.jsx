import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function SocialIcons() {
  return (
    <div className="flex gap-4 bg-[#0F172A] p-4 rounded-xl justify-center">

      <FaGithub className="text-xl text-white cursor-pointer hover:text-violet-400" />

      <FaLinkedin className="text-xl text-white cursor-pointer hover:text-violet-400" />

      <FaInstagram className="text-xl text-white cursor-pointer hover:text-violet-400" />

      <FaTwitter className="text-xl  text-white cursor-pointer hover:text-violet-400" />

    </div>
  );
}

export default SocialIcons;