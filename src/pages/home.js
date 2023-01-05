import React from "react";
import {Link} from "react-router-dom"
import "./styles/home.css";
import video1 from "../media/Cows8.mp4";
import research from "../media/research.png";
import Bull from "../media/bull.jpg";
import mem1 from "../media/team/member-1.jpg";
import mem2 from "../media/team/member-2.jpg";
import mem3 from "../media/team/member-3.jpg";
import mem4 from "../media/team/member-4.jpg";
import {TbStethoscope, TbDna2} from "react-icons/tb";
import {SiHomeadvisor} from "react-icons/si";
import {HiArrowNarrowRight} from "react-icons/hi";
import {FaFacebook, FaInstagram, FaTwitter, FaGlobe} from "react-icons/fa";


export default function Home(){

    return(
       <main>
            <section className="hero">
                <div className="hero_text">
                    <h1>Have you had an encounter with the Muturu Breed of cattle?</h1>
                    <h2>If you haven't, then you're in the right place</h2>
                    <h2>and if you have, Welcome back!!</h2>
                </div>
                <video src={video1} autoPlay loop muted />
            </section>
            <section className="serv_sec">
                <h2>Our Service</h2>
                <h3>We provide the best services</h3>
                <div className="serv_card_cont">
                    <div className="card">
                        <div className="serv_icon"><TbStethoscope className="img"/></div>
                        <h3 className="serv">Healthcare</h3>
                        <p className="serv_tip">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi cum dolores quidem tempore aut velit ratione?
                        </p>
                        <HiArrowNarrowRight />
                    </div>
                    <div className="card">
                        <div className="serv_icon"><TbDna2 className="img"/></div>
                        <h3 className="serv">Breeding</h3>
                        <p className="serv_tip">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi cum dolores quidem tempore aut velit ratione?
                        </p>
                        <HiArrowNarrowRight />
                    </div>
                    <div className="card">
                        <div className="serv_icon"><SiHomeadvisor className="img"/></div>
                        <h3 className="serv">Consultation</h3>
                        <p className="serv_tip">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi cum dolores quidem tempore aut velit ratione?
                        </p>
                        <HiArrowNarrowRight />
                    </div>
                    <div className="card">
                        <div className="serv_icon">
                            <img className="img" alt="research icon" src={research} />
                        </div>
                        <h3 className="serv">Research</h3>
                        <p className="serv_tip">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi cum dolores quidem tempore aut velit ratione?
                        </p>
                        <HiArrowNarrowRight />
                    </div>
                </div>

                <button>
                    <Link to="/our">Our Services</Link>
                </button>
                <p>Want to get a free consultation? <Link className="cl_act" to="contact">Contact us</Link> </p>
            </section>
            <section className="two_col">
                <div className="fst_col">
                    <img src={Bull} alt="cow" />
                    <div className="foreground"></div>
                </div>
                <div className="snd_col">
                   <div className="snd_col_cont">
                        <h3>
                            With experience from top Researchers.
                        </h3>
                        <p>His hath is appear be one don't creepeth.Them and one moving the won't may. Moving saw wherein divide bearing called. Green moveth Hath. That it years fruit behold Meat also us third itself made seasons green void give replenish our said saying also spirit give lesser wherein.</p>
                        <Link to="">Learn More</Link>
                   </div>
                </div>
            </section>
            <section className="team_sect">
                <div className="team_heading">
                    <div className="col_1">
                        <h2>Our Team</h2>
                        <h3>Meet our talented team</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos alias voluptatum unde. Eos quod repellat eaque minima blanditiis a accusamus amet, unde possimus dolores ab vero veritatis provident, voluptatem quos.
                    </p>
                </div>
                <div className="team_slide">
                    <div className="team_card">
                        <div className="img_cont">
                            <img src={mem1} alt="user img" />
                        </div>
                        <div className="usr_detail">
                            <h2>Name</h2>
                            <h3>Role / Professionalism</h3>
                            <ul className="social_links">
                                <li>
                                    <Link to="#"> <FaFacebook /> </Link>
                                </li>
                                <li>
                                    <Link to="#"> <FaInstagram/> </Link>
                                </li>
                                <li>
                                    <Link to="#"> <FaTwitter/> </Link>
                                </li>
                                <li>
                                    <Link to="#"> <FaGlobe/> </Link>
                                </li>
                            </ul>
                            <Link to=""> Read more...</Link>
                        </div>
                    </div>
                    <div className="team_card">
                        <div className="img_cont">
                            <img src={mem2} alt="user img" />
                        </div>
                        <div className="usr_detail">
                            <h2>Name</h2>
                            <h3>Role / Professionalism</h3>
                            <ul className="social_links">
                                <li>
                                    <Link to="#"> <FaFacebook /> </Link>
                                </li>
                                <li>
                                    <Link to="#"> <FaInstagram/> </Link>
                                </li>
                                <li>
                                    <Link to="#"> <FaTwitter/> </Link>
                                </li>
                                <li>
                                    <Link to="#"> <FaGlobe/> </Link>
                                </li>
                            </ul>
                            <Link to=""> Read more...</Link>
                        </div>
                    </div>
                    <div className="team_card">
                        <div className="img_cont">
                            <img src={mem3} alt="user img" />
                        </div>
                        <div className="usr_detail">
                            <h2>Name</h2>
                            <h3>Role / Professionalism</h3>
                            <ul className="social_links">
                                <li>
                                    <Link to="#"> <FaFacebook /> </Link>
                                </li>
                                <li>
                                    <Link to="#"> <FaInstagram/> </Link>
                                </li>
                                <li>
                                    <Link to="#"> <FaTwitter/> </Link>
                                </li>
                                <li>
                                    <Link to="#"> <FaGlobe/> </Link>
                                </li>
                            </ul>
                            <Link to=""> Read more...</Link>
                        </div>
                    </div>
                    <div className="team_card">
                        <div className="img_cont">
                                <img src={mem4} alt="user img" />
                            </div>
                            <div className="usr_detail">
                                <h2>Name</h2>
                                <h3>Role / Professionalism</h3>
                                <ul className="social_links">
                                    <li>
                                        <Link to="#"> <FaFacebook /> </Link>
                                    </li>
                                    <li>
                                        <Link to="#"> <FaInstagram/> </Link>
                                    </li>
                                <li>
                                    <Link to="#"> <FaTwitter/> </Link>
                                </li>
                                <li>
                                    <Link to="#"> <FaGlobe/> </Link>
                                </li>
                            </ul>
                            <Link to="#"> Read more...</Link>
                        </div>
                    </div>
                    
                </div>
            </section>
       </main>
    )
}