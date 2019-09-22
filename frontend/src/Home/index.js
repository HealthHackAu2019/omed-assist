import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import logo from '../logo.svg';
import homepoints from './homepoints.svg';

const Home = () => {
    return (
        <div className={styles.main}>
            <section>
                <header className={styles.logo} >
                    <img src={logo} alt="Omed Assist" />
                    <span>
                        <p className={styles.tagLine}>Helping you navigate<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; your pain relief journey</p>
                    </span>
                </header>
                <div>
                    <img className={styles.hero} src={homepoints} alt="" />
                </div>
            </section>
            <section className={styles.takeSurvey}>
                <span className={styles.navigatePainText}>I want to navigate my pain relief journey</span>
                <Link to="/questionnaire" className='btn btn-primary btn-lg'>Start Now</Link>
                <span className={styles.painQuizText}>or take our <Link to="/quiz">Opioid Pain Quiz</Link></span>

                <span className={styles.aboutText}>
                    <p><strong>OMED Assist</strong> helps people who are being considered for opioid therapy navigate their pain relief journey. </p> <p>If you have experienced a recent injury or had surgery, OMED Assist can provide you with Opioid MEDication Assistance to guide your recovery.</p>
                </span>
            </section>
        </div>
    )
}

export default Home;
