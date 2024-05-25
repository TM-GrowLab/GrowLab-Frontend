import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';

export const LogIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let hashedPassword = CryptoJS.SHA256(password).toString();

        const URL = process.env.REACT_APP_URL;
        
        fetch(`${URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email,
                pass: hashedPassword
            })
        })
        .then(response => response.json())
        .then(
            data => {
            try{
                if(data.status != 401) {
                    console.log(data.access_token);
                    // store the token in local storage
                    localStorage.setItem('token', data.access_token);
                    // redirect to dashboard
                    navigate(`/dashboard`);
                }
                else {
                    throw new Error('Wrong credentials');
                }

                
            }
            catch (error) {
                console.error(error);
                document.querySelector('.wrongPass')?.removeAttribute('hidden')
            }
        });
    };

    return (
        <div className="login">
            <h2>Meld je aan bij <span>GrowLab</span>!</h2>
            <p>Welkom terug! Log in om door te gaan.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-mailadres:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Wachtwoord:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <p className="wrongPass" hidden>Aanmeldgegevens onjuist</p>
                <button className="submit" type="submit">Aanmelden</button>
            </form>
            
        </div>
    );
};

export default LogIn;