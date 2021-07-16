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
                                <h4><strong>E-commerce website</strong></h4>
                                <h5>An e-commerce web app written in PHP with Laravel framework</h5>
                                <h5>My responsibilities:</h5>
                                <ul>
                                    <li><h6>Implemented role-based registration, authentication, and authorization.</h6></li>
                                    <li><h6>Integrated a custom shopping cart.</h6></li>
                                    <li><h6>Integrated products, categories, and users management.</h6></li>
                                    <li><h6>Created admin portal for full CRUD and reports generation.</h6></li>
                                    <li><h6>Utilized Waterfall methodology to manage project and Github to share code.</h6></li>
                                </ul>
                            </div>

                            <div className="modal-footer gallery">
                                <a target='_blank' href={'images/admin_add_cat.JPG'}>
                                    <img src={'images/admin_add_cat.JPG'}/>
                                </a>
                                <div className="desc">Add Category</div>
                            </div>

                            <div className="modal-footer gallery">
                                <a target='_blank' href={'images/admin_cat_list.JPG'}>
                                    <img src={'images/admin_cat_list.JPG'}/>
                                </a>
                                <div className="desc">Category List</div>
                            </div>

                            <div className="modal-footer gallery">
                                <a target='_blank' href={'images/admin_add_pro.JPG'}>
                                    <img src={'images/admin_add_pro.JPG'}/>
                                </a>
                                <div className="desc">Add Product</div>
                            </div>

                            <div className="modal-footer gallery">
                                <a target='_blank' href={'images/admin_pro_list.JPG'}>
                                    <img src={'images/admin_pro_list.JPG'}/>
                                </a>
                                <div className="desc">Product List</div>
                            </div>

                            <div className="modal-footer gallery">
                                <a target='_blank' href={'images/admin_add_cou.JPG'}>
                                    <img src={'images/admin_add_cou.JPG'}/>
                                </a>
                                <div className="desc">Add Coupon</div>
                            </div>

                        </Content>
                    </Backdrop>
                </Portal>
            )}
        </React.Fragment>
    );
}