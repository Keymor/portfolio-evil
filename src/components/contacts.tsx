import Fire from "./particless"

export default function Contact() {
    return (
        <div className="h-screen w-screen bg-amber-50 flex relative">
            <div className="bg-gray-600 w-full h-1/4 absolute bottom-0 z-0"/>
            <Fire color="rgb(114, 114, 114" amount={20}/>
            <div className="size-fit m-auto text-center flex flex-col gap-5 z-1">
                <h1 className="text-black font-bold text-3xl">CONTACT</h1>
                <div className="h-[32svh] w-[34svw] gap-5 p-10 min-h-fit bg-black rounded-4xl flex flex-col">
                    <div className="px-[15%] gap-[18%] w-full min-h-fit h-1/4 flex flex-row mx-auto mt-auto cursor-pointer">
                        <div className="size-20 rounded-full bg-amber-600 my-auto"/>
                        <h1 className="my-auto font-bold text-2xl text-amber-600">GMAIL</h1>
                    </div>
                    <div className="px-[15%] gap-[18%] min-h-fit w-full h-1/4 flex flex-row mx-auto cursor-pointer">
                        <div className="size-20 rounded-full bg-amber-600 my-auto"/>
                        <h1 className="my-auto font-bold text-2xl text-amber-600">LINKEDIN</h1>
                    </div>
                    <div className="px-[15%] gap-[18%] min-h-fit w-full h-1/4 flex flex-row mx-auto mb-auto cursor-pointer">
                        <div className="size-20 rounded-full bg-amber-600 my-auto"/>
                        <h1 className="my-auto font-bold text-2xl text-amber-600">GIT</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}