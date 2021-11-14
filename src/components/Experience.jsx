import React, {Component} from 'react';

export default class Experience extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
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
                                                <i className="icon-briefcase"/>
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Associate Software Engineer
                                                    &emsp;<span>Full time</span>
                                                    <span className="date">August 2021 - present</span>
                                                </h2>
                                                <strong><p>Stack Sports &#183; Atlanta, GA</p></strong>
                                                <p>
                                                    <ul>
                                                        <li>Build out Angular frontend apps about league management solution for sports used by over 20,000 clubs and leagues</li>
                                                        <li>Develop and maintain APIs using C#/.NET Core and SQL server on the backend hosted on a remote AWS cloud server</li>
                                                        <li>Help refactoring monolith legacy code to assist in trasition to a microservices-based architecture</li>
                                                        <li>Collaborate with peers on grooming sessions, sprint technical planning discussions, and code reviews with Agile methodology</li>
                                                        <li>Solve problems and deliver products and solutions that help fulfill the company's vision</li>
                                                    </ul>
                                                </p>
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
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">

                                    {/*<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-briefcase" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>CVS Pharmacy
                                                    &emsp;<span>Lawrenceville, GA</span>
                                                    <span className="date">January 2015 - August 2019</span>
                                                </h2>
                                                <strong><p>Pharmacy Technician</p></strong>
                                                <p>I worked as a part-time pharmacy technician at CVS Pharmacy in Buford, GA for 3 years. My responsibilities included
                                                    supporting pharmacists to fill prescriptions, pharmacy claims adjudication, and inventory management.</p>
                                            </div>
                                        </div>
                                    </article>*/}

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