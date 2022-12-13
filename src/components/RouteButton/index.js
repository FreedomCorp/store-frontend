import React from "react";
import { useNavigate } from "react-router-dom";

const RouteButton = ({ route, icon, ml, mr }) => {
    let navigate = useNavigate();

    return (
        <div onClick={() => navigate(route)} className={`ml-${ml} mr-${mr} text-slate-400 border-slate-400 p-2 border rounded-lg`}>
            {icon}
        </div>
    );
}

export default RouteButton;