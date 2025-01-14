function InfoText({title, info}) {

    return (
        <div>
            <span className="flex justify-center font-bold text-stone-400">
                {title}
            </span>
            <span className="flex justify-center pb-4">
                {info}
            </span>
        </div>
    );
}

export default InfoText;