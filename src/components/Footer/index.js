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
            <div className="footer__credits">
              A project by <a target="_blank" href="https://twitter.com/funkeinteraktiv">Funke Interaktiv</a> and <a href="https://webkid.io" target="_blank">webkid</a>
            </div>
            <div className="footer__source">
              Here is some space for some texxt. <br />
            </div>
            <div className="footer__sharing">
              <div className="footer__sharing-cta">Share this tool:</div>
              <a target="_blank" className="btn-facebook btn-social" href={getFbLink()}>
                <FbIcon />
              </a>
              <a target="_blank" className="btn-twitter btn-social" href={getTwitterLink()}>
                <TwIcon />
              </a>
            </div>
          </div>
          <div className="footer__bot">
            <div className="footer__interaktiv">
              <div className="footer__interaktiv-logo"><img src={fiSrc} alt="Funke Interaktiv logo" /></div>
              <div className="footer__interaktiv-title">Ein Projekt des Interaktiv-Teams der Funke Mediengruppe.</div>
              <div className="footer__interaktiv-body">Weitere Anwedungen des Teams finden Sie in unserem <a target="_blank" href="<%=publication.baseUrl%>/portfolio/">Portfolio.</a> Haben Sie Anmerkungen oder einen Fehler entdeckt? Wir freuen uns über Ihre <a target="_blank" href="mailto:interaktiv@funkemedien.de">Mail.</a></div>
            </div>
            <div className="footer__imprint">
              Geo Data Merger, 18.12.2018<br />
              <a href="https://funkeinteraktiv.github.io/impressum-datenschutz/imprint.htm" target="_blank">Impressum</a> / <a href="https://funkeinteraktiv.github.io/impressum-datenschutz/privacy.html" target="_blank">Privacy</a>
            </div>
          </div>
        </footer>
      </FooterWrapper>
    );
  }
}

export default Footer;
