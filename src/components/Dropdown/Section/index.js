import React from "react";

function Dropdown({ animation, children }) {
    return (
        <div className={`${animation} shadow-lg min-w-[400px] mt-10 left-0 absolute flex flex-col px-7  bg-[#313442] rounded-md border border-[#3D3E48]`}>
            <div class="absolute h-5 w-5 top-[-10px] rotate-45 transform border border-t-[#3D3E48] border-l-[#3D3E48] bg-[#313442] border-transparent"></div>
            <ul>
                {children}
            </ul>
        </div>
    );
}

export default Dropdown;