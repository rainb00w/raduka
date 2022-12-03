import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <div className={styles.main_container}>
        <div className={styles.main_container__header}>
          <h4>Be kind</h4>
        </div>
        <a href="https://www.youtube.com/@OleksandrRaduka">Youtube</a>
        <a href="https://www.instagram.com/o.raduka/">Instagram</a>
        <a href="https://t.me/o_raduka">Telegram</a>
      </div>
    </div>
  );
}
