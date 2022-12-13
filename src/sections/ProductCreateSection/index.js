import React from "react";

import Accordion from "../../components/Accordion";

import DefaultSection from "../DefaultSection";
import ProductCreateAccordion from "../../components/Accordions/ProductCreateAccordion";
import CategoryCreateAccordion from "../../components/Accordions/CategoryCreateAccordion";

const ProductCreateSection = () => {

    return (
        <>
        <DefaultSection>
            <ProductCreateAccordion/>
            <CategoryCreateAccordion/>
            <Accordion title="Editar categoria existente!"/>
            <Accordion title="Criar um novo cupom de desconto!"/>
        </DefaultSection>
        </>
    );
}

export default ProductCreateSection;