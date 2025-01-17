import Body from "../../components/body/Body";
import SearchField from "../../components/search-field/SearchField";
import SubjectCard from "../../components/subject-card/SubjectCard";
import { useEffect, useState, useContext } from "react";
import { SystemContext } from "../../providers/ContextProvider";
import ErrorWrap from "../../components/info-wrap/InfoWrap";

function SubjectListPage() {

    const { setLoading, setError } = useContext(SystemContext);
    const [filteredSubjects, setFilteredSubjects] = useState([]);
    const [originalSubjects, setOriginalSubjects] = useState([]);
    const [searchValue, setSearchValue] = useState([]);

    useEffect(() => {
        setError(false);
        setLoading(true);

        fetch('http://localhost:8020/subjects')
            .then((response) => { setLoading(false); return response.json(); })
            .then((data) => {
                if(data) {
                    setOriginalSubjects(data);
                    setFilteredSubjects(data);
                    setLoading(false);
                }
            })
            .catch(rejected => {
                setError(true);
            });
    }, []);

    const searchSubjects = (event) => {
        event.preventDefault();
        const filtered = originalSubjects.filter(subj => searchValue === '' || subj.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredSubjects(filtered);
    };
    
    return (
        <div>
            <SearchField 
                searchFunction={searchSubjects} 
                searchValue={searchValue} 
                setSearchValue={setSearchValue}
                type={"text"}
                label={"Pesquisar assunto"} />
            <Body> 
                <ErrorWrap>
                    <div className="flex flex-wrap">
                        {filteredSubjects.map((subject) => (
                            <SubjectCard
                                subject={subject}
                            />
                        ))}
                    </div>
                </ErrorWrap>
            </Body>
        </div>
    );
}

export default SubjectListPage;