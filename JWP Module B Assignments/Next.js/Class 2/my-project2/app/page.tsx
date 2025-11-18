import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <div>
      <h1>hello</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid autem rerum sequi delectus vero sapiente nihil quibusdam totam eius?</p>
      <br />
        {/* offline image */}
      <Image src="/vercel.svg" alt='logo' width={200} height={200} />
      <br />
      <Image src="/next.svg" alt='logo' width={400} height={200} />


      <br />
        {/* online image */}
      <Image alt='image' width={400} height={400} src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000" />
      <br />

      <Image alt='image' width={300} height={300} src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" />
      <br />
      <Image alt='image' width={400} height={400} src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" />
      {/* <ul>
        <Link href={}> About Page</Link>
        <Link href={}> Profile Page</Link>
        <Link href={}> Contact Page</Link>

      </ul> */}
    </div>
  )
}