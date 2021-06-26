import React, {Component} from 'react';

export default class Sidebar extends Component{
    render() {
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse"
                         data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i/></nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}}/>
                            <h1 id="colorlib-logo"><a href="index.html">Khang Ho</a></h1>
                            <span className="email"><i className="icon-mail"></i> <h3>themarinect@gmail.com</h3></span>
                            <span className="phone"><i className="icon-phone3"></i> <h3>678-267-6578</h3></span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                                    <li><a href="#about" data-nav-section="about">About Me</a></li>
                                    <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                                    <li><a href="#experience" data-nav-section="experience">Work Experience</a></li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu">
                            <ul>
                                <li><a href="https://www.linkedin.com/in/khang-ho-193246131/" target="_blank"
                                       rel="noopener noreferrer"><i className="icon-linkedin2"/></a></li>
                                <li><a href="https://github.com/themarinect" target="_blank" rel="noopener noreferrer"><i
                                    className="icon-github"></i></a></li>
                            </ul>
                        </nav>
                        <div className="colorlib-footer">
                        </div>
                    </aside>
                </div>
            </div>
        );
    }
}