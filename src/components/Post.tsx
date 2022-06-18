import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/56615577?v=4"
            alt="avatar"
          />
          <div className={styles.authorInfo}>
            <strong>Eduardo Lima</strong>
            <span>Front End Developer</span>
          </div>
        </div>
        <time title="18 de junho as 12:13" dateTime="2022-06-18 00:00:00">
          Publicado ha 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p> Fala galeraa 👋 </p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            <a href="#">👉 jane.design/doctorcare</a>
          </p>

          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>

        <textarea placeholder="Deixe seu comentario" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
