function QuestionReference({reference}) {

    return (
        <div className=" w-full pb-6 pl-4 pr-4 md:pl-10 md:pr-10">
            <span className="text-sm md:text-medium block break-words text-justify">
                {reference.text}
            </span>

            {reference.textSources ? (
                <div className="text-xs pt-3 block break-words whitespace-pre-wrap flex text-stone-500">
                    {reference.textSources}
                </div>
            ) : <div className="pb-2" />}

            <span className="text-xs flex font-bold text-stone-400 justify-end">
                {reference.source}
            </span>
        </div>
    );
}

export default QuestionReference;