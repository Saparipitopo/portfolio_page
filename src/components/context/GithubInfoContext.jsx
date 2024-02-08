import { useState, useEffect, createContext } from "react";

export const GithubInfoContext = createContext();

export function GithubInfoContextProvider(props) {
  const [username, setUsername] = useState("saparipitopo");

  const [userData, setUserData] = useState({});

  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchUserRepos();
  }, [username]);

  function HandleUsername(user) {
    setUsername(user ? user : 'saparipitopo');
  }

  const fetchUserData = async () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((response) => {
        HandleUserData(response);
      })
      .catch((error) => console.error(error));
  };

  const fetchUserRepos = async () => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((response) => {
        HandleUserRepos(response);
      })
      .catch((error) => console.error(error));
  };

  function HandleUserData(args) {
    setUserData({
      login: args.login,
      avatar_url: args.avatar_url,
      realName: args.name,
      bio: args.bio,
      location: args.location,
      hirable: args.hirable,
      num_pub_repos: args.public_repos,
    });
  }

  function HandleUserRepos(args) {
    const userReposArray = args.slice(0, 6).map(createProjectCard);

    function createProjectCard(project) {
      return {
        repoName: project.name,
        html_url: project.html_url,
        description: project.description,
        tags: project.topics,
        forks_count: project.forks_count,
      };
    }

    setUserRepos(userReposArray);
  }

  return (
    <GithubInfoContext.Provider value={{ userData, userRepos, HandleUsername }}>
      {props.children}
    </GithubInfoContext.Provider>
  );
}
