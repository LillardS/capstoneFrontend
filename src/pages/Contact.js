import { useLayoutEffect, useState } from "react";

const Contacts = () => {

    // on page load, scroll to the top of the page
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    // log input for the form to the console
    // const text = document.getElementById('data1');
    // const email = document.getElementById('data2');

    const [text, setText] = useState('');
    const [email, setEmail] = useState('');

    function print(e) {
        e.preventDefault();

        console.log(text.value);
        console.log(email.value);
        text.value = "";
        email.value = "";
    }

    // html returned on the /Contacts page
    return (
        <div className="contacts">
            <div className="contacts-title">
                <h2><a href="#contact">Get in contact with me or let me reach out to you!</a></h2>
            </div>
            <div className="container">
                <h2 id="contact" className="contacts-header">Contacts</h2>
                <div className="contacts-list">
                    <ul>
                        <li>
                            <form>
                                <p>Leave a message for me:</p>
                                <textarea id="data1" onChange={(e) => setText(e.target.value)} value={text}></textarea>
                                <p>Leave your email so I can get in contact:</p>
                                <div className="email-submit">
                                <input type="email" name="data" id="data2" onChange={(e) => setEmail(e.target.value)} value={email} />
                                <button id="submit" type="submit" onClick={print}>Submit</button>
                                </div>
                            </form>
                        </li>
                        <li>For a look at some of my other work and projects, take a look at my Github <a href="https://github.com/LillardS" target="blank">here!</a></li>
                    </ul>
                </div>
            </div>
            <h2 className="contacts-closer">This project was a lot of fun to create, and took more time and effort than any other project I have done. Feel free to contact me and tell me how you feel about it!</h2>
        </div>
    );
}

export default Contacts;