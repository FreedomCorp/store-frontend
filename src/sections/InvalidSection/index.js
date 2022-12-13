import React from "react";

const InvalidSection = () => {
    return (
        <div className="flex flex-col items-center justify-center h-36">
            <h1 className="text-slate-400 text-5xl font-semibold">Ops...</h1>
            <h2 className="dark:text-slate-500 mt-5 text-3xl">Parece que temos alguma seção inválida por aqui</h2>
        </div>
    );
}

export default InvalidSection;