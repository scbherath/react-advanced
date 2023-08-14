import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <ClipLoader loading={true} size={50} />
    )
};

export default Spinner;