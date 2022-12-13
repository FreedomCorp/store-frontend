import RichTextEditor from "@mantine/rte";
import React from "react";
import { BsX } from "react-icons/bs";

const Modal = ({ title, description, opened, onOpen }) => {
    return (
        <div className={`${!opened ? "hidden" : "visible"} fixed inset-0 z-10 overflow-y-auto`}>
            <div className="bg-container-dark bg-opacity-60 backdrop-blur-md flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="w-1/2 p-8 rounded-lg bg-container-dark-200 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="flex flex-row items-center justify-between">
                        <h1 className="text-2xl font-semibold">{title}</h1>
                        <button onClick={onOpen} className="transition-all text-red-400 hover:text-red-600"><BsX className="text-3xl"/></button>
                    </div>
                    <RichTextEditor className="mt-4" readOnly value={description}/>
                </div>
            </div>
        </div>
    );
}

export default Modal;