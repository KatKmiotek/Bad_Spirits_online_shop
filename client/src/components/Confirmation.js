import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Confirmation = () => {
const { width, height } = useWindowSize();
  return(

    <Fragment>
    <Confetti
      width={width}
      height={height}
    />
      <h2>Thanks for your purchase!</h2>
      <p>Please check your email to track shipping</p>
      
      <Link to="/home"><button className="button">Back to Home</button></Link>
    </Fragment>
  )
}

export default Confirmation;
