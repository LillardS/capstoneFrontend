import { useLayoutEffect } from "react";

const Contacts = () => {
    useLayoutEffect(() => {
        window.scrollTo(0,0);
    });
    return (
        <div className="contacts">
        <div className="contacts-title">
            <h2><a href="#contact">Get in contact with me or see what else I have made!</a></h2>
        </div>
        <div className="container">
            <h2 id="contact" className="contacts-header">Contacts</h2>
            <div className="contacts-list">
                <ul>
                    <li>To get in touch with me, contact me by email at lillardseth@gmail.com</li>
                    <li>To reach my facebook page, you can find me <a href="https://www.facebook.com/seth.lillard.7/" target="blank">here!</a></li>
                    <li>For a look at some of my other work and projects, take a look at my Github <a href="https://github.com/LillardS" target="blank">here!</a></li>
                </ul>
            </div>
        </div>
        <h2 className="contacts-closer">This project was a lot of fun to create, and took more time and effort than any other project I have done. Feel free to contact me and tell me how you feel about it!</h2>
    </div>
    );
}

export default Contacts;