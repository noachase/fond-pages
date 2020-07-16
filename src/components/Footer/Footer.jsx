import React from 'react';
import classes from './Footer.module.scss';
import FooterInfo from './FooterInfo/FooterInfo';

const Footer = () => {
    return (
        <header className={classes.footer}>
            <FooterInfo />
        </header>
    )
}

export default Footer;