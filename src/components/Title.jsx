const Title = () => {
    return ( 
        <div className="bg-black h-[850px] relative">
            <h2 className="text-white text-[150px] absolute top-[0px] right-[500px] bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">Aspiring</h2>
            <div className="bg-white w-[1px] h-[70px] absolute top-[180px] right-[450px] -rotate-45"></div>
            <p className="text-white absolute top-[260px] right-[200px] w-[400px]">Our team’s goals are centered around building reliable, high-performance software that solves real user problems. </p>
            <h2 className="text-white text-[150px] absolute top-[180px] left-[200px] bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">Talent</h2>
            <div className="bg-white w-[1px] h-[250px] absolute top-[370px] left-[240px] rotate-[35deg]"></div>
            <p className="text-white absolute top-[620px] left-[100px] w-[400px]">Our team includes developers and designers that can effectively create web designs through the use of graphics design software and programming and markup languages. Some of these languages include Python, HTML, CSS, Javascript and more.</p>
            <h2 className="text-white text-[150px] absolute top-[350px] right-[350px] bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">Collective</h2>
            <div className="bg-white w-[1px] h-[120px] absolute top-[540px] right-[540px] -rotate-[35deg]"></div>
            <p className="text-white absolute top-[670px] right-[150px] w-[600px]">We are a young group of software developers constantly looking to expand our skills and knowledge. Our team thrives on collaboration with a strong sense of curiosity and growth mindset.</p>
        </div>
     );
}
 
export default Title;