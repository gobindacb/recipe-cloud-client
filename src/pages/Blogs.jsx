import { useLoaderData } from "react-router-dom";
import BlogCard from "../components/BlogCard";


const Blogs = () => {

    const blogs = useLoaderData()

    return (
        <div className="container px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    blogs?.map(blog => <BlogCard
                        key={blog._id}
                        blog={blog}
                    ></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;