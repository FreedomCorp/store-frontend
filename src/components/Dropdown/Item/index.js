import React from "react";

function DropdownItem({ icon, title, description }) {
    return (
        <li className="pb-6 border-r-transparent border-t-transparent border-l-transparent border-dashed border-b-[#3D3E48] border last:border-b-transparent">
            <div className="flex flex-col items-start cursor-pointer text-slate-300 hover:text-white">
                <h2 className="pt-5 font-semibold flex flex-row items-center">{icon} {title}</h2>
                
                <div className="ml-[22px] text-left">
                    <h2 className="text-[#9B9D9F] max-w-[280px] text-sm">{description}</h2>
                </div>
            </div>
        </li>
    );
}

export default DropdownItem;