import { useContext } from "react";
import { useSpring, animated as a } from "react-spring";
import { GithubInfoContext } from "../../context/GithubInfoContext";
import "./PresentationCard.css";

function PresentationCard() {
  const { userData } = useContext(GithubInfoContext);

  const presentationCardProps = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: { duration: 3000 },
  });

  return (
    <a.div style={{ ...presentationCardProps }}>
      <div className="presentation-card">
        <div className="flex flex-row flex-nowrap justify-center pt-32">
          <a
            href={`https://github.com/${userData.login}`}
            target="_blank"
            className="hover:scale-110 duration-300 hover:brightness-75"
          >
            <button>
              <img
                src={userData.avatar_url}
                alt="logo"
                className="object-contain rounded-full w-96"
              />
            </button>
          </a>
        </div>
        <div className="w-full pt-10 space-x-48 flex flex-row flex-nowrap justify-center justify-self-center">
          <div className="w-96 h-48 m-10">
            <h1 className="text-lg">About me</h1>
            <p>
              Hello and welcome to my portfolio page! My name is 
              {` ${userData.realName}`} and I'm currently living at
              {userData.location ? ` ${userData.location}` : " the north pole"}.
            </p>
          </div>
          <div className="w-96 h-48 m-10">
            <h1 className="text-lg">A little more info</h1>
            <p>{userData.bio}</p>
          </div>
        </div>
      </div>
    </a.div>
  );
}

export default PresentationCard;
