const Developers = () => {
    return (
        <div className = "flex flex-col items-center justify-center text-white mt-[10rem]">
            <h1 className="font-title text-[80px] m-0 ">DEVELOPERS</h1>
            <div className="flex gap-2 items-center mb-[40px]" >
                <div className="mr-[8px]">ATC</div>
                <div className="bg-white mt-[1px] w-[1px] h-[12px]"></div>
                <div className="ml-[8px]">OUR TEAM</div>
            </div>
            <div className="grid grid-cols-3 justify-items-center items-center gap-12 " >
                <div className="flex flex-col items-center">
                    <img src="/atc-portfolio/assets/images/henry.jpg" alt="Henry Gao" className="rounded-3xl w-52 h-52 mb-[8px]"/>
                    <div>HENRY GAO</div>
                    <div>Team Lead</div>
                </div>
                
                <div className="flex flex-col items-center">
                <img src="/atc-portfolio/assets/images/aleck.png" alt="Aleck Shen" className="rounded-3xl w-52 h-52 mb-[8px] object-cover"/>
                    <div>ALECK SHEN</div>
                    <div>Developer</div>
                </div>

                <div className="flex flex-col items-center">
                    <img src="/atc-portfolio/logo192.png"  alt="" className="rounded-3xl w-52 h-52 mb-[8px] object-cover"/>
                    <div>SHIMING LI</div>
                    <div>Developer</div>
                </div>

                <div className="flex flex-col items-center">
                    <img src="/atc-portfolio/assets/images/joseph.jpg" alt="Aleck Shen" className="rounded-3xl w-52 h-52 mb-[8px] object-cover"/>
                    <div>JOSEPH WU</div>
                    <div>Developer</div>
                </div>

                <div className="flex flex-col items-center">
                    <img src="/atc-portfolio/logo192.png"  alt="" className="rounded-3xl w-52 h-52 mb-[8px] object-cover"/>
                    <div>JASON LIM</div>
                    <div>Developer</div>
                </div>

                <div className="flex flex-col items-center">
                    <img src="/atc-portfolio/logo192.png"  alt="" className="rounded-3xl w-52 h-52 mb-[8px] object-cover"/>
                    <div>ANDY HUANG</div>
                    <div>Developer</div>
                </div>

            </div>
        </div>
    );
}
 
export default Developers;