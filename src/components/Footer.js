import React from 'react';


const Footer = () => {
    return (

        <footer className="page-footer cyan darken-4">
            <div className="container ">
                <div className="row">

                    <div className="col l4 offset-l2 s12 right">
                        <h5 className="white-text">Contact</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3 hoverable" href="#!">Facebook</a></li>
                            <li><a className="grey-text text-lighten-3 hoverable" href="#!">Github</a></li>
                            <li><a className="grey-text text-lighten-3 hoverable" href="#!">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2020 Made by Gadiyevich
                </div>
            </div>
        </footer>
    )
}

export default Footer