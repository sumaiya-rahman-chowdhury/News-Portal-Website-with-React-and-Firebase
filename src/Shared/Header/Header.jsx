import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    const date = moment().format('dddd, MMMM DD ,YYYY')
    return (
        <div className=' space-y-3'>
            <div className=' flex justify-center items-center mt-5'>
            {/* <img src="/logo.png" alt="" className=''/> */}
            <img src={logo} alt="" />
        </div>
        <div>
            <p className=' text-center text-lg'>Journalism Without Fear or Favour</p>
        </div>
       <div className=' flex justify-center items-center'>
       {date}
       </div>
        </div>
    );
};

export default Header;