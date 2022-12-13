import { Badge, Indicator } from "@mantine/core";
import React from "react";
import { BsCommand } from "react-icons/bs";


import { useNavigate } from "react-router-dom";

const Button = ({ notification, admin, id, disabled, recent, route, icon, text, onClick }) => {
    let navigate = useNavigate();

    const correctIcon = (notification) => {
        if (notification) {
            return (
                <Indicator color={"red"}>
                    {icon}
                </Indicator>
            )
        }

        return (<>{icon}</>)
    }

    return (
        <div onClickCapture={onClick} onClick={() => {
            if (!disabled) {
                navigate(route);
            }
        }} className={`${admin ? "border border-sky-400" : ""} ${disabled ? "opacity-60 hover:cursor-not-allowed hover:dark:text-text-dark" : "cursor-pointer"} w-full flex flex-row items-center justify-between rounded-lg p-2 text-light-300 dark:text-text-dark ${id === route ? "bg-slate-200 opacity-80 dark:bg-off-dark font-bold" : ""} hover:transition-all hover:delay-75`}>
            <div className="flex flex-row items-center">
                { icon ? 
                    <div className={`${admin ? "text-sky-400" : ""} font-bold mr-5 text-lg`}>
                        {correctIcon(notification)}
                    </div> 
                : <BsCommand className={`font-bold mr-5 text-lg`}/> }
            <p className={`${admin ? "text-sky-400" : ""} drop-shadow-lg text-[14px]`}>{text}</p>
            </div>
            { recent ?
                <Badge className={`${disabled ? "" : "animate-pulse"} dark:bg-emerald-700 dark:text-emerald-200`}>Novo!</Badge>
                : ""
            }
        </div>
    );
}

export default Button;