import React, { useState } from 'react'
import './CreatePool.scss'

import Modal from 'react-bootstrap/Modal';

export default function CreatePool({show, setShow}) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Modal show={show} onHide={handleClose} animation={false} centered>
            <div className="create-pool">
                <div className="create-pool-header">
                    CREATE POOL
                </div>

                <div className="centering">
                    <div className="create-pool-title text-center">
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
                    <div className="create-pool-title text-center">
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

                <div className="grid grid-2 grid-m-1">
                    <div className="create-pool-block d-flex align-items-center">
                        <div className="create-pool-title">
                            MIN POOL
                        </div>

                        <input type="text" />
                    </div>

                    <div className="create-pool-block d-flex align-items-center">
                        <div className="create-pool-title">
                        MAX POOL 
                        </div>

                        <input type="text" />
                    </div>
                </div>

                <div className="create-pool-block d-flex align-items-center">
                    <div className="create-pool-title">
                       SIZE POOL
                    </div>

                    <input type="text" />
                </div>

                <div className="create-pool-block d-flex align-items-center">
                    <div className="create-pool-title">
                       PASS POOL
                    </div>

                    <input type="text" />
                </div>

                <div className="centering mt-4">
                    <div className="betting-button">
                        Create
                    </div>
                </div>
            </div>
        </Modal>
    )
}
