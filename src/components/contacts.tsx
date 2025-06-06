import Fire from "./particless"
import { motion } from 'framer-motion'

export default function Contact() {

    return (
        <div className="h-screen w-screen flex relative mt-0 sm:mt-[15svh]">
            <motion.div
                initial={{ opacity: 0, scale: .9, transform: 'translateY(100px)' }}
                whileInView={{ opacity: 1, scale: 1, transform: 'translateY(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-19/20 h-1/2 sm:w-[600px] m-auto mt-[40%] sm:mt-[10%] flex flex-col gap-5 z-10">
                <h1 className="text-white font-bold text-3xl text-shadow-md text-center">CONTACT</h1>
                <div className="gap-5 w-full p-10 h-fit bg-black rounded-4xl flex flex-row">
                    <div className="gap-5 min-h-fit h-1/4 flex flex-col my-auto w-1/2 cursor-pointer justify-center items-center">
                        <a target="_blank" href="https://www.linkedin.com/in/vladyslav-kutuzov/">
                            <img src="/linked.svg" className="min-h-20 min-w-20 max-w-20 rounded-full" />
                        </a>
                        <a href="https://github.com/Keymor" target="_blank">
                            <img src="/git.svg" className="min-h-20 min-w-20 max-w-20 rounded-full" />
                        </a>
                        <a href="mailto:vlad.kutuzov96@gmail.com">
                            <div className="flex min-h-20 min-w-20 max-w-20 rounded-full" ><img src="/gmail.svg" className="scale-75 bg-[#efb010] rounded-full" /></div>
                        </a>
                    </div>
                    <div className="gap-5 min-h-fit h-1/4 flex flex-col my-auto w-1/2 cursor-pointer">
                        <a target="_blank" href="https://www.linkedin.com/in/vladyslav-kutuzov/" >
                            <h1 className="leading-20 font-bold text-2xl text-[#efb010]">LINKEDIN
                            </h1>
                        </a>
                        <a href="https://github.com/Keymor" target="_blank">
                            <h1 className="leading-20 font-bold text-2xl text-[#efb010]">GIT</h1>
                        </a >
                        <a href="mailto:vlad.kutuzov96@gmail.com">
                            <h1 className="leading-20 font-bold text-2xl text-[#efb010] delay-300">GMAIL</h1>
                        </a>
                    </div>
                </div>
            </motion.div>
            <img src="/mauntings_back.svg" className="absolute inset-0 w-full top-auto scale-200 sm:scale-100 z-1" />
            <img src="/front_mauntain.svg" className="absolute inset-0 w-full top-auto scale-200 sm:scale-100 z-0" />
            <Fire color="rgb(114, 114, 114" amount={20} />
        </div>
    )
}