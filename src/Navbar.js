import { useState } from "react";

const Navbar = () => {
    const [isMenuOn, setIsMenuOn] = useState(false);

    const toggleMenu = () => {
        setIsMenuOn(!isMenuOn);

        if (isMenuOn)
            document.querySelector("#menu").classList.replace("flex", "hidden");
        else
            document.querySelector("#menu").classList.replace("hidden", "flex");
    };

    return (
        <nav className="px-5 py-5 my-0 flex justify-between items-center text-dark font-bold">
            <div className="flex gap-2 items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                </svg>

                <h1 className="text-xl">Afro Blogs</h1>
            </div>

            <ul
                id="menu"
                className="gap-7 text-xs flex flex-col absolute top-11 right-11 z-50 shadow-lg bg-white p-6 md:static md:flex md:flex-row md:shadow-none md:p-0"
            >
                <li className="cursor-pointer transition duration-100 ease-linear hover:text-primary">
                    Home
                </li>
                <li className="flex items-center gap-2 cursor-pointer transition duration-100 ease-linear hover:text-primary">
                    <p>Products</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                        stroke="currentColor"
                        class="size-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </li>
                <li className="flex items-center gap-2 cursor-pointer transition duration-100 ease-linear hover:text-primary">
                    <p>Blogs</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                        stroke="currentColor"
                        class="size-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </li>
                <li className="cursor-pointer transition duration-100 ease-linear hover:text-primary">
                    Pricing
                </li>
                <li className="cursor-pointer transition duration-100 ease-linear hover:text-primary">
                    About us
                </li>
            </ul>

            <div className="flex items-center gap-5 text-xs md:flex md:text-sm">
                <button>Log in</button>
                <button className="text-light bg-dark rounded-md px-4 py-2">
                    Sign up
                </button>
                <div
                    className="block md:hidden cursor-pointer"
                    onClick={toggleMenu}
                >
                    {isMenuOn ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 hover:stroke-primary transition duration-100"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 hover:stroke-primary transition duration-100"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 9h16.5m-16.5 6.75h16.5"
                            />
                        </svg>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
