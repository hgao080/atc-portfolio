import Header from "../components/Header";
import Title from "../components/Title";
import Projects from "../components/Projects";

const Home = () => {
    return (
        <div className="bg-background bg-cover mt-[-1px]">
            <Header></Header>
            <Title></Title>
            <Projects></Projects>
        </div>
    );
}
 
export default Home;