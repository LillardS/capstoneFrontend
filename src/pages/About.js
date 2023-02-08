import { useLayoutEffect } from "react";

const About = () => {
    useLayoutEffect(() => {
        window.scrollTo(0,0);
    });
    return (
        <div className="about">
            <div className="about-title">
                <h2><a href="#about">Read a few of the fun facts about our Queen City that makes it so worth Visiting!</a></h2>
            </div>
            <div className="container">
                <h2 id="about" className="about-header">About</h2>
                <div className="about-list">
                    <ul>
                        <li>The city was first settled in 1788, and is the third-largest city in Ohio! This means that of course it has an interesting past, and plenty of historic signs around the city to prove it.</li>
                        <li>The city of Cincinnati is very close to the Kentucky border. In the 19th century, Kentucky was a slave state while Cincinnati was the homeplace of many vocal abolitionists. These abolitionists made Cincinnati a part of the Underground Railroad, a place where slaves who were escaping this brutal life could stop on the way to Canada and freedom.</li>
                        <li>The Roebling Suspension Bridge, going over the Ohio River from Cincinnati, was completed in 1867 and it was the longest of its kind in the world at the time. It doesn't hold this record anymore, but it was the prototype and inspiration for the Brooklyn Bridge.</li>
                        <li>In 1835, the first bag of airmail was delivered from Cincinnati to Toledo. But the transport method was a little different from what you expect today. Instead of going by plane, the bag of mail traveled by hot air balloon.</li>
                        <li>The Cincinnati Observatory is known as  “The Birthplace of American Astronomy”. Having been built in 1873, it is the oldest public observatory in the country! The telescope at the observatory is also one of the oldest working telescopes in the world.</li>
                    </ul>
                </div>
            </div>
            <h2 className="about-closer">Although Cincinnati may seem like any city from an outside perspective, taking a moment to explore and experience just a few of the many wonders and works of history will surely convince you why The Queen City has it's name!</h2>
        </div>
    );
}

export default About;