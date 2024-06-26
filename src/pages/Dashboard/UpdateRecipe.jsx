import axios from "axios";
import UseAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert2";


const UpdateRecipe = () => {
    const recipe = useLoaderData()
    console.log(recipe)
    const {user} = UseAuth()
    const navigate = useNavigate()
    
    // update or edit a post
    const handleUpdateSubmit = async e =>{
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const title = form.title.value
        const cost = parseFloat(form.cost.value)
        const category = form.category.value
        const ingredients = form.ingredients.value
        const description = form.description.value
        const confirmation = await swal.fire({
            title: 'Are you sure to edit?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        });

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
        if (confirmation.isConfirmed) {
            try {
                const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/recipe/${recipe._id}`, postData)
                console.log(data)
                toast.success('Update & save the post successfully')
                navigate('/dashboard/manage-recipe')
            } catch (err) {
                console.log(err)
                toast.error(err.message)
            }
        }
        
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-slate-200 p-4 rounded-md">
                <div className="bg-purple-300 p-2 flex justify-center items-center rounded-xl">
                    <h2 className="text-3xl font-bold">Update Your Recipes {recipe.title}</h2>
                </div>
                <form onSubmit={handleUpdateSubmit}>
                    <div className="flex gap-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your food image</span>
                            </div>
                            <input type="text" name="image" defaultValue={recipe?.image} className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your recipe title</span>
                            </div>
                            <input type="text" defaultValue={recipe?.title} name="title" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="flex gap-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your food cost</span>
                            </div>
                            <input type="number" defaultValue={recipe?.cost} name="cost" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Recipe category</span>
                            </div>
                            <select
                                name='category'
                                id='category'
                                defaultValue={recipe?.category}
                                className='border p-3 rounded-md w-full max-w-xs'
                            >
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
                            <textarea name="ingredients" className="textarea textarea-bordered h-24" defaultValue={recipe?.ingredients}></textarea>
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>
                            <textarea name="description" className="textarea textarea-bordered h-24" defaultValue={recipe?.description}></textarea>
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

export default UpdateRecipe;