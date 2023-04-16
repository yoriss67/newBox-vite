import React, { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = React.useState('山田');

  function handleChange(event) {
    console.log(event.target.value);

    /**40
     * Challenge: update the firstName state on every keystroke
     */

    /**41
     * Challenge: Track the applicant's last name as well
     */
    setFirstName(event.target.value);

    // Step 1: Create a new element
    const newElement = document.createElement('p');

    // Step 2: Set the element properties
    newElement.innerHTML = firstName + ' ' + lastName;

    // Step 3: Add the element to the DOM
    document.body.appendChild(newElement);
}

// ---------------------------------
// 🌸
const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: ""
  });
  function handleFirstNameChange(event) {
    setFormData({...formData, firstName: event.target.value})
  }
  
  function handleLastNameChange(event) {
    setFormData({...formData, lastName: event.target.value})
  }
  
  // ---------------------------------

  

  return (
    <>
      <form>
        <input type="text" placeholder="First Name" onChange={handleChange} />
        <input type="text" placeholder="Last Name" onChange={handleChange} />
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
    </>
  );
}
