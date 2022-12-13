import React from "react";

function SettingsDropdownSection({ title, children }) {
    return(
        <div className="flex flex-col items-start">
            <h4 className="text-xs text-slate-200 font-extrabold py-3 px-2 uppercase">{title}</h4>
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}

export default SettingsDropdownSection;