import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CreatePool() {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <div className="create-pool">
                <div className="create-pool-header">
                    CREATE POOL
                </div>

                <div className="centering">
                    <div className="create-pool-title">
                        MATCH
                    </div>
                </div>
                <div className="centering">
                    <select name="cars" id="cars">
                        <option value="volvo">Qatar vs Ecuador</option>
                        <option value="saab">England vs IR Iran</option>
                        <option value="mercedes">Argentina vs Mexico</option>
                        <option value="audi">France vs Denmark</option>
                    </select>
                </div>

                <div className="centering">
                    <div className="create-pool-title">
                        RATIO
                    </div>
                </div>

                <div className="match-card-bottom d-flex align-items-center justify-content-around">
                    <div className="match-card-result d-flex flex-column">
                        <div className="match-card-text">
                            Win
                        </div>
                        <div className="match-card-num">
                            00
                        </div>
                    </div>

                    <div className="match-card-result d-flex flex-column">
                        <div className="match-card-text">
                            Win
                        </div>
                        <div className="match-card-num">
                            00
                        </div>
                    </div>

                    <div className="match-card-result d-flex flex-column">
                        <div className="match-card-text">
                            Win
                        </div>
                        <div className="match-card-num">
                            00
                        </div>
                    </div>
                </div>

            </div>
        </Modal>
    )
}
