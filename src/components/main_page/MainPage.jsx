import MainMenu from "../menu/main_menu/MainMenu";
import { useContext } from "react";
import { ContactMeContext } from "../context/ContactMeContext";
import PresentationCard from "../cards/presentation_card/PresentationCard";
import GithubSubmit from "../github_submit/GithubSubmit";
import {
  ContactMeCard,
  CopiedNotification,
} from "../cards/contact_me/ContactMeCard";
import { ProjectCardsContainer } from "../cards/project_card/ProjectCard";
import "./MainPage.css";

function MainPage() {
  const { trigger, HandleTrigger } = useContext(ContactMeContext);

  return (
    <div className="basis-full">
      <ContactMeCard />
      <div
        className={`main-page ${
          trigger ? "main-page-dimmed" : "main-page-not-dimmed"
        }`}
        onClick={trigger ? HandleTrigger : null}
      >
        <MainMenu />
        <PresentationCard />
        <GithubSubmit />
        <ProjectCardsContainer />
      </div>
    </div>
  );
}

export default MainPage;
