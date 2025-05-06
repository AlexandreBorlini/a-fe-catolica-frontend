import SuperQuestionTitle from "./SuperQuestionTitle";
import QuestionSession from "../question-session/QuestionSession";
import { useState } from "react";

function SuperQuestionSession({superQuestion}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                <SuperQuestionTitle>
                    {superQuestion.name}
                </SuperQuestionTitle>
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                {superQuestion.questions?.map((question) => (
                    <QuestionSession key={question.id} question={question} />
                ))}
            </div>
        </div>
    );
}

export default SuperQuestionSession;