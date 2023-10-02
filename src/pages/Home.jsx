import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import Navbar from "../Shared/Navbar/Navbar";
import RightSide from "../Shared/RightSide/RightSide";

const Home = () => {
    return (

        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className=" font-poppins">Hellow</h2>
            <div className=" grid lg:grid-cols-4 grid-cols-1 gap-6 mt-10">
                <RightSide></RightSide>
                <div className=" lg:col-span-2 border-2 px-4">
                   <h1 className=" text-4xl"> News Comings Soon</h1>
                </div>
                <LeftSide></LeftSide>
            </div>
        </div>

    );
};

export default Home;