import { aboutUs } from "../../public/data/Db"

export const AboutUs = ({ id }) => {
    return (
        <>
            <section id={id} className="min-h-screen flex justify-center items-center  my-10 py-16 md:px-24 px-5 bg-gradient-to-b from-gray-100 to-transparent rounded-t-[30px]">
                <div className="flex md:flex-row flex-col gap-10">
                    <div className="md:w-[50%]">
                        <img
                            className="relative rounded-[30px]"
                            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div className="flex flex-col justify-end space-y-10 md:w-[50%]">
                        <div className="uppercase text-xl tracking-wider relative">
                            <p className="absolute inset-0">
                                Tentang Kami
                            </p>
                            <div className="w-24 h-4 bg-sky-100 -z-0" />
                        </div>
                        <div>
                            <p className="text-justify">
                                {aboutUs}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}