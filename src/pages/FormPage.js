import { Checkbox } from '@mui/material';
import React, { useState } from 'react'
import { NavCheckout } from '../components/NavbarCheckout';
import './FormPage.css'

export const FormCheck = () => {
  const [answer, setAnswer] = useState(false);
  return (
    <Checkbox
      label="Agree"
      value={answer}
      onChange={(e) => setAnswer(true)}
    />
  )
} 

function FormPage() {
  const [laundry, setLaundry] = useState('Laundry')
  const [dryClean, setDryClean] = useState('Dry Cleaning');
  const [checked, setChecked] = useState(false);

  const handleLaundry = () => {
    setLaundry(!checked);
  }

  const handleDryClean = () => {
    setDryClean(!checked);
  }
  

  return (
    <div className='form-section'>
      <NavCheckout />
        <div className="form">
            <h1>Request Services</h1>
            <form>
                <label>
                    <h4>Are you located in the San Francisco Bay area?</h4>
                    
                    <select>
                        <option value="no">no</option>
                        <option value="yes">yes</option>
                    </select>
                </label>

                <h4>Which service do you need?</h4>
                <label>
                    <label>Laundry
                    <Checkbox
                    value={laundry}
                    onChange={handleLaundry}/>
                    </label>

                    <label>Dry Cleaning
                    <Checkbox label="dry clean" 
                    value={dryClean}
                    onChange={handleDryClean}/>
                    </label>
                </label>
            </form>
        </div>
    </div>
  )
}

export default FormPage