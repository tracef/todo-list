import { DarkMode } from './DarkMode';

export const Header = () => {
    return (
        <div className="grid grid-cols-3 place-items-center py-5">
            <div></div>
            <div className="place-self-center flex items-center text-black dark:text-white">todo list</div>
            <div className="place-self-stretch ml-auto flex items-center no-print">
                <DarkMode />
            </div>
        </div>
    )
}