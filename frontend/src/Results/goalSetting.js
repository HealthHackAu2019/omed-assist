import React from 'react';
import styles from './GoalSetting.module.css';

const GoalSetting = () => (
    <>
        <h2>Planning your recovery</h2>
        <p>Setting goals will help you navigate your pain relief journey.</p>
        
        <ol className={styles.list}>
            <li><input type="text" className={styles.goalText} /></li>
            <li><input type="text" className={styles.goalText} /></li>
            <li><input type="text" className={styles.goalText} /></li>
        </ol>
    </>
)

export default GoalSetting;