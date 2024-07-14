const Blogs = () => {
    const BlogItem = () => {
        return (
            <div>
                <img
                    src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image"
                    className="w-full h-56 mb-3 rounded-2xl object-cover"
                />
                <h1 className="font-bold text-xl mb-2">
                    Lorem ipsum dolor sit.
                </h1>
                <p className="text-sm text-gray-400 leading-5 w-full mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iusto, est cumque molestias velit inventore dolore!
                </p>
                <div className="flex items-center gap-2">
                    <img
                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                        className="rounded-full w-6 h-6"
                    />
                    <p className="text-xs font-bold">John Doe</p>
                    <p className="text-xs text-gray-500">1 Jan 2000</p>
                </div>
            </div>
        );
    };

    return (
        <div className="px-5 lg:px-24 my-20">
            <h1 className="font-bold text-lg mb-7">Recent Blog Posts</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mb-10">
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>

            <button className="bg-primary border-2 border-primary px-5 py-3 rounded-md text-white text-xs block mx-auto hover:bg-light hover:text-dark transition duration-200">
                Load More
            </button>
        </div>
    );
};

export default Blogs;
