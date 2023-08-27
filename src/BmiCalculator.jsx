import React, { useState } from 'react'
import './bmiCalculator.css'

const BmiCalculator = () => {

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('')
    const [bmi, setBmi] = useState('');
    const [bmiMessage, setBmiMessage] = useState('');

    const calculateBmi = (e) => {
        e.preventDefault();
        if (height && weight) {
            let bmiValue = (weight / ((height * height)
                / 10000)).toFixed(2);
            setBmi(bmiValue)
            let message = ''
            if (bmiValue < 18.5) {
                message = `BMI Value: ${bmiValue} and You are Underweight`;


            } else if (bmiValue >= 18.5 && bmiValue < 25) {
                message = `BMI Value: ${bmiValue} and You are Normal`;

            } else if (bmiValue >= 25 && bmiValue < 30) {
                message = `BMI Value: ${bmiValue} and You are OverWeight`;

            } else {
                message = `BMI Value: ${bmiValue} and You are obessed`;
            }
            setBmiMessage(message)
        }
        else {
            setBmi('');
            setBmiMessage('')
        }
    }
    return (
        <div className='bmi-calc'>
            <h1>BMI -CALCULATOR</h1>
            <div className="main">
                <div className="height-input">
                    <label htmlFor="">Height (In cm)</label>
                    <input type="number" name='height' value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div className="weight-input">
                    <label htmlFor="">Weight (in Kg)</label>
                    <input type="number" name='weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <button onClick={calculateBmi}>Calculate</button>
                {
                    bmi && bmiMessage && (
                        <div className="result">
                            <span>{bmiMessage}</span>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default BmiCalculator