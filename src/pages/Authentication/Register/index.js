import React, { useContext, useEffect, useState } from "react";

import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Progress, Text, Popover, Box, Radio } from '@mantine/core';
import { BsCheckLg, BsXLg } from "react-icons/bs";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../hooks/AuthContext";

const Login = () => {
    const [popoverOpened, setPopoverOpened] = useState(false);
    const [value, setValue] = useState('');
    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
    ));

    const strength = getStrength(value);
    const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

    const [checked, setChecked] = useState(false);

    const { setUser } = useContext(AuthContext);

    const form = useForm({
        initialValues: { name: '', email: '', password: '' },
    
        // functions will be used to validate values at corresponding key
        validate: {
          name: (value) => (value.length < 4 ? 'O seu nome precisa possuir ao menos 4 letras' : null),
          username: (value) => (value.length < 5 ? 'O nome precisa possuir ao menos 5 caracteres.' : null),
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido.'),
          password: () => (strength !== 100 ? 'A sua senha precisa completar os requisitos.' : null),
          repeat: (pass) => (pass !== value ? 'Suas senhas precisam ser iguais.' : null)
        },
    });

    const handleSubmit = event => {
        event.preventDefault();
    
        api.post("/api/v1/auth/register", {
          name: form.values.name,
          username: form.values.username,
          password: form.values.repeat,
          email: form.values.email
        }).then(res => {
          setUser(res.data);
          window.location.href = 'http://localhost:3000/client'
        })
      };

    return (
        <div className="mt-[1%] w-1/3 md:mx-auto">
            <div onClick={() => window.location.href = 'http://localhost:3000/' } className="cursor-pointer mb-8">
              <img src={logo} className="mx-auto h-16"/>
            </div>
            <div className="p-8 bg-container-dark rounded-lg">
              <form onSubmit={handleSubmit}>
                 <TextInput withAsterisk label="Primeiro nome" placeholder="Lucas" {...form.getInputProps('name')} />
                 <TextInput withAsterisk mt="sm" label="Nome de usuário" placeholder="PixelUsuario" {...form.getInputProps('username')} />
                 <TextInput withAsterisk mt="sm" label="Email" placeholder="email@gmail.com" {...form.getInputProps('email')} />
                 <Popover opened={popoverOpened} position="bottom" width="target" transition="pop">
                    <Popover.Target>
                        <div
                          onFocusCapture={() => setPopoverOpened(true)}
                          onBlurCapture={() => setPopoverOpened(false)}
                        >
                        <PasswordInput
                            mt="sm"
                            withAsterisk
                            label="Sua senha"
                            placeholder="Digite a sua senha"
                            {...form.getInputProps('password')}
                            value={value}
                            onChange={(event) => setValue(event.currentTarget.value)}
                        />
                        </div>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <Progress color={color} value={strength} size={5} style={{ marginBottom: 10 }} />
                        <PasswordRequirement label="Incluir no mínimo 7 letras" meets={value.length > 7} />
                            {checks}
                    </Popover.Dropdown>
                </Popover>
                <PasswordInput withAsterisk label="Repita sua senha" mt="sm" placeholder="Digite sua senha novamente" {...form.getInputProps('repeat')}/>
                <Radio mt={"xl"} label="Eu concordo com os termos e políticas" checked={checked} onClick={() => setChecked(!checked)} />
                <button className="w-full mt-8 text-sm p-2 bg-sky-600 rounded-lg text-white hover:opacity-60 hover:transition-all">Registrar</button>
              </form>
            </div>
        </div>
    );
}

function PasswordRequirement({ meets, label }) {
    return (
      <Text
        color={meets ? 'teal' : 'red'}
        sx={{ display: 'flex', alignItems: 'center' }}
        mt={7}
        size="sm"
      >
        {meets ? <BsCheckLg size={14} /> : <BsXLg size={14} />} <Box ml={10}>{label}</Box>
      </Text>
    );
  }

const requirements = [
    { re: /[0-9]/, label: 'Incluir um número' },
    { re: /[a-z]/, label: 'Incluir uma letra minúscula' },
    { re: /[A-Z]/, label: 'Incluir uma letra maiúscula' },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Incluir um símbolo especial' },
  ];
  
  function getStrength(password) {
    let multiplier = password.length > 5 ? 0 : 1;
  
    requirements.forEach((requirement) => {
      if (!requirement.re.test(password)) {
        multiplier += 1;
      }
    });
  
    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
  }

export default Login;