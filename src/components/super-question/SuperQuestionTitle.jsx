import ExpandIcon from "../icon/ExpandIcon";

function SuperQuestionTitle({children}) {

    return (
        <div className="w-full p-2 mb-4 flex justify-center bg-selected-from-theme">
            
            {/* 
                Make a 'left icon' to balance the itens and centerize the title and place the icon to the right 
            */}
            <div className="w-10" />
            
            <div className="flex-1 flex justify-center">
                <span className="font-medium text-center">{children}</span>
            </div>

            <div className="w-10">
                <div className="h-7 w-8 flex items-center justify-center ">
                    <ExpandIcon />
                </div>
            </div>
            
        </div>
    );
}

export default SuperQuestionTitle