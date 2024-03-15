import amazonLogo from '../Components/Images/Amazon-logo.png'
import globeImg from '../Components/Images/globe-img.jpg'
import usFlag from '../Components/Images/us-flag.png'
import privacyPolicy from '../Components/Images/Privacy-policy-toggle-icon.jpg'
import React from 'react'

const Footer = () => {
  return (
    // <!-- Footer -->
    <footer>
        <div className="foot-panel1">
            Back to top
        </div>
        <div className="foot-panel2">
            <ul>
                <p>Get to Know Us</p>
                <a href="">Careers</a>
                <a href="">Blog</a>
                <a href="">About Amazon</a>
                <a href="">Investor Relations</a>
                <a href="">Amazon Devices</a>
                <a href="">Amazon Science</a>
            </ul>
            <ul>
                <p>Make Money with Us</p>
                <a href="">Sell products on Amazon</a>
                <a href="">Sell on Amazon Business</a>
                <a href="">Sell apps on Amazon</a>
                <a href="">Become an Affiliate</a>
                <a href="">Advertise Your Products</a>
                <a href="">Self-Publish with Us</a>
                <a href="">Host an Amazon Hub</a>
                <a href="">› See More Make Money with Us</a>
            </ul>
            <ul>
                <p>Amazon Payment Products</p>
                <a href="">Amazon Business Card</a>
                <a href="">Shop with Points</a>
                <a href="">Reload Your Balance</a>
                <a href="">Amazon Currency Converter</a>
            </ul>
            <ul>
                <p>Let Us Help You</p>
                <a href="">Amazon and COVID-19</a>
                <a href="">Your Account</a>
                <a href="">Your Orders</a>
                <a href="">Shipping Rates & Policies</a>
                <a href="">Returns & Replacements</a>
                <a href="">Manage Your Content and Devices</a>
                <a href="">Amazon Assistant</a>
                <a href="">Help</a>
            </ul>
        </div>
        <div className="foot-panel3">
            <div className="foot-logo">
                <img src={amazonLogo} alt="Amazon logo"/>
            </div>
            <div className="foot-select">
                <div className="foot-box">
                    <div className="foot-lang-icon" style={{backgroundImage: `url(${globeImg})`}}>
                    </div>
                    <select className="foot-selects">
                        <option>English</option>
                    </select>
                </div>
                <div className="foot-box">
                    <p>$ USD - U.S. Dollar</p>
                </div>
                <div className="foot-box">
                    <div className="foot-country-icon" style={{backgroundImage: `url(${usFlag})`}}>
                    </div>
                    <select className="foot-selects">
                        <option>United States</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="foot-panel4">
            <table>
                <tr>
                    <td><a href="">Amazon Music<br/><p>Stream millions of songs</p></a></td>
                    <td><a href="">Amazon Ads<br/><p>Reach customers wherever they spend their time</p></a></td>
                    <td><a href="">6pm<br/><p>deals on fashion brands</p></a></td>
                    <td><a href="">AbeBooks<br/><p>Books, art & collectibles</p></a></td>
                    <td><a href="">ACX<br/><p>Audiobook Publishing Made Easy</p></a></td>
                    <td><a href="">Sell on Amazon<br/><p>Start a Selling Account</p></a></td>
                    <td><a href="">Amazon Business<br/><p>Everything For Your Business</p></a></td>
                </tr>
                <tr>
                    <td><a href="">AmazonGlobal<br/><p>Ship Orders Internationally</p></a></td>
                    <td><a href="">Home Services<br/><p>Experienced Pros Happiness Guarantee</p></a></td>
                    <td><a href="">Amazon Web Services<br/><p>Scalable Cloud Computing Services</p></a></td>
                    <td><a href="">Audible<br/><p>Listen to Books & Original Audio Performances</p></a></td>
                    <td><a href="">Box Office Mojo<br/><p>Find Movie Box Office Data</p></a></td>
                    <td><a href="">Goodreads<br/><p>Book reviews & recommendations</p></a></td>
                    <td><a href="">IMDb<br/><p>Movies, TV & Celebrities</p></a></td>
                </tr>
                <tr>
                    <td><a href="">IMDbPro<br/><p>Get Info Entertainment Professionals Need</p></a></td>
                    <td><a href="">Kindle Direct Publishing<br/><p>Indie Digital & Print Publishing Made Easy</p></a></td>
                    <td><a href="">Prime Video Direct<br/><p>Video Distribution Made Easy</p></a></td>
                    <td><a href="">Shopbop<br/><p>Designer Fashion Brands</p></a></td>
                    <td><a href="">Woot!<br/><p>Deals and Shenanigans</p></a></td>
                    <td><a href="">Zappos<br/><p>Shoes & Clothing</p></a></td>
                    <td><a href="">Ring<br/><p>Smart Home Security Systems</p></a></td>
                </tr>
                <tr>
                    <td></td>
                    <td><a href="">eero WiFi<br/><p>Stream 4K Video in Every Room</p></a></td>
                    <td><a href="">Blink<br/><p>Smart Security for Every Home</p></a></td>
                    <td><a href="">Neighbors App<br/><p>Real-Time Crime & Safety Alerts</p></a></td>
                    <td><a href="">Amazon Subscription Boxes<br/><p>Top subscription boxes - right to your door</p></a></td>
                    <td><a href="">PillPack<br/><p>Pharmacy Simplified</p></a></td>
                </tr>
            </table>
        </div>
        <div className="foot-panel5">
            <a href="">Conditions of Use</a>
            <a href="">Privacy Notice</a>
            <a href="">Your Ads Privacy Choices</a>
            <div className="privacy-policy-icon" style={{backgroundImage: `url(${privacyPolicy})`, borderRadius: '10px'}}>
            </div>
            <p>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
    </footer> 
  )
}

export default Footer