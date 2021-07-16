import React, {useState} from 'react';

import WSIEModal from './modal/WSIE';
import GGRAModal from './modal/GGRA';
import EcomModal from './modal/Ecom';

export default function Projects() {

    const [isOpenWSIE, setIsOpenModalWSIE] = React.useState(false);
    const [isOpenGGRA, setIsOpenGGRA] = React.useState(false);
    const [isOpenEcom, setIsOpenEcom] = React.useState(false);

    const [isLocked, setIsLocked] = React.useState(true);
    const [isLockedOpen, setIsLockedOpen] = React.useState(false);

    return (
        <div>
            <section className="colorlib-work" data-section="projects">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                             data-animate-effect="fadeInLeft">
                            <span className="heading-meta">My Work</span>
                            <h2 className="colorlib-heading animate-box">Recent Projects</h2>
                        </div>
                    </div>
                    <div className="row">


                        <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                            <div className="project" style={{backgroundImage: 'url(images/wsie.png)'}}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="work.html">What Should I Eat?</a></h3>
                                        <br/>

                                        <span
                                            onClick={() => {setIsOpenModalWSIE(true);}}
                                        >
                                            <h6><a className='btn btn-success' style={{display: "block"}}>Details</a></h6>
                                        </span>

                                        <span>
                                            <h6><a className='btn btn-success' style={{display: "block"}} href='http://whattoeat-env.eba-2iyhmdzy.us-east-2.elasticbeanstalk.com/' target='_blank'>View demo</a></h6>
                                        </span>

                                        <WSIEModal
                                            onClose={() => {
                                                setIsOpenModalWSIE(false);
                                            }}
                                            open={isOpenWSIE}
                                        >
                                        </WSIEModal>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* GGRA Project */}
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                            <div className="project" style={{backgroundImage: 'url(images/ggra.png)'}}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a>GGRA Resources Map</a></h3>

                                        <br/>

                                        <span
                                            onClick={() => {setIsOpenGGRA(true);}}
                                        >
                                            <h6><a className='btn btn-success' style={{display: "block"}}>Details</a></h6>
                                        </span>

                                        <span>
                                            <h6><a className='btn btn-success' style={{display: "block"}} href='https://ggra-development.azurewebsites.net/larkMap.html' target='_blank'>View demo</a></h6>
                                        </span>

                                        <GGRAModal
                                            onClose={() => {
                                                setIsOpenGGRA(false);
                                            }}
                                            open={isOpenGGRA}
                                        >
                                        </GGRAModal>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ecommerce Project */}
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                            <div className="project" style={{backgroundImage: 'url(images/ecom.png)'}}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a>E-commerce Shop</a></h3>

                                        <br/>

                                        <span
                                            onClick={() => {setIsOpenEcom(true);}}
                                        >
                                            <h6><a className='btn btn-success' style={{display: "block"}}>Details</a></h6>
                                        </span>

                                        <span>
                                            <h6><a className='btn btn-success' style={{display: "block"}} href='https://laravel-ecom-webapp.herokuapp.com' target='_blank'>View demo</a></h6>
                                        </span>

                                        <span>
                                            <h6><a className='btn btn-success' style={{display: "block"}} href='https://laravel-ecom-webapp.herokuapp.com/admin' target='_blank'>View Admin demo</a></h6>
                                        </span>

                                        {/*<span>*/}
                                        {/*    <h6><a className='btn btn-success' style={{display: "block"}} href='' target='_blank'>View code</a></h6>*/}
                                        {/*</span>*/}

                                        <EcomModal
                                            onClose={() => {
                                                setIsOpenEcom(false);
                                            }}
                                            open={isOpenEcom}
                                        >
                                        </EcomModal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<div className="row">*/}
                    {/*    <div className="col-md-12 animate-box">*/}
                    {/*        <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i*/}
                    {/*            className="icon-reload"/></a></p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </section>
        </div>
    );
}