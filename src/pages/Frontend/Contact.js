import React from 'react'
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import Person1 from '../../Assets/person1.jpg';
import Person2 from '../../Assets/person2.jpg';
import Person3 from '../../Assets/person3.jpg';
import Person4 from '../../Assets/person4.jpg';


export default function Contact() {
  return (
    <>
    <main>
        <div className="contact1">
            <h1 className='text-center text-white fw-bold'>Contact Us</h1>
        </div>
        <div className="container">
           <div className="location-section pt-5">
              <div className="container">
                <div className="row">
                  <div className="col text-center">
                       <h1>WHERE YO FIND US</h1>
                       <p className='mb-5'>47 Baker Street, London LD1 OND</p>
                       <h4>Opening Hours</h4>
                       <p>Mon-Fri 09:00 - 17:00</p>
                       <p className='mb-4'>Sat-Sunday 10:00 - 15:00</p>
                  </div>
                </div>
              </div>
              </div>
           </div>
           <div className='bg-light text-dark py-5'>
           <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">John Mike</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia?
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Maria Cruz</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor itaque reprehenderit minus tempore. Iste quibusdam facilis excepturi nihil maiores!
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Anna Gold</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et voluptate minus error suscipit officiis placeat repudiandae quibusdam officia tempora, reprehenderit, enim, quidem exercitationem laborum!
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Abdul Rehman</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
            </div> 
    </main>
    </>
  )
}