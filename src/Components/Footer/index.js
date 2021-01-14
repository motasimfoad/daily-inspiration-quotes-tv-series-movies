import React from 'react';
const year = new Date();

function Footer() {
  return (
    <div style={{textAlign:"center"}}>
        <small>
            &copy; {year.getFullYear()} <a href="https://motasimfoad.com">Motasim Foad</a>
        </small>
    </div>
  );
}

export default Footer;
