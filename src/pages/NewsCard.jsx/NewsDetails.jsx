import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RightSide from "../../Shared/RightSide/RightSide";
import LeftSide from "../../Shared/LeftSide/LeftSide";

const NewsDetails = () => {
    const [news, setNews] = useState([])
    console.log(news)
    const id = useParams()
   const m_id = id.id
   console.log(m_id)
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch('/news.json');
            const data = await res.json()
            setNews(data)
            }
            catch (error){
                console.log(error)
            }
        }
        fetchData()

    }, [])
    const newsDetails = news.find(data => data._id == id.id
    )
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
           <div className="flex gap-6 justify-center flex-wrap mt-20 items-start">
           <div className=" lg:w-1/2 space-y-5 p-5">
            <h1 className=" text-2xl font-bold">Dragon News</h1>
            <img src={newsDetails?.thumbnail_url} alt="" className=" w-full h-[411px]"/>
            <h1 className=" text-2xl font-bold">{newsDetails?.title}</h1>
            <p className=" text-justify">{newsDetails?.details}</p>
            <Link to='/'><button className=" bg-[#D72050] px-6 py-2 mt-5">All news in this category</button></Link>
            </div>
           <LeftSide></LeftSide>
           </div>
        </div>
    );
};

export default NewsDetails;