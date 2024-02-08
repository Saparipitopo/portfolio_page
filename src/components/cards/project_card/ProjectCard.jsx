import { useContext } from "react";
import { ProjectTags } from "./tags/ProjectTags";
import { GithubInfoContext } from "../../context/GithubInfoContext";
import "./ProjectCard.css";

export function ProjectCardsContainer() {
  const { userRepos } = useContext(GithubInfoContext);

  const rendereOutput = userRepos.map(ProjectCard);

  return (
    <div className="grid grid-cols-3 gap-4 p-4 pt-72">{rendereOutput}</div>
  );
}

export function ProjectCard({ repoName, html_url, description, tags }) {
  const renderedTags = tags.map((tag) => (
    <ProjectTags key={`${tag}`} nameTag={tag} />
  ));
  return (
    <a href={html_url} target="_blank" key={`${repoName}`} className="project-card flex flex-col flex-nowrap transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
      <button>
          <h1 className="text-lg basis-3/12">{repoName}</h1>
          <p className="m-2 h-24 basis-6/12 text-left">{description}</p>
          <div className="basis-3/12 flex flex-row flex-wrap">
            {renderedTags}
          </div>
      </button>
    </a>
  );
}
