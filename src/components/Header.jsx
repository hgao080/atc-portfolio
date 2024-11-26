const Header = () => {
    return ( 
    <header className="flex justify-center relative h-[100px] items-center">
    
    <div className="absolute left-[40px] bg-[#7D7D7D50] px-[50px] rounded-full">
        <img src="/atc-portfolio/assets/ATC logo.png" alt="ATC Logo" className="w-auto h-[60px]" />
    </div>
    
    <div className="text-white flex gap-[120px] bg-[#7D7D7D50] rounded-full px-[80px] h-[60px] items-center">
        <div className="">Homepage</div>

        <div className="">ATC Projects</div>

        <div className="">Developers Section</div>
    </div>
    
    
    </header>
    );
}
 
export default Header;