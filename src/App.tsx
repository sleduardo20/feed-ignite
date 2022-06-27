import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { PostProps } from "./model/post";

const posts: PostProps[] = [
  {
    id: uuidv4(),
    author: {
      name: "Eduardo Lima",
      avatarUrl: "https://avatars.githubusercontent.com/u/56615577?v=4",
      role: "FrontEnd Developer",
    },
    content: [
      { id: uuidv4(), type: "paragraph", content: "Fala galeraa 👋" },
      {
        id: uuidv4(),
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { id: uuidv4(), type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-18 19:45:00"),
    comments: [
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
    ],
  },
  {
    id: uuidv4(),
    author: {
      name: "Camila Nepomuceno",
      avatarUrl: "https://avatars.githubusercontent.com/u/47459889?v=4",
      role: "Developer",
    },
    content: [
      { id: uuidv4(), type: "paragraph", content: "Fala galeraa 👋" },
      {
        id: uuidv4(),
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { id: uuidv4(), type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-17 19:45:00"),
    comments: [
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
    ],
  },
  {
    id: uuidv4(),
    author: {
      name: "Guilherme Rodz",
      avatarUrl: "https://avatars.githubusercontent.com/u/10366880?v=4",
      role: "Software Enginee",
    },
    content: [
      { id: uuidv4(), type: "paragraph", content: "Fala galeraa 👋" },
      {
        id: uuidv4(),
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { id: uuidv4(), type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-16 19:45:00"),
    comments: [
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
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
