import { contacts } from "../../public/data/Db"

export const Contact = ({ id }) => {
    return (
        <>
            <section id={id} class="min-h-screen flex items-center justify-center mx-5 lg:mx-24 space-y-5">
                <div className="space-y-5">
                    <div className="relative">
                        <h1 className="absolute bottom-0 text-2xl md:text-4xl font-medium">
                            Kontak & Lokasi
                        </h1>
                        <div className="w-[30lvw] md:w-[15lvw] h-5 bg-sky-200"></div>
                    </div>
                    <div className="space-y-5">
                        <a
                            href={contacts.address.link}
                        >
                            <div
                                className="p-5 rounded-[30px] bg-gray-100 duration-300 ease-in-out hover:scale-95 hover:invert"

                            >
                                <h1>
                                    {contacts.address.label}
                                </h1>
                                <h2 className="text-lg md:text-xl font-medium">
                                    {contacts.address.data}
                                </h2>
                            </div>
                        </a>
                        <div className="flex md:flex-row flex-col gap-5">
                            {contacts.socmed.map((el, idx) => (
                                <a key={idx} href={el.link} className="w-full">
                                    <div className="flex items-center justify-center gap-2 p-10 grow bg-gray-100 rounded-[30px] duration-300 ease-in-out hover:scale-95 hover:invert">
                                        <span className="text-2xl md:text-4xl text-sky-900">
                                            {el.logo}
                                        </span>
                                        <h1 className="text-xl md:text-3xl">
                                            {el.name}
                                        </h1>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mapouter rounded-3xl overflow-hidden grow h-[50lvh] md:h-[50lvh] w-full">
                        <div className="overflow-hidden rounded-box h-full">
                            <iframe
                                className="w-full h-full"
                                src={contacts.address.embed}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}