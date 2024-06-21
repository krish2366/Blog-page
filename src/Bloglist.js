import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = (props) => {
    const blogs = props.blogs;
    const title =props.title;
    return (
        <div className="blog-list">
            <h2> {title} </h2>
            {blogs.map(blog => (
                <div className="blog-review" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>It is wriiten by {blog.author}</p>
                    </Link>
                   
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;