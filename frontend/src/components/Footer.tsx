import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa";

type socialMediaIconsProps = {
  size?: number | string;  
};

const classIcons=`bg-sky-400 hover:text-white`;


function Footer({ size = 23}: socialMediaIconsProps) {
  
  return (
    
    <footer className="bg-sky-400 pt-4 pb-2 border-t-2 border-blue-950 ">
      <nav className="flex gap-4 justify-center p-2">
        <a href="https://facebook.com" target="_blank" className={classIcons}>
          <FaFacebookF size={size}/>
        </a>
        <a href="https://instagram.com" target="_blank" className={classIcons}>
          <FaInstagram size={size}/>
        </a>
        <a href="https://twitter.com" target="_blank" className={classIcons}>
          <FaTwitter size={size}/>
        </a>
        <a href="https://tiktok.com" target="_blank" className={classIcons}>
          <FaTiktok size={size} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" className={classIcons}>
          <FaLinkedin size={size} />
        </a>
        <div className="ml-10 ">
            © {new Date().getFullYear()} Planeo. Todos los derechos reservados.
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
