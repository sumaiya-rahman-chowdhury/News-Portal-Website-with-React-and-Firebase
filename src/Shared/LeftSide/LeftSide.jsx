
const LeftSide = () => {
    return (
        <div className=" border-2">
            <h2 className=" text-2xl">LOG IN WITH</h2>
           <div className=" p-5 space-y-3">
           <button className="btn btn-outline w-full">
               Google
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
            <button className="btn btn-outline w-full">
              Github
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
           
           </div>
           <div className=" text-center border-black flex flex-col p-5">
           <a href="" className=" border-2 mb-5">Twitter</a>
           <a href="" className=" border-2 mb-5">Facebook</a>
           <a href="" className=" border-2 mb-5">Instagram</a>
           </div>
           <div className="p-5">
            <img src="../../../assets/qZone1.png" alt="" />
            <img src="../../../assets/qZone2.png" alt="" />
            <img src="../../../assets/qZone3.png" alt="" />
           </div>
        </div>
    );
};

export default LeftSide;