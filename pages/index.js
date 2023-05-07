import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logoImage from '../public/IMG_0681.webp';

export default function Home() {
  return (
    <div className="container">
      <div className={styles.main_container}>
        <div className={styles.main_container__header}>
          <img src="ankh.jpeg" alt="logo" width={100} height={100} />
          <h6>Ибо жизнь твоя есть продолжение жизни Бога.</h6>
          {/* <h6>
            Оставь всякое зло <br></br> Учись добру <br></br> Очисть свой ум
            <br></br> Вот учение Будд <br></br> ______________
          </h6> */}
        </div>
        <a
          className={styles.link}
          href="https://www.youtube.com/@OleksandrRaduka"
        >
          Youtube
        </a>
        <a className={styles.link} href="https://www.instagram.com/o.raduka/">
          Instagram
        </a>
        <a className={styles.link} href="https://t.me/o_raduka">
          Telegram
        </a>
        <br></br>______________
        <br></br>
        <a className={styles.link} href="/recommended">
          Рекомендованная литература
        </a>
        <a className={styles.link} href="/the-way">
          Тонкие тела и практики.
        </a>
        <a className={styles.link} href="/the-book">
          Книга "Говорящий о солнце и луне"
        </a>
      </div>
    </div>
  );
}
