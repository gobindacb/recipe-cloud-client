
const Connecting = () => {
    return (
        <section className="p-6 bg-gray-100 text-gray-800">
            <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-50">
                    <span className="block mb-2 text-violet-600">Cook, Share, Inspire</span>
                    <h1 className="text-3xl font-extrabold text-gray-900">Connect with <span className="text-5xl text-yellow-600">Recipe Cloud</span></h1>
                    <p className="my-8">
                        <span className="font-medium text-gray-900"></span>Welcome to Recipe Cloud, your ultimate destination for discovering and sharing delightful recipes from around the world.
                    </p>
                    <form noValidate="" action="" className="self-stretch space-y-3">
                        <div>
                            <label htmlFor="name" className="text-sm sr-only">Your name</label>
                            <input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-violet-600 border-gray-300" />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="text-sm sr-only">Email address</label>
                            <input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-violet-600 border-red-300" />
                        </div>
                        <button type="button" className="w-full py-2 font-semibold rounded bg-violet-600 text-gray-50">Join the waitlist</button>
                    </form>
                </div>
                <img src="https://static.toiimg.com/photo/106936864.cms" alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" />
            </div>
        </section>
    );
};

export default Connecting;