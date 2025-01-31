import { FaHeart } from "react-icons/fa"
import Competences from "./components/pages/Competences"
import Contact from "./components/pages/Contact"
import Description from "./components/pages/Description"
import Header from "./components/pages/Header"
import Portfolio from "./components/pages/Portfolio"
import Service from "./components/pages/Service"

const App = () => {
        return (
                <>
                        <div className="relative bg-primary h-full max-sm:px-0 max-md:px-0 max-lg:px-0 max-xl:px-10 max-2xl:px-20">
                                <div className="fixed top-0 right-0 left-0 bg-primary z-10">
                                        <Header />
                                </div>
                                <div className="px-10">
                                        <Description />
                                        <Competences />
                                        <Service />
                                        <Portfolio />
                                        <Contact /> 
                                </div>

                                <div className="text-secondaryLight font-display-text absolute bottom-0 left-0 right-0 py-4 z-10 bg-primary">
                                        <ul className="flex justify-center gap-20 items-center">
                                                <li className="flex gap-2 items-center">&copy; 2025 Dzidula Made with <FaHeart /> byJoel Dzidula GAMATHO </li>
                                                <li>Abidjan-Cocody</li>
                                        </ul>
                                </div>
                        </div>


                </>
        )
}

export default App
