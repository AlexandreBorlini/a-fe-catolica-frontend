
function ErrorMessage() {

    return (
        <div className="text-red-400 flex flex-col justify-center text-sm">
            <span className="flex justify-center">
                Houve um erro ao recuperar as informações.  
            </span>
            <span className="flex justify-center">
                Por favor tente novamente.  
            </span>
        </div>
    );
}

export default ErrorMessage;