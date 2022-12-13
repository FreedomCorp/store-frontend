import { PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../hooks/AuthContext";

import api from "../../../services/api";

const Login = () => {
    const { setUser } = useContext(AuthContext);
    let navigate = useNavigate();

    const form = useForm({
        initialValues: { username: '', password: '' },
    });

    const handleSubmit = event => {
        event.preventDefault();
    
        api.post("/api/v1/auth/login", {
          username: form.values.username,
          password: form.values.password,
        }).then(res => {
            setUser(res.data);
            console.log('%c[PixelStore] Definindo usuário com as credenciais fornecidas', 'color:yellow')
            window.location.href = 'http://localhost:3000/client'
        })
      };

    return (
        <div className="mt-[4%] w-1/3 md:mx-auto">
            <div onClick={() => navigate('/') } className="hover:scale-125 transition-all cursor-pointer mb-8">
              <img src={logo} className="mx-auto h-16"/>
            </div>
           <div className="p-8 bg-container-dark rounded-lg"> 
                <form onSubmit={handleSubmit}>
                    <TextInput withAsterisk label="Nome de usuário" placeholder="PixelUsuario" {...form.getInputProps('username')} />
                    <PasswordInput withAsterisk label="Senha do usuário" mt="sm" placeholder="Digite sua senha" {...form.getInputProps('password')}/>
                    <div className="mt-5">
                        <span onClick={() => navigate('/client/auth/register') } className="cursor-pointer text-sm text-sky-500 font-semibold hover:text-opacity-60">Registrar-se</span>
                    </div>
                    <button className="w-full mt-8 text-sm p-2 bg-sky-600 rounded-lg text-white hover:opacity-60 hover:transition-all">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;