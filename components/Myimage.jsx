import Image from "next/image"
function Myimage({src,width,height, className, priority}) {
  return (
    <Image src={src} width={width} height={height} className={className} priority={priority} alt="not found"/>
  )
}

export default Myimage