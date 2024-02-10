import { useState, useEffect } from "react";
import { useEth } from "./contexts/useEth";

import './componetes/createContracts.css'

export default function AddEmployee({setEmployees, setContracts}) {

  return (
    <div className="mainContainer">
        <h3>Create Contract</h3>
        <div className="addEmployeeForm">
            <form>
                <label htmlFor="en">Employee Name</label>
                <input id="en" type="text" placeholder="Employee Name" />
                <label htmlFor="ead">Employee Address</label>
                <input id="ead" type="text" placeholder="Employee Address" />
                <label htmlFor="lt">Latitude</label>
                <input id="lt" type="number" step="any" placeholder="Latitude" />
                <label htmlFor="ln">Longitude</label>
                <input id="ln" type="number" step="any" placeholder="Longitude" />
                <label htmlFor="rd">Radius In Meters</label>
                <input id="rd" type="number" step="any" placeholder="Radius" />
                <div className="submitbtn">
                    <input  type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    </div>
  )
}




