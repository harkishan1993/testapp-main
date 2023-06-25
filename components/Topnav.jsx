import Cartlogo from "./Cartlogo";
import Myimage from "./Myimage";
import Navslide from "./Navslide";
function Topnav() {
  return (
    <>
    <div className="topnave">
      <div className="navlogo">
        <Myimage src='/img/logo.png' width={160} height={100} className='w-auto h-auto' priority={true} />
        <div className="navflag md:m-4">
          <Myimage src='/img/indiaflag1.jpg' width={50} height={50} className='w-[50px] h-[50px] hidden md:block' priority={false}/>
          <span className="hidden md:block text-base uppercase">MADE IN INDIA</span>
        </div>
      </div>
      <Cartlogo />
    </div>
    <Navslide />
    </>
  );
}

export default Topnav;
