export default function Header() {
    return (
        <div className="flex flex-row w-[100vw] fixed h-[10svh] bg-white z-20 font-bold text-black px-5 sm:px-10">
            <h1 className="mr-auto my-auto">Vladyslav Kutuzov</h1>
            <button className="bg-amber-200 p-2 rounded-2xl ml-auto my-auto cursor-pointer">Contacts</button>
        </div>
    )
}