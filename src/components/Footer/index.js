import React, { PureComponent } from 'react';

import FooterWrapper from './FooterWrapper';
import FbIcon from '../../../public/images/fb.svg';
import TwIcon from '../../../public/images/tw.svg';
import fiSrc from '../../../public/images/fi-signet-color.png';

const url = encodeURIComponent('https://funkeinteraktiv.github.io/geo-data-merger/');

function getFbLink() {
  return `https://www.facebook.com/sharer/sharer.php?u=${url}&t=${encodeURIComponent(config.social.facebook)}`;
}

function getTwitterLink() {
  return `https://twitter.com/intent/tweet?source=${url}&text=${encodeURIComponent(config.social.twitter)} ${url}`;
}

class Footer extends PureComponent {
  render() {
    return (
      <FooterWrapper>
        <footer className="footer">
          <hr />
          <div className="footer__top">
          <div className="footer__source">
              The Geo Data Merger is a desktop <a target="_blank" href="https://github.com/funkeinteraktiv/geo-data-merger" rel="noopener noreferrer">open source tool</a> for merging data from csv, json, geo- and topojson files.<br />
            </div>
            <div className="footer__sharing">
              <div className="footer__sharing-cta">Share this tool:</div>
              <a target="_blank" rel="noopener noreferrer" className="btn-facebook btn-social" href={getFbLink()}>
                <FbIcon />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="btn-twitter btn-social" href={getTwitterLink()}>
                <TwIcon />
              </a>
            </div>
          </div>
          <div className="footer__bot">
            <div className="footer__interaktiv">
              <div className="footer__interaktiv-logo"><img src={fiSrc} alt="Funke Interaktiv logo" /></div>
              <div className="footer__interaktiv-title">A project by <a target="_blank" href="https://twitter.com/funkeinteraktiv" rel="noopener noreferrer">Funke Interaktiv</a> and <a target="_blank" href="https://webkid.io/" rel="noopener noreferrer">webkid</a>.</div>
              <div className="footer__interaktiv-body">Further projects of the team can be found in our <a target="_blank" href="https://interaktiv.morgenpost/portfolio/" rel="noopener noreferrer">portfolio.</a> Do you want to leave any feedback or report a bug? We're looking forward to your <a target="_blank" href="mailto:interaktiv@funkemedien.de" rel="noopener noreferrer">email.</a></div>
            </div>
            <div className="footer__imprint">
              Geo Data Merger, 18.12.2018<br />
              <a href="https://funkeinteraktiv.github.io/impressum-datenschutz/imprint.html" target="_blank" rel="noopener noreferrer">Imprint</a> / <a href="https://funkeinteraktiv.github.io/impressum-datenschutz/privacy.html" target="_blank" rel="noopener noreferrer">Privacy</a>
            </div>
          </div>
        </footer>
      </FooterWrapper>
    );
  }
}

export default Footer;
