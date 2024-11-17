const Header = () => {
    return ( 
        <div className="flex relative border border-red-800 justify-center items-center h-28">
            <div className="flex items-center absolute left-[40px] bg-[#7D7D7D22] px-[30px] h-[55px] rounded-full shadow-lg">
                <img src="/atc-portfolio/assets/logo.png" alt="" className="w-[80px] mt-[4px] h-auto" />
            </div>
            <div className="flex items-center text-lg text-white font-header bg-[#7D7D7D22] px-[80px] h-[55px] rounded-full shadow-lg">
                <ul className="flex gap-20">
                    <li className="">Homepage</li>
                    <li className="">ATC Projects</li>
                    <li className="">Developers Section</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Header;