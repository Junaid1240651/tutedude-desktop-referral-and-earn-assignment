import React from "react";
import "./App.css";
import inr from './images/inr.png'
import invite from './images/invite.png'
import offer from './images/offer.png'
import purchase from './images/purchase.png'
import wallet from './images/wallet.png'
import profile from './images/profile.png'
import arrow from './images/arrow.png'

function App() {
  return (
    <div className="desktop">
      <div className="headerr">
        <div className="navbar">
          <div className="heroImage">
            <div className="logo">
              <image className="tudeDude" alt=""/>
            </div>
            <div className="nav">
              <p className="assignment">My Assignment</p>
              <p className="chat">Chat with Mentor</p>
              <div className="profile">
                <div className="profileImageView">
                <img className="profileImage" src={profile} alt=""></img>
                </div>
                <p className="profileName">ProfileName</p>
                <div className="keyarrow">
                  
                    <img className="arrow" src={arrow} alt=""/>
                  
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="referAndEarn">
        <p className="referAndEarnText">
          UI/UX > Refer & Earn
        </p>
      </div>
      <div className="dashboardView">
        <div className="earningWrapper">
          <p className="referralEarning">Referral Earning</p>
          <p className="referralEarningMrp">₹ 2500</p>
        </div>
        <div className="totalReferralsWrapper">
          <p className="totalReferrals">Total Referrals</p>
          <p className="totalReferralsInNumber">7</p>
        </div>
        <div className="walletBalanceWrapper">
          <p className="walletBalance">Wallet Balance</p>
        <p className="walletBalanceInNumber">₹ 500</p>
        </div>
        <div className="withdrawBalanceWrapper">
          <p className="withdrawBalance">Withdraw Balance </p>
        </div>
      </div>
      <div>
      <p className="yourRefferCode">Your Referral Code</p>
      </div>
    <div className="yourRefferCodeWrapper">
      <p className="RefferCode">EDCH54</p>
    </div>
    <div>
      <p className="howDoesIttWork">How does it work</p>
    </div>
    <div className="inviteYourFriendWrapper">
    <div className="imageWrapper">
      <img className="inviteimage" src={invite} alt="" />
    </div>
    <div className="contentWrapper">
      <p className="contentText">Invite your Friends</p>
      <p className="contentText2">Share the link tutedude.com with your friends</p>
      </div>
    </div>
    <div className="referrelMoneyWrapper">
    <div className="imageWrapper">
    <img className="referrelimage" src={inr} alt="" />

    </div>
    <div className="contentWrapper">
      <p className="contentText">You get ₹ 200 as referral money</p>
      <p className="contentText2">On total purchase the friend makes, into your wallet</p>
    </div>
    </div>
    <div className="transferMoneyWrapper">
    <div className="imageWrapper">
    
    <img className="transferimage" src={wallet} alt="" />

 
    </div>
    <div className="contentWrapper">
      <p className="contentText">Transfer money from wallet</p>
      <p className="contentText2">When the wallet balance reaches ₹200 or more, you can withdraw it</p>
    </div>
    </div>
    <div className="courseWrapper">
    <div className="imageWrapper">
    <img className="courseimage" src={purchase} alt="" />

    </div>
    <div className="contentWrapper">
      <p className="contentText">Transfer money from wallet</p>
      <p className="contentText2">When the wallet balance reaches ₹200 or more, you can withdraw it</p>
    </div>
    </div>
    <div className="offerWrapper">
    <div className="imageWrapper">
    <img className="offerimage" src={offer} alt="" />

    </div>
    <div className="contentWrapper">
      <p className="contentText">Transfer money from wallet</p>
      <p className="contentText2">When the wallet balance reaches ₹200 or more, you can withdraw it</p>
    </div>
    </div>
    <div><p className="friendWhoEnroll">Friends Who Enrolled</p></div>
    <div><p className="termAndCondition">Terms & Conditions</p></div>

    </div>
  );
}

export default App;
