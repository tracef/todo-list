import './DarkMode.css'

export const DarkMode = () => {
    const toggle = () => {
        document.getElementsByTagName('html')[0].classList.toggle('dark')
    }

    return (
        <div className="toggle-container" onClick={toggle}>
            <input type="checkbox" />
            <div className="slider round"></div>
        </div>
    )
}