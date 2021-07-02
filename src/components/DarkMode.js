import './DarkMode.css'

export const DarkMode = () => {
    const toggle = () => {
        document.getElementsByTagName('html')[0].classList.toggle('dark')
    }
    return (
        <div class="toggle-container" onClick={toggle}>
            <input type="checkbox" />
            <div class="slider round"></div>
        </div>


    )
}