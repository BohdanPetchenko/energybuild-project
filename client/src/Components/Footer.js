import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className='fixed-bottom row-fluid position-relative mt-auto py-0 bg-dark text-white' >
                <div className='footer-container'>
                    <div className="footer-wrap">

                        <div className="address-box">
                            <h6>Address</h6>
                            <p>Poltavskii Shlyah Str. 36</p>
                        </div>

                        <div className="mail-box">
                            <h6>Email</h6>
                            <a href="mailto:pskenergobud@gmail.com" className="contact-box-item">pskenergobud@gmail.com</a>
                        </div>

                        <div className="contact-box">
                            <h6>Contact</h6>
                            <a href="tel:+380574576029" className="contact-box-item">+38 057 45 760 29</a>
                        </div>

                    </div>
                </div>
                <div className="footer-copyright" >
                    <p>Copyright   ©   2020 Energybuild</p>
                </div>
            </footer>
        )
    }
}
