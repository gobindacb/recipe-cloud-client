

const RecipeCard = ({ recipe }) => {

    const {image, title, category} = recipe;


    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img className="w-full h-48" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{category}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                    See Details
                </button>
            </div>
        </div>
    );
};

export default RecipeCard;