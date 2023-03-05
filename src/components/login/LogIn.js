import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useContext, useEffect, useState } from 'react';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './../../../node_modules/bootstrap/dist/js/bootstrap.js';
function LogIn() {


    let [users, setUser] = useState();
    useEffect(() => {
        fetch('http://localhost:9000/userinfo').then((res) => res.json()).then((data) => setUser(data))
    }, [])

    const navigate = useNavigate();
    const getUser = () => {
        let userName = document.getElementById('userName').value;
        let password = document.getElementById('password').value;
        users.map((el) => {
            if (userName === el.username && password === el.password) {
                window.localStorage.userid = el.id;
                window.localStorage.username = el.username;
                navigate(`/user/`)
                console.log(window.localStorage.username)
            }
            else if (userName === 'Admin' && password === 'Admin') {
                window.localStorage.userid = -1;

                navigate(`/user`)

            } else {
                document.getElementById('wrong-user-info').innerText = 'wrong user or Password';
            }
        })
    }
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand"><i className="fa-solid fa-store w-co "><span className="w-co marketko">Marketko</span></i> </a>
            </div>
        </nav>
        <div className="Lcontainer">
            <div className="screen">
                <div className="screen__content">
                    <div className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input autoComplete="off" id='userName' type="text" className="login__input" placeholder="User name / Email" />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input autoComplete="off" id='password' type="password" className="login__input" placeholder="Password" />
                        </div>
                        <p id='wrong-user-info'></p>
                        <div onClick={() => { getUser() }} className='Link-login'  >  <button className="button login__submit">
                            <span className="button__text">Log in</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button></div>
                        <Link to={'/register'} className='Link-login'  >  <button className="button login__submit">
                            <span className="button__text">Register</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button></Link>
                        <Link to={'/user'} className='Link-login' onClick={() => {
                            window.localStorage.userid = 0;
                        }} >  <button className="button login__submit">
                                <span className="button__text">Start Shopping</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button></Link>
                    </div>

                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    </>)
}
export default LogIn;