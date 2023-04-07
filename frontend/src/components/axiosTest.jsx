import React from 'react'
import axios from 'axios';

function axiosTest(url) {
    axios.get(url)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  return (
    <div>axiosTest</div>
  )
}

export default axiosTest