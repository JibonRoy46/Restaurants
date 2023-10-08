import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = () => {
    return (
        <div className='col-12' style={{ color: "black", padding: "60px" }}>
            <span className="fa fa-spinner fa-5x text-primary fa-rw fa-pulse"></span>
        </div>
    )
}
export default Loading; 