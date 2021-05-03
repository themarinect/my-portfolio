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
                                <h4>GGRA Modal</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Alias culpa cum facilis iste iure pariatur qui ratione reprehenderit tempora
                                    temporibus.</p>
                                <p>My responsibilities:</p>
                                <ul>
                                    <li>Utilizing Spring Boot</li>
                                    <li>Using Github</li>
                                    <li>Tracking project using Jira</li>
                                </ul>
                            </div>
                        </Content>
                    </Backdrop>
                </Portal>
            )}
        </React.Fragment>
    );
}