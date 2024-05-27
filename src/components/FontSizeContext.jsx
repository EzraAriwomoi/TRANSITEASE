import React, { createContext, useState, useEffect } from 'react';

export const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || '16px');

    useEffect(() => {
        document.documentElement.style.fontSize = fontSize;
    }, [fontSize]);

    const changeFontSize = (size) => {
        setFontSize(size);
        localStorage.setItem('fontSize', size);
    };

    return (
        <FontSizeContext.Provider value={{ fontSize, changeFontSize }}>
            {children}
        </FontSizeContext.Provider>
    );
};
