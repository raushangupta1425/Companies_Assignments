import '../../../public/css/NavItems.css';
export const NavItems = ({navItems}) => {
    
    return (
        <>
        <ul id="navBars">
            {Object.entries(navItems).map(([key, value]) => (
                <li key={key}>
                    <a className="active" aria-current="page" href={value}>{key}</a>
                </li>
            ))}
        </ul>
        </>
    )
}