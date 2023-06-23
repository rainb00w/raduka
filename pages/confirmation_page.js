import styles from '../styles/theWay.module.css';

export default function TheWay() {
  return (
    <div className="container">
      <div className={styles.main_container}>
        <p className={styles.center}>Вы успешно подписались на рассылку</p>

        <div className={styles.links}>
          <a href="/" className={styles.link}>
            <strong className={styles.text}>Перейти на главную </strong>
          </a>
        </div>
      </div>
    </div>
  );
}
