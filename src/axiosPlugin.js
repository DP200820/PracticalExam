import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    return response
  })
  .catch(function (error) {
    // handle error
    return false; 
  })
  .then(function () {
    // always executed
  });

export default axios;