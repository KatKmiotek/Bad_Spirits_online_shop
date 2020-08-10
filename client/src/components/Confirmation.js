import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Confirmation = () => {

  return(

    <Fragment>
      <h2>Thanks for your purchase!</h2>
      <p>Please check your email to track shipping</p>
      <Link to="/products">Back to Home</Link>
    </Fragment>
  )
}

export default Confirmation;
