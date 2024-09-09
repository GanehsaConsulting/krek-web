import { faq } from "../../public/data/Db"

export const Faqs = ({ id }) => {
    return (
        <>
            <section id={id} className="md:mx-24 mx-5 min-h-screen flex items-center justify-center md:my-0 my-10">
                <div className="flex md:flex-row flex-col gap-5">
                    <div className="flex justify-center items-center rounded-[30px] md:w-[50%] md:py-0 py-10 h-auto bg-sky-100 duration-300 hover:invert">
                        <h1 className="text-5xl md:text-7xl text-sky-800">
                            FAQ
                        </h1>
                    </div>
                    <div className="md:w-[50%] space-y-3">
                        {faq.map((el, idx) => (
                            <div key={idx} className="collapse collapse-arrow bg-base-200 !rounded-[30px]">
                                <input type="radio" name="my-accordion-2" className="w-full" />
                                <div className="collapse-title md:text-xl font-medium ">{el.question}</div>
                                <div className="collapse-content">
                                    <p>{el.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}