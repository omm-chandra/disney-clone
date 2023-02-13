import "./home.css"
import { Swiper, SwiperSlide } from "swiper/react";
import avatar from "../image/avatar.jpg"
import endgame from "../image/avengers.jpg"
import wanda from "../image/eternals.webp"
import onward from "../image/toy.jpg"

import disney from "../image/disney.png"
import pixar from "../image/pixarr.png"
import marvel from "../image/marvel.png"
import starwars from "../image/starwarss.png"
import national from "../image/national.png"

import disneyvdo from "../video/disney.mp4"
import pixarvdo from "../video/pixar.mp4"
import marvelvdo from "../video/marvel.mp4"
import starwarsvdo from "../video/star wars.mp4"
import nationalgvdo from "../video/national.mp4"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase/firebaseconfig"
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

import { selectRecommend, selectNewDisney, selectOriginal, selectTrending } from "../features/movie/movieSlice";
import { Link } from "react-router-dom";
import Navbar from "../loginpage/navbar";


const Home = (props) => {

    const Recommended = useSelector(selectRecommend)
    const newToDisney = useSelector(selectNewDisney)
    const trend = useSelector(selectTrending)
    const orgi = useSelector(selectOriginal)

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case "recommend":
                        recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        break;

                    case "disney":
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                        break;

                    case "originals":
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;

                    case "trend":
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;
                }
            });

            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trending,
                })
            );
        });
    });

    return (
        <>
            <div className="main_page">
                <Navbar/>
                <div>
                    <Swiper
                        slidesPerView={1.3}
                        spaceBetween={25}
                        centeredSlides={true}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            clickable: true
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={avatar} alt="image" className="avatar" /></SwiperSlide>
                        <SwiperSlide><img src={endgame} alt="image" className="avatar" /></SwiperSlide>
                        <SwiperSlide><img src={wanda} alt="image" className="avatar" /></SwiperSlide>
                        <SwiperSlide><img src={onward} alt="image" className="avatar" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className="companies">
                    <div className="boxes">
                        <img src={marvel} alt="image" className="img" />
                        <video autoPlay={true} loop={true} muted={true} playsInline={true} className="video">
                            <source src={marvelvdo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="boxes">
                        <img src={pixar} alt="image" className="img" />
                        <video autoPlay={true} loop={true} muted={true} playsInline={true} className="video">
                            <source src={pixarvdo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="boxes">
                        <img src={disney} alt="image" className="img" />
                        <video autoPlay={true} loop={true} muted={true} playsInline={true} className="video">
                            <source src={disneyvdo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="boxes">
                        <img src={starwars} alt="image" className="img" />
                        <video autoPlay={true} loop={true} muted={true} playsInline={true} className="video">
                            <source src={starwarsvdo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="boxes" >
                        <img src={national} alt="image" id="ntl" className="img" />
                        <video autoPlay={true} loop={true} muted={true} playsInline={true} className="video">
                            <source src={nationalgvdo} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="movie_poster_sec">

                    <div className="section">
                        <h2>Recommended for you</h2>
                        <div id="box_line">
                            {Recommended && Recommended.map((movie, key) => (
                                <div className="boxs" key={key}>
                                    <Link to={`/detail/` + movie.id}>
                                    <img src={movie.cardImg} alt={movie.title} className="cardImg"/>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="section">
                        <h2>New to Disney+</h2>
                        <div id="box_line">
                        {newToDisney && newToDisney.map((movie, key) => (
                                <div className="boxs" key={key}>
                                    <Link to={`/detail/` + movie.id}>
                                    <img src={movie.cardImg} alt={movie.title} className="cardImg"/>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="section">
                        <h2>Originals</h2>
                        <div id="box_line">
                        {trend && trend.map((movie, key) => (
                                <div className="boxs" key={key}>
                                    <Link to={`/detail/` + movie.id}>
                                    <img src={movie.cardImg} alt={movie.title} className="cardImg"/>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="section">
                        <h2>Trending</h2>
                        <div id="box_line">
                        {orgi && orgi.map((movie, key) => (
                                <div className="boxs" key={key}>
                                    <Link to={`/detail/` + movie.id}>
                                    <img src={movie.cardImg} alt={movie.title} className="cardImg"/>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home

