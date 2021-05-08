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
                                                <p>Manager Takisha Miles 770.962.6117</p>
                                                <p>I worked as a part-time pharmacy technician at CVS Pharmacy in Buford, GA for 3 years. My responsibilities included
                                                    supporting pharmacists to fill prescriptions, pharmacy claims adjudication, and inventory management.</p>
                                            </div>
                                        </div>
                                    </article>

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