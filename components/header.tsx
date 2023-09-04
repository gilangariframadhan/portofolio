import Link from 'next/link';
import '../app/headers.css';
import Image from 'next/image';

const Header = () => {
    const toggleMenu = () => {
        const navbar = document.querySelector('.navbar') as HTMLElement; // Type assertion here

        if (navbar) {
            if (navbar.style.maxHeight === '0px' || !navbar.style.maxHeight) {
                navbar.style.maxHeight = '300px';
            } else {
                navbar.style.maxHeight = '0px';
            }
        }
    };

    return (
        <header className="header">
            <div className='content'>
                <img src="/profile.jpg" alt="Profile" className="logo" width={100} height={100} />
                <button className="hamburger" onClick={toggleMenu}>
                    &#9776;  {/* Unicode untuk icon hamburger */}
                </button>
                <nav className="navbar">
                    <Link href="/" className="navItem">Home</Link>
                    <Link href="/about" className="navItem">About</Link>
                    <Link href="#contact" className="navItem">Contact</Link>
                    <Link href="#profile" className="navItem">Profile</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;