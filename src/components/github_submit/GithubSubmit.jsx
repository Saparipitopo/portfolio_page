import { useState, useContext } from "react";
import { GithubInfoContext } from "../context/GithubInfoContext";
import "./GithubSubmit.css";

function GithubSubmit() {
  const { HandleUsername } = useContext(GithubInfoContext);

  const [username, setUsername] = useState("");

  const HanldeSubmit = (e) => {
    e.preventDefault();
    HandleUsername(username);
    setUsername("");
  };

  return (
    <div className="m-12 flex flex-row place-content-center">
      <form onSubmit={HanldeSubmit} className="flex flex-col space-y-12">
        <input
          value={username}
          placeholder="Write here your Github user and submit to see what happens"
          onChange={(e) => setUsername(e.target.value)}
          className="input-bar "
        ></input>
        <div className="flex flex-row place-content-center">
          <button className="submit">submit!</button>
        </div>
      </form>
    </div>
  );
}

export default GithubSubmit;
