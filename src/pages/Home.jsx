import { useState, useEffect } from "react";

import Title from "../components/Title";
import Header from "../components/Header";
import Developers from "../components/Developers";
import Projects from "../components/Projects";


const Home = () => {
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id); // Set active section by ID
              }
            });
          },
          { threshold: 0.6 } // Trigger when 60% of the section is visible
        );
    
        // Observe all sections with IDs
        const sections = document.querySelectorAll('.section');
        sections.forEach((section) => {
          observer.observe(section);
        });
    
        return () => {
          observer.disconnect();
        };
      }, []);

    return (
        <div className="bg-background bg-cover">
            <Header activeSection={activeSection}></Header>
            <div id="home" className="section scroll-mt-[80px]">
                <Title></Title>
            </div>
            <div id="projects" className="section scroll-mt-[200px]">
                <Projects></Projects>
            </div>
            <div id="developers" className="section scroll-mt-[100px]">
                <Developers></Developers>
            </div>
            <div className="font-raleway text-[18px] h-[8rem] text-white mt-[10rem] pt-[3rem] text-center text-[1.2rem]">
                Thank you for visiting our portfolio! We appreciate your time and support. Feel free to reach out to us for collaborations or inquiries
            </div>
        </div>
    );
}
 
export default Home;