import React, {Component} from 'react';

export default class About extends Component {
    render() {
        return (

            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <span>
                                                <p>Hi there! My name is Khang Ho. I am a software engineer based in Atlanta, GA.</p>
                                                <p>I have recently graduated from Georgia Gwinnett College with Information Technology as my
                                                    major with the concentration of Software Development.</p>
                                                <p>I specialize in full stack web development using various technology stacks such as
                                                Spring Boot, .NET Core, ASP.Net, PHP Laravel, and NodeJS. I have also been exposed to desktop application development environments such as JavaFX, WPF, and Windows Forms. I am striving to become a good software engineer by constantly familiarizing myself with trending and current technologies.</p>
                                                <p>I love exploring new technologies and often amazed by the progress
                                                we as a human species have made so far in the technology world.
                                                    In the following years, I also plan to explore the frontend side more and become a better-rounded full stack developer.</p>
                                                <p>These are my personal traits that can contribute to the success of your company:</p>
                                                <ul>
                                                    <li><strong>Customer-focused</strong>: I believe that doing what’s right for the customer is ultimately what will drive the business forward</li>
                                                    <li><strong>Pragmatic</strong>: I try my best to do things quickly to learn what the customers desire. I know when it’s appropriate to take shortcuts that don’t sacrifice quality or maintainability.</li>
                                                    <li><strong>Fast learner</strong>: I am willing to learn how to use new technologies and then rapidly apply them to new problems.</li>
                                                    <li><strong>Team player</strong>: I strongly believe that more can be achieved together. I listen to feedback to improve myself and also provide supportive feedback to help others grow.</li>
                                                    <li><strong>Obsessed with Quality</strong>: I always strive to make my production code work & scale linearly.</li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>

                        <div className="row row-pt-md">

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                <span className="icon">
                    <i className="icon-stack-2"/>
                </span>
                                    <div className="desc">
                                        <h3>Data Structures & Algorithms</h3>
                                        <p>As coming from the CS background, I have good grasp over fundamental concepts
                                            of DSA</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                <span className="icon">
                    <i className="icon-display2"/>
                </span>
                                    <div className="desc">
                                        <h3>Desktop Application Development </h3>
                                        <p>I have experience with JavaFX, WPF, and Windows Forms</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                <span className="icon">
                    <i className="icon-globe2"/>
                </span>
                                    <div className="desc">
                                        <h3>Web Development </h3>
                                        <p>I have experience building websites and web applications using various technology stacks such as Spring Boot, .NET Core, ASP.Net, PHP Laravel, React, and NodeJS</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-6">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                                    <div className="desc">
                                        <h3>Database Administration</h3>
                                        <p>I have experience planning, creating, modifying, and monitoring database using Microsoft SQL Server, MySQL, and Oracle</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                <span className="icon">
                    <i className="icon-infinity" />
                </span>
                                    <div className="desc">
                                        <h3>Dev Ops</h3>
                                        <p>I have experience with DevOps by working with tools like Azure Devops, Kuduscript, Travis-CI for my projects</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}