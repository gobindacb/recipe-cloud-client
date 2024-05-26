

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Recipe Cloud</h1>
                    <p className="text-yellow-500 py-1">Cook, Share, Inspire</p>
                    <p className="py-3">Welcome to Recipe Cloud, your ultimate destination for discovering and sharing delightful <br /> recipes from around the world. Our platform is designed for food enthusiasts of all skill <br /> levels to explore new culinary creations, share their own favorite dishes, and connect with <br /> a vibrant community of fellow food lovers.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;