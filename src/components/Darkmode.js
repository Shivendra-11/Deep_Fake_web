import React, { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

const Darkmode = () => {
    const [darkmode, setDarkmode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setDarkmode(true);
        }
    }, []);

    useEffect(() => {
        if (darkmode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkmode]);

    return (
        <div className='relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1' onClick={() => setDarkmode(!darkmode)}>
            <FaMoon className='text-white size={18}' />
            <div className='absolute bg-white w-6 h-6 rounded-full shadow-md transform transition duration-300' style={darkmode ? { left: "2px" } : { right: "2px" }}>
            </div>
            <BsSunFill className="ml-auto text-yellow-400 size={18}" />
        </div>
    );
}

export default Darkmode;
