import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import './Locate.css'

const Locate = () => {
  const [locations, setLocations] = useState([
    {
      'ID': 1,
      'Name': 'Location A',
      'Address 1': '123 Main St',
      'Address 2': 'Suite 456',
      'Accepted Recyclables': 'Plastic, Paper',
      'Created By': 'User123',
    },
    {
      'ID': 2,
      'Name': 'Location B',
      'Address 1': '456 Elm St',
      'Address 2': '',
      'Accepted Recyclables': 'Glass, Aluminum',
      'Created By': 'User456',
    },
    // Add more sample locations as needed
  ]);
  const [showSubmitWindow, setShowSubmitWindow] = useState(false) // State to control the submit window

  // useEffect(() => {
  //   // Fetch data from /locations endpoint
  //   fetch('/locations')
  //     .then(response => response.json())
  //     .then(data => setLocations(data))
  //     .catch(error => console.error('Error fetching data:', error))
  // }, [])

  const initialValues = {
    name: '',
    location: '',
  }

  const onSubmit = values => {
    // Handle form submission here
    console.log(values)
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
  })

  const openSubmitWindow = () => {
    setShowSubmitWindow(true)
  }

  return (
    <div>
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            name="name"
            placeholder="Search by name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Search by location"
            value={formik.values.location}
            onChange={formik.handleChange}
          />
          <button type="submit" onClick={formik.handleSubmit}>
            Search
          </button>
          <button className="add-button" onClick={openSubmitWindow}>
            +
          </button>
        </div>
      </div>
      <div className="card-container">
        {locations && locations.map(location => (
          <div key={location.ID} className="location-card">
            <h3>{location.Name}</h3>
            <p>{location['Address 1']}</p>
            <p>{location['Address 2']}</p>
            <p>{location['Accepted Recyclables']}</p>
            <p>{location['Created By']}</p>
          </div>
        ))}
      </div>
      {showSubmitWindow && (
        <div className="submit-location-window">
          {/* Add your submit location form here */}
        </div>
      )}
    </div>
  )
}

export default Locate