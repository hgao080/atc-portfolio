
const Header = ({activeSection}) => {
    const underline = "relative transition duration-300 after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:origin-center after:transition-transform after:duration-300"

    return ( 
    <header className="flex justify-center relative h-[100px] items-center sticky top-0 z-50 ">
    
    <div className="absolute left-[40px] bg-[#7D7D7D50] px-[50px] rounded-full">
        <img src="/atc-portfolio/assets/ATC logo.png" alt="ATC Logo" className="w-auto h-[60px]" />
    </div>
    
    <div className="text-white flex gap-[120px] bg-[#7D7D7D50] rounded-full px-[80px] h-[60px] items-center">
        <a href="#home" className={`${underline} + ${activeSection === 'home' || activeSection === '' ? 'after:scale-x-100' : 'after:scale-x-0'}`}>Homepage</a>

        <a href="#projects" className={`${underline} + ${activeSection === 'projects' ? 'after:scale-x-100' : 'after:scale-x-0'}`}>ATC Projects</a>

        <a href="#developers" className={`${underline} + ${activeSection === 'developers' ? 'after:scale-x-100' : 'after:scale-x-0'}`}>Developers Section</a>
    </div>
    
    
    </header>
    );
}
 
export default Header;