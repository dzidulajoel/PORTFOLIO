import { FaBars } from "react-icons/fa"


const Header = () => {
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
                                        <FaBars className="max-sm:flex max-md:hidden max-lg:hidden max-xl:hidden max-2xl:hidden "/>
                                </div>



                                <div className="h-full w-full flex items-center 
                                max-sm:hidden 
                                max-md:flex max-md:w-[70%] 
                                max-lg:flex max-lg:w-[70%] max-lg: justify-center
                                max-xl:w-[60%] 
                                max-2xl:w-[60%] 
                                ">
                                        <ul className="flex  text-secondary gap-8 font-display-text text-lg max-md:text-sm max-md:gap-4 max-lg:text-[16px]">
                                                <li><a href="">Accueil</a></li>
                                                <li><a href="">Competence</a></li>
                                                <li><a href="">Services</a></li>
                                                <li><a href="">Portfolio</a></li>
                                                <li><a href="">Contact</a></li>
                                        </ul>
                                </div>

                                <div className="h-full w-full flex justify-center items-center 
                                max-sm:hidden 
                                max-md:hidden 
                                max-lg:hidden
                                max-xl:w-[20%] max-xl:justify-center
                                max-2xl:w-[20%] max-2xl:justify-start
                                ">
                                        <button className="submitBtndes btn " type="button">Collaborer</button>
                                </div>

                        </div>
                </div>
        )
}

export default Header
