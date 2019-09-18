import React , {Component} from 'react';
import Login from '../login';
import Signup from '../signup';
export default class header extends Component{
    render(){
        return(
            <div>
            <div id="SearchDrawer" className="search-bar drawer drawer--top">
              <div className="search-bar__table">
                <div className="search-bar__table-cell search-bar__form-wrapper">
                  <form className="search search-bar__form" action="/search" method="get" role="search" style={{position: 'relative'}}>
                    <button className="search-bar__submit search__submit btn--link" type="submit">
                      <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-search" viewBox="0 0 37 40">
                        <path d="M35.6 36l-9.8-9.8c4.1-5.4 3.6-13.2-1.3-18.1-5.4-5.4-14.2-5.4-19.7 0-5.4 5.4-5.4 14.2 0 19.7 2.6 2.6 6.1 4.1 9.8 4.1 3 0 5.9-1 8.3-2.8l9.8 9.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.9-.9.9-2.1.1-2.9zm-20.9-8.2c-2.6 0-5.1-1-7-2.9-3.9-3.9-3.9-10.1 0-14C9.6 9 12.2 8 14.7 8s5.1 1 7 2.9c3.9 3.9 3.9 10.1 0 14-1.9 1.9-4.4 2.9-7 2.9z">
                        </path>
                      </svg>
                      <span className="icon__fallback-text">Submit</span>
                    </button>
                    <input className="search__input search-bar__input" type="search" name="q" defaultValue placeholder="Search our catalog" aria-label="Search our catalog" autoComplete="off" />
                    <ul className="search-results" style={{position: 'absolute', left: '0px', top: '-2px', display: 'none'}}>
                    </ul>
                  </form>
                </div>
                <div className="search-bar__table-cell text-right">
                  <button type="button" className="btn--link search-bar__close js-drawer-close">
                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-close" viewBox="0 0 37 40">
                      <path d="M21.3 23l11-11c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0l-11 11-11-11c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l11 11-11 11c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6s1-.2 1.4-.6l11-11 11 11c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8l-11-11z">
                      </path>
                    </svg>
                    <span className="icon__fallback-text">Close search</span>
                  </button>
                </div>
              </div>
            </div>
            <div id="siteloader" style={{display: 'none'}}>
              <div className="loader ishi-round-rotate-scale" />
            </div>
            <div id="spin-wrapper" style={{display: 'none'}} />
            <div className="header-nav">
              <div id="shopify-section-header-top" className="shopify-section">
                <div id="header" data-section-id="header-top" data-section-type="header-section">
                  <header className="site-header" role="banner">
                    <div className="nav-header">
                      <div className="page-width">
                        <div className="row">
                          <div className="header-block col-md-5 col-sm-5 col-xs-12">
                            <div className="header-text">Order Before 17:30, Shipped Today</div>
                          </div>
                          <div className="header-right col-md-7 col-sm-7 col-xs-12">
                            <div className="desktop-user-info">
                              <div id="_desktop_user_info" className="user_info full-width">
                                <div className="userinfo-title clearfix">
                                  <span className="userinfo-toggle hidden-lg-down">My Account</span>
                                  <span className="userinfo-toggle hidden-lg-up" />
                                  <i className="material-icons expand-more hidden-lg-down"></i>
                                </div>
                                <div id="userinfo-container" className="userinfo-inner">
                                  <ul className="header-bar__module header-bar__module--list">
                                    <li className="log-in">
                                      <a data-toggle="modal" data-target="#Modallogin" id="customer_login_link">Log in</a>
                                    </li>
                                    <li className="create_account">
                                      <a data-toggle="modal" data-target="#Modalsignup"  id="customer_register_link">Create account</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="wishlist">
                                <span><a className="nav-icon" href="/pages/wishlist">Wishlist</a></span>
                              </div>
                              <div className="checkout">
                                <span><a className="nav-icon" href="/checkout">checkout</a></span>
                              </div>
                              <div className="visit-us">
                                <span><a className="nav-icon" href="/pages/contact#contact-map">Visit
                                    Us</a></span>
                              </div>
                              <div id="ishiheadercontactblock">
                                <div className="call">
                                  <div className="call-img" />
                                  <div className="call-text">
                                    <span><a className="call-num" href="/pages/contact">+(012)99999999</a></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="header-top site-header-inner">
                      <div className="page-width">
                        <div className="row">
                          <div className="header-logo-section">
                            <div className="h2 header__logo" itemScope itemType="http://schema.org/Organization">
                              <a href="/" itemProp="url" className="header__logo-image">
                                <img src="//cdn.shopify.com/s/files/1/0250/3793/0580/files/Logo_large.png?v=1557915618" alt="Techayo Sectioned Shopify Theme" itemProp="logo" />
                              </a>
                            </div>
                          </div>
                          <div id="_desktop_search" className="site-header__search hidden-lg-down">
                            <div className="search-title clearfix">
                              <span className="search-toggle" />
                            </div>
                            <div id="search-container-full" className="search-info">
                              <form action="/search" method="get" className="search-header search search--focus" role="search" style={{position: 'relative'}}>
                                <input type="hidden" name="type" defaultValue="product" />
                                <span className="search-tag hidden-lg-down">1000+ PRODUCTS!</span>
                                <input className="search-header__input search__input" type="search" name="q" placeholder="Search our catalog" aria-label="Search our catalog" autoComplete="off" />
                                <button className="search-header__submit search__submit btn--link" type="submit">
                                  <span className="search-logo"> <i className="material-icons">search</i>
                                  </span>
                                  <span className="icon__fallback-text hidden-lg-down">Search</span>
                                </button>
                                <ul className="search-results" style={{position: 'absolute', left: '0px', top: '40px', display: 'none'}}>
                                </ul>
                              </form>
                            </div>
                          </div>
                          <div id="_desktop_cart" className="hidden-lg-down">
                            <div className="cart-display">
                              <div className="cart-title clearfix">
                                <div className="site-header__cart expand-more">
                                  <span className="cart-logo" />
                                  <span className="cart-qty">0</span>
                                  <span className="cart-qty-total">
                                    <span className="title hidden-lg-down">Shopping Cart</span>
                                    <span className="cart__subtotal hidden-lg-down">$0.00</span>
                                    <i className="material-icons expand-more hidden-lg-down"></i>
                                  </span>
                                  <div className="cart-price hide">
                                    <span className="cart-title hide">Shopping Cart</span>
                                    <div className="cart-count">
                                      <span className="cart-items hide">Items</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="cart-container" className="cart-dropdown-inner cart-dropdown">
                                <div className="cart-container-inner" data-section-id="header-top" data-section-type="cart-template">
                                  <div className="product-list hide" />
                                  <div className="cart__footer hide">
                                    <div className="grid">
                                      <div className="grid__item ">
                                        <div>
                                          <span className="cart__subtotal-title">Subtotal</span>
                                          <span className="cart__subtotal">$0.00</span>
                                        </div>
                                        <div className="cart__shipping">Shipping &amp; taxes
                                          calculated at checkout</div>
                                        <div className="cart-links">
                                          <a className="btn checkout-btn" href="/checkout">checkout</a>
                                          <a className="view-cart btn" href="/cart">Your cart</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cart__empty">
                                    <span className="cart--empty-message">Your cart is currently
                                      empty.</span>
                                    <div className="cookie-message">
                                      <p>Enable cookies to use the shopping cart</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="mobile_top_menu_wrapper" className="hidden-lg-up" style={{display: 'none'}}>
                            <div id="top_menu_closer" className="hidden-lg-up">
                              <i className="material-icons"></i>
                            </div>
                            <div id="_mobile_top_menu" className="js-top-menu mobile" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-width hidden-lg-up">
                      <div className="page-width">
                        <div className="row">
                          <div className="mobile-width-left">
                            <div id="menu-icon" className="menu-icon hidden-lg-up">
                              <i className="fa fa-bars" aria-hidden="true" />
                            </div>
                          </div>
                          <div className="mobile-width-right">
                            <div id="_mobile_cart" />
                            <div id="_mobile_search" />
                            <div id="_mobile_user_info" />
                            <div id="_mobile_link" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                </div>
              </div>
            </div>
            <div className="wrapper-nav hidden-lg-down">
              <div className="navfullwidth">
                <div className="page-width">
                  <div className="row">
                    <div id="shopify-section-Ishi_megamenu" className="shopify-section">
                      <div data-section-id="Ishi_megamenu" data-section-type="megamenu-section" className="megamenu-section hidden-lg-down">
                        <div id="_desktop_top_menu" className="menu js-top-menu hidden-sm-down " role="navigation">
                          <h2 className="home-title hidden-lg-down">ALL CATEGORIES</h2>
                          <div className="wrapper-menu">
                            <div className="line-menu half start" />
                            <div className="line-menu" />
                            <div className="line-menu half end" />
                          </div>
                          <ul className="top-menu" id="top-menu">
                            <li className="category">
                              <span className="float-xs-right hidden-lg-up">
                                <span data-target="#_n_child-one1" data-toggle="collapse" className="navbar-toggler collapse-icons clearfix collapsed">
                                  <i className="material-icons add"></i>
                                  <i className="material-icons remove"></i>
                                </span>
                              </span>
                              <a href="https://techayo-ishi.myshopify.com/" className="dropdown-item">
                                <h3 className="title">Electronic</h3>
                                <i className="material-icons add hidden-lg-down"></i>
                              </a>
                              <div className="popover sub-menu js-sub-menu collapse" id="_n_child-one1" style={{width: '830px'}}>
                                <ul className="top-menu mainmenu-dropdown">
                                  <li className="sub-category">
                                    <span className="float-xs-right hidden-lg-up">
                                      <span data-target="#_n_grand-child-one1" data-toggle="collapse" className="navbar-toggler collapse-icons clearfix collapsed">
                                        <i className="material-icons add"></i>
                                        <i className="material-icons remove"></i>
                                      </span>
                                    </span>
                                    <a href="/collections/electronics" className="dropdown-item dropdown-submenu">
                                      <h3 className="inner-title">Smart Technology</h3>
                                    </a>
                                    <div className="top-menu collapse" id="_n_grand-child-one1">
                                      <ul className="top-menu">
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Cases &amp;
                                            Covers</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Android
                                            Mobiles</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Windows
                                            Mobiles</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Printers &amp;
                                            Ink</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Camcorders</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Android
                                            Mobiles</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Wearable
                                            Devices</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="sub-category">
                                    <span className="float-xs-right hidden-lg-up">
                                      <span data-target="#_n_grand-child-two1" data-toggle="collapse" className="navbar-toggler collapse-icons clearfix collapsed">
                                        <i className="material-icons add"></i>
                                        <i className="material-icons remove"></i>
                                      </span>
                                    </span>
                                    <a href="/collections/mobile" className="dropdown-item dropdown-submenu">
                                      <h3 className="inner-title">Home Entertainment</h3>
                                    </a>
                                    <div className="top-menu collapse" id="_n_grand-child-two1">
                                      <ul className="top-menu">
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Bluetooth
                                            Speakers</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Wearable
                                            Devices</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Smart watches</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Action Camera </a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item"> Smart Phones</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Wearable
                                            Devices</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Smart Speaker</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="sub-category">
                                    <span className="float-xs-right hidden-lg-up">
                                      <span data-target="#_n_grand-child-three1" data-toggle="collapse" className="navbar-toggler collapse-icons clearfix collapsed">
                                        <i className="material-icons add"></i>
                                        <i className="material-icons remove"></i>
                                      </span>
                                    </span>
                                    <a href="/collections/speaker" className="dropdown-item dropdown-submenu">
                                      <h3 className="inner-title">Computer Peripherals</h3>
                                    </a>
                                    <div className="top-menu collapse" id="_n_grand-child-three1">
                                      <ul className="top-menu">
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Printers &amp;
                                            Ink</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Monitors</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Home Theatres</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Portable
                                            Projectors</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Media players</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Android
                                            Mobiles</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Wearable
                                            Devices</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="sub-category product_container hidden-lg-down">
                                    <a href="/products/test2" className="dropdown-item dropdown-submenu">
                                      <h3 className="inner-title">Special Product</h3>
                                    </a>
                                    <div className="grid__item grid__item--Ishi_megamenu">
                                      <div className="grid-view-item__link grid-view-item__image-container">
                                        <div className="grid-view-item__image-wrapper js">
                                          <a href="/collections/mobile/products/customizable-debet">
                                            <div className="image-inner">
                                              <div className="reveal">
                                                <img className="grid-view-item__image lazyload  main-img " src="//cdn.shopify.com/s/files/1/0250/3793/0580/products/9_130x168.png?v=1558097795" alt="Customizable Debet" />
                                              </div>
                                              <div className="hide imgurl-for-quickview">
                                                <span>//cdn.shopify.com/s/files/1/0250/3793/0580/products/9_370x480.png?v=1558097795</span>
                                                <span>//cdn.shopify.com/s/files/1/0250/3793/0580/products/10_370x480.png?v=1558097797</span>
                                                <span>//cdn.shopify.com/s/files/1/0250/3793/0580/products/11_370x480.png?v=1558097798</span>
                                                <span>//cdn.shopify.com/s/files/1/0250/3793/0580/products/12_370x480.png?v=1558097799</span>
                                                <span>//cdn.shopify.com/s/files/1/0250/3793/0580/products/13_370x480.png?v=1558097801</span>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                        <div className="product-description">
                                          <div className="product-detail">
                                            <div className="h4 grid-view-item__title">
                                              Customizable Debet</div>
                                          </div>
                                          <div className="grid-view-item__meta">
                                            <span className="visually-hidden">Regular
                                              price</span>
                                            <span className="original is-bold">$50.00</span>
                                          </div>
                                        </div>
                                        <noscript>
                                          &lt;img class="grid-view-item__image"
                                          src="//cdn.shopify.com/s/files/1/0250/3793/0580/products/9.png?v=1558097795"
                                          alt="Customizable Debet"
                                          style="max-width: 0.0px;"&gt;
                                        </noscript>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <div className="img-container">
                                  <div className="col-xs-6 imagecontainer1">
                                    <a href="/collections/fashion_new" className="link">
                                      <img className="feature-row__image lazyload" src="//cdn.shopify.com/s/files/1/0250/3793/0580/files/Drop-Down-2_600x150.png?v=1558432816" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="3.0733333333333333" data-sizes="auto" alt="" />
                                    </a>
                                  </div>
                                  <div className="col-xs-6 imagecontainer2">
                                    <a href="/collections/fashion_special" className="link">
                                      <img className="feature-row__image lazyload" src="//cdn.shopify.com/s/files/1/0250/3793/0580/files/Drop-Down-3_410x150.png?v=1558432818" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="3.0733333333333333" data-sizes="auto" alt="" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="category">
                              <span className="float-xs-right hidden-lg-up">
                              </span>
                              <a href="/collections/new_electronic" className="dropdown-item">
                                <h3 className="title">Outfits</h3>
                              </a>
                            </li>
                            <li className="category">
                              <span className="float-xs-right hidden-lg-up">
                              </span>
                              <a href="/collections" className="dropdown-item">
                                <h3 className="title">Collection</h3>
                              </a>
                            </li>
                            <li className="category">
                              <span className="float-xs-right hidden-lg-up">
                                <span data-target="#_n_child-one4" data-toggle="collapse" className="navbar-toggler collapse-icons clearfix collapsed">
                                  <i className="material-icons add"></i>
                                  <i className="material-icons remove"></i>
                                </span>
                              </span>
                              <a href="/collections/special_electronic" className="dropdown-item">
                                <h3 className="title">Accessories</h3>
                                <i className="material-icons add hidden-lg-down"></i>
                              </a>
                              <div className="popover sub-menu js-sub-menu collapse" id="_n_child-one4" style={{width: '630px'}}>
                                <ul className="top-menu mainmenu-dropdown">
                                  <li className="sub-category">
                                    <span className="float-xs-right hidden-lg-up">
                                      <span data-target="#_n_grand-child-one4" data-toggle="collapse" className="navbar-toggler collapse-icons clearfix collapsed">
                                        <i className="material-icons add"></i>
                                        <i className="material-icons remove"></i>
                                      </span>
                                    </span>
                                    <a href="/collections/mobile" className="dropdown-item dropdown-submenu">
                                      <h3 className="inner-title">Mobile Accessories</h3>
                                    </a>
                                    <div className="top-menu collapse" id="_n_grand-child-one4">
                                      <ul className="top-menu">
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Mobile Cases</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Power Banks</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Headphones</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Windows
                                            Mobiles</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Cases &amp;
                                            Covers</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="sub-category">
                                    <span className="float-xs-right hidden-lg-up">
                                      <span data-target="#_n_grand-child-two4" data-toggle="collapse" className="navbar-toggler collapse-icons clearfix collapsed">
                                        <i className="material-icons add"></i>
                                        <i className="material-icons remove"></i>
                                      </span>
                                    </span>
                                    <a href="/collections/computer" className="dropdown-item dropdown-submenu">
                                      <h3 className="inner-title">Computer Accessories</h3>
                                    </a>
                                    <div className="top-menu collapse" id="_n_grand-child-two4">
                                      <ul className="top-menu">
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Pendrives</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Internet
                                            Devices</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Laptop Bags</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">External Hard
                                            Disks</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Printers &amp;
                                            Ink</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="sub-category product_container hidden-lg-down">
                                    <a href="/products/ligula-convallis-pulvinar" className="dropdown-item dropdown-submenu">
                                      <h3 className="inner-title">Latest Product</h3>
                                    </a>
                                    <div className="grid__item grid__item--Ishi_megamenu">
                                      <div className="grid-view-item__link grid-view-item__image-container">
                                        <div className="grid-view-item__image-wrapper js">
                                          <a href="/collections/mobile/products/home-sparkle-sh731-wall-shelf">
                                            <div className="image-inner">
                                              <div className="reveal">
                                                <img className="grid-view-item__image lazyload  main-img " src="//cdn.shopify.com/s/files/1/0250/3793/0580/products/15_73f7cc50-6e30-4840-96fd-68f7205445d6_130x168.png?v=1558175420" alt="Home Sparkle Sh731 Wall" />
                                              </div>
                                              <div className="hide imgurl-for-quickview">
                                                <span>//cdn.shopify.com/s/files/1/0250/3793/0580/products/15_73f7cc50-6e30-4840-96fd-68f7205445d6_370x480.png?v=1558175420</span>
                                                <span>//cdn.shopify.com/s/files/1/0250/3793/0580/products/8_3741b508-c393-4f53-91b1-6330efe8a1f4_370x480.png?v=1558175420</span>
                                                <span>//cdn.shopify.com/s/files/1/0250/3793/0580/products/14_c963e716-9edc-4b56-a606-b002452ee662_370x480.png?v=1558175420</span>
                                                <span>//cdn.shopify.com/s/files/1/0250/3793/0580/products/7_0a525071-f8e5-49b1-9729-bd6aedbc5819_370x480.png?v=1558175420</span>
                                                <span>//cdn.shopify.com/s/files/1/0250/3793/0580/products/6_d4867ca8-1b6b-4219-b5ad-b09e360ba7e0_370x480.png?v=1558175420</span>
                                                <span>//cdn.shopify.com/s/files/1/0250/3793/0580/products/16_33d332ae-cc55-414e-bedd-239c56004574_370x480.png?v=1558175420</span>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                        <div className="product-description">
                                          <div className="product-detail">
                                            <div className="h4 grid-view-item__title">Home
                                              Sparkle Sh731 Wall</div>
                                          </div>
                                          <div className="grid-view-item__meta">
                                            <span className="product-price__price product-price__sale">
                                              <s className="product-price__price is-bold">
                                                $60.00 </s>
                                            </span>
                                            <span className="discount-percentage">
                                              <span>save</span>
                                              6%
                                            </span>
                                            <span className="visually-hidden">Regular
                                              price</span>
                                            <span className="regular">$64.00</span>
                                          </div>
                                        </div>
                                        <noscript>
                                          &lt;img class="grid-view-item__image"
                                          src="//cdn.shopify.com/s/files/1/0250/3793/0580/products/15_73f7cc50-6e30-4840-96fd-68f7205445d6.png?v=1558175420"
                                          alt="Home Sparkle Sh731 Wall"
                                          style="max-width: 0.0px;"&gt;
                                        </noscript>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="category">
                              <span className="float-xs-right hidden-lg-up">
                              </span>
                              <a href="/blogs/electronic" className="dropdown-item">
                                <h3 className="title">Blogs</h3>
                              </a>
                            </li>
                            <li className="category">
                              <span className="float-xs-right hidden-lg-up">
                              </span>
                              <a href="/pages/contact-us" className="dropdown-item">
                                <h3 className="title">Contact</h3>
                              </a>
                            </li>
                            <li className="category">
                              <span className="float-xs-right hidden-lg-up">
                                <span data-target="#_n_child-one7" data-toggle="collapse" className="navbar-toggler collapse-icons clearfix collapsed">
                                  <i className="material-icons add"></i>
                                  <i className="material-icons remove"></i>
                                </span>
                              </span>
                              <a href="/collections/computer" className="dropdown-item">
                                <h3 className="title">Computer</h3>
                                <i className="material-icons add hidden-lg-down"></i>
                              </a>
                              <div className="popover sub-menu js-sub-menu collapse" id="_n_child-one7" style={{width: '430px'}}>
                                <ul className="top-menu mainmenu-dropdown">
                                  <li className="sub-category">
                                    <span className="float-xs-right hidden-lg-up">
                                      <span data-target="#_n_grand-child-one7" data-toggle="collapse" className="navbar-toggler collapse-icons clearfix collapsed">
                                        <i className="material-icons add"></i>
                                        <i className="material-icons remove"></i>
                                      </span>
                                    </span>
                                    <a href="/products/customizable-new-laptop" className="dropdown-item dropdown-submenu">
                                      <h3 className="inner-title">Computer Accessories</h3>
                                    </a>
                                    <div className="top-menu collapse" id="_n_grand-child-one7">
                                      <ul className="top-menu">
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Pendrives</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Internet
                                            Devices</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Laptop Bags</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">External Hard
                                            Disks</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Printers &amp;
                                            Ink</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="sub-category">
                                    <span className="float-xs-right hidden-lg-up">
                                      <span data-target="#_n_grand-child-two7" data-toggle="collapse" className="navbar-toggler collapse-icons clearfix collapsed">
                                        <i className="material-icons add"></i>
                                        <i className="material-icons remove"></i>
                                      </span>
                                    </span>
                                    <a href="/collections/computer" className="dropdown-item dropdown-submenu">
                                      <h3 className="inner-title">Mobile Accessories</h3>
                                    </a>
                                    <div className="top-menu collapse" id="_n_grand-child-two7">
                                      <ul className="top-menu">
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Mobile Cases</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Power Banks</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Headphones</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Windows
                                            Mobiles</a>
                                        </li>
                                        <li className="category">
                                          <a href="/" className="dropdown-item">Cases &amp;
                                            Covers</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                                <div className="img-container">
                                  <div className="col-xs-12 imagecontainer1">
                                    <img className="feature-row__image lazyload" src="//cdn.shopify.com/s/files/1/0250/3793/0580/files/Drop-Down_600x150.png?v=1558432808" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="3.0733333333333333" data-sizes="auto" alt="" />
                                  </div>
                                  <div className="col-xs-6 imagecontainer2">
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="category">
                              <span className="float-xs-right hidden-lg-up">
                              </span>
                              <a href="/collections/speaker" className="dropdown-item">
                                <h3 className="title">Speaker</h3>
                              </a>
                            </li>
                            <li className="category">
                              <span className="float-xs-right hidden-lg-up">
                              </span>
                              <a href="/collections/mobile" className="dropdown-item">
                                <h3 className="title">Mobile</h3>
                              </a>
                            </li>
                            <li className="category">
                              <span className="float-xs-right hidden-lg-up">
                              </span>
                              <a href="/collections/new_electronic" className="dropdown-item">
                                <h3 className="title">Television</h3>
                              </a>
                            </li>
                            <li className="category">
                              <span className="float-xs-right hidden-lg-up">
                              </span>
                              <a href="/products/hp-lp3065" className="dropdown-item">
                                <h3 className="title">Camera</h3>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="shopify-section-Ishi_headerlink" className="shopify-section">
                      <div data-section-id="Ishi_headerlink" data-section-type="headerlink-section" id="_desktop_link" className="headerlink-section hidden-lg-down">
                        <div id="_desktop_link_menu">
                          <div id="ishiheaderlinks_block" className="header-block">
                            <div id="header_ishiheaderlinks">
                              <ul className="bullet large hidden-xl-down">
                                <li>
                                  <a href="https://techayo-ishi.myshopify.com/" title="Home">
                                    Home
                                  </a>
                                </li>
                                <li>
                                  <a href="/pages/contact" title="Contact">
                                    Contact
                                  </a>
                                </li>
                                <li>
                                  <a href="/blogs/electronic" title="Blog">
                                    Blog
                                  </a>
                                </li>
                                <li>
                                  <a href="/collections/electronics" title="Accesory">
                                    Accesory
                                  </a>
                                </li>
                                <li>
                                  <a href="/collections/mobile" title="Mobile">
                                    Mobile
                                  </a>
                                </li>
                                <li>
                                  <a href="/collections/speaker" title="Speaker">
                                    Speaker
                                  </a>
                                </li>
                                <li>
                                  <a className="viewmore"  title="Computer"> view
                                    More
                                  </a>
                                  <div className="headerlink-dropdown">
                                    <ul>
                                      <li>
                                        <a href="/collections/computer" title="Computer">Computer</a>
                                      </li>
                                      <li>
                                        <a href="/pages/wishlist" title="Wishlist">
                                          Wishlist
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                              <div className="header-link hidden-xl-up">
                                <span className="link-icon" />
                                <h4 className="small-title">Menu</h4>
                                <div className="link-menu">
                                  <div className="wrapper-menu">
                                    <div className="line-menu half start" />
                                    <div className="line-menu" />
                                    <div className="line-menu half end" />
                                  </div>
                                </div>
                                <ul className="bullet small">
                                  <li>
                                    <a href="https://techayo-ishi.myshopify.com/">Home</a>
                                  </li>
                                  <li>
                                    <a href="/pages/contact">Contact</a>
                                  </li>
                                  <li>
                                    <a href="/blogs/electronic">Blog</a>
                                  </li>
                                  <li>
                                    <a href="/collections/electronics">Accesory</a>
                                  </li>
                                  <li>
                                    <a href="/collections/mobile">Mobile</a>
                                  </li>
                                  <li>
                                    <a href="/collections/speaker">Speaker</a>
                                  </li>
                                  <li>
                                    <a href="/collections/computer">Computer</a>
                                  </li>
                                  <li>
                                    <a href="/pages/wishlist">Wishlist</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="shopify-section-Ishi_offer" className="shopify-section shopify-section">
                      <div id="ishioffersblock">
                        <div className="offer-img" />
                        <div className="typed"><a href="/">
                          </a></div>
                      </div>
                      <div className="offerstitle">
                        <a href="/">
                          <span className="type-text">Flat <span>50%</span> Off on LED</span>
                        </a>
                      </div>
                      <div className="offerstitle">
                        <a href="/">
                          <span className="type-text">Flat <span>30%</span> Off on LED</span>
                        </a>
                      </div>
                      <div className="offerstitle">
                        <a href="/">
                          <span className="type-text">Flat <span>45%</span> Off on LED</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Login/>
            <Signup/>
          </div>
        )
    }
}