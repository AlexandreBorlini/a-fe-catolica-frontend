import { useState, useEffect } from "react";

function SearchField({searchFunction, searchValue, setSearchValue, label, type}) {

    return (

        <form className='form' onSubmit={searchFunction}>
            <div className="w-full mt-[4em] md:mt-[5em] pb-6 md:pb-8 flex justify-center">
                <div class={"relative flex items-center"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
                        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                    </svg>
 
                    <input class="w-full text-slate-700 text-sm border rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none border-slate-400 hover:border-slate-500" 
                        placeholder={label}
                        type={type}
                        min="1" max="365"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)} />

                </div>
            </div>
        </form>
    );
}

export default SearchField; 