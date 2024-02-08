import { MainMenuButton } from "./Buttons";
import { useSpring, animated as a } from "react-spring";
import GithubLogo from "../../../img/github.png";
import TeleGramLogo from "../../../img/TelegramLogo.webp";
import ContactMeLogo from "../../../img/contactMe.webp";
import "../../../styles/backgroundBrightness.css";
import './MainMenu.css'

function Mainmenu() {
  const animationMenuProps = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: { duration: 3000 },
  });

  return (
    <a.div
      className="flex flex-row main-menu"
      style={{ ...animationMenuProps }}
    >
      <MainMenuButton
        name="GitHub"
        link="https://github.com/Saparipitopo/"
        img={GithubLogo}
      />
      <MainMenuButton
        name="LinkedIn"
        link="https://www.linkedin.com/in/manuel-clark-128715223/"
        img={TeleGramLogo}
      />
      <MainMenuButton name="Contact me" link="" img={ContactMeLogo} />
    </a.div>
  );
}

export default Mainmenu;
