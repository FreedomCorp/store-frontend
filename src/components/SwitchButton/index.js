import React, { useState } from "react";

const SwitchButton = ({
    onClick,
    disableIcon,
    enableIcon,
 }) => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div onClick={() => {
            {onClick()}
            setEnabled(!enabled)
        }} className={`select-none cursor-pointer p-2 ${enabled ? `text-yellow-400 border-yellow-200` : `text-slate-400 border-slate-400`} border rounded-lg`}>
            { enabled ? <div>{enableIcon}</div> : <div>{disableIcon}</div> }
        </div>
    );
}

export default SwitchButton;