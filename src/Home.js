const Home = () => {
    return (
        <div className="px-5 relative">
            <div className="relative rounded-3xl overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="home background image"
                    className="w-full h-dvh object-cover"
                />
                <div className="absolute bg-gradient-to-b from-transparent to-black w-full h-full z-10 top-0 left-0"></div>
            </div>

            <div className="absolute bottom-10 left-14 text-white z-20">
                <h4 className="text-lg">Featured</h4>
                <h1 className="my-3 text-2xl sm:text-3xl md:text-5xl leading-tight font-bold">
                    Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                    elit. Vitae, illo.
                </h1>
                <p className="text-gray-400 leading-6 text-sm w-3/4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eius suscipit placeat cumque aperiam nam molestias
                    officia provident, excepturi corrupti tempora architecto
                    expedita. Sunt neque harum, consectetur illum dolore
                    aspernatur.
                </p>
            </div>
        </div>
    );
};

export default Home;
