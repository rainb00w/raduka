import styles from '../styles/theWay.module.css';

export default function TheWay() {
  return (
    <div className="container">
      <div className={styles.main_container}>
        <p className={styles.center}>
          Вам на почту отправлено письмо для подтверждения подписки. Если оно не
          отображается проверьте папку спам или напишите администратору -
          info@raduka.com
        </p>

        <div className={styles.links}>
          <a href="/the_course" className={styles.link}>
            <strong className={styles.text}>Вернуться к странице курса </strong>
          </a>
        </div>
      </div>
    </div>
  );
}
