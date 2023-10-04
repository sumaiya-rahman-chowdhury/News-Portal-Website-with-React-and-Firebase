import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import Navbar from "../Shared/Navbar/Navbar";
import Navbar2 from "../Shared/Navbar/navbar2";
import RightSide from "../Shared/RightSide/RightSide";
import BreakingNews from "./BreakingNews";
import News from "./NewsCard.jsx/News";
import { useEffect, useState } from "react";

const Home = () => {
    const news = useLoaderData()
    // const [originalData,setOriginalData] = useState(news)
    const [data,setData] = useState(news)
    const [activeLink, setActiveLink] = useState(null);
    
    const fileterData = (cat_id)=>{
      if(cat_id == "0"){
        setData(news)
        setActiveLink("0")
      }
      else {
        const newData =  news.filter(d=>d.category_id == cat_id)
        setActiveLink(cat_id)
        setData(newData)
       
      }
    }   
 

    return (

        <div >
            <Header></Header>
            {/* <Navbar2></Navbar2> */}
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className=" font-poppins">Hellow</h2>
            <div className=" grid lg:grid-cols-4 grid-cols-1 gap-6 mt-10">
                <RightSide news={news} activeLink={activeLink} fileterData={fileterData}></RightSide>
                <div className=" lg:col-span-2 border-2 px-4">
                  {
                    data.map(news=><News key={news._id}news={news}></News>)
                  }
                </div>
                <LeftSide></LeftSide>
            </div>
        </div>

    );
};

export default Home;