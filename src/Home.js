import BlogList from './Bloglist';
import useFetch from './useFetch';

const Home = () => {

    const {data: blogs ,isPending ,error} = useFetch("http://localhost:8000/blogs")
    

    // const handleDelete=(id) =>{
    //     const newBlogs = blogs.filter( blog => (blog.id !== id) )
    //     setData(newBlogs);
    // }

    return ( 
        <div className="home">
            <br /><br /><br />
            { error && <div> {error} </div>  }
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs = {blogs} title="All Blogs" />}
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === "mario")} title="Mario's Blogs" />
            <BlogList blogs = {blogs.filter((blog) => blog.author === "yoshi" )} title="yoshi's Blogs" /> */}
            
        </div> 
    );
}
 
export default Home;