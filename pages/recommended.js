import styles from "../styles/recommended.module.css";

export default function Recommended() {
  return (
    <div className="container">
      <div className={styles.recommended_container}>
        <div className={styles.recommended_container__header}>
          <h4 className={styles.header}>Список рекомендованой литературы:</h4>
        </div>
        <div className={styles.links}>
          <p>
            Аудиокниги на youtube -
            <a
              href="https://www.youtube.com/@OleksandrRaduka"
              className={styles.link}
            >
              - перейти
            </a>
          </p>
          <p>
            Аудио и текст в телеграмм -
            <a href="https://t.me/o_raduka/210" className={styles.link}>
              - перейти
            </a>{" "}
          </p>
        </div>
        <div className={styles.recommended_container__text}>
          <h4 className={styles.header}>
            Избранные Священные Писания востока и запада :
          </h4>
          <ul>
            <li>Книга Иова </li>
            <li>Книга Екклесиаста</li>
            <li>Татхагатага́рбха сутра</li>
            <li>10 шлок об Атмане</li>
            <li>Упанишады</li>
            <li>Авадхута Гита</li>
            <li>Аштавакра гита</li>
            <li>Бхагавад-Гита – Божественная Песнь</li>
          </ul>
          <h4 className={styles.header}>Художественные книги</h4>
          <ul>
            <li>«Две жизни» Конкордия Антарова  </li>
            <li> «О цели христианской жизни» Прп. Серафим Саровский </li>
            <li>«Сиддхартха» Герман Гессе  </li>
            <li>«Основы Буддизма» Рерих Елена Ивановна  </li>
            <li> «О божественных тайнах и о духовной жизни» Исаак Сирин</li>
          </ul>
          <h4 className={styles.header}> Эзотерическое знание </h4>
          <ul>
            <li>«Посвящение» Элизабет Хейч</li>
            <li>«У ног учителя» Кришнамурти Джидду</li>
            <li>«Внутренняя жизнь» Чарлз Вебстер Ледбитер </li>
            <li>«Четыре йоги» Свами Вивекананда</li>
            <li>«Вы Боги» Омраам Микаэль Айванхов</li>
            <li>«Музыка Снежных Вершин» Джецюн Миларепа</li>
            <li>«Священные мысли учителя» Беинса Дуно </li>
          </ul>
          <h4 className={styles.header}> Религии мира </h4>
          <ul>
            <li>Курс религиозных идей А.Б. Зубова </li>
            <li>“Священный Коран” Поэтический перевод. Т.Шумовский</li>
          </ul>
          <h4 className={styles.header}>Академичоское образование </h4>
          <ul>
            <li>Открытое образование</li>
            <li>Coursera</li>
            <li>Edx</li>
            <li>Wondrium</li>
          </ul>
        </div>{" "}
        <a href="/" className={styles.link}>
          {" "}
          Вернуться на главную
        </a>
      </div>
    </div>
  );
}
