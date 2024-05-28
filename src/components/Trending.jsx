import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";



const Trending = ({ recipes }) => {



    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-14">
                <div className="w-full"><h2 className="text-3xl md:text-6xl font-bold">Recipes on Trends</h2></div>
                <div className="w-full mt-5"> <p>Recipe Cloud is your go-to app for discovering the latest food trends. Dive into exciting recipes featuring plant-based ingredients, global fusion flavors, and vibrant, Instagram-worthy dishes. Explore the rise of fermented foods, comforting one-pot meals, and indulgent desserts with a healthy twist. Whether you are a culinary novice or a seasoned chef, Recipe Cloud keeps you inspired with fresh ideas and trending dishes that are easy to recreate at home. Cook, share, and savor the trends!
                </p></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-10">
                {
                    recipes?.reverse()
                        ?.slice(0, 3)
                        ?.map(recipe => <RecipeCard
                            key={recipe._id}
                            recipe={recipe}
                        ></RecipeCard>)
                }

            </div>
            <div className="flex justify-center items mb-6">
                <Link to='/all-recipes' className="btn btn-secondary text-white w-1/4 text-lg font-bold uppercase">
                    Show all recipes
                </Link>
            </div>
        </div>
    );
};

export default Trending;