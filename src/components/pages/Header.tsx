import { useState } from "react"
import { FaBars, FaLock, FaMoon, FaSun, FaUser } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"


const Header = () => {
        const [swicth, setSwitch] = useState(true)
        const change = () => {
                setSwitch(!swicth)
        }


        const [theme, setTheme] = useState(false)
        const themeChange = () => {
                setTheme(!theme)
        }


        const [connexion, setConnexion] = useState(false)
        const connexionSet = () => {
                setConnexion(!connexion)
        }

        const navigate = useNavigate()
        return (
                <div className="w-full h-full ">
                        <div className="w-full h-[10vh] flex">

                                <div className="
                                h-full w-full flex 
                                max-sm:flex max-sm:w-[100%] justify-between items-center px-10
                                max-md:flex  max-md:w-[30%] max-md:justify-between
                                max-lg:flex max-lg:w-[30%] max-lg:justify-center
                                max-xl:w-[20%] max-xl:justify-center
                                max-2xl:w-[20%] max-2xl:justify-end
                                text-2xl text-secondary font-display-title
                                max-lg:mr-10
                                ">

                                        <h1 className=" ">DZIDULA</h1>
                                        <button type="button" className=" ml-70 max-sm:flex max-md:hidden max-lg:hidden max-xl:hidden max-2xl:hidden" onClick={change}>
                                                {swicth ? <FaBars className=" hover:text-tertiary cursor-pointer" /> : <FaXmark className=" hover:text-tertiary cursor-pointer" />}
                                        </button>
                                </div>

                                {/* mobile screen nav */}
                                {swicth ?
                                        null
                                        :
                                        <div className="w-[600px] h-[500px] bg-primary  px-2 absolute right-0 top-[77px] left-[300px] max-sm:flex max-md:hidden max-lg:hidden max-xl:hidden max-2xl:hidden">
                                                <ul className="w-full h-full flex mt-12 pl-4 flex-col items-start text-secondary gap-8 font-display-text text-lg max-md:text-sm max-lg:text-[16px] ">
                                                        <li><a className="headerAhref" href="/#accueil">Accueil</a></li>
                                                        <li><a className="headerAhref" href="/#competence">Competence</a></li>
                                                        <li><a className="headerAhref" href="/#service">Services</a></li>
                                                        <li><a className="headerAhref" href="/#portfolio">Portfolio</a></li>
                                                        <li><a className="headerAhref" href="/#contact">Contact</a></li>
                                                        <li className="mt-20">
                                                                <div className="submitBtndes flex justify-center items-center gap-10" >
                                                                        <button onClick={ themeChange } type="button" className="cursor-pointer">{theme ? <FaSun className="text-2xl text-amber-400" /> : <FaMoon className="text-2xl" />} </button>
                                                                        <button type="button" className="cursor-pointer" onClick={ connexionSet } ><FaLock className="text-2xl" /></button>
                                                                </div>
                                                        </li>
                                                </ul>

                                        </div>
                                }


                                <div className="h-full w-full flex items-center 
                                max-sm:hidden 
                                max-md:flex max-md:w-[70%] 
                                max-lg:flex max-lg:w-[70%] max-lg: justify-center
                                max-xl:w-[60%] 
                                max-2xl:w-[60%] 
                                ">

                                        <ul className="flex  text-secondary gap-8 font-display-text text-lg max-md:text-sm max-md:gap-4 max-lg:text-[16px]">
                                                <li><a className="headerAhref" href="/#accueil">Accueil</a></li>
                                                <li><a className="headerAhref" href="/#competence">Competence</a></li>
                                                <li><a className="headerAhref" href="/#service">Services</a></li>
                                                <li><a className="headerAhref" href="/#portfolio">Portfolio</a></li>
                                                <li><a className="headerAhref" href="/#contact">Contact</a></li>
                                        </ul>
                                </div>

                                <div className="h-full w-full flex justify-center items-center 
                                max-sm:hidden 
                                max-md:hidden 
                                max-lg:hidden
                                max-xl:w-[20%] max-xl:justify-center
                                max-2xl:w-[20%] max-2xl:justify-start
                                ">
                                        <div className="submitBtndes flex justify-center items-center gap-10" >
                                                <button onClick={themeChange} type="button" className="cursor-pointer">{theme ? <FaSun className="text-2xl text-amber-400" /> : <FaMoon className="text-2xl" />} </button>
                                                <button type="button" className="cursor-pointer" onClick={connexionSet} ><FaLock className="text-2xl" /></button>
                                        </div>
                                </div>

                        </div>
                        {connexion ? 
                        <form >
                                <div className="w-[300px] h-[250px] p-2 bg-primary absolute right-[100px] top-[100px] shadow-2xl flex flex-col gap-8">
                                        <h1 className="text-white text-2xl text-center">ADMIN</h1>
                                        <div className="flex gap-2 items-center">
                                                <FaUser />
                                                <input type="email" name="" id="" className="input text-lg text-secondary" placeholder="Admin id ..." />
                                        </div>
                                        <div className="flex gap-2 items-center">
                                                <FaLock />
                                                <input type="password" name="" id="" className="input text-lg text-secondary" placeholder="Admin password ..." />
                                        </div>
                                        <div className="w-full flex justify-center items-center">
                                                <button type="submit" className="submitBtndes btn btnHeader" onClick={()=>{navigate('/admin')}}>Valider</button>
                                        </div>
                                </div>
                        </form> : null}


                </div>
        )
}

export default Header
