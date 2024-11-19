const Projects = () => {
    return (
        <div className="flex flex-col max-w-[1200px] m-auto mt-[100px] pb-[150px]">
            <h3 className="text-white font-header text-[40px]">TEAM PROJECTS</h3>
            <div className="flex justify-center w-full min-h-[200px] mt-[20px] mb-[30px] flex-wrap gap-[73px]">
                <div className="">
                    <img src="/atc-portfolio/assets/imgPlaceholder.png" alt="" className="w-[350px] h-full object-fill rounded-[2.25rem]" />
                </div>
                <div className="">
                    <img src="/atc-portfolio/assets/imgPlaceholder.png" alt="" className="w-[350px] h-full object-fill rounded-[2.25rem]" />
                </div><div className="">
                    <img src="/atc-portfolio/assets/imgPlaceholder.png" alt="" className="w-[350px] h-full object-fill rounded-[2.25rem]" />
                </div>
            </div>
            <p className="text-white w-1/2 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ab et reiciendis ducimus cum eius, dolore aspernatur necessitatibus? Deleniti, necessitatibus!</p>
        </div>
    );
}
 
export default Projects;