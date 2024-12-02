"use client"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navbarLink, urlFriendly } from "../../public/data/Db";
import Image from "next/image";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const path = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className={`navbar bg-base-100 z-[100]
                ${isScrolled ? "bg-white bg-opacity-50 backdrop-blur-md fixed shadow-mainShadow" : "bg-transparent sticky"}
                `}>
                <div className="flex-1">
                    <a className={`btn btn-ghost text-xl ${isScrolled ? "text-black" : "text-black"}`}>
                        <Image
                            width={50}
                            height={50}
                            src="/Logo.png"
                            alt="Krek Logo" />
                        <span className="md:block hidden">
                            PT KREK TRANSFORMASI DIGITAL
                        </span>
                    </a>
                </div>
                <div className="flex-none hidden md:block">
                    <ul className={`menu menu-horizontal px-1 ${isScrolled ? "text-black" : "text-black"}`}>
                        {navbarLink.map((el, idx) => (
                            <li key={idx}>
                                <a
                                    href={`#${urlFriendly(el.label)}`}
                                >
                                    {el.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navbarLink.map((el, idx) => (
                                <li key={idx}>
                                    <a
                                        href={`#${urlFriendly(el.label)}`}
                                    >
                                        {el.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}