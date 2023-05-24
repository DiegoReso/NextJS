import Link from "next/link"


const Home =()=>{

  return(
    <div>
      <h1>Home</h1>
      <Link href="/about">
        About
      </Link>

      <Link href="/about/contact">
        Contact
      </Link>
    </div>
  )
}

export default Home