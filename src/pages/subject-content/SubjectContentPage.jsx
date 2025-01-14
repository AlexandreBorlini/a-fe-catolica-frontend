import Body from "../../components/body/Body";
import { useContext } from "react";
import { SystemContext } from "../../providers/ContextProvider";
import SubjectTitle from "../../components/subject-title/SubjectTitle";
import QuestionSession from "../../components/question-session/QuestionSession";
import ErrorWrap from "../../components/info-wrap/InfoWrap";

function SubjectContentPage() {

    const { subject } = useContext(SystemContext);

    return (
        
        <Body> 
            <ErrorWrap>
                <div>
                    <SubjectTitle>
                        {subject.name?.toUpperCase()}
                    </SubjectTitle>

                    {subject.questions?.map((question) => (
                        <QuestionSession question={question}/>
                    ))}
                </div>
            </ErrorWrap>
        </Body>
    );
}

export default SubjectContentPage;