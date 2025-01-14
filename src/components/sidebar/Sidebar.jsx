import CloseIcon from "../icon/CloseIcon";

function Sidebar({children, expanded, setExpanded}) {

    return (
        <aside className={`h-screen overflow-hidden bg-back-theme transition-all duration-300 w-64 lg:w-[16%]  z-50 fixed top-0 left-0 
                ${expanded ? "translate-x-0" : "translate-x-[-100%] "}
            `}>
            <nav className="h-full flex flex-col border-r sm:border-amber-600 lg:border-theme">
                
                <div className="p-2 flex justify-between items-center bg-theme">
                    <span className="flex-grow text-center font-extrabold font-cinzel text-white">
                        MENU
                    </span>
                    <button className="p-2 w-8 rounded-md cursor-pointer lg:invisible"
                        onClick={() => { setExpanded(false) }}> 
                        <CloseIcon />
                    </button>
                </div>

                <ul className="flex-1 lg:mt-5">
                    {children}
                </ul>

                <div className="border-t flex p-3">
                    <span>Site feito por Alexandre Borlini</span>
                </div>

            </nav>
        </aside>
    );
}

export default Sidebar;