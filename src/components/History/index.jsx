import React, { useEffect, useState } from 'react'
import './History.scss'

export default function History() {


    return (
        <div className="history primary-block">
            <div className="history-title title">
                History
            </div>
            <div className="history-wrapper">
                <table className="primary-table">
                    <tbody>
                        <tr className="primary-btn-bg">
                            <th>
                                Reward
                            </th>
                            <th>
                                From
                            </th>
                            <th>
                                Date
                            </th>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
