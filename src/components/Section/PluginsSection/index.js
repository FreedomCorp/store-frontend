import React from "react";
import Accordion from "../../Accordion";
import Card from "../../Card";

const PluginSection = () => {
    return (
        <div>
        <div className="mt-16 ml-[18rem] flex flex-row flex-wrap justify-start cursor-default">
            <Card title="SkyRankup" description="Faça com que seus jogadores consigam subir de nível!"/>
            <Card title="SkyBaú" description="Jogadores conseguem ter baús virtuais para guardar seus itens"/>
            <Card title="SkyClãs" description="Sistemas de clãs otimizado e completo para o seu servidor!"/>
            <Card title="SkyMinaPrivada" description="Minas privadas, jogadores conseguem ter suas próprias minas"/>
            <Card title="SkyLobby" description="Faça com que os jogadores se divirtam no seu lobby!"/> 
        </div>
        <div className="mt-5">

        </div>
        </div>
    );
}

export default PluginSection;