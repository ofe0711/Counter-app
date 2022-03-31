import React, { useState } from 'react';

function Name({value}) {
    const [name, setName] = useState({ firstName: "", lastName: ""})
    console.log(value)
    return (
      
    <form>
        <h2>Please enter your name</h2>
        <p>{value}</p>
        <input type="text" 
        value={name.firstName} 
        onChange={ e => setName({...name, firstName: e.target.value}) } 
        required/>
        <input type="text" 
        value={name.lastName} 
        onChange={ e => setName({...name, lastName: e.target.value}) }
        required/>
        <h2>Hello {name.firstName}  {name.lastName}, start the counter</h2>
    </form> 
  );
}

export default Name;
