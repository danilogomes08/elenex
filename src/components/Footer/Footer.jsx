import react from 'react'
import './Footer.scss'

import * as Icon from 'react-feather';

const Footer = _ => {

    return (
        <footer>

            <hr/>

            <div>
                <ul>
                    <li>
                        <a href="#">
                            Smatphones
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Smartwatches
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Airpodes
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Speakers
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Notbooks
                        </a>
                    </li>
                </ul>   

                <ul>
                    <li>
                        <a href="#">
                            Apple
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Samsung
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Dell
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Lenovo
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Sony
                        </a>
                    </li>
                </ul>         

                <div>

                    <h2>
                        Sign Up for WooStroid Updates to Receive Information <br />
                        About New Arrivals and Future Events.
                    </h2>

                    <div className="Newsletter">
                        <input type="text" placeholder="Enter your e-mail" />
                        <button>
                            Subscribe!
                        </button>
                    </div>

                    <Icon.Facebook className="Icon" size="20" stroke-width="1.5" />

                    <Icon.Instagram className="Icon" size="20" stroke-width="1.5"/>

                    <Icon.Twitter className="Icon" size="20" stroke-width="1.5"/>

                </div>
            </div>
            
        </footer>
    )
}

export default Footer