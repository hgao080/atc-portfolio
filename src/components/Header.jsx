
const Header = () => {
    return ( 
    <header className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center relative h-[100px] items-center sticky top-0">  
    
    <div className="absolute left-[40px] bg-[#7D7D7D50] px-[50px] rounded-full">
        <img src="/atc-portfolio/assets/ATC logo.png" alt="ATC Logo" className="w-auto h-[60px]" />
    </div>
    
    <div className="text-white flex gap-[120px] bg-[#7D7D7D50] rounded-full px-[80px] h-[60px] items-center">
        <a href="#home" className="">Homepage</a>

        <a href="#projects" className="">ATC Projects</a>

        <a href="#developers" className="">Developers Section</a>
    </div>
    
    
    </header>
    );
}
 
export default Header;