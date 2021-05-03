import React, { Component } from 'react';

export default class About extends Component{
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
                                                <p><h2>Hi there! My name is Khang Ho. I am a future software engineer based in Atlanta, GA.</h2></p>
                                                <p><h2>I have recently graduated from Georgia Gwinnett College with Information Technology as my
                                                    major with the concentration of Software Development.</h2></p>
                                                <p><h2>I specialize in backend web development using various technology stacks such as
                                                Spring Boot, .NET Core, ASP.Net, PHP Laravel, and NodeJS. I have also been exposed to desktop application development environments such as JavaFX, WPF, and Windows Forms. I am striving to become a good software engineer by constantly familiarizing myself with trending and current technologies.</h2></p>
                                                <p><h2>I love exploring new technologies and often amazed by the progress
                                                we as a human species have made so far in the technology world.
                                                    In the following years, I also plan to explore the frontend side more and become a better-rounded full stack developer.</h2></p>
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
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>

                        <div className="row row-pt-md">

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                <span className="icon">
                    <i className="icon-home" />
                </span>
                                    <div className="desc">
                                        <h3>Data Structures & Algorithms</h3>
                                        <h4><p>As coming from the Computer Science background, I have good grasp over the fundamental concepts of DS&A</p></h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                <span className="icon">
                    <i className="icon-globe2" />
                </span>
                                    <div className="desc">
                                        <h3>Web Development </h3>
                                        <h4><p>I have experience building websites and web applications using various technology stacks such as Spring Boot, .NET Core, ASP.Net, PHP Laravel, and NodeJS</p></h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                <span className="icon">
                    <i className="icon-monitor" />
                </span>
                                    <div className="desc">
                                        <h3>Desktop Application Development </h3>
                                        <h4><p>I have experience building stacks such as JavaFX, WPF, and Windows Forms</p></h4>
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
                                        <h4><p>I have experience planning, creating, modifying, and monitoring database using Microsoft SQL Server, MySQL, Oracle</p></h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                <span className="icon">
                    <i className="icon-cloud3" />
                </span>
                                    <div className="desc">
                                        <h3>Cloud Computing</h3>
                                        <h4><p>I am familiar with the fundamental cloud concepts for Azure and AWS.</p></h4>
                                    </div>
                                </div>
                            </div>

                            {/*            <div className="col-md-4 text-center animate-box">*/}
                            {/*                <div className="services color-5">*/}
                            {/*<span className="icon">*/}
                            {/*    <i className="icon-layers2" />*/}
                            {/*</span>*/}
                            {/*                    <div className="desc">*/}
                            {/*                        <h3>Dev Ops</h3>*/}
                            {/*                        <h4><p>I have experience working DevOps tools like Jenkins, Docker, K8s</p></h4>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}