"use client"
import { products } from "../../public/data/Db"
import { FaCirclePlus, FaPlus } from "react-icons/fa6";

export const Products = ({id}) => {
    return (
        <>
            <section id={id} className="bg-gradient-to-b from-sky-100 to-transparent rounded-t-[30px] md:py-24 md:px-24 py-10">
                <div className="md:px-0 px-5 mb-16">
                    <h1 className="!z-50 text-2xl md:text-3xl relative font-medium ">
                        <span className="z-0 w-fit h-3 absolute left-0 bottom-0 bg-yellow-200">
                            Jelajahi Koleksi Produk Kami
                        </span>
                    </h1>
                </div>

                <div className="md:flex md:flex-row carousel w-[100%] gap-5">
                    {products.map((el, idx) => (
                        <>
                            <div
                                onClick={() => document.getElementById(`modal-${idx}`).showModal()}
                                key={idx}
                                className={`${idx === 0 ? "ml-5 md:ml-0" : ""} ${idx === products.length - 1 ? "mr-5 md:mr-0" : ""} hover:cursor-pointer group md:w-[30%] min-w-[35lvh] md:min-w-[0%] h-[60lvh] hover:w-[100%] duration-300 ease-in-out transition-all relative`}
                            >
                                <img
                                    className="w-full h-full object-cover rounded-[30px]"
                                    src={el.img}
                                    alt={el.name} />
                                <div className="absolute top-0 bg-gradient-to-b from-[#00000054] to-transparent w-full h-[30%] rounded-t-[30px]"></div>
                                <div className="absolute top-0 px-5 py-10 group-hover:w-full duration-300 ease-in-out">
                                    <h2 className="relative text-xl group-hover:scale-125 duration-200 origin-left">
                                        <span className="z-0 w-fit h-3 absolute left-0 bottom-0 bg-sky-200 bg-opacity-50 font-semibold text-white">
                                            {el.name}
                                        </span>
                                    </h2>
                                </div>
                                <div className="absolute bottom-3 right-3">
                                    <button className="text-4xl group-hover:text-2xl text-gray-100 duration-300 ease-in-out flex gap-2 items-center group-hover:bg-gray-600 group-hover:bg-opacity-20 group-hover:backdrop-blur-lg group-hover:p-3 rounded-full">
                                        <FaCirclePlus className="group-hover:rotate-180" />
                                        <span className="text-xl hidden group-hover:block duration-200 font-semibold">
                                            Cick for detail
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <dialog id={`modal-${idx}`} className="modal modal-bottom sm:modal-middle backdrop-blur-md md:py-5">
                                <div className="modal-box md:min-w-[100lvw] h-full max-h-full max-w-full bg-transparent shadow-none">
                                    <form method="dialog" className="sticky top-0 right-0">
                                        <button className="z-[!100] btn btn-circle btn-sm border-none bg-gray-200 focus:ring-0 hover:bg-gray-400 absolute right-0 top-0 rotate-45"><FaPlus className="text-lg text-gray-800 " /></button>
                                    </form>
                                    <div className="text-white mt-10">
                                        <h3 className="font-bold text-3xl">Koleksi <span className="text-sky-200"> {el.name} </span> Kami</h3>
                                        <p className="py-2">{el.desc}</p>
                                    </div>
                                    <div className="flex md:flex-row flex-col gap-5 md:gap-3 mt-5 md:mt-10">
                                        {el.child.map((el, id) => (
                                            <div key={idx} className="md:w-[40lvw] md:h-[60lvh] shadow-md">
                                                <img
                                                    className="w-full h-[50lvh] md:h-full object-cover rounded-t-2xl"
                                                    src={el.imgProd}
                                                    alt={el.prodName}
                                                />
                                                <h4 className="bg-white p-5 rounded-b-2xl text-xl font-medium">
                                                    {el.prodName}
                                                </h4>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </dialog>
                        </>
                    ))}
                </div>
                <div className="block md:hidden text-sm text-right animate-pulse mx-5">Click for detail</div>
            </section>
        </>
    )
}