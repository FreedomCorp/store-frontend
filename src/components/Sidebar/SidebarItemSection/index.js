import React from "react";

function SidebarItemSection({title, children}) {
    return (
        <div className="w-[85%] flex flex-col items-start select-none">
            <h3 className={`opacity-80 ${title == null ? "" : "mt-5 mb-3"} text-[0.70rem] uppercase font-bold text-light-400 dark:text-white`}>{title}</h3>
            {children}
        </div>
    );
}

export default SidebarItemSection;