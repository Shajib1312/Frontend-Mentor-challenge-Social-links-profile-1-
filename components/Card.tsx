import Image from "next/image";
import Link from "next/link";
import avatar from "../public/avatar-jessica.jpeg";
import Styles from "./Card.module.css";
const Card = () => {
  const profile_links = [
    {
      name: "GitHub",
      url: "https://github.com/JessicaRandall",
      id: 1,
    },
    {
      name: "Frontend Mentor",
      url: "https://www.frontendmentor.io/profile/JessicaRandall",
      id: 2,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jessicarandall/",
      id: 3,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/JessicaRandall",
      id: 4,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/JessicaRandall/",
      id: 5,
    },
  ];
  return (
    <div className={Styles.container}>
      <div className={Styles.Profile}>
        <div className={Styles.image}>
          <Image className={Styles.avatar} src={avatar} alt="avatar" />
        </div>
        <div className={Styles.image_header}>
          <h1 className={Styles.name}>Jessica Randall</h1>
          <h2 className={Styles.location}>London, United Kingdom</h2>
          <p className={Styles.title}>"Frontend Developer and avid reader." </p>
        </div>
        <div className={Styles.links}>
          {profile_links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              target="_blank"
              className={Styles.link}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
