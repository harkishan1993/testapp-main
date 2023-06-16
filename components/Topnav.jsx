import Cartlogo from "./Cartlogo";
import Myimage from "./Myimage";
function Topnav() {
  return (
    <div className="topnave">
      <div className="navlogo">
        <Myimage src='/img/logo.jpg' width={120} height={80} className='w-[120px] h-[80px]' priority={true} />
        <div className="navflag">
          <Myimage src='/img/indiaflag1.jpg' width={50} height={50} className='w-[50px] h-[50px] hidden md:block' priority={false}/>
          <span className="hidden md:block text-base uppercase">MADE IN INDIA</span>
        </div>
      </div>
      <Cartlogo />
    </div>
  );
}

export default Topnav;
