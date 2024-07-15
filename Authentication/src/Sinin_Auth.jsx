import React, { useEffect, useState } from "react";
import { app } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Sinin_Auth() {
    const auth = getAuth(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleAuth_SinIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log("success", res);
            })
            .catch((err) => {
                console.log("error", err);
            });

        e.target.reset();
    };


    return (
        <>
            <h1>Sin In</h1><br />
            <form action="" onSubmit={handleAuth_SinIn}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <br />
                <br />
                <input
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <br />
                <br />
                <button type="submit">SinIn</button>
            </form>
        </>
    );
}

export default Sinin_Auth;
