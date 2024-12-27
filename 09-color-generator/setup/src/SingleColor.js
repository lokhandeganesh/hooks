import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');

  // const notify = () => toast.success("copied to clipboard !", {
  //   position: "top-center",
  //   autoClose: 3000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   theme: "light",
  // });

  // You can get hex color by implementing function to convert rgb values to hex
  const hex = rgbToHex(...rgb);

  // Or inbuilt functionality available with values.js
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => { setAlert(false) }, 3000);
    return () => clearTimeout(timeout);
  }, [alert])

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        // Copy to clipboard
        navigator.clipboard.writeText(hexValue);
        // Show toast
        // notify();
      }}
    >
      <p className='percent-value'>{weight}%</p>

      {/* <p className='color-value'>{hex}</p> */}
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
      {/* <ToastContainer /> */}
    </article>
  )
}

export default SingleColor
