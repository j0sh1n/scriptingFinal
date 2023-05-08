import React from 'react';

const Header = () => {
    return (
    <>
        <div className="header flex-h">
            <div><img style={{width: "11vw", marginLeft: "1vw"}} src="https://eperformax.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feperformax-logo.62c1109f.png&w=3840&q=75"  alt="eperformaxLogo" /></div>
            <div>
                Applicant code:
                <br />
                Referral code: 
            </div>
        </div>
    </>);
}

export default Header;