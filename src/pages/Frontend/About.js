import React from 'react'
import team1 from "../../Assets/about-chef1.jpg"
import team2 from "../../Assets/about-chef2.jpg"
import gallery1 from "../../Assets/gallery1.jpg"
import gallery2 from "../../Assets/gallery2.jpg"
import gallery3 from "../../Assets/gallery3.jpg"
import gallery4 from "../../Assets/gallery4.jpg"
import gallery5 from "../../Assets/gallery5.jpg"
import gallery6 from "../../Assets/gallery6.jpg"

export default function About() {
  return (
    <>
      <main>
        <div className="about1">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className='text-center text-white fw-bold'>About Us</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col text-center">
              <p style={{ textAlign: 'justify' }}>If you still feel like you need some help or inspiration to start writing, we have created three fictional restaurant “About us” sections you can copy and personalize to make them match your restaurant’s branding.

                <br />
                <h2>Terramia</h2>
                “Here, at Terramia, in the center of London, we don’t accept compromises. Not about our food. All our ingredients are sourced from local producers to ensure quality and freshness.

                That's why our menu is seasonal. Today, we may serve you creamy mushroom soup, and tomorrow we may have a classic ratatouille on the menu. But the taste is always the same: finger-licking good!

                Don't hesitate to pay us a visit if you share our passion for fresh dishes cooked with only the best ingredients. We promise an experience that will keep you coming back for more!”
                <br />
                <h2>Blanket Food</h2>

                "At Blanket Food, we believe the best dishes are the ones that remind you of childhood. A portion of great food should make you feel like you are wrapped in a warm blanket.

                At our location in Boston or online, you will find the best dishes you didn't know you craved: extra-creamy mac and cheese, hot chicken casserole, fried dumplings like your mama makes, and many more.

                Forget about the daily stress and come relax with us. After tasting any of our menu items, you will never want to leave!"
                <br />
                <h2>Deliciosa</h2>

                "Here, at Deliciosa, we understand cravings. We know how important it is to get your food fast, and we have a 1-hour delivery guarantee, or you get your money back.

                While we prepare our food fast, we develop the flavor slowly. Our dough rises over the night, and our meat is always marinated. That's why every chicken tender, every beef skewer, and every bun taste like heaven.

                Don’t let hunger take control of you. Beat it with Deliciosa!"</p>
              <h1 className='text-success text-center'>Meet Our Team</h1>
              <h2 className='text-danger text-start mt-5'>Sir Devis : </h2>
              <p>"Sir Devis" is lead our cheaf management.He consectetur adipisicing elit. Beatae facilis commodi doloremque repellat nisi incidunt soluta cumque totam est vel in, quis ut inventore nihil ipsum pariatur corporis omnis. Cupiditate
                That's why every chicken tender, every beef skewer, and every bun taste like heaven. Don’t let hunger take control of you. Beat it with sir devis.</p>
              <img src={team1} alt="img" className='img-fluid my-3
w-50' />
              <h2 className='text-danger text-start mt-5'>WilliamSon : </h2>
              <p>"Sir Devis" is manager of  our returant.He consectetur adipisicing elit. Beatae facilis commodi doloremque repellat nisi incidunt soluta cumque totam est vel in, quis ut inventore nihil ipsum pariatur corporis omnis. Cupiditate
                That's why every chicken tender, every beef skewer, and every bun taste like heaven. Don’t let hunger take control of you. Beat it with us.</p>

              <img src={team2} alt="img" className='img-fluid my-3 w-50
' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia adipisci reiciendis ullam deleniti corporis distinctio voluptatum molestias repudiandae perspiciatis beatae minima ut eum, dolorem culpa. Explicabo eaque quia aliquid esse.
                Accusantium pariatur autem molestias adipisci debitis maxime rem at quod velit illo, nesciunt laboriosam repellendus est quidem accusamus ea, fugit ab iusto iure sunt omnis dicta qui! Reprehenderit, nisi maiores!
                Dignissimos, magnam quaerat optio sunt amet ipsam mollitia quasi ea perspiciatis. Ratione, error enim, laborum reiciendis libero blanditiis dolor corrupti illo aspernatur sunt ex a facilis iste animi aliquam temporibus.</p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="bg-light text-dark ">
                <div className="gallery-section py-5">
                  <div className="container">
                    <h1 className='text-success text-center mb-5'>Image Gallery</h1>
                    <div className="row">
                      <div className="col-md-4 px-2">
                        <div className="my-3">
                          <img src={gallery1} className='img-fluid' alt="img1" />
                        </div>
                        <div className="my-3">
                          <img src={gallery2} className='img-fluid' alt="img2" />
                        </div>
                      </div>
                      <div className="col-md-4 px-2">
                        <div className="my-3">
                          <img src={gallery3} className='img-fluid' alt="img3" />
                        </div>
                        <div className="my-3">
                          <img src={gallery4} className='img-fluid' alt="img4" />
                        </div>
                      </div>
                      <div className="col-md-4 px-2">
                        <div className="my-3">
                          <img src={gallery5} className='img-fluid' alt="img5" />
                        </div>
                        <div className="my-3">
                          <img src={gallery6} className='img-fluid' alt="img6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}