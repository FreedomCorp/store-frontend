import { TextInput } from "@mantine/core";
import React, { useState } from "react";
import Accordion from "../../Accordion";

import api from "../../../services/api";
import { showNotification } from "@mantine/notifications";

const CategoryCreateAccordion = () => {
    const [ categoryName, setCategoryName ] = useState('');

    const createCategory = () => {
        api.post("/api/v1/public/category", {
            name: categoryName
        }).then(res => {
            showNotification({
                autoClose: 2000,
                disallowClose: true,
                className: 'bg-slate-400',
                color: 'teal',
                title: `Categoria criada!`,
                message: `Categoria de nome ${res.data.name} foi criada com sucesso`
            })
        })
    }

    return (
        <>
            <Accordion title={"Criar nova categoria!"}>
                <div className="mt-4 flex flex-col">
                    <div className="w-full flex flex-row items-center justify-between">
                        <TextInput
                            withAsterisk
                            className="w-1/4"
                            label="Nome da categoria"
                            placeholder="Digite o nome da categoria"
                            onChange={(event) => setCategoryName(event.currentTarget.value)}
                        />
                        <button 
                            onClick={createCategory}
                            className="text-slate-300 bg-blue-700 p-2 pl-6 pr-6 text-sm font-semibold rounded-lg mr-5 hover:opacity-60 hover:transition-all">Criar</button>
                    </div>
                </div>
            </Accordion>
        </>
    )
}

export default CategoryCreateAccordion;