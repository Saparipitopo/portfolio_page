import { useSpring, useTransition, animated as a } from "react-spring";
import { useContext } from "react";
import { ContactMeContext } from "../../context/ContactMeContext";
import "./ContactMeCard.css";
import ExitImg from "../../../img/exit.png";
import GmailLogo from "../../../img/gmailLogo.svg";

function ContactMeComponents({ img, text }) {
  const CopyToClipboard = (copyText) =>
    navigator.clipboard.writeText(`${copyText}`);

  return (
    <div className="flex flex-row items-center space-x-4">
      <img src={img} className="object-contain  w-10" />
      <button onClick={() => CopyToClipboard(text)}>
        <h1>{text}</h1>
      </button>
    </div>
  );
}

export function CopiedNotification() {
  const { trigger } = useContext(ContactMeContext);

  const copiedToClipboardProps = useSpring({
    from: { opacity: 1, marginTop: 500 },
    opacity: 1,
    marginTop: trigger ? 0 : 500,
    config: { mass: 1, friction: 100, tension: 200 },
  });

  return (
    <a.div
      className="bg-purple-900 absolute z-10 w-96 h-14 rounded-lg grid place-items-center"
      style={{ ...copiedToClipboardProps }}
    >
      <h1>Copied to clipboard</h1>
    </a.div>
  );
}

export function ContactMeCard() {
  const { trigger, HandleTrigger } = useContext(ContactMeContext);

  const contactMeCardProps = useSpring({
    from: { opacity: 0, marginTop: -500 },
    opacity: trigger ? 1 : 0,
    marginTop: trigger ? 250 : -500,
    config: { mass: 1, friction: 100, tension: 200 },
  });

  return (
    <>
      <div className="basis-full flex flex-row justify-center">
        <a.div className="contact-me-card" style={{ ...contactMeCardProps }}>
          <button onClick={HandleTrigger} className="absolute -top-5 -right-5">
            <img
              src={ExitImg}
              className="object-contain rounded-full w-10 bg-white transition ease-in-out hover:brightness-50"
            />
          </button>
          <div className="m-10 grid grid-cols-1 space-y-10 h-full">
            <ContactMeComponents img={GmailLogo} text="manubravo04@gmail.com" />
          </div>
        </a.div>
      </div>
    </>
  );
}
