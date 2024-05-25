import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Trending from "../../components/Trending";


const Home = () => {
    const recipes = useLoaderData();
    return (
        <div className="container px-6 mx-auto">
           <Banner></Banner>
           <Trending recipes={recipes}></Trending>
        </div>
    );
};

export default Home;