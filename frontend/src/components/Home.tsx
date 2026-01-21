import Hero from "./Hero";
import TechStack from "./TechStack";
import Timeline from "./Timeline";

const Home = () => {
    return (
        <div className="flex flex-col gap-9">
            <Hero />
            <TechStack />
            <Timeline />
        </div>
    );
};

export default Home;
