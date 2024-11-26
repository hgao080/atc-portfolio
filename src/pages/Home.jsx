import Title from "../components/Title";
import Header from "../components/Header";
import Developers from "../components/Developers";
import Projects from "../components/Projects";

const Home = () => {
    return (
        <div className="bg-background bg-cover">
            <Header></Header>
            <Title></Title>
            <Projects></Projects>
            <Developers></Developers>
            <div className="h-[8rem] text-white mt-[10rem] pt-[3rem] text-center text-[1.2rem]">
                Thank you for visiting our portfolio! We appreciate your time and support. Feel free to reach out to us for collaborations or inquiries
            </div>
        </div>
    );
}
 
export default Home;