import { Link } from "react-router-dom";
import { SystemContext } from "../../providers/ContextProvider";
import { useContext } from "react";

function SidebarItem({icon, text, actualRoute, destination, setActualRoute}) {

    const {setSubject } = useContext(SystemContext);
    
    return (
        <Link to={destination} onClick={()=> {setActualRoute(destination); setSubject(null);}}>
            <li className={` 
                relative flex items-center py-3 px-3
                font-medium cursor-pointer
                ${ actualRoute === destination ? "bg-gradient-to-r from-selected-from-theme to-selected-to-theme"
                    : "hover:bg-gradient-to-r from-highlight-from-theme to-highlight-to-theme"
                }`}>
            
                    <div className="w-8 flex items-center justify-center">
                        {icon}
                    </div>
            
                    <span className="w-52 ml-3 font-white">{text}</span>
            </li>
        </Link>
    );
}

export default SidebarItem;