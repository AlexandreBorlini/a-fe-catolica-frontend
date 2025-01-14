function SubjectTitle({children}) {

    return (
        <div>
            <div className="font-bold text-xl md:text-2xl mt-[4rem] md:mt-[4.5rem] text-theme w-full flex justify-center md:pb-6 pb-4">
                {children}
            </div>
        </div>
        
    );
}

export default SubjectTitle;