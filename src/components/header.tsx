export default function Header() {
    return (
        <div className="flex flex-row w-[100vw] fixed h-[10svh] bg-white z-20 font-bold text-black">
            <h1 className="mr-auto ml-5 my-auto">Vladyslav Kutuzov</h1>
            <button className="bg-amber-200 p-2 rounded-2xl ml-auto my-auto mr-5 cursor-pointer">Contacts</button>
        </div>
    )
}