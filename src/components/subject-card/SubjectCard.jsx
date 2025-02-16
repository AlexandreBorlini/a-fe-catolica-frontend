import { Link } from "react-router-dom";
import { SystemContext } from "../../providers/ContextProvider";
import { useContext } from "react";

function SubjectCard({subject}) {

    const { setSubject, setLoading, setError } = useContext(SystemContext);

    const loadSubject = () => {
        setSubject(subject);
        setLoading(true);
        fetch('http://3.80.111.110/subjects/' + subject.id)
            .then((response) => { return response.json(); })
            .then((data) => {
                setSubject(data);
            }).catch(rejected => {
                setError(true);
            });
    };

    return (
        <div className="w-40
                        md:w-[30%] ml-[2.5%] 
                        mb-2 border bg-white hover:bg-highlight-from-theme border-slate-400 hover:border-hover-border-theme cursor-pointer" 
                        onClick={loadSubject}>

            <Link to={"/assunto"} className="w-full"> 
            
                <div className="bg-theme h-40 lg:h-48 w-full">
                    <img src={subject.imagePath} className="object-cover w-full h-full" />
                </div>

                <div className="lg:h-[2rem] flex justify-center md:font-medium p-1 text-sm">
                    <span>{subject.name}</span>
                </div>

            </Link>        
        </div>
        
    );
}

export default SubjectCard;