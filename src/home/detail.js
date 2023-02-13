import "./detail.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase/firebaseconfig";
import { BsPlayFill, BsPlusLg } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

const Detail = (props) => {
  const { id } = useParams();
  const [dData, setDData] = useState(false);

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDData(doc.data());

          // console.log("success")
          // console.log("id  =  "+id)
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);



  return (
    <>
      <div id="main_detail">
        <img src={dData.backgroundImg} alt={dData.title} id="main_img" />
        <div id="all">
          <div id="detail_btns">
            <div className="big_btn"><BsPlayFill id="icons" />PLAY</div>
            <div id="big_btn"><BsPlayFill className="icons" />TRAILER</div>
            <div id="only_div">
            <div className="small_btn"><BsPlusLg className="iconss" /></div>
            <div className="small_btn"><IoIosPeople className="iconsss" /></div>
            </div>
          </div>
          <h2 id="h2">{dData.title}</h2>
          <h3 id="h3">{dData.subTitle}</h3>
          <p id="para">{dData.description}</p>
        </div>
      </div>
    </>
  )
}

export default Detail;