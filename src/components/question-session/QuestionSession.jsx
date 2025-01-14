import QuestionReference from "../question-reference/QuestionReference";
import QuestionTitle from "../question-title/QuestionTitle";

function QuestionSession({question}) {

    return (
        
        <div>
            <QuestionTitle>
                {question.name}
            </QuestionTitle>

            {question?.references?.map((reference) => (
                <QuestionReference reference={reference} />
            ))}
        </div>
        
    );
}

export default QuestionSession;