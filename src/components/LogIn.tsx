import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

export const LogIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let hashedPassword = CryptoJS.SHA256(password).toString();
        
        fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                pass: hashedPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // store the token in local storage
            localStorage.setItem('token', data.token);

            // proceed to feed
            // make it legit
            window.location.href = '/feed';
        })
        .catch(error => {
            // handle the error
            // show wrong password message
            document.querySelector('.wrongPass')?.removeAttribute('hidden')
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