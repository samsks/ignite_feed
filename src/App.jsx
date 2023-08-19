import { Post } from "./Post";
import { Header } from "./components/Header";
import styles from './App.module.css';
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          title="Post 1"
          content="Post content"
          author="Sam Vieira"
          />
          <Post 
            title="Post 2"
            content="Post content"
            author="Sam Meireles"
          />
        </main>
      </div>
    </div>
  )
}
