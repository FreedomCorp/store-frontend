import React from "react";
import PopoverCard from "../../components/PopoverCard";

const DefaultSection = ({children}) => {
    return (
        <>
        <div className="shadow-md rounded-xl w-[80%] flex flex-row items-center justify-center p-8 bg-container-light dark:bg-container-dark">
            <PopoverCard title={"Licenças"} description={"Total de plugins adquiridos por você."} value={30}/>
            <PopoverCard money title={"Dinheiro Gasto"} description={"Dinheiro total gasto na nossa loja."} value={300}/>
            <PopoverCard title={"IP's Adicionais"} description={"IP's comprados como adicionais por você."} value={30}/>
        </div>
        <div className="flex flex-col items-center justify-center mt-12 w-full">  
            {children}
        </div>
        </>
    );
}

export default DefaultSection;