import { useState, useEffect } from 'react';

export default function useForm(nameDefault, lastNameDefault) {
    const [userState, setUserState] = useState({
        name: nameDefault,
        lastName: lastNameDefault
    });

    const handleChange = (key, value) => {
        setUserState((prevState) => ({ ...prevState, [key]: value }));
    };


    return { userState, handleChange }
};