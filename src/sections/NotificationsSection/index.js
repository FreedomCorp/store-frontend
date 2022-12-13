import React from "react";

const NotificationSection = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-slate-500 dark:text-slate-200 uppercase font-bold text-5xl select-none">Notificações</h1>
            <h2 className="text-slate-700 dark:text-light-dark text-lg font-semibold select-none">Suas notificações serão mostradas aqui!</h2>
            <div className="w-[80%] flex flex-col items-center justify-center mt-12">
                <NotificationCard description="Esse daqui é uma notificação" date="02/10/2022"/>
                <NotificationCard description="Esse daqui é uma notificação" date="02/10/2022"/>
                <NotificationCard description="Esse daqui é uma notificação" date="02/10/2022"/>
                <NotificationCard description="Esse daqui é uma notificação" date="02/10/2022"/>
                <NotificationCard description="Esse daqui é uma notificação" date="02/10/2022"/>
                <NotificationCard description="Esse daqui é uma notificação" date="02/10/2022"/>
            </div>
        </div>
    )
}

const NotificationCard = ({ description, date }) => {
    return (
        <div className="text-slate-500 flex flex-row items-center justify-between p-5 bg-container-light dark:bg-container-dark shadow-lg w-full rounded-lg mt-4">
            <h2 className="text-lg font-semibold">{description}</h2>
            <h2 className="select-none p-2 pr-8 pl-8 bg-slate-200 dark:bg-container-dark-200 rounded-lg opacity-60 font-semibold">{date}</h2>
        </div>
    );
}

export default NotificationSection;