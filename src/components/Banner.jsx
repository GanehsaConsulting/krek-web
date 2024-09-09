import Image from "next/image"
import { products } from "../../public/data/Db"

export const Banner = ({ id }) => {
    return (
        <>
            <section id={id} className="overflow-hidden">
                <div className="flex flex-col gap-5 md:gap-10">
                    <div className="flex md:flex-row flex-col justify-between items-center bg-sky-100 rounded-[30px] mx-5 md:pl-10 py-5 md:py-0 px-5 md:px-0">
                        <div className="space-y-3">
                            <div className="md:space-y-1 space-y-2 mb-3">
                                <h1 className="text-xl md:text-3xl font-semibold">
                                    Temukan Fashion Terbaik  untuk Gaya Sehari-Hari!
                                </h1>
                                <h2 className="text-sm">
                                    Koleksi Pakaian Wanita Modern dan Berkualitas untuk Tampilan Sempurna
                                </h2>
                            </div>
                            <a href="#tentang-kami">
                                <button className="px-4 py-2 bg-sky-200 border border-sky-400 rounded-full w-fit font-bold">
                                    Explore!
                                </button>
                            </a>
                        </div>
                        <Image
                            width={500}
                            height={500}
                            className="w-[20lvw] rounded-e-[30px] hidden md:block"
                            src={'/banner.png'}
                            alt="" />
                    </div>
                    <div className="marquee">
                        <div className="lex gap-5 md:gap-10 marquee-content">
                            {products.concat(products).map((el, idx) => (
                                <div key={idx} className="marquee-items md:min-w-[30vw] min-w-[80lvw] h-[50lvh] md:h-[45vh] relative group duration-300 ease-in-out hover:drop-shadow-md">
                                    <img
                                        className="rounded-[30px] h-full w-full object-cover"
                                        src={el.img}
                                        alt={el.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}