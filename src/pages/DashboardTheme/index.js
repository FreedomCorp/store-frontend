import React, { useContext, useEffect, useState } from "react";
import { BsArrowBarRight, BsBroadcastPin, BsCashStack, BsChatLeftText, BsCoin, BsDiscord, BsFillCartCheckFill, BsFillChatRightTextFill, BsFillHexagonFill, BsFillHouseFill, BsFillMoonFill, BsFillSunFill, BsGearWideConnected, BsGiftFill, BsHouseFill, BsPerson} from "react-icons/bs";
import Button from "../../components/Button";
import { useTheme } from "../../hooks/useTheme";
import SidebarItemSection from "../../components/Sidebar/SidebarItemSection";
import Search from "../../components/Search";
import SwitchButton from "../../components/SwitchButton";

import NotificationSection from "../../sections/NotificationsSection";

import avatar from "../../assets/tinygraphs.svg";
import PopoverButton from "../../components/PopoverButton";
import LicenseSection from "../../sections/LicenseSection";
import ProductCreateSection from "../../sections/ProductCreateSection";
import InvalidSection from "../../sections/InvalidSection";
import { closeAllModals, openModal } from "@mantine/modals";
import { Textarea } from "@mantine/core";

import logo from "../../assets/logo.png";
import api from "../../services/api";
import { AuthContext } from "../../hooks/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const DashboardTheme = ({ path }) => {
    const { theme, setTheme } = useTheme();
    const { admin, setAdmin } = useState(false);

    const { user, isAuthenticated } = useContext(AuthContext);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const openTicketModal = () =>
        openModal({
            centered: true,
            title: "Insira o conteúdo do seu Ticket",
            children: (
                <>
                    <Textarea  
                        withAsterisk
                        label="Sua descrição"
                        placeholder="Seu conteúdo aqui..."
                        data-autoFocus/>
                    <button onClick={closeAllModals} className="w-full p-2 mt-4 bg-blue-500 text-slate-600 dark:text-white font-base rounded-lg hover:bg-opacity-60 hover:transition-all text-sm">Enviar</button>           
                </>
            )
    });

    const realPath = `/client/${path}`;

    return (
        <>
          <div className="flex grow h-screen w-screen">
            <div className="border-r border-slate-400 dark:border-r-container-dark-200 bg-container-light w-[300px] min-w-min-[300px] overflow-y-auto transition-all ease-out dark:bg-container-dark no-scrollbar">
                <div onClick={() => window.location.href= '/'} className="p-6 drop-shadow-xl w-full flex flex-row items-center justify-center hover:cursor-pointer">
                    <img src={logo} className="h-16"/>
                </div>
                <div className="flex flex-row items-center justify-between p-2 bg-slate-200 dark:bg-container-dark-200">
                    <img src={avatar} className="ml-4 rounded-full h-12 w-12"/>
                    <p className="text-light-300 dark:text-text-dark select-none"><b>Olá</b>, {user && user.name}!</p>
                    <div>
                        <PopoverButton 
                            onClick={() => {
                                api.get("/api/v1/auth/logout").then(res => {
                                    window.location.href = '/'
                                })
                            }}
                            icon={<BsArrowBarRight className="text-light-300 dark:text-text-dark text-xl font-bold hover:opacity-60"/>}
                            description={
                                "Clique aqui para deslogar da sua conta."
                            }
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    { !admin && 
                    <>
                        <SidebarItemSection title={"Administração"}>
                            <Button admin id={realPath}
                                    route={"/client/admin"}
                                    icon={<BsGearWideConnected/>}
                                    text={"Administrar Loja"}/>
                        </SidebarItemSection>
                    </>

                    }
                    <SidebarItemSection title={"Plugins"}>
                        <Button id={realPath} route={"/client/licenses"} icon={<BsFillHexagonFill/>} text="Configurar Licenças"/>
                        <Button id={realPath} recent route={"/client/ips"} icon={<BsBroadcastPin/>} text="Gerenciar IP's"/>
                    </SidebarItemSection>
                    <SidebarItemSection title={"Meu perfil"}>
                        <Button id={realPath} recent route={"/client/credit"} icon={<BsCoin/>} text="Créditos"/>
                        <Button id={realPath} route={"/client/balance"} icon={<BsCashStack/>} text="Adicionar Saldo"/>
                        <Button id={realPath} route={"/client/profile"} icon={<BsPerson/>} text="Gerenciar Perfil"/>
                    </SidebarItemSection>
                    <SidebarItemSection title={"Suporte"}>
                        <Button id={realPath} route={"/client/email"} text="Enviar um Email"/>
                        <Button recent onClick={openTicketModal} icon={<BsChatLeftText/>} text="Ticket Rápido"/>
                    </SidebarItemSection>
                    <SidebarItemSection title={"Outros"}>
                        <Button id={realPath} icon={<BsDiscord/>} text="Ir para o Discord"/>
                        <Button id={realPath} icon={<BsFillCartCheckFill/>} disabled route={"/client/commission"} text="Solicitar Encomenda"/>
                        <Button notification id={realPath} icon={<BsFillChatRightTextFill/>} route={"/client/notifications"} text="Visualizar Notificações"/>
                        <Button id={realPath} icon={<BsGiftFill/>} disabled recent text="Sorteio"/>
                    </SidebarItemSection>
                </div>
            </div>
            <div className="!overflow-hidden max-w-screen max-w-full lg:max-w-[calc(100vw-300px)] flex flex-col grow relative">
                <div className="bg-container-light dark:bg-container-dark flex items-center justify-between min-h-[80px] max-h-[80px] h-[80px] px-6 lg:px-10">
                    <Search placeholder={"Procurar..."}/>
                    <div className="flex flex-row items-center">
                        <button className="flex flex-row items-center p-3 mr-5 rounded-md  bg-yellow-700 bg-opacity-25 text-yellow-100 hover:opacity-80"><BsCoin className="text-lg mr-3"/> 150,00</button>
                        <button className="flex flex-row items-center p-3 mr-12 rounded-md  bg-emerald-700 bg-opacity-25 text-emerald-100 hover:opacity-80"><BsCashStack className="text-lg mr-3"/> 493,50R$</button>
                        <SwitchButton 
                            onClick={() => toggleTheme()}
                            enableColor={"bg-yellow-200"}
                            disableColor={"bg-yellow-200"}
                            enableIcon={<BsFillSunFill/>}
                            disableIcon={<BsFillMoonFill/>}
                        />
                    </div>
                </div>
                <div className="overflow-auto">
                    <div className="relative flex flex-col mt-14 items-center">
                      { SectionByPath(path) } 
                    </div>
                </div>
            </div>
          </div>
        </>
    );
}

function SectionByPath(path) {
    switch(path) {
        case "admin": return(<ProductCreateSection/>)
        case "licenses": return(<LicenseSection/>)
        case "notifications": return(<NotificationSection/>)
        default: return(<InvalidSection/>)
    }
}

export default DashboardTheme;