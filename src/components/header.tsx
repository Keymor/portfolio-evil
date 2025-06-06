export default function Header() {

    const hendlScroll = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        })
    }

    return (
        <div className=" hidden lg:flex flex-row w-[100vw] fixed h-[10svh] bg-white z-20 font-bold text-black px-5 sm:px-10 text-2xl">
            <h1 className="mr-auto my-auto">VLADYSLAV KUTUZOV</h1>
            <button onClick={hendlScroll} className="bg-amber-400 px-13 py-3 rounded-4xl ml-auto my-auto cursor-pointer text-white">CONTACT</button>
        </div>
    )
}