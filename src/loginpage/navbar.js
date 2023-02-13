import "./navbar.css"
import logo from "../image/logo.png"
import { auth,provider } from "../firebase/firebaseconfig";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHome, AiOutlineSearch, AiOutlinePlus, AiFillStar, AiTwotoneMedicineBox } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectUserName, selectUserPhoto, setUserLoginDetails,setUserLogout} from "../features/user/userSlice";


const Navbar = (props) => {

    const [show , setShow] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const username = useSelector(selectUserName)
    const userphoto = useSelector(selectUserPhoto)

      useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home")
      }
    });
  }, [username]);

  const handleAuth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setUserLogout());
          navigate("/")
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

    return (
        <>
            <div className="nav_div">
                {!username ?
                    <>
                        <img src={logo} alt="logo" className="logo" />
                        <button className="btn" onClick={handleAuth}>LOG IN</button>
                    </>
                    :
                    <>
                    <div className="navbars">
                        <img src={logo} alt="logo" className="logo" />
                        <ul className="navbar_uls">
                            <li><AiFillHome className="icons" />HOME</li>
                            <li><AiOutlineSearch className="icons" />SEARCH</li>
                            <li><AiOutlinePlus className="icons" />WATCHLIST</li>
                            <li><AiFillStar className="icons" />ORIGINALS</li>
                            <li><RiMovie2Fill className="icons" />MOVIES</li>
                            <li><AiTwotoneMedicineBox className="icons" />SERIES</li>
                        </ul>
                        </div>
                        <div className="logout">
                        <button className={show?"btn2":"not_active"} onClick={handleAuth} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>Sign out</button>
                        <img src={userphoto} alt={username} className="user" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}/>
                        </div>
                        </>
                }
            </div>
        </>
    )
}

export default Navbar;