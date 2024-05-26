import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import toast from "react-hot-toast";


const ManageRecipe = () => {

    const { user } = UseAuth()
    const [recipes, setRecipes] = useState([])

    useEffect(() => {

        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/recipes/${user?.email}`)
        setRecipes(data)
    }

    // delete recipe post
    const handleDelete = async (id) => {
        const confirmation = await swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });
    
        if (confirmation.isConfirmed) {
            try {
                const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/recipe/${id}`);
                console.log(data);
                toast.success('Delete successfully');
                getData();
            } catch (err) {
                console.log(err);
                toast.error(err.message);
            }
        }
    };

    return (
        <div>
            <h2>Manage your all recipes</h2>
            <div className="container p-2 mx-auto sm:p-4">
                <Helmet>
                    <title>
                        Recipe Cloud | Manage My Recipe
                    </title>
                </Helmet>

                {recipes.length > 0 ? (
                    <div>
                        <h2 className="mb-4 text-2xl font-semibold leading-tight">My Recipe: <span className="rounded-md bg-violet-500 p-1 text-xs text-white">{recipes?.length} post</span></h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-xs">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col className="w-24" />
                                </colgroup>
                                <thead className="border-b border-opacity-20">
                                    <tr className="text-left">
                                        <th className="p-3">Image</th>
                                        <th className="p-3">Category</th>
                                        <th className="p-3">Title</th>
                                        <th className="p-3">Cost</th>
                                        <th className="p-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        recipes?.map(recipe =>
                                            <tr key={recipe._id} className="border-b border-opacity-20">
                                                <td className="p-3">
                                                    <img className="w-14 h-14" src={recipe?.image} alt="thumbnail" />
                                                </td>
                                                <td className="p-3">
                                                    <p className="font-bold">{recipe?.category}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p className="font-bold">{recipe?.title}</p>
                                                    
                                                </td>
                                                <td className="p-3">
                                                    <p>{recipe?.cost}</p>
                                                </td>
                                                <td className="p-3 flex items-center justify-center flex-col gap-1">
                                                    <Link to={`/post/${recipe?._id}`} className="btn btn-primary btn-xs"><span>Details</span></Link>
                                                    <Link to={`/dashboard/update/${recipe?._id}`} className="btn btn-accent btn-xs"><span>Edit</span></Link>
                                                    <button onClick={() => handleDelete(recipe?._id)} className="btn btn-secondary btn-xs"><span>Delete</span></button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <button disabled className="mt-4 bg-blue-300 text-gray-500 cursor-not-allowed font-semibold py-2 px-4 rounded w-full max-w-xs">You have nothing to manage</button>
                )}
            </div>
        </div>
    );
};

export default ManageRecipe;