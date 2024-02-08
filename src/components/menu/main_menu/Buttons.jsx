import { useContext } from "react";
import { ContactMeContext } from "../../context/ContactMeContext";
import "./Buttons.css";

export function MainMenuButton({ name, link, img }) {
  const { trigger, HandleTrigger } = useContext(ContactMeContext);

  return link ? (
    <div className={`main-buttons ${trigger ? 'disable-main-buttons' : ''} basis-4/12`}>
      <a
        href={link}
        target="_blank"
        className="flex flex-row justify-center space-x-2"
      >
        <button className="py-4">
          <div className="flex flex-row items-center justify-center space-x-2">
            <img
              src={img}
              alt="logo"
              className="object-contain  rounded-full w-9"
            />
            <h1>{name}</h1>
          </div>
        </button>
      </a>
    </div>
  ) : (
    <div className={`main-buttons flex flex-row justify-center space-x-2 ${trigger ? 'disable-main-buttons' : ''} basis-4/12`}>
      <button
        className="w-full py-4 flex flex-row items-center justify-center space-x-2"
        onClick={() => HandleTrigger()}
      >
        <img
          src={img}
          alt="logo"
          className="object-contain  w-9"
        />
        <h1>{name}</h1>
      </button>
    </div>
  );
}