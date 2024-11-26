const Projects = () => {
    return (
        <div className="container mx-auto my-[10rem] w-[72rem]">
            <div className="font-sans text-[3rem] mb-[2rem] mx-[3rem] text-white">Team Projects</div>
            <div className="container">
                <a className="mx-[2rem]" href="">
                    <div className="container-md w-[20rem] h-[13rem] inline-block shadow-[0rem_0rem_2rem_0.1rem_rgba(255,255,255,0.3)] rounded-[3rem] overflow-hidden">
                        <img src="/atc-portfolio/logo512.png"/>
                    </div>
                </a>
                <a className="mx-[2rem]" href="">
                    <div className="container-md w-[20rem] h-[13rem] inline-block shadow-[0rem_0rem_2rem_0.1rem_rgba(255,255,255,0.3)] rounded-[3rem] overflow-hidden">
                        <img src="/atc-portfolio/logo512.png"/>
                    </div>
                </a>
                <a className="mx-[2rem]" href="">
                    <div className="container-md w-[20rem] h-[13rem] inline-block shadow-[0rem_0rem_2rem_0.1rem_rgba(255,255,255,0.3)] rounded-[3rem] overflow-hidden">
                        <img src="/atc-portfolio/logo512.png"/>
                    </div>
                </a>
            </div>
            <div className="font-sans text-[1.2rem] mt-[2rem] mx-[3rem] text-white">
                Coming soon
            </div>
        </div>
    );
}

export default Projects;