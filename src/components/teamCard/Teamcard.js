import React from 'react'
import './teamcard.css'
// import Button from 'react-bootstrap/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Teamcard() {
  return (
    <>
        <div class="container">
            <div class="col-sm-6 col-lg-3 my-auto gs-style">
                    <div class="box shadow-sm p-4">
                        <div class="image-wrapper mb-3">
                            <img class="img-fluid" src="https://images.pexels.com/photos/555790/pexels-photo-555790.png" alt="..." />
                        </div>
                        <div class="box-desc">
                            <h5>Utkarsh Singh</h5>
                            <p>General Secretary</p>
                        </div>
                        <ul class="social">
                            <li><a href="#"><LinkedInIcon/></a></li>
                            <li><a href="#"><EmailIcon/></a></li>
                            <li><a href="#"><InstagramIcon/></a></li>
                        </ul>
                    </div>
            </div>
        <div class="row vh-50 below-container">
            
            <div class="col-sm-6 col-lg-3 my-auto">
                <div class="box shadow-sm p-4">
                    <div class="image-wrapper mb-3">
                        <img class="img-fluid" src="/assets/rohit.jpeg" alt="..." />
                    </div>
                    <div class="box-desc">
                        <h5>Rohit Kumar Singh</h5>
                        <p>Joint Secretary</p>
                    </div>
                    <ul class="social">
                            <li><a href="#"><LinkedInIcon/></a></li>
                            <li><a href="#"><EmailIcon/></a></li>
                            <li><a href="#"><InstagramIcon/></a></li>
                        </ul>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 my-auto">
                <div class="box shadow-sm p-4">
                    <div class="image-wrapper mb-3">
                        <img class="img-fluid" src="https://images.pexels.com/photos/555790/pexels-photo-555790.png" alt="..." />
                    </div>
                    <div class="box-desc">
                        <h5>Aditya Gupta</h5>
                        <p>Joint Secretary</p>
                    </div>
                    <ul class="social">
                            <li><a href="#"><LinkedInIcon/></a></li>
                            <li><a href="#"><EmailIcon/></a></li>
                            <li><a href="#"><InstagramIcon/></a></li>
                        </ul>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 my-auto">
                <div class="box shadow-sm p-4">
                    <div class="image-wrapper mb-3">
                        <img class="img-fluid" src="https://images.pexels.com/photos/555790/pexels-photo-555790.png" alt="..." />
                    </div>
                    <div class="box-desc">
                        <h5>Chanchal Malik</h5>
                        <p>Joint Secretary</p>
                    </div>
                    <ul class="social">
                            <li><a href="#"><LinkedInIcon/></a></li>
                            <li><a href="#"><EmailIcon/></a></li>
                            <li><a href="#"><InstagramIcon/></a></li>
                        </ul>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 my-auto">
                <div class="box shadow-sm p-4">
                    <div class="image-wrapper mb-3">
                        <img class="img-fluid" src="https://images.pexels.com/photos/555790/pexels-photo-555790.png" alt="..." />
                    </div>
                    <div class="box-desc">
                        <h5>one more</h5>
                        <p>Joint Secretary</p>
                    </div>
                    <ul class="social">
                            <li><a href="#"><LinkedInIcon/></a></li>
                            <li><a href="#"><EmailIcon/></a></li>
                            <li><a href="#"><InstagramIcon/></a></li>
                        </ul>
                </div>
            </div>
                {/* <Button/> */}
            
        </div>
    </div>	
	
    </>
  )
}
