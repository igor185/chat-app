import React, {useEffect} from 'react';
import LoginForm from "./LoginForm";
import RegForm from "./RegForm";
import initParticles from "./Particles/particles";
import './Particles/styles.sass'


const LoginPage = (props: any) => {
    useEffect(() => {initParticles()}, [])

    return (
        <>
            <div id="particles-js" />
            {props.page === "login" ? <LoginForm/> : <RegForm/>}
        </>
    )
};


export default LoginPage;