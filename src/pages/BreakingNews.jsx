import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div>
            <button className="btn btn-primary">Breaking News</button>
            <Marquee
                pauseOnHover={true}
                className=""
            >
               <p className=" mr-12">Breaking News 1</p>
               <p className=" mr-12">Breaking News 2</p>
               <p className=" mr-12">Breaking News 3</p>
                

            </Marquee>
        </div>
    );
};

export default BreakingNews;