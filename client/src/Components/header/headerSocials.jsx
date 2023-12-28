import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiQuora } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const headerSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/vipin-kumar-patel-2b9041228/"
        target="_blank"
      >
        <BsLinkedin className="header__socials--icon" />
      </a>
      <a href="https://github.com/Vipin019" target="_blank">
        <FaGithub className="header__socials--icon" />
      </a>
      <a
        href="https://www.quora.com/profile/VIPIN-KUMAR-PATEL-19"
        target="_blank"
      >
        <SiQuora className="header__socials--icon" />
      </a>
      <a href="https://twitter.com/VIPINKU87080272" target="_blank">
        <FaXTwitter className="header__socials--icon" />
      </a>
    </div>
  );
};

export default headerSocials;
