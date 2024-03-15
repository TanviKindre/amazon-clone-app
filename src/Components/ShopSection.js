import newYearSupplies from '../Components/Images/new-year-new-supplies.jpg'
import dealsPc from '../Components/Images/deals-pc.jpg'
import toys from '../Components/Images/toys.jpg'
import topDealPolish from '../Components/Images/Top-deal-polish.jpg'
import lunarNewYear from '../Components/Images/lunar-new-year.jpg'
import gamingHeadset from '../Components/Images/gaming-headset.jpg'
import gamingKeyboard from '../Components/Images/gaming-keyboard.jpg'
import gamingMice from '../Components/Images/gaming-computer-mice.jpg'
import gamingChair from '../Components/Images/gaming-chair.jpg'
import fashionJeans from '../Components/Images/fashion-jeans.jpg'
import fashionTops from '../Components/Images/fashion-tops.jpg'
import fashionDress from '../Components/Images/fashion-dress.jpg'
import fashionShoes from '../Components/Images/fashion-shoes.jpg'
import headphones from '../Components/Images/headphones.jpg'
import guitar from '../Components/Images/guitar.jpg'
import keyboard from '../Components/Images/keyboard.jpg'
import microphone from '../Components/Images/microphone.jpg'
import React from 'react'

const ShopSection = () => {
  return (
    <div className="shop-section">
        <div className="box1 box">
            <div className="box-content">
                <h2>New year, new supplies</h2>
                <div className="box-img" style={{backgroundImage: `url(${newYearSupplies})`}}></div>
                <a href="">Shop office products</a>
            </div>
        </div>
        <div className="box2 box">
            <div className="box-content">
                <h2>Gaming accessories</h2>
                <div className="grid">
                    <figure>
                        <img className="four-in-one" src={gamingHeadset} alt=""/>
                        <figcaption>Headset</figcaption>
                    </figure>
                    <figure>
                        <img className="four-in-one" src={gamingKeyboard} alt=""/>
                        <figcaption>Keyboard</figcaption>
                    </figure>
                    <figure>
                        <img className="four-in-one" src={gamingMice} alt=""/>
                        <figcaption>Computer mice</figcaption>
                    </figure>
                    <figure>
                        <img className="four-in-one" src={gamingChair} alt=""/>
                        <figcaption>Chairs</figcaption>
                    </figure>
                </div>
                <a href="">Shop</a>
            </div>
        </div>
        <div className="box3 box">
            <div className="box-content">
                <h2>Deals in PCs</h2>
                <div className="box-img" style={{backgroundImage: `url(${dealsPc})`}}></div>
                <a href="">Shop now</a>
            </div>
        </div>
        <div className="box4 box">
            <div className="box-content">
                <h2>Toys under $25</h2>
                <div className="box-img" style={{backgroundImage: `url(${toys})`}}></div>
                <a href="">Shop now</a>
            </div>
        </div>
    
        {/* <!-- Row 2 --> */}
        <div className="box5 box">
            <div className="box-content">
                <h2>Top Deal</h2>
                <div className="box-img" style={{backgroundImage: `url(${topDealPolish})`, height: '15rem'}}></div>
                <div className="offer-section">
                    <div className="offer-button"><a href="">Up to 50% off</a></div>
                    <div className="offer-text"><a href="">Top deal</a></div><br/>
                    <a className="offer-name" href="">Bettles Gel Polish</a>
                </div>
                <a href="">See all deals</a>
            </div>
        </div>
        <div className="box6 box">
            <div className="box-content">
                <h2>Shop deals in Fashion</h2>
                <div className="grid">
                    <figure>
                        <img className="four-in-one" src={fashionJeans} alt=""/>
                        <figcaption>Jeans under $50</figcaption>
                    </figure>
                    <figure>
                        <img className="four-in-one" src={fashionTops} alt=""/>
                        <figcaption>Tops under $25</figcaption>
                    </figure>
                    <figure>
                        <img className="four-in-one" src={fashionDress} alt=""/>
                        <figcaption>Dresses under $30</figcaption>
                    </figure>
                    <figure>
                        <img className="four-in-one" src={fashionShoes} alt=""/>
                        <figcaption>Shoes under $50</figcaption>
                    </figure>
                </div>
                <a href="">See all deals</a>
            </div>
        </div>
        <div className="box7 box">
            <div className="box-content">
                <h2>Lunar New Year</h2>
                <div className="box-img" style={{backgroundImage: `url(${lunarNewYear})`}}></div>
                <a href="">Shop now</a>
            </div>
        </div>
        <div className="box8 box">
            <div className="box-content">
                <h2>Music & audio</h2>
                <div className="grid">
                    <figure>
                        <img className="four-in-one" src={headphones} alt=""/>
                        <figcaption>Headphones</figcaption>
                    </figure>
                    <figure>
                        <img className="four-in-one" src={guitar} alt=""/>
                        <figcaption>Guitars</figcaption>
                    </figure>
                    <figure>
                        <img className="four-in-one" src={keyboard} alt=""/>
                        <figcaption>Keyboards</figcaption>
                    </figure>
                    <figure>
                        <img className="four-in-one" src={microphone} alt=""/>
                        <figcaption>Microphones</figcaption>
                    </figure>
                </div>
                <a href="">See more curated tech</a>
            </div>
        </div>
    </div> 
  )
}

export default ShopSection