

const BlogCard = ({blog}) => {
    return (
        <div className="max-w-sm w-full">
            <div className="bg-white rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img className="w-full h-48 object-cover" src={blog.image} alt={blog.title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{blog.title}</div>
                </div>
                <div className="px-6 py-4 flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src={blog.author_photo} alt={blog.author_name} />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{blog.author_name}</p>
                        <p className="text-gray-600">{blog.category}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;