import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="max-w-5xl w-full">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default App;
