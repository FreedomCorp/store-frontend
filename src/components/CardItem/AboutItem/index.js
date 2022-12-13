
import { Hashicon } from "@emeraldpay/hashicon-react";
import React from "react";
import { BsPieChartFill } from "react-icons/bs";

const ItemInformation = ({ title, description }) => {
    return (
        <div className="my-2 group cursor-pointer min-w-max">
        <div className="p-4 flex flex-row items-center">
            <Hashicon value={title} size={35} />
            <div className="flex flex-col cursor-pointer">
                <span className="ml-3 text-base font-semibold text-slate-500 dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-100">{title}</span>
                <span className="ml-3 text-sm text-slate-400">{description}</span>
            </div>
        </div>
        </div>
    );
}

const AboutItem = () => {
    return (
        <div className="min-w-[460px] min-h-[300px]">
            <div className="flex flex-row justify-between"> 
                <div className="flex flex-col justify-between h-full">
                    <ItemInformation title="Conhecer a nossa loja" description={"Gostaria de conhecer um pouco mais sobre a nossa loja?"}/>
                    <ItemInformation title="Gostaria de conhecer os desenvolvedores?" description={"Saiba quem somos nós da Pixel Plugins."}/>
                    <ItemInformation title="Como posso fazer parte?" description={"Deseja fazer parte da nossa equipe? Entre em contato."}/>
                    <ItemInformation title="Meios para contato direto" description={"Saiba como você pode entrar em contato direto conosco."}/>
                </div>
                <div className="my-2 p-4 border-l border-dashed border-l-slate-700 border-opacity-40">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center text-sm text-slate-400 font-semibold hover:text-slate-200">
                            <Hashicon value={"hashh"} size={15}/><p className="ml-2">Observar API pública</p>
                        </div>
                        <span className="text-sm mt-2 text-slate-400 opacity-70 max-w-[220px]">
                            Saiba como consultar nossa API pública e como utilizá-la também.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutItem;