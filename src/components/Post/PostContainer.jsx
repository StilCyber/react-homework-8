import classes from './PostContainer.module.css';
import PostItem from './PostItem';

const PostContainer = ({posts, remove}) => {
   return (
    <div className={classes.posts}>
        {posts.map((m, index) => <PostItem number={index + 1} post={m} remove={remove} key={posts.id}/>)}
    </div>
   )
}

export default PostContainer; 