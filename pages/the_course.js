import s from '../styles/the_course.module.css';

export default function Recommended() {
  return (
    <div className={s.main_container}>
      <div className={s.text_container}>
        <p className={s.header_text}>Курс</p>
        <h4 className={s.header}> Основы Духовности</h4>
      </div>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VbWwsEWGuaQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <iframe
        width="540"
        height="305"
        src="https://758f5465.sibforms.com/serve/MUIFABqhqOaMYldORt8qk35fJCK4HjLvi1-u4sdSH9KtK5E-oFCFmI6DAafZ6OX08Jv4jyii8SfprhWq5z-Oz0ftkUD_Ba3wf5o74DBH3dqlViaXTL8oAYik1E_RFPoY5mZWaMCdK0AWnKanB-NiVYo3dnUnkr08Y7qKcBGw_4TFyruSDCFGfdIDhS37OMCS6snaNq-7GFHU1MsT"
        frameborder="0"
        scrolling="auto"
        allowfullscreen
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '100%',
        }}
      ></iframe>

      <a href="/" className={s.link}>
        Вернуться на главную
      </a>
    </div>
  );
}
