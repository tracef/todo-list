import './DarkMode.css'
import { useEffect, useState } from 'react'

export const DarkMode = () => {
    const [mode, setMode] = useState(null)
    const [loading, setLoading] = useState(true)

    const loadMode = () => {
        const modeFromStorage = localStorage.getItem('mode');

        if (modeFromStorage) {
            if (modeFromStorage === 'light')
                document.getElementById('dmCheckbox').checked = true;

            setMode(modeFromStorage);
        } else
            setMode('dark')
    }

    useEffect(() => {
        if (loading) {
            loadMode();
            setLoading(false)
        }
    }, [loading])

    useEffect(() => {
        if (!loading && mode) {
            if (mode === 'light')
                document.getElementsByTagName('html')[0].classList.remove('dark')
            else
                document.getElementsByTagName('html')[0].classList.add('dark')

            localStorage.setItem('mode', mode)
        }
    }, [mode, loading])

    const toggle = () => {
        mode === 'dark' ? setMode('light') : setMode('dark');
    }

    return (
        <div className="toggle-container" onClick={toggle}>
            <input id="dmCheckbox" type="checkbox" />
            <div className="slider round"></div>
        </div>
    )
}