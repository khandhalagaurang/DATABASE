import React, { useEffect, useState } from 'react';
import { app } from './firebase';
import { addDoc, collection, deleteDoc, getDocs, getFirestore, doc, updateDoc } from 'firebase/firestore';

function FireStore() {
    const fireStore = getFirestore(app);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState([]);

    const submitForm = async (e) => {
        e.preventDefault();
        await addDoc(collection(fireStore, "User"), {
            name: name,
            email: email,
        });
        e.target.reset();
        fetchUser();
    };

    const fetchUser = async () => {
        const snapshot = await getDocs(collection(fireStore, "User"));
        const users = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(), // Use doc.data() instead of doc.user()
        }));
        setUser(users);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const deleteUser = async (id) => {
        await deleteDoc(doc(fireStore, "User", id));
        setUser(user.filter((u) => u.id !== id)); // Corrected typo here
    };

    const updateData = async (id, newName, newEmail) => {
        await updateDoc(doc(fireStore, "User", id), {
            name: newName,
            email: newEmail,
        });

        const updatedUsers = user.map((u) => {
            if (u.id === id) {
                return { id, name: newName, email: newEmail };
            } else {
                return u;
            }
        });
        setUser(updatedUsers);
    };

    return (
        <>
            <h1>Fire Store</h1>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br /><br />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />
                <button>Submit</button>
            </form>

            <ul>
                {user.map((u) => (
                    <li key={u.id}>
                        {u.name} {u.email}
                        <button onClick={() => deleteUser(u.id)}>Delete</button>
                        <button
                            onClick={() =>
                                updateData(
                                    u.id,
                                    prompt("Enter new name"),
                                    prompt("Enter new Email")
                                )
                            }
                        >
                            Update
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default FireStore;

