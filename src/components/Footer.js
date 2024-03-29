import React from 'react';



const Footer = () => {



  return (
    <div className="footer flex-h">
      <div className="flex-c">
        <img src="../img/Picture1.png" alt="ePerformax Logo" id="logo" />
      </div>
      <div className="flex-c">
        Copyright © 2022 ePerformax Contact Centers & BPO. All rights reserved.
      </div>
      <div className="flex-c">
        <p>Need help? Email us at: </p>
        <b>
          <a href="mailto:webapp@eperformax.com?Subject=Scripting Concern">
            webapp@eperformax.com
          </a>
        </b>
        <p> to report a problem.</p>
      </div>
    </div>
  );
};

export default Footer;
