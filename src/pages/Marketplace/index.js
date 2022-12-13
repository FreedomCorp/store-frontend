import React, { useEffect, useState } from "react";

import { Badge, Popover, Text } from "@mantine/core";

import { BsCartCheckFill } from "react-icons/bs";

import { Hashicon } from "@emeraldpay/hashicon-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import api from "../../services/api";
import { useDisclosure } from "@mantine/hooks";

const Marketplace = ({ user }) => {
    const [ categories, setCategories] = useState([]);
    const [ products, setProducts ] = useState([]);

    const findCategories = () => {
        api.get('/api/v1/public/category/all')
        .then(res => {
            console.log(res.data)
            setCategories(res.data);
            setProducts(categories[0].products)
        })
    }

    useEffect(() => {
        findCategories();
    }, [])

    return (
        <div className="h-[1400px]">
            <Navbar user={user}>
                <div className="cursor-pointer select-none mr-5 p-1 pr-3 pl-3 bg-emerald-500 rounded-lg flex flex-row items-center hover:opacity-60">
                    <BsCartCheckFill className="text-xl text-white mr-2"/><p className="text-lg font-semibold text-white">10</p>
                </div>
            </Navbar>

            <div className="mt-24 bg-container-light dark:bg-container-dark-200 md:container md:mx-auto p-10 flex flex-row items-start rounded-lg shadow-lg">
                { categories &&
                    categories.map((value, index) => {
                        return (
                            <CategoryCard onClick={() => {
                                api.get(`/api/v1/public/category/${value.id}`)
                                .then(res => {
                                    setProducts(res.data.products);
                                })
                            }} key={value.id} category={value.name}/>
                        )
                    })

                }
            </div>

            <div className="flex flex-row flex-wrap justify-start mt-12 md:container md:mx-auto bg-container-light dark:bg-container-dark-200 p-16 shadow-xl rounded-xl">
                { products && 
                    products.map((value) => { 
                       return (
                            <ProductCard key={value.id} name={value.name} price={value.price} description={value.description}/>
                       )
                    })
                }
            </div>

        </div>
    );
}

const ProductCard = ({ name, price, description }) => {
    return (
        <div className="mr-2 ml-2 mb-4 basis-1/5 dark:bg-container-dark bg-container-light p-10 rounded-lg">
            <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center">
                        <h2 className="text-slate-300 font-semibold">{name}</h2>
                    </div>
                    <Badge color="teal">{price},00R$</Badge>
                </div>
                <span className="mt-2 text-sm text-slate-400">{description}</span>
                <div className="mt-5 flex flex-row items-center">
                    <button className="rounded-md text-sm bg-emerald-600 dark:text-white p-1 pr-5 pl-5 hover:opacity-60 hover:transition-all"><BsCartCheckFill className="text-xl"/></button>
                    <button className="truncate rounded-md ml-8 text-sm border border-sky-600 dark:text-white p-1 pr-5 pl-5 hover:bg-sky-600 hover:transition-all">Ver mais</button>
                </div>
            </div>
        </div>
    );
}

const CategoryCard = ({ onClick, category }) => {
    const [opened, { close, open }] = useDisclosure(false);

    return (
        <Popover width={250} position="bottom" withArrow shadow="md" opened={opened}>
            <Popover.Target>
                <div 
                    onClick={onClick}
                    onMouseEnter={open} onMouseLeave={close}
                    className="mr-4 ml-4 bg-container-light dark:bg-container-dark p-6 rounded-xl hover:opacity-60 hover:cursor-pointer">
                    <div className="text-5xl">
                        <Hashicon value={category} size={60}/>
                    </div>
                </div>
            </Popover.Target>
            <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
                <Text size="sm">Clique para ver os produtos da categoria {category}</Text>
            </Popover.Dropdown>
        </Popover>
    );
}

export default Marketplace;