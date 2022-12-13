import { Alert, FileButton, MultiSelect, NumberInput, TextInput } from "@mantine/core";
import RichTextEditor from "@mantine/rte";

import Accordion from "../../../components/Accordion";

import React, { useEffect, useState } from "react";
import { showNotification } from "@mantine/notifications";
import { BsExclamationTriangle } from "react-icons/bs";
import api from "../../../services/api";

function isValid(name, file, price, description, category) {
    if (name === null) {
        return false;
    } 

    if (price <= 5.0) {
        return false;
    }

    if (description == "<p>Insira alguma descrição...</p>") {
        return false;
    }

    if (category.length == 0) {
        return false;
    }
    
    if (file == null) {
        return false;
    }

    return true;
}

function validMessage(name, file, price, description, category) {
    if (name.length < 7) {
        return "Selecione um nome válido para o seu produto!"
    } 

    if (price <= 0.0) {
        return "Selecione um preço válido para o seu produto!"
    }

    if (category.length < 1) {
        return "Selecione ao menos uma categoria para o seu produto!"
    }

    if (description === "<p>Insira alguma descrição...</p>") {
        return "Coloque uma descrição válida para o seu produto!"
    }
    
    if (file == null) {
        return "Selecione um arquivo válido para o seu produto!"
    }

    return "Algum erro desconhecido ocorreu"
}

const data = [
    { value: 'rankup', label: 'Rankup' },
    { value: 'mecanica', label: 'Mecânicas' },
    { value: 'factions', label: 'Factions' },
    { value: 'administração', label: 'Administração' },
    { value: 'evento', label: 'Evento' },
  ];

const ProductCreateAccordion = () => {
    const initialValue = 
        '<p>Insira alguma descrição...</p>';

    const [show, setShow] = useState(false);    
    
    const [name, setName] = useState("");
    const [price, setPrice] = useState(10.0);
    const [value, onChange] = useState(initialValue);    
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState([]);

    const [ avaliable, setAvaliable ] = useState([]);

    var fileBytes = new Uint32Array(file);

    const createProduct = () => {
        console.log(`Categorias selecionadas ${categories[0]}`)
        api.post('/api/v1/public/products', {
            name: name,
            description: value,
            author: 'Async',
            version: '1.0',
            price: price,
            creditPrice: (price / 2),
            file: [],
            categoryId: categories[0]
        })
    }

    useEffect(() => {
        api.get('/api/v1/public/category/all')
        .then(res => {
            const names = res.data.map((value) => {
                return { value: value.id, label: value.name }
            })
            setAvaliable(names);
        })
    }, [])

    let checkIsValid = () => {
        if (!isValid(name, file, price, value, categories)) {
            showNotification({
                autoClose: 2000,
                disallowClose: true,
                className: 'bg-slate-400',
                color: 'red',
                title: `Um erro ocorreu!`,
                message: validMessage(name, file, price, value, categories)
            })
        } else {
            showNotification({
                autoClose: 2000,
                disallowClose: true,
                loading: true,
                className: 'bg-slate-400',
                color: 'teal',
                title: `Publicando plugin!`,
                message: 'Seu plugin está sendo atualmente publicado em nosso sistema'
            });
            createProduct();
        }
    }

    const canShow = show && !isValid(name, file, price, value, categories);
    const resetAll = () => {
        setName("");
        setPrice(10.0);
        onChange(initialValue);
        setFile(null);
        setCategories([]);
    }
    
    return (
        <>
        <Alert className={`w-[80%] ${(!canShow) ? "hidden transition-all delay-150" : ""}`}
               icon={<BsExclamationTriangle size={16} />}
               title="Aviso!" color="red">
            { validMessage(name, file, price, value, categories) }
        </Alert>
        <Accordion title={"Criar novo produto!"} onClick={() => {
            setShow(!show);
            resetAll();
        }}>
        <div className="mt-4 flex flex-col">
            <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between">
                   <TextInput
                    withAsterisk
                    onChange={(event) => setName(event.currentTarget.value)}
                    className="w-72 mb-4"
                    placeholder="SkyPlugin"
                    label="Nome do produto"
                    description="O nome do produto precisa ter no mínimo 7 letras."
                   />
                   <button onClick={() => checkIsValid()} className="text-sm text-slate-500 dark:text-slate-300 p-2 pr-8 pl-8 border border-emerald-200 bg-emerald-700 bg-opacity-30 rounded-lg mt-8 hover:bg-opacity-40 dark:hover:text-slate-200 hover:transition-all">
                     Publicar
                   </button>
                </div>
                <NumberInput
                    withAsterisk
                    label="Preço do produto"
                    description="O preço do produto precisa ser acima de 5 reais."
                    className="w-72 mb-4"
                    onChange={(value) => setPrice(value)}
                    defaultValue={10}
                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                    formatter={(value) =>
                    !Number.isNaN(parseFloat(value))
                    ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    : '$ '
                    }/>
                <MultiSelect
                    withAsterisk
                    className="w-72 mb-4"
                    data={avaliable}
                    onChange={setCategories}
                    label="Categorias do Produto"
                    description="O produto precisa ter ao menos uma categoria."
                    placeholder="Clique para selecionar"
                />    
            </div>
            <div className="flex flex-row items-center">
                <FileButton onChange={setFile}
                 accept=".jar">
                    {(props) => 
                        <button {...props} className="pr-5 pl-5 text-sm text-slate-500 dark:text-slate-300 p-2 border border-sky-700 rounded-lg mt-2 hover:bg-sky-700 dark:hover:text-slate-200 hover:transition-all">
                            Enviar arquivo
                         </button>}
                </FileButton>
                { file !== null && (<p className="ml-3 text-white text-sm mt-2">Arquivo selecionado: {file.name}</p>) }   
            </div>
            <RichTextEditor className="mt-5 bg-slate-200 dark:bg-container-dark" value={value} onChange={onChange} id="rte"/>
        </div>
        </Accordion>
        </>
    );
}

export default ProductCreateAccordion;