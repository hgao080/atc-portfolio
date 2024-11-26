const Title = () => {
    return (
        <div className="flex justify-center mt-[100px] pb-[300px]">
            <div className="flex flex-col items-center text-white font-title font-condensed leading-none gap-8 text-[115px] w-full h-fit">
                <h1 className="relative relative text-transparent bg-gradient-to-bl from-[#9a9a9a] from-[35%] to-white to-[70%] bg-clip-text pb-2">
                    Aspiring
                    <div className="absolute top-[110px] right-[-40px] bg-white w-[1px] h-[55px] rotate-[-40deg]"></div>
                    <p className="absolute text-white text-sm font-header w-[350px] h-1 bottom-[-60px] right-[-210px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore harum aliquam quas optio laborum perspiciatis officiis vel dolorum corporis?</p>
                </h1>
                <h1 className="mr-[470px] relative text-transparent bg-gradient-to-bl from-[#9a9a9a] from-[35%] to-white to-[60%] bg-clip-text">
                    Talent
                    <div className="absolute top-[110px] left-[45px] bg-white w-[1px] h-[225px] rotate-[30deg]"></div>
                    <p className="absolute text-white text-sm font-header w-[320px] h-1 bottom-[-230px] left-[-80px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa voluptatem nemo amet corporis molestiae facilis non, accusamus totam ipsam error harum sequi eveniet sapiente voluptates deleniti ut facere voluptatibus magni autem fugit consequuntur? Commodi, iure officia. Eligendi, ipsa assumenda.</p>
                </h1>
                <h1 className="ml-[120px] relative text-transparent bg-gradient-to-tr from-[#9a9a9a] from-[20%] to-white to-[65%] bg-clip-text">
                    Collective
                    <div className="absolute top-[115px] right-[160px] bg-white w-[1px] h-[130px] rotate-[-30deg]"></div>
                    <p className="absolute text-white text-sm font-header w-[550px] h-1 bottom-[-140px] right-[-200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab qui voluptates beatae accusantium consectetur sunt similique nemo perspiciatis saepe eaque!</p>
                </h1>
            </div>
        </div>
    );
}
 
export default Title;