import React from "react";
import './../styles/App.css';

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {

    return (
        <div>

            {/* STEP 1 */}
            {step === 1 && (
                <>
                    <h3>Customer Details</h3>
                    <label htmlFor="first_name">First Name:</label>
                    <input
                        id="first_name"
                        placeholder="First Name"
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                    
                    <label htmlFor="last_name">Last Name:</label>
                    <input
                        id="last_name"
                        placeholder="Last Name"
                        value={formData.last_name}
                        onChange={handleChange}
                    />

                    <button onClick={nextStep}>Next</button>
                </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
                <>
                    <h3>Car Details</h3>
                    <label htmlFor="model">Model:</label>
                    <input
                        id="model"
                        placeholder="Car Model"
                        value={formData.model}
                        onChange={handleChange}
                    />
                    <label htmlFor="car_price">Price:</label>
                    <input
                        id="car_price"
                        placeholder="Car Price"
                        value={formData.car_price}
                        onChange={handleChange}
                    />

                    <button onClick={prevStep}>Previous</button>
                    <button onClick={nextStep}>Next</button>
                </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
                <>
                    <h3>Payment Details</h3>
                     <label htmlFor="card_info">Credit Card Number:</label>
                    <input
                        id="card_info"
                        placeholder="Card Info"
                        value={formData.card_info}
                        onChange={handleChange}
                    />
                    <label htmlFor="expiry_date">Expiration Date:</label>
                    <input
                        id="expiry_date"
                        placeholder="Expiry Date"
                        value={formData.expiry_date}
                        onChange={handleChange}
                    />

                    <button onClick={prevStep}>Previous</button>
                    <button onClick={handleSubmit}>Submit</button>
                </>
            )}

        </div>
    );
};

export default Step;