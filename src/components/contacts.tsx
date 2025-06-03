import Fire from "./particless"

export default function Contact() {
    return (
        <div className="h-screen w-screen flex relative">
            <div className="w-9/10 h-1/2 sm:w-[520px] m-auto mt-[40%] sm:mt-[10%] flex flex-col gap-5 z-10">
                <h1 className="text-white font-bold text-3xl text-shadow-md text-center">CONTACT</h1>
                <div className="gap-5 w-full p-10 h-fit bg-black rounded-4xl flex flex-row">
                    <div className="gap-5 min-h-fit h-1/4 flex flex-col my-auto ml-auto cursor-pointer justify-center">
                        <div className="min-h-20 min-w-20 max-w-20 rounded-full bg-[#efb010]" />
                        <div className="min-h-20 min-w-20 max-w-20 rounded-full bg-[#efb010]" />
                        <div className="min-h-20 min-w-20 max-w-20 rounded-full bg-[#efb010]" />
                    </div>
                    <div className="gap-5 min-h-fit h-1/4 flex flex-col my-auto mr-auto cursor-pointer">
                        <h1 className="leading-20 font-bold text-2xl text-[#efb010]">LINKEDIN</h1>
                        <h1 className="leading-20 font-bold text-2xl text-[#efb010]">GMAIL</h1>
                        <h1 className="leading-20 font-bold text-2xl text-[#efb010]">GIT</h1>
                    </div>
                </div>
            </div>
            <img src="/mauntings_back.svg" className="absolute inset-0 w-full top-auto scale-200 sm:scale-100 sm:-bottom-80 z-1" />
            <img src="/front_mauntain.svg" className="absolute inset-0 w-full top-auto scale-200 sm:scale-100 sm:-bottom-80 z-0" />
            <Fire color="rgb(114, 114, 114" amount={20} />
        </div>
    )
}