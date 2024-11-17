const Projects = () => {
    return (
        <div className="flex flex-col w-[1200px] m-auto mt-[100px] pb-[150px]">
            <h2 className="text-white font-header text-[40px]">TEAM PROJECTS</h2>
            <div className="flex w-full gap-20 h-[200px] mt-[20px] mb-[30px]">
                <div className="flex-1">
                    <img src="/atc-portfolio/assets/imgPlaceholder.png" alt="" className="w-full h-full object-fill rounded-[2.25rem]" />
                </div>
                <div className="flex-1">
                    <img src="/atc-portfolio/assets/imgPlaceholder.png" alt="" className="w-full h-full object-fill rounded-[2.25rem]" />
                </div><div className="flex-1">
                    <img src="/atc-portfolio/assets/imgPlaceholder.png" alt="" className="w-full h-full object-fill rounded-[2.25rem]" />
                </div>
            </div>
            <p className="text-white w-1/2 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ab et reiciendis ducimus cum eius, dolore aspernatur necessitatibus? Deleniti, necessitatibus!</p>
        </div>
    );
}
 
export default Projects;