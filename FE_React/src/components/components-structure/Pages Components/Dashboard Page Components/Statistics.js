import React, { useContext, useState } from "react";
import { DataContext } from "../../../../DataBase/DataContext";
import "../../../components-style/Statistics.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Statistics = () => {
  /* Get The whole Data Using Context to present it's Statistics   */
  const { usersData, productsData, categoriesData } = useContext(DataContext);
  const [buttonWelcome, setButtonWelcome] = useState(true);

  return (
    <div className="DashBoard">
      <div className="statistics-container">
        <div className="Data-catcher">
          {/* Greeting Part */}
          <section className="hey-part" style={{height:'50vh'}}>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner">
                <div className="item active">
                  <img style={{width:'60vw', height:'50vh'}} src="https://img.freepik.com/premium-vector/cashless-phone-payment-technology-poster-with-pos-terminal-wireless-pay-system-realistic-bank-cashier-device-business-vector-concept_102902-5366.jpg?w=2000" alt="Los Angeles" />
                </div>

                <div className="item">
                  <img style={{width:'60vw', height:'50vh'}} src="https://static.vecteezy.com/system/resources/previews/009/647/063/original/flash-sale-template-special-offer-promotion-landscape-poster-free-vector.jpg" alt="Chicago" />
                </div>

                <div className="item">
                  <img src="ny.jpg" alt="New York" />
                </div>
              </div>

              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </section>

          {/*  System Information Part*/}
          <section className="information-part">
            <div className="Data-wrapper">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://img.freepik.com/free-icon/survival-bag_318-1731.jpg" />
                <Card.Body>
                  <Card.Title style={{marginLeft:'2vw'}}><b>ITEMS</b></Card.Title>
                  <Card.Text>
                    Total Items : <b>{usersData.length}</b>
                  </Card.Text>
                  <Button variant="primary">Show Items</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://icon-library.com/images/user-image-icon/user-image-icon-19.jpg" />
                <Card.Body>
                  <Card.Title style={{marginLeft:'2vw'}}><b>USERS</b></Card.Title>
                  <Card.Text>
                    Total Users : <b>{productsData.length}</b>
                  </Card.Text>
                  <Button variant="primary">Show Users</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/orders-icon.png" />
                <Card.Body>
                  <Card.Title style={{marginLeft:'2vw'}} ><b>ORDERS</b></Card.Title>
                  <Card.Text>
                    Total Orders : <b>{categoriesData.length}</b>
                  </Card.Text>
                  <Button variant="primary">Show Orders</Button>
                </Card.Body>
              </Card>
              {/*<div className="Data-container products-number">
                <i className="fa-solid fa-tag"></i>
                <h2>Products :</h2>
                <h6>Number of Products is </h6>
                <h1>{productsData.length}</h1>
              </div>*/}
             {/* <div className="Data-container products-number">
                <i className="fa-solid fa-tag"></i>
                <h2>Products :</h2>
                <h6>Number of Products is </h6>
                <h1>{productsData.length}</h1>
              </div>
              <div className="Data-container categories-number">
                <i className="fa-solid fa-sitemap"></i>
                <h2>Categories :</h2>
                <h6>Number of Categories is </h6>
                <h1>{categoriesData.length}</h1>
              </div>*/}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Statistics;
