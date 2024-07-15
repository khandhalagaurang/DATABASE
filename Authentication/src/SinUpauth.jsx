import React, { useState } from "react";
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SinUpauth() {
    const auth = getAuth(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth, "nikunj@gmail.com", "nikunj@123").then(
            (res) => {
                console.log("success");
            }
        );
    };

    const handleAuthSinUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log("success", res);
                e.target.reset();
            })
            .catch((error) => {
                console.log("error", error);
            });
    };

    return (
        <>
            <h2>Authentication Sin Up</h2>
            <br />
            {/* <button onClick={createUser}>SinUp</button> <br /><br /> */}

            {/* --------------------------------------------------------- */}

            <form action="" onSubmit={handleAuthSinUp}>
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
                <button>SinUp</button>
            </form>
        </>
    );
}

export default SinUpauth;
