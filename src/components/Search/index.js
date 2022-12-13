import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ placeholder }) => {
    const [focus, setFocus] = useState(false);

    return (
        <form className="flex flex-row items-center">
            <BsSearch className={`mr-4 ${focus ? "text-blue-400" : "text-slate-500"} text-xl`}/>
            <input onInputCapture={() => setFocus(true)} onFocus={() => setFocus(true)} type="text" id="search" className="text-slate-400 font-semibold text-[14px] leading-[22px] dark:text-dark-100 bg-transparent focus:ring-0 focus:outline-0" placeholder={placeholder}/>
        </form>
    );
}

export default Search;