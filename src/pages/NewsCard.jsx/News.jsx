import { useState } from "react";
import { Link } from "react-router-dom";

const News = ({ news }) => {
    console.log(news)
   const [more,setMore] = useState(false)
    return (
        <div>
         <Link to={`/details/${news._id}`}>
         <div className="card  glass mb-5">
                <div className="card-body pb-2">
                    <div className="flex justify-end">
                    <button className=" btn btn-circle bg-orange-300 shadow-lg">add</button>
                    </div>
                    <h2 className="card-title">{news.title}</h2>
                    <p>{more?news.details:news.details.slice(0,100)}</p>
                    <Link onClick={()=>setMore(!more)}>Read {more?"Less":"More"}</Link>
                </div>
                    <div className="p-5 pt-0"><img src={news?.image_url} alt="Aurthor" className="h-[262px] w-full  rounded-lg"/></div>
            </div>
         </Link>
        </div>
    );
};

export default News;