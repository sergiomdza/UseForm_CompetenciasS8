import { useState, useEffect } from 'react';

export default function useForm(nameDefault, lastNameDefault, IDdefault) {
    const [userState, setUserState] = useState({
        name: nameDefault,
        lastName: lastNameDefault,
        id: IDdefault
    });

    const handleChange = (key, value) => {
        setUserState((prevState) => ({ ...prevState, [key]: value }));
    };


    return { userState, handleChange }
};