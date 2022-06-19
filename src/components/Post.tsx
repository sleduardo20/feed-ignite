/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { v4 as uuidv4 } from "uuid";
import {
  FormEvent,
  HtmlHTMLAttributes,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { Avatar } from "./Avatar";
import { Comment, CommentProps } from "./Commnet";
import styles from "./Post.module.css";

type Content = {
  type: string;
  content: string;
};

export type PostProps = {
  id: string;
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  };
  publishedAt: Date;
  content: Content[];
};

const fetchComments: CommentProps[] = [
  {
    id: uuidv4(),
    author: {
      name: "John",
      avatarUrl: "https://github.com/danvitoriano.png",
      publishedAt: new Date("2022-06-15 00:00:00"),
    },
    comment: "Muito bem fulando parabens",
  },
  {
    id: uuidv4(),
    author: {
      name: "Maria",
      avatarUrl: "https://github.com/glaucia86.png",
      publishedAt: new Date("2022-06-18 00:00:00"),
    },
    comment: "Nossa que demais.",
  },
];

export function Post({ author, publishedAt, content }: PostProps) {
  const refTextArea = useRef<HTMLTextAreaElement>(null);
  const [comments, setComments] = useState<CommentProps[]>([]);

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
    setComments(comments.filter((i) => i.id !== id));
  };

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();

    const newComment: CommentProps = {
      id: uuidv4(),
      author: {
        avatarUrl: "https://github.com/breakzplatform.png",
        name: "Boot",
        publishedAt: new Date(Date.now()),
      },
      comment: "refTextArea.current?.value",
    };

    setComments([...comments, newComment]);

    refTextArea.current?.value === "";

    console.log(refTextArea.current?.value);
  };

  useEffect(() => {
    setComments(fetchComments);
  }, []);

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
            return <p> {line.content} </p>;
          }
          if (line.type === "link") {
            return (
              <p>
                <a href="#">👉 {line.content} </a>{" "}
              </p>
            );
          }
          return <p key={line.content}>{line.content}</p>;
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu comentario</strong>

        <textarea ref={refTextArea} placeholder="Deixe seu comentario" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((item) => (
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
