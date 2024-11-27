import Header from "../components/Header";
import Developers from "../components/Developers";
import Projects from "../components/Projects";

const Home = () => {
    return (
        <div id="home" className="">
            <Header></Header>
            <div id="projects" className="scroll-mt-[100px]">
                <Projects></Projects>
            </div>
            <div id="developers" className="scroll-mt-[100px]">
                <Developers></Developers>
            </div>
        </div>
    );
}
 
export default Home;