import page from "./page.module.css"
import avatar from "../public/avatar-jessica.jpeg";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
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
    <div className={page.container}>
      <div className={page.Profile}>
        <div className={page.image}>
          <Image className={page.avatar} src={avatar} alt="avatar" />
        </div>
        <div className={page.image_header}>
          <h1 className={page.name}>Jessica Randall</h1>
          <h2 className={page.location}>London, United Kingdom</h2>
          <p className={page.title}>"Frontend Developer and avid reader." </p>
        </div>
        <div className={page.links}>
          {profile_links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              target="_blank"
              className={page.link}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
