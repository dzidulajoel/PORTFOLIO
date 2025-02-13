import { FaHeart } from "react-icons/fa"
import Competences from "./components/pages/Competences"
import Contact from "./components/pages/Contact"
import Description from "./components/pages/Description"
import Header from "./components/pages/Header"
import Portfolio from "./components/pages/Portfolio"
import Service from "./components/pages/Service"
// import { Route, Routes } from "react-router-dom"

const App = () => {
        return (
                <>
                        <div className="relative bg-primary h-full max-sm:px-0 max-md:px-0 max-lg:px-0 max-xl:px-10 max-2xl:px-20">
                                <div className="fixed top-0 right-0 left-0 bg-primary z-10">
                                        <Header />
                                        
                                </div>
                                <div className="px-10">
                                        <div id="accueil" className="pt-20"><Description /></div> 
                                        <div id="competence" className="pt-16"><Competences /></div>
                                        <div id="service" className="pt-12"><Service /></div>
                                        <div id="portfolio" className="pt-12"><Portfolio /></div>
                                        <div id="contact"><Contact /> </div>

                                </div>

                                <div className="text-secondaryLight font-display-text absolute bottom-0 left-0 right-0 py-3 z-10 bg-primary">
                                        <ul className="flex justify-center gap-20 items-center max-sm:flex-wrap max-sm:gap-3">
                                                <li className="flex gap-2 items-center">&copy; 2025 Dzidula Made with <FaHeart /> byJoel Dzidula GAMATHO </li>
                                                <li>Abidjan-Cocody</li>
                                        </ul>
                                </div>
                        </div>



                </>
        )
}

export default App
