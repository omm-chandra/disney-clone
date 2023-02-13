import "./page.css"
import hulu from "../image/hulu.png"
import all from "../image/all.png"
import Navbar from "../loginpage/navbar"

const Page = (props) => {
    return (
        <>
        <Navbar/>
            <div className="page_div">
                <img src={hulu} alt="something" className="hulu" />
                <button className="blue_btn">GET ALL THERE</button>
                <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <img src={all} alt="something" className="all" />
            </div>
        </>
    )
}

export default Page;