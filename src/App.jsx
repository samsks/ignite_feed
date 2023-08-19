import { Post } from "./post";

export function App() {

  return (
    <>
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
    </>
  )
}
