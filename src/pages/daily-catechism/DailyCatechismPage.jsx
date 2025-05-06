import Body from "../../components/body/Body";
import LeftArrowIcon from "../../components/icon/icon-left-arrow";
import RightArrowIcon from "../../components/icon/RightArrowIcon";
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

        fetch('http://localhost:8020/dailycatechism/' + catDayUrl)
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
            <div className="w-full flex justify-center">
                <div className="flex-1">
                    <div className="w-8">
                        <LeftArrowIcon />
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <SearchField  
                        searchFunction={loadDailyCatechism} 
                        searchValue={catechismDay} 
                        setSearchValue={setCatechismDay}
                        type={"number"}
                        label={"N° Dia"} />
                </div>
                <div className="w-3 flex-1">
                    <RightArrowIcon />
                </div>
            </div>
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