import React from 'react'
import "./Ticket.css"
import { useParams } from 'react-router-dom'
const Ticket = () => {
    const {id} = useParams();
    return (
        <div className="ticket-container">
            <label>Pick a ticket for: </label>
            <select id="ticket">
                <option value="250">{id}</option>
            </select>
            <div className="input">
            <label htmlFor="name">Username: </label>
            <input type="text" id='name' />
            </div>

            <div className="input">
            <label htmlFor="number">Mobile Number: </label>
            <input type="number" id='number' />
            </div>

            <ul className="showcase">
                <li>
                    <div className="seat"></div>
                    <small>N/A</small>
                </li>
                <li>
                    <div className="seat selected"></div>
                    <small>Selected</small>
                </li>
                <li>
                    <div className="seat occupied"></div>
                    <small>Occupied</small>
                </li>
            </ul>

            <div className="containers">
                <div className="screen"></div>

                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                </div>
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat"></div>
                </div>

                <p className="ticket-text">
                    You have selected <span id="count">0</span> seats for the total price of Rs. <span id="total">0</span>
                </p>
            </div>
            <button className='btn bg-primary'>Confirm</button>
        </div>
    )
}

export default Ticket
