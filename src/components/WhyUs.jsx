import { whyUs } from "../../public/data/Db"

export const WhyUs = () => {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center">
                <div className="md:mx-24 mx-5 py-24 md:py-0">
                    <h1 className="!z-50 text-2xl md:text-3xl relative font-medium ">
                        <span className="z-0 w-fit h-3 absolute left-0 bottom-0 bg-yellow-200 text-sky-700">
                            Kenapa Pilih Kami?
                        </span>
                    </h1>

                    <div className="mt-10 flex md:flex-row flex-col gap-5  bg-gradient-to-b from-sky-100 to-transparent rounded-t-[40px] p-3">
                        {whyUs.map((el, idx) => (
                            <div key={idx} className="md:w-[25%] duration-300 ease-in-out hover:scale-95 hover:shadow-mainShadow origin-bottom grow h-auto p-10 border border-sky-200 rounded-[30px]">
                                <div className="mb-10 space-y-3 text-sky-900">
                                    <div className="text-3xl">
                                        {el.icon}
                                    </div>
                                    <h1 className="md:text-2xl font-medium text-xl">
                                        {el.title}
                                    </h1>
                                </div>
                                <h2>
                                    {el.description}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}