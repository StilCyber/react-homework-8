import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input'
import classes from './FormPost.module.css';


const FormPost = ({create}) => {

    const [field, setField] = useState({title: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...field, id: Date.now()
        }
        create(newPost)
        setField({title: ''})
    }

    

    return (
        <form className={classes.form}>
            <Input value={field.title} onChange={e => setField({...field, title: e.target.value})} placeholder='Добавить пост'/>
            <Button onClick={addNewPost}>Add post</Button>
        </form>
    )
}

export default FormPost; 