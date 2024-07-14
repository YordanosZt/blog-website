const Footer = () => {
    const FooterList = (props) => {
        return (
            <div>
                <h4 className="text-center md:text-left font-bold text-lg mb-4">
                    {props.title}
                </h4>

                <ul className="flex flex-col gap-3">
                    {props.list.map((item) => (
                        <li className="text-sm text-center md:text-left text-gray-500 cursor-pointer hover:underline">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="bg-dark text-white m-5 rounded-3xl p-14">
            <div className="text-center">
                <h1 className="font-bold text-3xl mb-2">
                    Let's get started on something Great!
                </h1>
                <p className="text-gray-300">
                    Joint over 4000+ startups already growing with Untitled.
                </p>
                <div className="flex gap-3 justify-center mt-8">
                    <button className="py-3 px-5 text-sm border-2 border-white hover:bg-gray-500 transition duration-100 rounded-lg">
                        Chat to Us
                    </button>
                    <button className="py-3 px-5 text-sm border-2 border-white hover:bg-gray-500 transition duration-100 rounded-lg">
                        Get Started
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 justify-center md:flex-nowrap md:justify-between w-full my-12">
                <FooterList
                    title="Product"
                    list={[
                        "Overview",
                        "Features",
                        "Solutions",
                        "Tutorials",
                        "Pricing",
                        "Releases",
                    ]}
                />
                <FooterList
                    title="Company"
                    list={[
                        "About us",
                        "Careers",
                        "Press",
                        "News",
                        "Media kit",
                        "Contact",
                    ]}
                />
                <FooterList
                    title="Resources"
                    list={[
                        "Blog",
                        "Newsletter",
                        "Events",
                        "Help centre",
                        "Tutorials",
                        "Support",
                    ]}
                />
                <FooterList
                    title="Use cases"
                    list={[
                        "Startups",
                        "Enterprise",
                        "Government",
                        "SaaS centre",
                        "Marketplaces",
                        "Ecommerce",
                    ]}
                />
                <FooterList
                    title="Socials"
                    list={[
                        "Twitter",
                        "LinkedIn",
                        "Facebook",
                        "GitHub",
                        "AngelList",
                        "Dribbble",
                    ]}
                />
                <FooterList
                    title="Legal"
                    list={[
                        "Terms",
                        "Privacy",
                        "Cookies",
                        "Licenses",
                        "Settings",
                        "Contact",
                    ]}
                />
            </div>
            <div className="flex flex-col gap-6 items-center sm:flex-row sm:justify-between">
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

                    <h1 className="text-xl">Untitled UI</h1>
                </div>

                <p className="text-gray-800 text-sm">
                    ©️ 2024 Yordanos. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
