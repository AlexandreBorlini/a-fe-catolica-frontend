import MenuIcon from "../icon/MenuIcon";

function Banner({setExpanded}) {

    return (
        <div className="fixed top-0 left-0 w-full p-2 bg-theme flex items-center z-50">
            
            <button className="p-1.5 w-8 rounded-md cursor-pointer"
                onClick={() => {setExpanded(true)}}>
                <MenuIcon />
            </button>

            <div className="w-max absolute left-1/2 transform -translate-x-1/2 font-extrabold text-xl font-cinzel text-white">
                <span>A </span>
                <span className="text-2xl text-amber-200">FÉ </span>
                <span>CATÓLICA</span>
            </div>
        </div>
    );
}

export default Banner;