import Hero from "./Hero";
import TechStack from "./TechStack";

const Home = () => {
    return (
        <div className="flex flex-col gap-9">
            <Hero />
            <TechStack />
        </div>
    );
};

export default Home;
