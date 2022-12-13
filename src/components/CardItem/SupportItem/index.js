import { Hashicon } from "@emeraldpay/hashicon-react";
import React from "react";
import { BsBoxArrowUpRight, BsDiscord, BsMailbox2 } from "react-icons/bs";

const SupportItem = () => {
    return (
        <div className="p-4 cursor-pointer max-w-[400px] min-h-[220px]">
            <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-row items-center ">
                        <Hashicon value={"Ajuda"} size={25}/>
                        <span className="ml-2 cursor-pointer ext-base font-semibold text-slate-500 dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-200">Algum problema?</span>
                    </div>
                    <span className="mt-2 text-sm text-slate-400 max-w-xs">
                    Caso você possua algum problema com algum produto nosso ou precisa tirar alguma dúvida,
                    você pode usar os recursos disponíveis abaixo.
                    </span>
                </div>
                <div className="mt-2 border-t border-t-text-dark border-opacity-20">
                    
                </div>
                <div className="mt-4 font-semibold">
                    <p className="text-slate-500 text-xs">Recursos disponíveis</p>
                    <div className="mt-2">
                        <p className="text-sm text-slate-600 dark:text-slate-300 flex flex-row items-center cursor-pointer dark:hover:text-[#7289d9]"><BsDiscord className="mr-2"/> Acesse o nosso discord</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-slate-600 text-sm dark:text-slate-300 flex flex-row items-center cursor-pointer hover:text-slate-800 dark:hover:text-slate-100"><BsMailbox2 className="mr-2"/> Enviar ticket rápido</p>
                    </div>
                </div>
        </div>
    );
}

export default SupportItem;