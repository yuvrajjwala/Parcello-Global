import React from 'react'
import './GetQouteForm.css'
import location from '../../assets/Home/location.svg'
import downArrow from '../../assets/Home/downArrow.svg'
import to from '../../assets/Home/to.svg'
import calendar from '../../assets/Home/calendar.svg'


const GetQouteForm = () => {
  return (
    <div className='getQouteForm'>
      <div >
         <span className='tryCalculatorHeading'>Try our shipping calculator</span>
      </div>
      <div className='formGetQoute'>
         <div className='form-field'>
            <div className='form-field-container'>
            <img src={location}></img>
            <div>
               <h2>From</h2>
               <p>London</p>
            </div>
            </div>
            <div className='downArrow'>
               <img src={downArrow}></img>
            </div>
         </div>
         <div className='form-field'>
            <div className='form-field-container'>
            <img src={to}></img>
            <div>
               <h2>Select</h2>
               <p>Country</p>
            </div>
            </div>
            <div className='downArrow'>
               <img src={downArrow}></img>
            </div>
         </div>
         <div className='form-field'>
            <div className='form-field-container'>
            <img src={calendar}></img>
            <div>
               <h2>Weight?</h2>
               <input></input><span>IB</span>
            </div>
            </div>
           
         </div>
         <div className='get-qoute'>
            <button>Get Qoute</button>
         </div>
      </div>
    </div>
  )
}

export default GetQouteForm