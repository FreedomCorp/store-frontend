import React, { useContext, useState } from "react";

import Card from "../../components/Card";
import PlusCard from "../../components/PlusCard";
import DefaultSection from "../DefaultSection";
import Accordion from "../../components/Accordion";
import Modal from "../../components/Modal";
import { AuthContext } from "../../hooks/AuthContext";

const LicenseSection = () => {
    const { user } = useContext(AuthContext);

    const [ product, setProduct ] = useState(null);
    const [ modal, setModal ] = useState(true);

    return (
        <DefaultSection>
        { product ? 
            <Modal 
                opened={modal}
                title={product.name} 
                description={product.description}
                close={() => setModal(false)}
                onOpen={() => setModal(!modal)}
            /> :
            <></>
        }    
        <Accordion title="Gerenciar Licenças">
        <div className="flex flex-row flex-wrap">
            { user && user.products.map((value) => {
                return (
                    <Card
                        key={value.name}
                        onClick={() => {
                            setModal(true)
                            setProduct(value)
                            
                        }}
                        version="1.0"
                        title={value.name} 
                        description={"Sem descrição curta por enquanto, por favor resolver isso o quanto antes."} />
                )
            })}
            <PlusCard/>
        </div>
        </Accordion>
        </DefaultSection>
    );
}

export default LicenseSection;