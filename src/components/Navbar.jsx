import "./Navbar.css";

const Navbar = () => {
    const handleScroll = (event, targetId, offsetAmount) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const additionalOffset = offsetAmount; 
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - additionalOffset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-title">
                Caleb Free
            </h1>
            <div className="links">
                <a href="#home" onClick={(e) => handleScroll(e, 'home', 50)}>Home</a>
                <a href="#projects" onClick={(e) => handleScroll(e, 'projects', -100)}>Projects</a>
                <a href="#contact" onClick={(e) => handleScroll(e, 'contact', 0)}>Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;