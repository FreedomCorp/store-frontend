import React from "react";

function SettingsDropdown({ animation, children }) {
    return (
        <div className={`${animation} shadow-lg min-w-[228px] mt-5 left-[-100px] absolute flex p-5 bg-[#17181E] rounded-xl`}>
            <ul className="inline-block">
                {children}
            </ul>
        </div>
    );
}

export default SettingsDropdown;