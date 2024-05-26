import { useEffect, useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

const AllRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/recipes`)
            .then(response => {
                setRecipes(response.data);
                setFilteredRecipes(response.data); // Set initial filtered recipes
            })
            .catch(error => {
                console.error('There was an error fetching the recipes!', error);
            });
    }, []);

    const handleSearch = () => {
        const filtered = recipes.filter(recipe =>
            recipe.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRecipes(filtered);
    };

    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
    };

    return (
        <div className="p-4">
            <div className="flex mb-4 w-1/4">
                <input
                    type="text"
                    placeholder="Search by category"
                    className="p-2 border border-gray-300 rounded mr-2 flex-grow"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Search
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredRecipes.map((recipe) => (
                    <div key={recipe._id} className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                        <img className="w-full" src={recipe.image} alt={recipe.name} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{recipe.title}</div>
                            <p className='text-lg text-yellow-500 font-bold'>{recipe?.category}</p>
                            <p className="text-gray-700 text-base">{truncateDescription(recipe.description, 10)}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded">
                                <Link to={`/details/${recipe?._id}`}>See Details</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllRecipes;