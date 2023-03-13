import React from "react";
import {Link} from 'react-router-dom';
import styles from './ThankYou.module.scss'

const ThankYou = () => {
    return (
        <div className={styles.root}>
                <div className="thank-wrapper">
                    <div className="div">Спасибо! Мы с вами свяжемся  в ближайшее время.
                        <Link to={'/'}>
                            <button>Назад</button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default ThankYou