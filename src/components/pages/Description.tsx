
import {FaAngleDown, FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa'
const Description = () => {
        return (
                <>
                        <div id='accueil' className="text-secondary flex flex-col gap-5 justify-center" >
                                <div className="flex flex-col gap-5 mt-30 max-sm:w-[90%] max-md:w-[100%] max-lg:px-5 ">
                                        <h1 className="font-display-title text-4xl text-tertiary">FREELANCE</h1>
                                        <h1 className="font-display-title text-4xl ">DZIDULA JOEL GAMATHO</h1>
                                        <h1 className="font-display-semiTitle uppercase text-3xl text-tertiary">Developpeur FullStack Javascript</h1>
                                </div>
                                <div className="flex flex-row">
                                        <div className="max-sm:w-[100%] max-md:w-[100%] max-lg:px-5  max-lg:w-[100%] w-[75%]">
                                                <p className="font-display-text text-lg text-justify text-secondaryLight">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex libero, debitis sequi asperiores minima
                                                        quisquam tenetur dolor optio illum sint. Eveniet debitis facere dolor corporis perferendis, fuga modi
                                                        impedit! Rerum? quisquam tenetur dolor optio illum sint. Eveniet debitis facere dolor corporis perferendis, fuga modi
                                                        quisquam tenetur dolor optio illum sint. Eveniet debitis facere dolor corporis perferendis, fuga modi
                                                </p>
                                        </div>
                                        <div className="w-[15%] max-sm:hidden max-md:hidden max-lg:hidden">
                                                <ul className='flex flex-col gap-5 justify-center items-center '>
                                                        <li className='h-[40px] w-[40px] justify-center items-center flex bg-secondary '><a href=""><FaGithub className='text-3xl text-primary'/></a></li>
                                                        <li className='h-[40px] w-[40px] justify-center items-center flex bg-secondary '><a href=""><FaLinkedin className='text-3xl text-primary'/></a></li>
                                                        <li className='h-[40px] w-[40px] justify-center items-center flex bg-secondary '><a href=""><FaEnvelope className='text-3xl text-primary'/></a></li>
                                                </ul>
                                        </div>
                                </div>

                                <div className="flex gap-10 mt-10  h-[40px] max-sm:w-[90%] max-md:w-[100%] max-lg:px-5 max-lg:justify-center">
                                        <button className='submitBtndes btn'>Telecharger mon CV</button>
                                        <button className='submitBtndes btn'>Telecharger mon CV</button>

                                </div>

                                <div className='w-full flex justify-center items-center mt-15 mb-20' >
                                        <button className='h-[40px] w-[90px] justify-center items-center flex '><a href=""><FaAngleDown className='text-4xl text-secondary'/></a></button>
                                </div>
                        </div>
                </>
        )
}

export default Description
