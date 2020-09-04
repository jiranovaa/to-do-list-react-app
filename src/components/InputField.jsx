import React from 'react';



const InputField = ({ onButtonSubmit, onInputChange }) => {
    return (
        <div>
            <form onSubmit={onButtonSubmit}>
                <input 
                    onChange={onInputChange}
                    type='text'
                    placeholder='Add a new TO DO'
                />
                <input type='submit' value='Add' />
            </form>
            
        </div>
    )
}

export default InputField;