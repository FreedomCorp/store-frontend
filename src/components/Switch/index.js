import React, { useState } from "react";

function Switch({ action }) {
    const [enabled, setEnabled] = useState(false);
    const randomKey = Math.random()

    const handleClick = async () => {
        if (enabled) {
            action();
            setEnabled(false);
        } else {
            setEnabled(true);
        }
    }

    return (
        <label htmlFor={`default-toggle-${randomKey}`} className="inline-flex relative items-center cursor-pointer" onClick={() => handleClick()}>
            <input type="checkbox" value="" id={`default-toggle-${randomKey}`} className="sr-only peer"/>
            <div className="
            w-11 h-6
            peer-focus:outline-none
            peer-focus:ring-2
            rounded-full peer
            bg-slate-400
            dark:bg-lighter-dark 
            peer-checked:after:translate-x-full
            peer-checked:after:border-white
            after:content-['']
            after:absolute
            after:top-[2px]
            after:left-[2px]
            after:bg-[#ffff] 
            after:border-[#ffff]
            after:border
            after:rounded-full
            after:h-5
            after:w-5 
            after:transition-all
            peer-checked:bg-blue-400
            dark:peer-checked:bg-checked-color">
            </div>
        </label>
    );
}

export default Switch;