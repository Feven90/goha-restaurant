import React from 'react';
import './HomePage.scss';
import { Button } from 'reactstrap';

function HomePage() {
    const goToAboutPage = () => {
        window.location.assign("/about");
    }
    const goToMenuPage = () => {
        window.location.assign("/menu");
    }
    return (
        <div id="home-container">
            <div id="video-cover">
                <img src="https://www.washingtonpost.com/resizer/liKOYIMw5Uv8AU5zUPESjXvYAYQ=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/GAZC23UQM424FMISJZDPMOK7TE.jpg" alt="Ethiopian food"/>
            </div>
            <div className="banner-div">
                <h2 className="banner-text">Discover The Ethiopian in You</h2>
            </div>
            <div id="welcome-section">
                <div id="welcome-header">
                    <h1 id="welcome-header-text">WELCOME TO GOHA</h1>
                </div>
                <div id="welcome-tile-section">
                    <div className="tiles about-tile">
                        <div className="image-div">
                            <img className="tile-images" src="https://i.guim.co.uk/img/media/ed96fcacae8ff1271d149ac843b9e1a195069526/0_210_3896_2338/master/3896.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e046a8fa850316ac59edbad75bb6004a" alt="Ethiopian Food" />
                        </div>
                        <div className="tile-text">
                            <h4>OUR STORY</h4>
                            <p className="short-description">We have been serving delicious Ethiopian Food to the Atlanta area since 2006. Come and enjoy traditional fare as well as some culinary creations you’ll only find at Desta.</p>
                        </div>
                        <div class="welcome-button-div">
                            <Button onClick={goToAboutPage} className="welcome-button"><p>READ MORE</p></Button>
                        </div>
                    </div>
                    <div className="tiles food-tile">
                        <div className="image-div">
                            <img className="tile-images" src="https://selamselamdotme.files.wordpress.com/2014/12/img_7013.jpg" alt="Ethiopian Food" />
                        </div>
                        <div className="tile-text">
                            <h4>OUR STORY</h4>
                            <p className="short-description">With Atlanta favorites like our Vegetarian Platter and The “Original Meat Lovers”, we offer a little something for everyone. If you have trouble deciding, our helpful staff can assist.</p>
                        </div>
                        <div class="welcome-button-div">
                            <Button onClick={goToMenuPage} className="welcome-button"><p>MENU</p></Button>
                        </div>
                    </div>
                    <div className="tiles catering-tile">
                        <div className="image-div">
                            <img className="tile-images" src="https://i.pinimg.com/originals/82/85/d6/8285d6b01b7f21a54c700304074e06dd.jpg" alt="Ethiopian Food" />
                        </div>
                        <div className="tile-text">
                            <h4>OUR STORY</h4>
                            <p className="short-description">Experience the taste of authentic Ethiopian cuisine at your next event, brought to you with culinary professionalism and care that only Desta can provide.</p>
                        </div>
                        <div class="welcome-button-div">
                            <Button className="welcome-button"><p>CATERING</p></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
