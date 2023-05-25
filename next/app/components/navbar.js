import Link from "next/link"


const NavBar = ()=>{

  return(
    <div>
        <Link href="/about">Home</Link>
        <Link href="/about/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Link href="/listofposts">ListOFPosts</Link>
        
    </div>

  )
}


export default NavBar