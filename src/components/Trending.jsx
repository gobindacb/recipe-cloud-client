import RecipeCard from "./RecipeCard";



const Trending = ({recipes}) => {

    

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-10">
            {
                recipes.map(recipe => <RecipeCard
                key={recipe._id}
                recipe={recipe}
                ></RecipeCard>)
            }
        </div>
    );
};

export default Trending;