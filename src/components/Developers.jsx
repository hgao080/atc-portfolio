const Developers = () => {
    return (
        <div className = "flex flex-col items-center justify-center">
            <h1 className="text-7xl">DEVELOPERS</h1>
            <div className="flex gap-2" >
                <div className="">ATC</div>
                <div>|</div>
                <div>OUR TEAM</div>
            </div>
            
            <div className="grid grid-cols-3 justify-items-center items-center gap-16 pt-24" >
                <div className="flex flex-col items-center">
                    <img src="/atc-portfolio/logo192.jpg" alt="Henry Gao" width = "200" height="200"/>
                    <div>HENRY GAO</div>
                    <div>TEAM LEAD</div>
                </div>
                
                <div className="flex flex-col items-center">
                    <img src="/atc-portfolio/logo192.png" alt="" width = "200" height="200"/>
                    <div>ALECK SHEN</div>
                    <div>DEVELOPER</div>
                </div>

                <div className="flex flex-col items-center">
                    <img src="/atc-portfolio/logo192.png" alt="" width = "200" height="200"/>
                    <div>SHIMING LI</div>
                    <div>DEVELOPER</div>
                </div>

                <div className="flex flex-col items-center">
                    <img src="/atc-portfolio/logo192.png" alt="" width = "200" height="200"/>
                    <div>JOSEPH WU</div>
                    <div>DEVELOPER</div>
                </div>

                <div className="flex flex-col items-center">
                    <img src="/atc-portfolio/logo192.png" alt="" width = "200" height="200"/>
                    <div>JASON LIM</div>
                    <div>DEVELOPER</div>
                </div>

                <div className="flex flex-col items-center">
                    <img src="/atc-portfolio/logo192.png" alt="" width = "200" height="200"/>
                    <div>ANDY HUANG</div>
                    <div>DEVELOPER</div>
                </div>

            </div>
        </div>
    );
}
 
export default Developers;