import { useContext } from "react";
import { SystemContext } from "../../providers/ContextProvider";
import ErrorMessage from "../info-messages/ErrorMessage";
import LoadingMessage from "../info-messages/LoadingMessage";

function InfoWrap({children}) {

    const { error, loading } = useContext(SystemContext);

    return (
        <div>
            {error   ? <ErrorMessage   /> : 
             loading ? <LoadingMessage /> : 
             <div>
                {children}
             </div>
            }
        </div>
    );
}

export default InfoWrap;