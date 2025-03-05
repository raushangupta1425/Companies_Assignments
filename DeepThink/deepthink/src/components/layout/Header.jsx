import '../../../public/css/Header.css';
export const Header = (Props) => {
    let {phone, email} = Props;
    return (
        <>
        <header className='header'>
            <div className="headerContact">
                <i className="fas fa-phone-volume"></i> <span> +91 {phone}</span>
                <i className="far fa-envelope-open ms-4 me-1"></i> <span> {email}</span>
            </div>
        </header>
        </>
    )
}