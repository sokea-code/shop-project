import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Card.css';

function Home() {
    const [state, setState] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          console.log(response);
          setState(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
  return (
    <div>
       {/* Start Top Nav */}
    <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div className="container text-light">
            <div className="w-100 d-flex justify-content-between">
                <div>
                    <i className="fa fa-envelope mx-2"></i>
                    <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">Sokeabrach@gmail.com</a>
                    <i className="fa fa-phone mx-2"></i>
                    <a className="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">017-527-291</a>
                </div>
                <div>
                <a className="text-light" href="https://web.facebook.com/maryxsk" target="_blank" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                <a className="text-light" href="https://www.instagram.com/sokeabrach/" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                </div>
            </div>
        </div>
    </nav>
    {/* Close Top Nav */}


    {/* Header */}
    <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">

           <Link to='/' className="navbar-brand text-success logo h1 align-self-center">kshop</Link>

            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div className="flex-fill">
                    <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link">About</Link>
                            
                        </li>
                        <li className="nav-item">
                             <Link to='/shop' className="nav-link">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar align-self-center d-flex">
                    <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                        <div className="input-group">
                            <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..."/>
                            <div className="input-group-text">
                                <i className="fa fa-fw fa-search"></i>
                            </div>
                        </div>
                    </div>
                    <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                        <i className="fa fa-fw fa-search text-dark mr-2"></i>
                    </a>
                    <a className="nav-icon position-relative text-decoration-none" href="#">
                        <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                    </a>
                    <a className="nav-icon position-relative text-decoration-none" href="#">
                        <i className="fa fa-fw fa-user text-dark mr-3"></i>
                        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                    </a>
                </div>
            </div>

        </div>
    </nav>
    {/* Close Header */}

    {/* Modal */}
    <div className="modal fade bg-white" id="templatemo_search" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="w-100 pt-1 mb-5 text-right">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="get" className="modal-content modal-body border-0 p-0">
                <div className="input-group mb-2">
                    <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
                    <button type="submit" className="input-group-text bg-success text-light">
                        <i className="fa fa-fw fa-search text-white"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>



    {/* Start Banner Hero */}
    <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src="./assets/img/banner_img_01.jpg" alt=""/>
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left align-self-center">
                                <h1 className="h1 text-success"><b>KShop</b> eCommerce</h1>
                                <h3 className="h2">Tiny and Perfect eCommerce Template</h3>
                                <p>
                                    Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). 
                                    This template is 100% free provided by <a rel="sponsored" className="text-success" href="https://templatemo.com" target="_blank">TemplateMo</a> website. 
                                    Image credits go to <a rel="sponsored" className="text-success" href="https://stories.freepik.com/" target="_blank">Freepik Stories</a>,
                                    <a rel="sponsored" className="text-success" href="https://unsplash.com/" target="_blank">Unsplash</a> and
                                    <a rel="sponsored" className="text-success" href="https://icons8.com/" target="_blank">Icons 8</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src="./assets/img/banner_img_02.jpg" alt=""/>
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left">
                                <h1 className="h1">Proident occaecat</h1>
                                <h3 className="h2">Aliquip ex ea commodo consequat</h3>
                                <p>
                                    You are permitted to use this Zay CSS template for your commercial websites. 
                                    You are <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template collection websites.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src="./assets/img/banner_img_03.jpg" alt=""/>
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left">
                                <h1 className="h1">Repr in voluptate</h1>
                                <h3 className="h2">Ullamco laboris nisi ut </h3>
                                <p>
                                    We bring you 100% free CSS templates for your websites. 
                                    If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
            <i className="fas fa-chevron-left"></i>
        </a>
        <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
            <i className="fas fa-chevron-right"></i>
        </a>
    </div>
    {/* End Banner Hero */}


    {/* Start Categories of The Month */}
    <section className="container py-5">
        <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
                <h1 className="h1">Categories of The Month</h1>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src="./assets/img/category_img_01.jpg" className="rounded-circle img-fluid border"/></a>
                <h5 className="text-center mt-3 mb-3">Watches</h5>
                <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src="./assets/img/category_img_02.jpg" className="rounded-circle img-fluid border"/></a>
                <h2 className="h5 text-center mt-3 mb-3">Shoes</h2>
                <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src="./assets/img/category_img_03.jpg" className="rounded-circle img-fluid border"/></a>
                <h2 className="h5 text-center mt-3 mb-3">Accessories</h2>
                <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
            </div>
        </div>
    </section>
    {/* End Categories of The Month */}

    <div>
      {state.map((ele) => (
        <React.Fragment key={ele.id}>
          <ul className="card">
            <li >{ele.id}</li>
            <li>{ele.title}</li>
            <li>{ele.name }</li>
            <img src={ele.image} className="imag"alt="" />
          </ul>
        </React.Fragment>
      ))}
    </div>
    {/* Start Featured Product */}
    <section className="bg-light">
        <div className="container py-5">
            <div className="row text-center py-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Featured Product</h1>
                    <p>
                        Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                        <Link to='/shopsingle'>
                            <img src="./assets/img/feature_prod_01.jpg" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                </li>
                                <li className="text-muted text-right">$240.00</li>
                            </ul>
                            <Link to='/shopsingle' className="h2 text-decoration-none text-dark">Gym Weight</Link>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                            </p>
                            <p className="text-muted">Reviews (24)</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                        <Link to='/shopsingle'>
                            <img src="./assets/img/feature_prod_02.jpg" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                </li>
                                <li className="text-muted text-right">$480.00</li>
                            </ul>
                            <Link to='/shopsingle' className="h2 text-decoration-none text-dark">Cloud Nike Shoes</Link>
                            <p className="card-text">
                                Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                            </p>
                            <p className="text-muted">Reviews (48)</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                        <Link to='/shopsingle'>
                            <img src="./assets/img/feature_prod_03.jpg" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                </li>
                                <li className="text-muted text-right">$360.00</li>
                            </ul>
                            <Link to='/shopsingle' className="h2 text-decoration-none text-dark">Summer Addides Shoes</Link>
                            <p className="card-text">
                                Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                            </p>
                            <p className="text-muted">Reviews (74)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* End Featured Product */}


    {/* Start Footer */}
    <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
            <div className="row">

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-success border-bottom pb-3 border-light logo">Zay Shop</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li>
                            <i className="fas fa-map-marker-alt fa-fw"></i>
                            123 Consectetur at ligula 10660
                        </li>
                        <li>
                            <i className="fa fa-phone fa-fw"></i>
                            <a className="text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                        </li>
                        <li>
                            <i className="fa fa-envelope fa-fw"></i>
                            <a className="text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><a className="text-decoration-none" href="#">Luxury</a></li>
                        <li><a className="text-decoration-none" href="#">Sport Wear</a></li>
                        <li><a className="text-decoration-none" href="#">Men's Shoes</a></li>
                        <li><a className="text-decoration-none" href="#">Women's Shoes</a></li>
                        <li><a className="text-decoration-none" href="#">Popular Dress</a></li>
                        <li><a className="text-decoration-none" href="#">Gym Accessories</a></li>
                        <li><a className="text-decoration-none" href="#">Sport Shoes</a></li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><a className="text-decoration-none" href="#">Home</a></li>
                        <li><a className="text-decoration-none" href="#">About Us</a></li>
                        <li><a className="text-decoration-none" href="#">Shop Locations</a></li>
                        <li><a className="text-decoration-none" href="#">FAQs</a></li>
                        <li><a className="text-decoration-none" href="#">Contact</a></li>
                    </ul>
                </div>

            </div>

            <div className="row text-light mb-4">
                <div className="col-12 mb-3">
                    <div className="w-100 my-3 border-top border-light"></div>
                </div>
                <div className="col-auto me-auto">
                    <ul className="list-inline text-left footer-icons">
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="subscribeEmail">Email address</label>
                    <div className="input-group mb-2">
                        <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address"/>
                        <div className="input-group-text btn-success text-light">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-100 bg-black py-3">
            <div className="container">
                <div className="row pt-2">
                    <div className="col-12">
                        <p className="text-left text-light">
                            Copyright &copy; 2021 Company Name 
                            | Designed by <a rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    {/* End Footer */}

    {/* Start Script */}
    <script src="assets/js/jquery-1.11.0.min.js"></script>
    <script src="assets/js/jquery-migrate-1.2.1.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/templatemo.js"></script>
    <script src="assets/js/custom.js"></script>
    {/* End Script */}
    </div>
  )
}

export default Home
