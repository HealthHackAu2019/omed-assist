import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import image from "./404.svg";

class NotFound extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <img className={styles.image} src={image} alt="Not Found" />
        </div>

        <div className={styles.container}>
          <div className={styles.content}>
            It looks like we're lost. Let's go back <Link to="/">home</Link>.
          </div>
        </div>
      </>
    );
  }
}

export default NotFound;
