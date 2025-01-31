import { FaArrowRight, FaCode,FaFeather, FaMagnet, FaPhoenixFramework, } from 'react-icons/fa'
import {FaGear } from 'react-icons/fa6'

const Competences = () => {
        return (
                <div className='h-screen py-8 max-sm:h-full max-md:h-full'>
                        <div className='text-secondary flex items-center gap-3 border-b-2 pb-2 border-secondary'>
                                <FaGear className='text-2xl' />
                                <h1 className='uppercase text-2xl font-bold text-gray-300 font-display-text'>Competences Techniques</h1>
                        </div>
                        <div className='mt-8 flex flex-row justify-center gap-10 mb-8 max-md:flex-wrap '>

                                <div className='w-4/12 h-[380px] bg-primary ombre max-md:w-[70%]'>
                                        <div className='flex justify-center items-center'>
                                                <FaCode className='text-3xl text-secondary mt-3' />
                                        </div>
                                        <h1 className='uppercase text-2xl text-center my-4  font-display-title text-tertiary max-lg:text-xl' >Languages</h1>
                                        <div className='p-2 flex flex-col'>
                                                <ul className='flex flex-col gap-3 text-start pl-3 text-secondaryLight font-display-text '>
                                                        <li>Javascript</li>
                                                        <li>Python</li>
                                                        <li>MySQL</li>
                                                        <li>Dart</li>
                                                        <li>Kotlin</li>
                                                </ul>
                                                {/* <div className='pt-10'>
                                                        <ul className='flex justify-center items-center gap-10'> 
                                                                <li className='text-2xl text-secondary'><FaDatabase/></li>
                                                                <li className='text-2xl text-secondary'><FaPython/></li>
                                                                <li className='text-2xl text-secondary'><FaDartLang/></li>
                                                                <li className='text-2xl text-secondary'><FaJs/></li>
                                                                <li className='text-2xl text-secondary'><FaPhp/></li>
                                                        </ul>
                                                </div> */}
                                        </div>
                                </div>

                                <div className='w-4/12 h-[380px] bg-primary ombre max-md:w-[70%]'>
                                        <div className='flex justify-center items-center'>
                                                <FaPhoenixFramework className='text-3xl text-secondary mt-3' />
                                        </div>
                                        <h1 className='uppercase text-2xl text-center my-4 text-tertiary font-display-title max-lg:text-xl' >Framework</h1>
                                        <div className='p-2 flex flex-col'>
                                                <ul className='flex flex-col gap-3 text-start pl-3 text-secondaryLight font-display-text '>
                                                        <li>React js</li>
                                                        <li>Next js</li>
                                                        <li>Django</li>
                                                        <li>Express js</li>
                                                        <li>Node js</li>
                                                        <li>Flutter</li>
                                                        <li>React nactive</li>
                                                </ul>
                                        </div>
                                </div>


                                <div className='w-4/12 h-[380px] bg-primary ombre max-md:w-[70%]'>
                                        <div className='flex justify-center items-center'>
                                                <FaFeather className='text-3xl text-secondary mt-3' />
                                        </div>
                                        <h1 className='uppercase text-2xl text-center my-4 text-tertiary font-display-title max-lg:text-xl' >Outils</h1>
                                        <div className='p-2 flex flex-col'>
                                                <ul className='flex flex-col gap-3 text-start pl-3 text-secondaryLight font-display-text '>
                                                        <li>Vscode & pycharm</li>
                                                        <li>Git</li>
                                                        <li>Linux</li>
                                                        <li>AI & No code</li>
                                                        <li>Photoshop, Blender</li>
                                                        <li>Microsoft office</li>
                                                </ul>
                                        </div>
                                </div>

                        </div>
                        <div className='text-secondary flex items-center gap-3 border-b-2 pb-2 border-secondary'>
                                <FaMagnet className='text-2xl' />
                                <h1 className='uppercase text-2xl font-bold text-gray-300 font-display-text'>Competences Speciales</h1>
                        </div>
                        <div className='p-2 flex flex-col max-sm:pb-20 max-md:pb-20 max-lg:pb-10 max-xl:pb-15'>
                                <ul className='flex flex-col gap-1 text-start pl-3 text-secondary '>
                                        <li className='flex items-center gap-1 font-display-text text-secondaryLight'> <FaArrowRight/> Agilite</li>
                                        <li className='flex items-center gap-1 font-display-text text-secondaryLight'> <FaArrowRight/> Collaboration</li>
                                        <li className='flex items-center gap-1 font-display-text text-secondaryLight'> <FaArrowRight/> Intelligence emotionnelle</li>
                                        <li className='flex items-center gap-1 font-display-text text-secondaryLight'> <FaArrowRight/> Creativite</li>
                                        <li className='flex items-center gap-1 font-display-text text-secondaryLight'> <FaArrowRight/> Esprit critique</li>
                                        <li className='flex items-center gap-1 font-display-text text-secondaryLight'> <FaArrowRight/> Communication</li>
                                        <li className='flex items-center gap-1 font-display-text text-secondaryLight'> <FaArrowRight/> Apprentissage continu</li>
                                </ul>
                        </div>
                </div>
        )
}

export default Competences
