import Homecontainer from "./Homecontainer"
import Getroute from "./Getroute"
import MyLink from "./Mylink"
function Pageheader({pageTitle}) {
  return (
    <Homecontainer>
        <div className="bg-black h-[130px] md:h-[150px] flex flex-col items-center justify-center gap-4">
             <h1 className="capitalize text-white font-bold text-4xl tracking-wider">{pageTitle}</h1>
             <div className="flex gap-2 items-center justify-center px-4 flex-wrap">
                <span className="capitalize text-base text-gray-400 hover:text-white"><MyLink href='/'>Home</MyLink></span>
                <Getroute/>
             </div>
        </div>
    </Homecontainer>
  )
}

export default Pageheader