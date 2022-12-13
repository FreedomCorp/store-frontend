import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import AboutItem from "../CardItem/AboutItem";
import SupportItem from "../CardItem/SupportItem";

import logo from "../../assets/logo.png";
import FaqItem from "../CardItem/FaqItem";

import avatar from "../../assets/tinygraphs.svg";
import { AuthContext } from "../../hooks/AuthContext";

const Underline = () => (
  <motion.div
    className="absolute rounded-full -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#7c82d4] to-[#3dc1c4]"
    layoutId="underline"
    layout
  ></motion.div>
);

const Navbar = ({ children }) => {
  let navigate = useNavigate();
  
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="p-10 flex flex-row items-center justify-between">
        <div onClick={() => navigate("/")}>
          <img src={logo} className="h-12"/>
        </div>
        <motion.div className="flex justify-center">
            <MenuItem text={"Sobre"} component={<AboutItem/>}/>
            <MenuItem text={"Suporte"} component={<SupportItem/>}/>
            <MenuItem text={"Catálogo"} route="/plugins"/>
            <MenuItem text={"Recursos"} component={<FaqItem/>}/>
        </motion.div>
        <div className="flex flex-row items-center">{children}
        { user ? 
        <div onClick={() => window.location.href = 'http://localhost:3000/client'} className="h-10 w-10 mr-16 border-1 border-slate-600 rounded-full">
          <img src={avatar} className="rounded-full"/>
        </div> :
        <div className="">
            <button onClick={() => window.location.href = 'http://localhost:3000/client/auth/login'} className="text-md p-2 bg-sky-600 rounded-lg px-8 text-white hover:opacity-60 font-bold">Entrar</button>
        </div>
        }
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ text, component, route }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);
  let navigate = useNavigate();

  return (
    <motion.div
      className="px-5 relative cursor-default select-none"
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <span onClick={() => navigate(route)} className="relative text-slate-300 dark:text-slate-400 font-semibold dark:hover:text-slate-300">
        {text}
        { isBeingHovered && <Underline/> }
      </span>
      {(isBeingHovered && component) && 
            <SubItemsContainer>   
                <motion.div 
                  transition={{ ease: "easeOut", duration: 0.2}}
                      animate={{ 
                          opacity: 1,
                          x: 0,
                      }}
                      initial={{ 
                           opacity: 0,
                          x: -50 * 1,
                  }}>
                      {component}            
                </motion.div>

            </SubItemsContainer>}
    </motion.div>
  );
};

const SubItemsContainer = ({ children }) => {
  return (
    <div className="absolute py-10 min-w-max">  
      <motion.div
        layoutId="menu"
        className="-ml-40 rounded-lg shadow-lg py-5 px-7 bg-container-light dark:bg-container-dark-200 rounded-box -left-2/4"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Navbar;