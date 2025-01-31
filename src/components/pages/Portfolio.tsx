import { FaBrush, FaCalendar, FaCode } from "react-icons/fa";
import { FaGauge } from "react-icons/fa6";

export default function Portfolio() {
        return (
                <>
                        <div className="h-screen bg-primary py-12 max-sm:h-full max-md:h-full  max-lg:h-full max-xl:pt-20">

                                <div className='text-secondary flex items-center gap-3 border-b-2 pb-2 border-secondary max-lg:pt-10 max-md:pt-10'>
                                        <FaBrush className='text-2xl' />
                                        <h1 className='uppercase text-2xl font-bold text-gray-300 font-display-text'>Portfolio</h1>
                                </div>
                                <div className="w-full flex gap-10 max-sm:flex-col max-sm:items-center justify-center">

                                        <div className="flex w-4/12 max-sm:w-[60%]">
                                                <div className="my-5 flex gap-8 items-center">
                                                        <FaCode className="text-2xl font-extralight text-secondary contour" />
                                                        <div className="flex flex-col justify-center items-start text-justify gap-4">
                                                                <h1 className="text-6xl text-tertiary font-light font-display-text">00+</h1>
                                                                <h4 className="font-display-text text-secondaryLight ">Clients contents</h4>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="flex w-4/12 max-sm:w-[60%] justify-center items-center">
                                                <div className="my-5 flex gap-8 items-center">
                                                        <FaGauge className="text-2xl font-extralight text-secondary contour" />
                                                        <div className="flex flex-col justify-center items-start text-justify gap-4">
                                                                <h1 className="text-6xl text-tertiary font-light font-display-text">01</h1>
                                                                <h4 className="font-display-text text-secondaryLight">Projets complets</h4>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="flex w-4/12 max-sm:w-[60%] justify-end items-center">
                                                <div className="my-5 flex gap-8 items-center">
                                                        <FaCalendar className="text-2xl font-extralight text-secondary contour" />
                                                        <div className="flex flex-col justify-center items-start text-justify gap-4">
                                                                <h1 className="text-6xl text-tertiary font-light font-display-text">00</h1>
                                                                <h4 className="font-display-text text-secondaryLight">Annee d'experience</h4>
                                                        </div>
                                                </div>
                                        </div>
                                </div>


                                <div className='mt-8 flex flex-row flex-wrap gap-20 justify-between mb-8 max-sm:gap-10'>

                                        <div className="w-3/12 h-[200px] flex flex-col gap-2 ombre max-sm:w-[70%] max-sm:mx-auto max-lg:w-[40%]">
                                                        <a href="" className="w-full h-full">
                                                                <img src="" alt="" />
                                                        </a>
                                                <p className="text-primary text-justify text-lg p-2 bg-secondary">MERN/ Tailwind Css/ SQL</p>
                                        </div>

                                        <div className="w-3/12 h-[200px] flex flex-col gap-2 ombre max-sm:w-[70%] max-sm:mx-auto max-lg:w-[40%]">
                                                        <a href="" className="w-full h-full">
                                                                <img src="" alt="" />
                                                        </a>
                                                <p className="text-primary text-justify text-lg p-2 bg-secondary">MERN/ Tailwind Css/ SQL</p>
                                        </div>

                                        <div className="w-3/12 h-[200px] flex flex-col gap-2 ombre max-sm:w-[70%] max-sm:mx-auto max-lg:w-[40%]">
                                                        <a href="" className="w-full h-full">
                                                                <img src="" alt="" />
                                                        </a>
                                                <p className="text-primary text-justify text-lg p-2 bg-secondary">MERN/ Tailwind Css/ SQL</p>
                                        </div>

                                        <div className="w-3/12 h-[200px] flex flex-col gap-2 ombre max-sm:w-[70%] max-sm:mx-auto max-lg:w-[40%]">
                                                        <a href="" className="w-full h-full">
                                                                <img src="" alt="" />
                                                        </a>
                                                <p className="text-primary text-justify text-lg p-2 bg-secondary">MERN/ Tailwind Css/ SQL</p>
                                        </div>

                                        <div className="w-3/12 h-[200px] flex flex-col gap-2 ombre max-sm:w-[70%] max-sm:mx-auto max-lg:w-[40%]">
                                                        <a href="" className="w-full h-full">
                                                                <img src="" alt="" />
                                                        </a>
                                                <p className="text-primary text-justify text-lg p-2 bg-secondary">MERN/ Tailwind Css/ SQL</p>
                                        </div>

                                        <div className="w-3/12 h-[200px] flex flex-col gap-2 ombre max-sm:w-[70%] max-sm:mx-auto max-lg:w-[40%]">
                                                        <a href="" className="w-full h-full">
                                                                <img src="" alt="" />
                                                        </a>
                                                <p className="text-primary text-justify text-lg p-2 bg-secondary">MERN/ Tailwind Css/ SQL</p>
                                        </div>
                                </div>
                        </div>
                </>
        )
}
