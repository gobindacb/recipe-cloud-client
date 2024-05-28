import axios from "axios";
import UseAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddRecipe = () => {
    const { user } = UseAuth();

    const navigate = useNavigate()

    const handleRecipeSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const title = form.title.value
        const cost = parseFloat(form.cost.value)
        const category = form.category.value
        const ingredients = form.ingredients.value
        const description = form.description.value

        const postData = {
            image,
            title,
            cost,
            category,
            ingredients,
            description,

            author: {
                name: user?.displayName,
                email: user?.email,
                photo: user?.photoURL,
            },
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/post`, postData)
            console.log(data)
            toast.success('Congrats! Your recipe post successfully.')
            navigate('/dashboard/manage-recipe')
        } catch (err) {
            toast.error(err)
            console.log(err)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-slate-200 p-4 rounded-md">
                <div className="bg-purple-300 p-2 flex justify-center items-center rounded-xl">
                    <h2 className="text-3xl font-bold">Add Your Recipes</h2>
                </div>
                <form onSubmit={handleRecipeSubmit}>
                    <div className="flex gap-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your food image</span>
                            </div>
                            <input type="text" name="image" placeholder="image url" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your recipe title</span>
                            </div>
                            <input type="text" placeholder="title" name="title" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="flex gap-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your food cost</span>
                            </div>
                            <input type="number" placeholder="cost" name="cost" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Recipe category</span>
                            </div>
                            <select
                                name='category'
                                id='category'
                                className='border p-3 rounded-md w-full max-w-xs'
                            >
                                <option value='Veg'>Veg</option>
                                <option value='Continental'>Continental</option>
                                <option value='Salad'>Salad</option>
                                <option value='Pizza'>Pizza</option>
                                <option value='Dessert'>Dessert</option>
                                <option value='Drinks'>Drinks</option>
                                <option value='Indian'>Indian</option>
                                <option value='Bangla'>Bangla</option>
                                <option value='Chinese'>Chinese</option>
                                <option value='Thai'>Thai</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex gap-10">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Ingredients</span>
                            </div>
                            <textarea name="ingredients" className="textarea textarea-bordered h-24" placeholder="Write Ingredients of your recipe"></textarea>
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>
                            <textarea name="description" className="textarea textarea-bordered h-24" placeholder="Write description of your recipe"></textarea>
                        </label>
                    </div>
                    <div className="flex gap-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">What is your name?</span>
                            </div>
                            <input type="text" defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">What is your email?</span>
                            </div>
                            <input type="text" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="flex justify-center items-center">
                        <input className="btn btn-primary p-2 text-3xl rounded-xl text-white w-full mt-3" type="submit" value="Submit Recipe" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRecipe;