import { VisionMission } from "../../public/data/Db"

export const VisionMision = ({ id }) => {
    return (
        <>
            <section id={id} className="md:mx-24 mx-5 min-h-screen flex justify-center items-center">
                <div className="flex md:flex-row flex-col gap-5 md:gap-10">
                    <div className="p-8 md:p-12 bg-sky-100 w-fit h-auto rounded-[30px]">
                        <h1 className="text-4xl">
                            Vision <br />
                            <span className="truncate text-sky-800">
                                & Mission
                            </span>
                        </h1>
                    </div>
                    <div className="flex flex-col gap-5 md:gap-10">
                        <div className="p-5 md:p-10 bg-[#ebe8e3] rounded-[30px] duration-300 hover:invert">
                            <h2 className="px-4 py-2 rounded-full border border-gray-700 mb-5 w-fit text-sm uppercase">
                                Vision
                            </h2>
                            <p className="text-lg md:text-xl">
                                {VisionMission.vision}
                            </p>
                        </div>
                        <div className="p-5 md:p-10 bg-[#7a6d56] rounded-[30px] duration-300 hover:invert text-white">
                            <h2 className="px-4 py-2 rounded-full border border-gray-200 mb-5 w-fit text-sm uppercase">
                                Mission
                            </h2>
                            <div className="text-lg md:text-xl">
                                {VisionMission.mission}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}