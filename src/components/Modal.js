import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Contact extends Component {
    componentDidMount() {

        const options = {
            inDuration: 230,
            outDuration: 430,
            opacity: 0.88,
            dismissible: false,
            preventScrolling: true,
            startingTop: "44%",
            endingTop: "22%"
        };
        M.Modal.init(this.Modal, options);

        let instance = M.Modal.getInstance(this.Modal);
        instance.open();
        // instance.close();
        // instance.destroy();
    }

    render() {
        return (
            <div className='container '>

                <div
                    ref={Modal => {
                        this.Modal = Modal;
                    }}
                    id="modal1"
                    className="modal "
                >
                    <div className="modal-content yellow accent-3">
                        <h4 className='center'>Application</h4>
                        <p className='center'>Hi there :)
                        There is a React application that contains 3 different applications that you will see after closing this popup. <br />
                        The first one is simple Todo list that you can add, remove your todos.<br />
                        The second is Posts app and it shows you a different kind of random post data fetched using post Api.<br />
                        The third app is Movie database that shows you some rating and some information about the movie you search.</p>
                    </div>
                    <div className="modal-footer white lighten-3">

                        <a className="modal-close waves-effect waves-red btn-flat ">
                            Close
            </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
