import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import logo from '../logo.svg';
import hero from './hero.svg';

const Home = () => {
    return (
        <div className={styles.main}>
            <section>
                <header>
                    <img src={logo} />
                </header>
                <div>
                    <img className={styles.hero} src={hero} alt="hero picture"/>
                </div>
            </section>
            <section className={styles.takeSurvey}>
                <span>Opiod Self Assessment Tool</span>
                <Link to="/questionnaire" className='btn btn-primary btn-lg'>Begin Now</Link>
            </section>
        </div>
    )
}

export default Home;
