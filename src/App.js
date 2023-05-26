import { useState } from "react";
import PostContainer from "./components/Post/PostContainer";
import FormPost from "./components/UI/Form/FormPost";


function App() {

const [posts, setPosts] = useState([
  {id: 1, title: 'Javascript'},
  {id: 2, title: 'Python'}
])

const removePost = (removeItem) => {
  setPosts(posts.filter(f => f.id !== removeItem.id))
}
const createPost = (newPost) => {
  setPosts([...posts, newPost])
}



  return (
    <div className="App">
      <div>
        <FormPost create={createPost}/>
        {posts.length !== 0
        ? <PostContainer posts={posts} remove={removePost} />
        : <div style={{textAlign: 'center'}}>Постов не найдено</div>
        }
      </div>
    </div>
  );
}

export default App;
