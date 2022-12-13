import React from "react";
import { BsPlus } from "react-icons/bs";

const PlusCard = () => {
    return (
        <div className="md:w-1/2">
            <div className="cursor-pointer m-2 mt-3 bg-slate-200 dark:bg-[#313442] shadow-lg rounded-2xl hover:opacity-60 hover:transition-all">
                <div className="flex flex-row items-center justify-center relative mb-4">
                    <BsPlus className="text-emerald-300 text-[13rem]"/>
                </div>
            </div>
        </div>
    );
}

export default PlusCard;