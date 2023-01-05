import styles from "../styles/theBook.module.css";
import bookImage from "../public/aaron-burden-AXqMy8MSSdk-unsplash.webp";
import Image from "next/image";

export default function TheBook() {
  return (
    <div className="container">
      <div className={styles.main_container}>
        <img
          style={{ maxWidth: "100%" }}
          src="aaron-burden-AXqMy8MSSdk-unsplash.webp"
          alt="logo"
        />

        {/* <p>
        Я – не художник слова,И всё, что я скажу, уже и так известно.А потому,
        не помышляя о пользе для других,Я пишу это, дабы утвердиться в
        понимании.Ибо так окрепнет во мнеСтремление творить благое.И если другие
        счастливчики, подобные мне,Увидят эти стихи, возможно, и им принесут они
        благо.Бодхичарья-аватара.
      </p> */}
        <p className={styles.header}>
          Книга <strong>«Говорящий о солнце и луне»</strong> является сборником
          изречений посвященных духовному пробуждению человека. Отдельные
          высказывания собраны в разделы соответствующие основным направлениям
          его преображения. А именно, трем путям света -{" "}
          <strong> Любви, Мудрости и Истины</strong>. Посредством этих трех
          восходит человек, посредством родства с ними преодолевает он смуту
          разделения и посредством служения им возвращается он к единству.
        </p>
        <p>
          <strong> Выдержки из книги :</strong>
        </p>
        <p>
          <em>
            <br></br>Бог Единый — так взывал я к Тебе прежде и так обращусь
            вновь. Помню и другие имена слетавшие с уст моих, но позволю
            безмолвию скрыть их подобно тому, как матерь скрывает дитя своё от
            дурного взгляда и подобно тому, как богач прячет добытое. Всякий
            день свой и всякое дело своё, начну с мысли о Тебе, ибо дела мои
            видны и сердце моё зримо Тобой. Буду помнить, что всякий плод с
            посаженного — это дар трапезе Твоей. Не приду же я с пустыми руками,
            но воздам славу Тебе, подобно тому, как воздают царствующему.
            <br></br>
            <br></br>Преуспевайте в стойкости духа. Возводите с камня, оставив
            глину земле. Придите к уверенности, сторонясь гордости, и обретите
            смирение, избежав преклонения. <br></br>
            <br></br> Многое жизнь преподнесет вам, покуда все посланное не
            возлюбите. <br></br>
            <br></br> Не помнит любовь дурного, ибо всё подвластно пламени её,
            не знает она страха, ибо он есть противоположность любви.  <br></br>
            <br></br> Говорите страждущим, чтобы утешить их. Говорите
            радующимся, чтобы увеличить их веселье. Сейте зёрна истины вместо
            раздачи плодов. И если другой не может понять вас, поймите вы его.{" "}
            <br></br>
            <br></br> Помнящий знает — всё трудное для того послано, чтобы, видя
            собственное несовершенство, оставил рожденный всякое осуждение.
            Преисполнившись любви к себе и священное внутри увидев — в каждом
            его нашел. Чтобы испытав страдание собственное, сострадание к
            ближнему он обрел.  <br></br>
            <br></br>Избавьте же себя от пустого и наполните духом
            сосуд. Наполнитесь вечным — тем что сердцу близко. Познайте
            высокое — то, что сердцем, духа глазами, видно.
            <br></br>
          </em>
          <br></br>
        </p>

        <div className={styles.links}>
          <a
            href="https://www.icloud.com/iclouddrive/0beQKAJRpz9LSWBs18wtN6XuQ#gosil_share"
            className={styles.link}
          >
            <strong>Скачать книгу </strong>
          </a>

          <p>
            <br></br>
            Для заказа печатной версии книги, пожалуйста, воспользуйтесь
            доступными контактами. <br></br>
          </p>

          <a href="/" className={styles.link}>
            Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
}
