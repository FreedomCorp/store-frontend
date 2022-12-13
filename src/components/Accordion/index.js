import { AnimatePresence, motion } from "framer-motion";


import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Accordion = ({ title, children, onOpen, onClose, onClick }) => {
    const [opened, setOpened] = useState(false);

    return (
        <div className="cursor-pointer select-none mt-8 relative p-8 w-[80%] bg-container-light dark:bg-container-dark-200 rounded-lg shadow-lg">
            <div onClick={() => { 
                if (opened) {
                    setOpened(false);
                } else {
                    setOpened(true);
                }
            }}  className="flex flex-row items-center justify-between text-light-300 dark:text-slate-300 text-xs">
                <h1 className="font-semibold opacity-60">{title}</h1>
                { opened ? <BsChevronDown/> : <BsChevronUp/> }
            </div>
            { opened ? 
                <div className={`mt-8 overflow-hidden transition-all cursor-default ${opened ? "open-accordion" : ""}`}>
                    {children}
                </div>
                : 
                <></>
            }
        </div>  
    );
}

export default Accordion;