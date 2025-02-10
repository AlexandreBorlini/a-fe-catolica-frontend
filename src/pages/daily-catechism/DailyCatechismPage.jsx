import Body from "../../components/body/Body";
import ErrorMessage from "../../components/info-messages/ErrorMessage";
import ErrorWrap from "../../components/info-wrap/InfoWrap";
import QuestionReference from "../../components/question-reference/QuestionReference";
import SearchField from "../../components/search-field/SearchField";
import { SystemContext } from "../../providers/ContextProvider";
import { useState, useContext, useEffect } from "react";

function DailyCatechismPage() {

    const { catechismDay, setCatechismDay, setError, setLoading } = useContext(SystemContext);
    const [catParagraphs, setCatParagraphs] = useState([]);

    const loadDailyCatechism = (event) => {
        setError(false);
        setLoading(true);
        event?.preventDefault();

        var catDayUrl = 1; 

        if(!catechismDay) {
            setCatechismDay(1);
        } else {
            catDayUrl = catechismDay;
        }

        fetch('http://3.80.111.110/dailycatechism/' + catDayUrl)
            .then((response) => { setLoading(false); return response.json(); })
            .then((data) => { 
                setCatParagraphs(data);
            }).catch(rejected => {
                setError(true);
            });
    };
    
    useEffect(() => {
        loadDailyCatechism(null);
    }, []);

    return (
        <div>
            <SearchField  
                searchFunction={loadDailyCatechism} 
                searchValue={catechismDay} 
                setSearchValue={setCatechismDay}
                type={"number"}
                label={"N° Dia"} />
            <Body>
                <ErrorWrap>
                    {catParagraphs?.map((catParagraphs) => (
                        <QuestionReference reference={catParagraphs} />
                    ))}
                </ErrorWrap>
            </Body>
        </div>
    );
}

export default DailyCatechismPage;