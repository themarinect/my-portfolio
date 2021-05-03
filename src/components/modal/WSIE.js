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
                                <h4>What Should I Eat?</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Alias culpa cum facilis iste iure pariatur qui ratione reprehenderit tempora
                                    temporibus.</p>
                                <p>My responsibilities:</p>
                                <ul>
                                    <li>Developed Java Spring Boot Web App build on RESTful architecture that allows users to see recipes based on personal preferences of more than 100s of foods and ingredients in MySQL database</li>
                                    <li>Implemented role-based authentication and authorization by using Spring Boot Security</li>
                                    <li>Built REST API and JPA based repositories by using Spring Data JPA to store and retrieve data in a relational database</li>
                                    <li>Created Admin portal for admin users to perform CRUD operations by using object models, Thymeleaf and Bootstrap</li>
                                    <li>Utilized Scrum to manage project’s sprints and backlogs and tracked in Jira</li>
                                </ul>
                            </div>
                        </Content>
                    </Backdrop>
                </Portal>
            )}
        </React.Fragment>
    );
}