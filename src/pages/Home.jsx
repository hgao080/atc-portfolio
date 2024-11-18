import Header from "../components/Header";
import Title from "../components/Title";
import Projects from "../components/Projects";
import Developers from "../components/Developers";

const Home = () => {
    return (
        <div className="bg-background bg-cover mt-[-2px]">
            <Header></Header>
            <Title></Title>
            <Projects></Projects>
            <Developers></Developers>
            <div className="text-white text-center pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, incidunt!</div>
        </div>
    );
}
 
export default Home;