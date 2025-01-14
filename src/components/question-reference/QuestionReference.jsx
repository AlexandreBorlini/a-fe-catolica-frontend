function QuestionReference({reference}) {

    return (
        <div className=" w-full pb-6 pl-4 pr-4 md:pl-10 md:pr-10">
            <span className="text-sm md:text-medium block break-words text-justify">
                {reference.text}
            </span>

            {reference.textSources ? (
                <span className="text-xs pt-1 block break-words flex justify-end">
                    {reference.textSources}
                </span>
            ) : <div className="pb-2" />}

            <span className="text-xs flex font-bold text-stone-400 ">
                {reference.source}
            </span>
        </div>
    );
}

export default QuestionReference;