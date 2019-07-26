import React from 'react'
import PropTypes from 'prop-types';
import './style.css';

const Location = ({ city }) => ( // se hace el destruturing directamente sin usar una variable de intermediario   
    //const city = props.city;
    <div className="LocationCont">
        <h1>
            { city }
        </h1>
    </div>
);

Location.propType = {
    city: PropTypes.string.isRequired,
}

export default Location;