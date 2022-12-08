import React from "react";
import "./styles/home.css";
import video1 from "../media/Cows8.mp4";
// import video2 from "../media/Cows9.mp4";
import {TbStethoscope, TbDna2} from "react-icons/tb"
import {SiHomeadvisor} from "react-icons/si"


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
                        <div className="serv_icon"><TbStethoscope /></div>
                        <h3 className="serv">Healthcare</h3>
                        <p className="serv_tip">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi cum dolores quidem soluta architecto excepturi earum tempore aut velit ratione?
                        </p>
                    </div>
                    <div className="card">
                        <div className="serv_icon"><TbDna2 /></div>
                        <h3 className="serv">Breeding</h3>
                        <p className="serv_tip">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi cum dolores quidem soluta architecto excepturi earum tempore aut velit ratione?
                        </p>
                    </div>
                    <div className="card">
                        <div className="serv_icon"><SiHomeadvisor /></div>
                        <h3 className="serv">Consultation</h3>
                        <p className="serv_tip">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi cum dolores quidem soluta architecto excepturi earum tempore aut velit ratione?
                        </p>
                    </div>
                    <div className="card">
                        <div className="serv_icon"><TbStethoscope /></div>
                        <h3 className="serv">Research</h3>
                        <p className="serv_tip">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi cum dolores quidem soluta architecto excepturi earum tempore aut velit ratione?
                        </p>
                    </div>
                </div>
            </section>
       </main>
    )
} 