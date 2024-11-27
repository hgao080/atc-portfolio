const Title = () => {
    return ( 
        <div className="flex justify-center h-[910px] mt-[10rem]">
            <div className="flex flex-col items-center w-full h-fit">
                <h2 className="relative text-[150px] bg-gradient-to-bl from-[#9a9a9a] from-[35%] to-white to-[70%] text-transparent bg-clip-text">
                    Aspiring
                    <div className="absolute top-[180px] left-[560px]  bg-white w-[1px] h-[70px] -rotate-45"></div>
                    <p className="text-white text-[15px] w-[350px] absolute top-[260px] left-[400px] w-[400px]">Our team’s goals are centered around building reliable, high-performance software that solves real user problems. </p>
                </h2>  
                <h2 className="relative text-[150px] mr-[470px] bg-gradient-to-bl from-[#9a9a9a] from-[35%] to-white to-[60%] text-transparent bg-clip-text">
                    Talent
                    <div className="absolute bottom-[-215px] left-[20px] bg-white w-[1px] h-[250px] rotate-[35deg]"></div>
                    <p className="absolute top-[450px] left-[-200px] text-white text-[15px] w-[400px]">Our team includes developers and designers that can effectively create web designs through the use of graphics design software and programming and markup languages. Some of these languages include Python, HTML, CSS, Javascript and more.</p>
                </h2>
                <h2 className="relative text-[150px] ml-[120px] bg-gradient-to-tr from-[#9a9a9a] from-[20%] to-white to-[65%] text-transparent bg-clip-text">
                    Collective
                    <div className="bg-white w-[1px] h-[120px] absolute top-[190px] right-[210px] -rotate-[35deg]"></div>
                    <p className="text-white text-[15px] absolute top-[330px] right-[-120px] w-[600px]">We are a young group of software developers constantly looking to expand our skills and knowledge. Our team thrives on collaboration with a strong sense of curiosity and growth mindset.</p>
                </h2>
            </div>
        </div>
     );
}
 
export default Title;