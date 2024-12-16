import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa";

type socialMediaIconsProps = {
  size?: number | string;  
};

function Footer({ size = 23}: socialMediaIconsProps) {
  
  return (
    
    <footer className="bg-blue-300 pt-4 pb-2 border-t-2 border-blue-950 ">
      <nav className="flex gap-4 justify-center p-2">
        <a href="https://facebook.com" target="_blank" className="bg-blue-300 hover:text-white">
          <FaFacebookF size={size}/>
        </a>
        <a href="https://instagram.com" target="_blank" className="bg-blue-300 hover:text-white">
          <FaInstagram size={size}/>
        </a>
        <a href="https://twitter.com" target="_blank" className="bg-blue-300 hover:text-white">
          <FaTwitter size={size}/>
        </a>
        <a href="https://tiktok.com" target="_blank" className="bg-blue-300 hover:text-white">
          <FaTiktok size={size} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" className="bg-blue-300 hover:text-white">
          <FaLinkedin size={size} />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
