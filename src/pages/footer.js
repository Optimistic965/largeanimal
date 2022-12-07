import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./styles/footer.css"

export default function footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="first_column">
          <div className="logo">
              <h1>
                  <NavLink to="/">Muturu Breed</NavLink>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veritatis numquam consequuntur rem? Ipsum quam ad, fugiat maiores odio sequi. Delectus similique amet facilis. 
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
          </div>
        </div>
        <div className="second_column">
            <div className="inner_1">
              <h3>Services</h3>
              <ul>
                <li> <Link> Consulting </Link> </li>
                <li> <Link> Consulting </Link> </li>
                <li> <Link> Health care </Link> </li>
                <li> <Link> Accounting</Link> </li>
              </ul>
            </div>
            <div className="inner_2">
              <h3>Latest Posts</h3>
              <ul>
                <li>Link to a post</li>
                <li>Link to a post</li>
                <li>Link to a post</li>
                <li>Link to a post</li>
              </ul>
            </div>
            <div className="inner_3">
              <h3>Get in Touch</h3>
              <ul>
                <li> <Link>+1 202-358-0309</Link> </li>
                <li> <Link>+1 202-358-0408</Link> </li>
                <li><a href="mailto:">info@muturucattle.com</a></li>
                <li>Address: </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}
