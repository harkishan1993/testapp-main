import Link from "next/link"
function MyLink({href, className='', children}) {
  return (
    <Link href={href} className={className}>{children}</Link>
  )
}

export default MyLink