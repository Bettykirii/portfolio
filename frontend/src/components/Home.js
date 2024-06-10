import React, {useState} from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



const Home = (props) => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
    return (
        <header>
      <button className="menu-btn" onClick={toggleNav}>
        ☰ 
      </button>
      <nav className={isNavOpen ? 'nav-open' : 'nav-closed'}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      
      <p><FontAwesomeIcon icon={faEnvelope} /> warwarekirii@gmail.com</p>
      <p><FontAwesomeIcon icon={faPhone} /> +254 707145959</p>
      <p><FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/Bettykirii">Github</a></p>
      </nav>

    </header>


    );
};


export default Home;