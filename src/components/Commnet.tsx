import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://avatars.githubusercontent.com/u/56615577?v=4"
        alt="avatar "
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo Lima</strong>
              <time title="18 de junho de 2022" dateTime="2022-06-18 00:00">
                Cerca de 1h atras
              </time>
            </div>

            <button title="Deletar comentario" type="button">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabens</p>
        </div>

        <footer>
          <button type="button">
            <ThumbsUp size={24} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
