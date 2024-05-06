import axios from '../../axios';

export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  localStorage.setItem('token', token);
  console.log("----Token from Session",token)
  return {
    type: 'SET_TOKEN',
    token
  };
};

export const setActiveDevice = id => {
  axios.put('/me/player', { device_ids: [id], play: false });
  console.log("---Set Device",id)
  return { type: 'SET_DEVICE' };
};

export const setDeviceId = id => {
  return {
    type: 'SET_DEVICE_ID',
    id
  };
};
