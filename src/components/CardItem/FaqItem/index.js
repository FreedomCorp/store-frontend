import React from "react";
import { BsBagFill, BsCartFill, BsFileEarmarkMinusFill, BsFillHouseFill, BsFillPatchCheckFill, BsFillPeopleFill, BsLifePreserver, BsStack, BsTagFill, BsTrophyFill } from "react-icons/bs";

import { FaHandSparkles } from "react-icons/fa";

const FaqItem = () => {
    return (
        <div className="min-w-[320px] min-h-[260px]">
            <div className="flex flex-col justify-between">
            <div className="my-2 p-2 flex flex-row justify-between">
                <div className="flex flex-col">
                    <div className="text-sm flex flex-row items-center text-slate-400 cursor-pointer hover:text-slate-200 hover:transition-all">
                        <BsLifePreserver className="text-base text-slate-300 mr-3"/><p className="font-semibold">Centro de suporte</p>
                    </div>
                    <div className="text-sm mt-4 flex flex-row items-center text-slate-400 cursor-pointer hover:text-slate-200 hover:transition-all">
                        <BsTagFill className="text-base text-slate-300 mr-3"/><p className="font-semibold">Planos de suporte</p>
                    </div>
                    <div className="text-sm mt-4 flex flex-row items-center text-slate-400 cursor-pointer hover:text-slate-200 hover:transition-all">
                        <BsFileEarmarkMinusFill className="text-base text-slate-300 mr-3"/><p className="font-semibold">Guias</p>
                    </div>
                    <div className="text-sm mt-4 flex flex-row items-center text-slate-400 cursor-pointer hover:text-slate-200 hover:transition-all">
                        <FaHandSparkles className="text-base text-slate-300 mr-3"/><p className="font-semibold">Histórias de clientes</p>
                    </div>
                </div>
                <div className="ml-8 flex flex-col">
                    <div className="text-sm flex flex-row items-center text-slate-400 cursor-pointer hover:text-slate-200 hover:transition-all">
                        <BsStack className="text-base text-slate-300 mr-3"/><p className="font-semibold">Blog</p>
                    </div>
                    <div className="text-sm mt-4 flex flex-row items-center text-slate-400 cursor-pointer hover:text-slate-200 hover:transition-all">
                        <BsFillHouseFill className="text-base text-slate-300 mr-3"/><p className="font-semibold">Conferência anual</p>
                    </div>
                    <div className="text-sm mt-4 flex flex-row items-center text-slate-400 cursor-pointer hover:text-slate-200 hover:transition-all">
                        <BsFillPeopleFill className="text-base text-slate-300 mr-3"/><p className="font-semibold">Fale com a equipe</p>
                    </div>
                </div>
            </div>
            <div className="my-2 p-4 flex flex-row justify-between">
                <div className="flex flex-col">
                    <div className="text-sm flex flex-row items-center text-slate-400 cursor-pointer hover:text-slate-200 hover:transition-all">
                        <BsBagFill className="text-base text-slate-300 mr-3"/><p className="font-semibold">Vagas</p>
                    </div>
                    <div className="text-sm mt-4 flex flex-row items-center text-slate-400 cursor-pointer hover:text-slate-200 hover:transition-all">
                        <BsCartFill className="text-base text-slate-300 mr-3"/><p className="font-semibold">Solicitar uma encomenda</p>
                    </div>
                </div>
                <div className="ml-8 flex flex-col">
                    <div className="text-sm flex flex-row items-center text-yellow-300 animate-pulse cursor-pointer hover:text-yellow-200 hover:transition-all">
                        <BsTrophyFill className="text-base text-yellow-200 mr-3"/><p className="font-semibold">Seja premium!</p>
                    </div>
                    <div className="text-sm mt-4 flex flex-row items-center text-slate-400 cursor-pointer hover:text-slate-200 hover:transition-all">
                        <BsFillPatchCheckFill className="text-base text-slate-300 mr-3"/><p className="font-semibold">Seja um parceiro</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default FaqItem;