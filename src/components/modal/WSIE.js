import React from 'react';
import 'wicg-inert';

import { Backdrop, Content } from "../styled-constants";
import Portal from '../portal/portal_index';

export default function Modal(props) {
    const [active, setActive] = React.useState(false);
    const {open, onClose, locked} = props;
    const backdrop = React.useRef(null);

    React.useEffect(() => {
        const {current} = backdrop;

        const transitionEnd = () => setActive(open);

        const keyHandler = e => !locked && [27].indexOf(e.which) >= 0 && onClose();

        const clickHandler = e => !locked && e.target === current && onClose();

        if (current) {
            current.addEventListener("transitionend", transitionEnd);
            current.addEventListener("click", clickHandler);
            window.addEventListener("keyup", keyHandler);
        }

        if (open) {
            window.setTimeout(() => {
                document.activeElement.blur();
                setActive(open);
                document.querySelector("#root").setAttribute("inert", "true");
            }, 10);
        }

        return () => {
            if (current) {
                current.removeEventListener("transitionend", transitionEnd);
                current.removeEventListener("click", clickHandler);
            }

            document.querySelector("#root").removeAttribute("inert");
            window.removeEventListener("keyup", keyHandler);
        };
    }, [open, locked, onClose]);

    return (
        <React.Fragment>
            {(open || active) && (
                <Portal className="modal-portal">
                    <Backdrop ref={backdrop} className={active && open && "active"}>
                        {/*<Content className="modal-content">{props.children}</Content>*/}
                        <Content className="modal-content">
                            <div className='modal-body'>
                                <h4><strong>What Should I Eat?</strong></h4>
                                <h5>A Java Spring App built on RESTful architecture that allows users to apply personal preferences to 100s of foods in MySQL database hosted on AWS.</h5>
                                <h5>My responsibilities:</h5>
                                <ul>
                                    <li><h6>Built backend portal with full CRUD for admins.</h6></li>
                                    <li><h6>Implemented role-based authentication and authorization by using Spring Boot Security.</h6></li>
                                    <li><h6>Built REST API and JPA-based repositories by using Spring Data JPA to store and retrieve data in a relational database.</h6></li>
                                    <li><h6>Utilized Scrum to manage project’s sprints and backlogs and tracked in Jira.</h6></li>
                                    <li><h6>Assigned sprint objectives and creation and distribution of user stories.</h6></li>
                                </ul>
                            </div>

                            <div className="modal-footer gallery">
                                <a target='_blank' href={'images/wsie_meals.png'}>
                                    <img src={'images/wsie_meals.png'}/>
                                </a>
                                <div className="desc">Meals</div>
                            </div>

                            <div className="modal-footer gallery">
                                <a target='_blank' href={'images/wsie_ingredients.png'}>
                                    <img src={'images/wsie_ingredients.png'}/>
                                </a>
                                <div className="desc">Ingredients</div>
                            </div>

                            <div className="modal-footer gallery">
                                <a target='_blank' href={'images/wsie_pref1.png'}>
                                    <img src={'images/wsie_pref1.png'}/>
                                </a>
                                <div className="desc">Meals Preferences</div>
                            </div>

                            <div className="modal-footer gallery">
                                <a target='_blank' href={'images/wsie_pref2.png'}>
                                    <img src={'images/wsie_pref2.png'}/>
                                </a>
                                <div className="desc">Ingredients Preferences</div>
                            </div>
                        </Content>
                    </Backdrop>
                </Portal>
            )}
        </React.Fragment>
    );
}