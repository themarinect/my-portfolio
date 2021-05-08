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
                                <h4><strong>Resource map for Greater Gwinnett Reentry Alliance</strong></h4>
                                <h5>A .NET Core Web App for our client, Greater Gwinnett Reentry Alliance, who facilitates formerly incarcerated people their successful reintegration into society.</h5>
                                <h5>My responsibilities:</h5>
                                <ul>
                                    <li><h6>Built backend portal with full CRUD for admins by using Entity Framework.</h6></li>
                                    <li><h6>Implemented front end in Javascript and Razor pages which dynamically created HTML from models and JSON response from our REST API and interfaced with Google Map API.</h6></li>
                                    <li><h6>Managed Microsoft Azure app configuration for building, testing, and deploying.</h6></li>
                                    <li><h6>Utilized Scrum to manage project’s sprints and backlogs and tracked in Jira.</h6></li>
                                    <li><h6>Assigned sprint objectives and creation and distribution of user stories.</h6></li>
                                </ul>
                            </div>
                        </Content>
                    </Backdrop>
                </Portal>
            )}
        </React.Fragment>
    );
}