import { contacts, navbarLink, urlFriendly } from "../../public/data/Db"

export const Footer = () => {
    return (
        <>
            <footer className="min-h-0h-[50lvh] w-full bg-sky-100 rounded-t-[30px] mt-24">
                <div className="md:px-24 md:py-16 px-5 py-10">
                    <div className="flex md:flex-row flex-col justify-between w-full h-full gap-10">
                        <div className="md:w-[50%]">
                            <h1 className="text-lg font-semibold">
                                PT KREK TRANSFORMASI DIGITAL
                            </h1>
                            <a href={contacts.address.link}>
                                <div className="">
                                    Menara Cakrawala 12th Floor Unit 5A, Jalan M.H. Thamrin, <br />
                                    Desa/Kelurahan Kebon Sirih, Kec. Menteng, Kota Adm. <br />
                                    Jakarta Pusat, Provinsi DKI Jakarta 10340
                                </div>
                            </a>
                            <div className="flex gap-3 mt-3">
                                {contacts.socmed.map((el, idx) => (
                                    <a href={el.link} key={idx}>
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                            {el.logo}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="md:max-w-[50%] bg-sky-50 h-full p-10 rounded-3xl flex md:flex-row flex-col gap-10 md:gap-20">
                            <div>
                                <p className="footer-title">
                                    Navigasi
                                </p>
                                <div className="flex flex-col">
                                    {navbarLink.map((e, i) => (
                                        <a key={i} className="link link-hover cursor-pointer" href={"#" + urlFriendly(e.label)}>
                                            {e.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="footer-title">
                                    Kontak
                                </p>
                                <div className="flex flex-col">
                                    <a className="link link-hover cursor-pointer text-wrap" href={contacts.mail.link}>
                                        {contacts.mail.name}
                                    </a>
                                    <a className="link link-hover cursor-pointer" href={contacts.phone.link}>
                                        {contacts.phone.name}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center bg-sky-50 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved PT KREK TRANSFORMASI DIGITAL </p>
                </aside>
            </footer>
        </>
    )
}