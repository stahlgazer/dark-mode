import { useLocalStorage } from './useLocalStorage';
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) => {
    const [dark, setDark] = useLocalStorage(key, initialValue);
    console.log(key, 'my key')
    console.log(initialValue, 'my init')
    useEffect(() => {
        if (dark === true ) {
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    },[dark])
    return [dark, setDark];
}