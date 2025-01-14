import { createContext, useState } from "react";

export const SystemContext = createContext({});

export const SystemProvider = ({ children }) => {

    const [subject, setSubject] = useState('');
    const [loading, setLoading] = useState('');
    const [error, setError] = useState(false);
    const errorMessage = "Houve um erro ao carregar informações";
    const [catechismDay, setCatechismDay] = useState('');

    const contextObj = {

        subject: subject,
        setSubject: setSubject,
        setLoading: setLoading,
        catechismDay:catechismDay,
        setCatechismDay:setCatechismDay,
        loading: loading,
        error:error,
        setError:setError
    }

    return (
        <SystemContext.Provider value={contextObj}>
            {children}
        </SystemContext.Provider>
    );
};
