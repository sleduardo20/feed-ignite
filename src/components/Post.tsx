/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { v1 as uuid } from "uuid";
import { FormEvent, useRef, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { CommentProps, PostProps } from "../model/post";

export function Post({ author, publishedAt, content, comments }: PostProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [postComments, setPostComments] = useState(comments);

  const publishedDataFormated = format(
    publishedAt,
    "d 'de' LLLL 'as' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleDeleteComment = (id: string) => {
    setPostComments(postComments.filter((i) => i.id !== id));
  };

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    if (!textAreaRef.current?.value) {
      alert("O campo do comentario esta vazio seu nojento!!!");
    } else {
      const newComment: CommentProps = {
        id: uuid(),
        author: {
          avatarUrl: "https://github.com/breakzplatform.png",
          name: "Boot",
          publishedAt: new Date(Date.now()),
        },
        comment: textAreaRef.current.value,
      };

      setPostComments([...postComments, newComment]);

      textAreaRef.current.value = "";
    }
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} hasBorder />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDataFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.id}> {line.content} </p>;
          }
          if (line.type === "link") {
            return (
              <p key={line.id}>
                <a href="#">👉 {line.content} </a>{" "}
              </p>
            );
          }
          return <p key={line.id}>{line.content}</p>;
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu comentario</strong>

        <textarea ref={textAreaRef} placeholder="Deixe seu comentario" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {postComments.map((item) => (
          <Comment
            key={item.id}
            {...item}
            deleteComment={() => handleDeleteComment(item.id)}
          />
        ))}
      </div>
    </article>
  );
}
