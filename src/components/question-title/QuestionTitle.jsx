function QuestionTitle({children}) {

    return (
        <div className="w-full bg-highlight-from-theme p-2 mb-4 flex justify-center">
            <span className="font-medium">
                {children}
            </span>
        </div>
    );
}

export default QuestionTitle;