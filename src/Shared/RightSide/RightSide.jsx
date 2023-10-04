import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightSide = ({fileterData,activeLink}) => {
    const [catagories,setCatagories] = useState([])
    // console.log(catagories)
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await fetch('categories.json')
               const data = await res.json()
               setCatagories(data)
            }
            catch(error){
                console.log(error)
            }
        }

        fetchData()
        
    },[])
    return (
        <div className=" border-2">
            <h2 className=" text-2xl text-center">Right Side Nav</h2>
            <div className=" p-5 flex flex-col text-center">
            {
                catagories.map(catagorie=> <Link key={catagorie.id} onClick={()=>fileterData(catagorie.id)} className={` border-2 mb-2
             hover:bg-gray-500 ${catagorie.id==activeLink?"bg-stone-500":""}`}>{catagorie.name} </Link>)
            }
            </div>
        </div>
    );
};

export default RightSide;