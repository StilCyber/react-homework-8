import classes from './PostItem.module.css';
import Button from '../UI/Button/Button'

const PostItem = ({post, number, remove}) => {
    return (
        <div className={classes.post}>
            <div className={classes.content}>
                <p>{number}</p>
                <p>{post.title}</p>
            </div>
            <Button onClick={() => remove(post)}>Удалить пост</Button>
        </div>
        
    )
}

export default PostItem;