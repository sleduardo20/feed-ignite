/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { CommentProps } from "../model/post";

export function Comment({ author, comment, deleteComment }: CommentProps) {
  const publishedDateRelativeToNow = formatDistanceToNow(author.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  return (
    <div className={styles.comment}>
      <Avatar src={author.avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time dateTime={author.publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button
              title="Deletar comentario"
              type="button"
              onClick={deleteComment && deleteComment}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
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
