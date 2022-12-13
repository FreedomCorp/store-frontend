import { Hashicon } from "@emeraldpay/hashicon-react";
import { Badge } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React, { useState } from "react";
import PopoverBadge from "../PopoverBadge";

import Switch from "../Switch";

const Card = ({ title, version, product, versionDescription, description, onClick }) => {
    const [enabled, setEnabled] = useState(true);

    const text = enabled ? "habilitada" : "desabilitada";
    const color = enabled ? "teal" : "red";

    return (
        <div className="md:w-1/2">
            <div className="m-2 mt-3 p-8 bg-slate-200 dark:bg-[#313442] shadow-lg rounded-2xl">
                <div className="flex flex-row items-center justify-between relative mb-4">
                    <div className="flex flex-row items-center justify-between">
                        <Hashicon value={title} size={40}/>
                    </div>
                    <h3 className="text-light-300 dark:text-white font-semibold text-xl flex flex-row items-center">{title} 
                    <PopoverBadge title={version} description={versionDescription}/></h3>
                    <Switch action={() => {
                        setEnabled(!enabled)
                        showNotification({
                            autoClose: 1000,
                            className: 'bg-slate-400',
                            title: title,
                            color: color,
                            message: `Essa licença foi ${text}!`,
                        })
                    }}/>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <span className="text-light-300 dark:text-[#9195AB] text-sm">{description}</span>
                  </div>
                </div>
                <div className="mt-4">
                    <button onClick={onClick} className="text-light-300 border-slate-400 dark:text-white border dark:border-slate-400 pr-4 pl-4 pt-0.5 pb-0.5 rounded-lg text-sm hover:opacity-75 hover:bg-slate-500 hover:text-white hover:dark:bg-slate-400 hover:transition">Ler mais...</button>
                </div>
            </div>
        </div>
    );
}


export default Card;