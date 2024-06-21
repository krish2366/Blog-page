import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const [isPending,setIsPending] = useState(false)

    const history = useHistory();


    const  handleSubmit = (e) =>{
        e.preventDefault();
        setIsPending(true)


        const blog = {title,body,author};
        console.log(blog);
        fetch("http://localhost:8000/blogs",{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log("new blog added");
            setIsPending(false);
            //history.go(-1); //.go takes us to the no. of web pages after/before the current page,here -1 denotes to go to previous page,seems uncontrolable from our side so we use .push to go to specific web page.
            history.push('/');//we write our route to the web page here.

        })
    }


    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog's Author:</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
            {/* <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p> */}
        </div>
    );
}
 
export default Create;