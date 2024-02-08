import "./ProjectTags.css";

export function ProjectTags({ nameTag }) {
  return (
    <div className="project-tag shrink-0">
      <h1 className="inline-block align-middle mx-3">{nameTag}</h1>
    </div>
  );
}
