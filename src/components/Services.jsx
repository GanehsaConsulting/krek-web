import { services } from "../../public/data/Db"

export const Services = ({ id }) => {
    return (
        <>
            <section id={id} className="md:mx-24 mx-5 space-y-10 md:py-24 py-10">
                <div className="relative">
                    <h1 className="absolute bottom-0 text-2xl md:text-4xl font-medium">
                        Layanan Unggulan Kami
                    </h1>
                    <div className="w-[50lvw] md:w-[30lvw] h-5 bg-sky-200"></div>
                </div>

                <div className="flex md:flex-row flex-col gap-5 mt10">
                    {services.map((el, idx) => (
                        <div
                            key={idx}
                            className="p-10 rounded-[30px] bg-gray-100 hover:scale-105 origin-bottom duration-300 ease-in-out hover:shadow-mainShadow hover:invert"
                        >
                            <div className="text-5xl mb-12">
                                {el.icon}
                            </div>

                            <div className="space-y-2">
                                <h1 className="text-sky-800 font-semibold text-2xl">
                                    {el.name}
                                </h1>
                                <h2 className="bg-gradient-to-bl from-sky-600 to-gray-800 bg-clip-text text-transparent">
                                    {el.desc}
                                </h2>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}