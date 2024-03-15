import React from 'react'

const Header = () => {
  return (
    <header>
        {/* <!-- Top navigation bar --> */}
        <div className="navbar">
            {/* <!-- Amazon Logo --> */}
            <div className="nav-logo border">
                <div className="logo">
                </div>
            </div>
            {/* <!-- Delivery location --> */}
            <div className="nav-address border">
                <p className="add-deliver">Deliver to</p>
                <div className="add-icon">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="add-location">India</p>
                </div>
            </div>
            {/* <!-- Searchbar --> */}
            <div className="nav-searchbar">
                <select className="search-select">
                    <option>All</option>
                </select>
                <input className="search-input" placeholder="Search Amazon"></input>
                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            {/* <!-- Language --> */}
            <div className="nav-language border">
                <div className="flag-icon">
                </div>
                <select className="lang-select">
                    <option>EN</option>
                </select>
            </div>
            {/* <!-- Sign-in box --> */}
            <div className="nav-signin border">
                <p className="signin-p">Hello, sign in</p>
                <select className="signin-select">
                    <option>Accounts & Lists</option>
                </select>
            </div>
            {/* <!-- Return & orders --> */}
            <div className="nav-orders border">
                <p className="return-p">Return</p>
                <p className="orders-p">& Orders</p>
            </div>
            {/* <!-- Cart --> */}
            <div className="nav-cart border">
                <div className="cart-icon">
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <p className="cart-p">Cart</p>
            </div>
        </div>
        {/* <!-- Second nav bar --> */}
        <div className="navbar2">
            {/* <!-- 3 Bars --> */}
            <div className="nav2-bars border2">
                <div className="bars-icon">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <p className="bars-p">All</p>
            </div>
            {/* <!-- Todays deals --> */}
            <div className="nav2-deals border2">
                <p>Today's Deals</p>
            </div>
            {/* <!-- Customer Service --> */}
            <div className="nav2-cust-service border2">
                <p>Customer Service</p>
            </div>
            {/* <!-- Registry --> */}
            <div className="nav2-registry border2">
                <p>Registry</p>
            </div>
            {/* <!-- Gift Cards --> */}
            <div className="nav2-gift-cards border2">
                <p>Gift Cards</p>
            </div>
            {/* <!-- Sell --> */}
            <div className="nav2-sell border2">
                <p>Sell</p>
            </div>
        </div>
    </header>
  )
}

export default Header