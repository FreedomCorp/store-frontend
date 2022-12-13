import React from "react";

import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

const PerfilSection = () => {
    const form = useForm({
        initialValues: {
          email: '',
          termsOfService: false,
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
      });

    return (
        <>
         <div className="mt-16 ml-[18rem] flex flex-row flex-wrap justify-start cursor-default">
            
         </div>
        </>
    );
}

export default PerfilSection;