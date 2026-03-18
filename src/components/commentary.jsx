import React from 'react';

const Commentary = ({ message }) => {
    return (
        <div className="commentary-box">
            <p><em>{message}</em></p>
        </div>
    );
};

export default Commentary;