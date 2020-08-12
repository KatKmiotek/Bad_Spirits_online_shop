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

    <div className="pad-top">
      <h1 className="title">Thanks for your purchase!</h1>
      <p className="pad-top-btm">Please check your email to track shipping</p>

      <Link to="/home"><button className="button">Back to Home</button></Link>
    </div>
    </Fragment>
  )
}

export default Confirmation;
