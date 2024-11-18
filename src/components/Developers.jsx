const developers = [
    {
        name: "HENRY GAO",
        role: "Team Lead",
        img: "/atc-portfolio/assets/placeholderIcon.png",
        id: 1,
    },
    {
        name: "ALECK SHEN",
        role: "Developer",
        img: "/atc-portfolio/assets/placeholderIcon.png",
        id: 2,
    },
    {
        name: "SHIMING LI",
        role: "Developer",
        img: "/atc-portfolio/assets/placeholderIcon.png",
        id: 3,
    },
    {
        name: "JOSEPH WU",
        role: "Developer",
        img: "/atc-portfolio/assets/placeholderIcon.png",
        id: 4,
    },
    {
        name: "JASON LIM",
        role: "Developer",
        img: "/atc-portfolio/assets/placeholderIcon.png",
        id: 5,
    },
    {
        name: "ANDY HUANG",
        role: "Developer",
        img: "/atc-portfolio/assets/placeholderIcon.png",
        id: 5,
    },
    ]

const Developers = () => {
    return (
        <div className="flex flex-col text-white items-center pb-24">
            <h2 className="font-title text-[80px] m-0 mb-[-8px]">DEVELOPERS</h2>
            <div className="flex gap-4 items-center mb-16">
                <div className="">ATC</div>
                <div className="bg-white mt-[1px] w-[1px] h-[12px]"></div>
                <div className="font-bold">OUR TEAM</div>
            </div>

            <div className="grid grid-cols-3 gap-12">
                {developers.map((developer) => (
                    <div className="flex flex-col items-center" key={developer.id}>
                        <img src={developer.img} alt="" className="rounded-3xl w-52 h-52" />
                        <div className="">{ developer.name }</div>
                        <div className="">{developer.role}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Developers;