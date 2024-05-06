import axios from '../../axios';

const fetchUserSuccess = user => {
  return {
    type: 'FETCH_USER_SUCCESS',
    user
  };
};

const fetchUserError = () => {
  return {
    type: 'FETCH_USER_ERROR'
  };
};


// export async function getProfile(accessToken) {

//   const response = await fetch('https://api.spotify.com/v1/me', {
//     headers: {
//       Authorization: 'Bearer ' + accessToken
//     }
//   });

//   const data = await response.json();
//   console.log("00--00",data)
// }

export async function getProfile(accessToken) {

  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });

  const data = await response.json();
  console.log("----",data)
  return data
}


// export const getProfile = (accessToken) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch('https://api.spotify.com/v1/me', {
//         headers: {
//           Authorization: 'Bearer ' + accessToken
//         }
//       });
      
//       const data = await response.json();
//       console.log("00--00", data);

//       // Dispatch an action with the retrieved profile data
//       dispatch({
//         type: 'FETCH_PROFILE_SUCCESS',
//         profile: data
//       });

//       return data; // Optionally return the profile data
//     } catch (error) {
//       console.error("Error fetching profile:", error);

//       // Dispatch an action for error handling
//       dispatch({
//         type: 'FETCH_PROFILE_ERROR',
//         error: error.message // Optionally pass the error message
//       });

//       throw error; // Rethrow the error to propagate it to the caller
//     }
//   };
// };



// export async function getProfile(accessToken) {

//   const response = await fetch('https://api.spotify.com/v1/me', {
//     headers: {
//       Authorization: 'Bearer ' + accessToken
//     }
//   });

//   const data = await response.json();
//  // dispatch(fetchUserSuccess(data));

//   return async (dispatch) => {
//     try {
//       console.log("Fetching user profile...");
//       const response = await fetch('https://api.spotify.com/v1/me', {
//         headers: {
//           Authorization: 'Bearer ' + accessToken
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch user profile');
//       }

//       const data = await response.json();
//       console.log("User profile data:", data);
//       dispatch(fetchUserSuccess(data));
//     } catch (error) {
//       console.error("Error fetching user profile:", error);
//       dispatch(fetchUserError());
//       return error;
//     }
//   };
// };
