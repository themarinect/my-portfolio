import React, { Component } from 'react';

export default class Experience extends Component{
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">highlights</span>
                                <h2 className="colorlib-heading animate-box">Work Experience</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">

                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-briefcase" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Pharmacy Technician at CVS Pharmacy <span>Jan 2015 - August 2019</span></h2>
                                                <p><h3>I worked as a part-time pharmacy technician at CVS Pharmacy in Buford, GA for 3 years. It was my first job in the US. My responsibilities included
                                                    supporting pharmacists to fill prescriptions, pharmacy claims adjudication, and inventory management.</h3></p>
                                            </div>
                                        </div>
                                    </article>

                                    {/*<article className="timeline-entry animate-box" data-animate-effect="fadeInTop">*/}
                                    {/*    <div className="timeline-entry-inner">*/}
                                    {/*        <div className="timeline-icon color-4">*/}
                                    {/*            <i className="icon-pen2" />*/}
                                    {/*        </div>*/}
                                    {/*        <div className="timeline-label">*/}
                                    {/*            <h2>Undergraduation at DAIICT<span>2015-2019</span></h2>*/}
                                    {/*            <p>I am pursuing my under-graduation studies with major in I.C.T.(Information & Communication Technology). I have taken courses like DSA, OOPs, Computer Networks, IOT, Web-Data Management over the years and have better understanding of these subjects.I have also been part of S.B.G.(Student Body Govenance) scince my first year of college.</p>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</article>*/}


                                    <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-none">
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}