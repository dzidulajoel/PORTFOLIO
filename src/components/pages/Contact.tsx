import { FaEnvelope, FaGithub, FaHandshake, FaLinkedin, FaPhone, FaUser, FaWhatsapp } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"

const Contact = () => {
        return (
                <div>
                        <div className='h-screen w-full py-8 max-sm:h-full max-md:h-full max-lg:h-full max-sm:pb-30 max-md:pb-20 max-lg:pb-20'>
                                <div className='text-secondary flex items-center gap-3 border-b-2 pb-2 border-secondary max-md:pt-15'>
                                        <FaHandshake className='text-2xl' />
                                        <h1 className='uppercase text-2xl font-bold text-gray-300 font-display-text'>Contact</h1>
                                </div>
                                <div className="flex justify-center gap-10 mt-12 max-sm:flex-col  max-md:flex-col ">
                                        <div className="w-5/12 h-[500px] ombre max-sm:w-[80%] mx-auto max-md:w-[80%] max-lg:w-[450px]">
                                                <h1 className="bg-secondary py-4 text-primary font-display-semiTitle uppercase text-2xl text-center"> Contactez-moi</h1>
                                                <form action="" method="post" className="text-secondaryLight p-4 flex flex-col gap-14">

                                                        <div className="w-full flex items-center gap-2">
                                                                <label className="text-lg font-display-text" htmlFor="nom"><FaUser /></label>
                                                                <input type="text" className="input text-lg" name="nom" id="" placeholder="Nom complet ..." required />
                                                        </div>
                                                        <div className="w-full flex items-center gap-2">
                                                                <label className="text-lg font-display-text" htmlFor="email"><FaEnvelope /></label>
                                                                <input type="email" className="input text-lg" name="email" id="" placeholder="Email ..." required />
                                                        </div>
                                                        <div className="w-ful flex items-center gap-2">
                                                                <label className="text-lg font-display-text" htmlFor="objet"><FaMessage /></label>
                                                                <textarea name="objet" cols={150} className="input text-lg" id="" placeholder="Message ..." required />
                                                        </div>
                                                        <button type="submit" className='submitBtn btn text-xl'>Envoyer</button>
                                                </form>
                                                <div>
                                                        <ul className="flex justify-center items-center gap-10 mt-3 max-sm:gap-2 max-lg:gap-3">
                                                                <li className="text-primary contour flex items-center justify-center btn bg-secondary "><a href=""><FaEnvelope /></a></li>
                                                                <li className="text-primary contour flex items-center justify-center btn bg-secondary "><a href=""><FaGithub /></a></li>
                                                                <li className="text-primary contour flex items-center justify-center btn bg-secondary "><a href=""><FaWhatsapp /></a></li>
                                                                <li className="text-primary contour flex items-center justify-center btn bg-secondary "><a href=""><FaLinkedin /></a></li>
                                                                <li className="text-primary contour flex items-center justify-center btn bg-secondary "><a href=""><FaPhone /></a></li>
                                                        </ul>
                                                </div>
                                        </div>
                                        <div className="w-5/12 h-[500px] ombre max-sm:w-[80%] mx-auto max-md:w-[80%] max-lg:w-[450px]">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3764409593396!2d-3.938909924980638!3d5.35939849461939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ed1a27de579d%3A0xaf9d5a14b624577d!2sFixwall%20Building!5e0!3m2!1sen!2sci!4v1738283386421!5m2!1sen!2sci" className="w-full h-full" ></iframe>                                        
                                        </div>
                                </div>

                        </div>
                </div>
        )
}

export default Contact
