import React from "react";
import './../styles/App.css';

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {

    return (
        <form className="form-box" onSubmit={(e) => e.preventDefault()}>

            {/* STEP 1 */}
            {step === 1 && (
                <div id="step1">
                    <h3>Customer Details</h3>

                    <label htmlFor="first_name">First Name:</label>
                    <input
                        id="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                    />

                    <label htmlFor="last_name">Last Name:</label>
                    <input
                        id="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                    />

                    <button type="button" onClick={nextStep}>Next</button>
                </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
                <div id="step2">
                    <h3>Car Details</h3>

                    <label htmlFor="model">Model:</label>
                    <input
                        id="model"
                        value={formData.model}
                        onChange={handleChange}
                    />

                    <label htmlFor="car_price">Price:</label>
                    <input
                        id="car_price"
                        value={formData.car_price}
                        onChange={handleChange}
                    />

                    <button type="button" onClick={prevStep}>Previous</button>
                    <button type="button" onClick={nextStep}>Next</button>
                </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
                <div id="step3">
                    <h3>Payment Details</h3>

                    <label htmlFor="card_info">Card Info:</label>
                    <input
                        id="card_info"
                        value={formData.card_info}
                        onChange={handleChange}
                    />

                    <label htmlFor="expiry_date">Expiry Date:</label>
                    <input
                        id="expiry_date"
                        value={formData.expiry_date}
                        onChange={handleChange}
                    />

                    <button type="button" onClick={prevStep}>Previous</button>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            )}

        </form>
    );
};

export default Step;