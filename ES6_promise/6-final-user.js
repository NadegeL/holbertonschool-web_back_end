import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup ( firstName, lastName, fileName) {
    return Promise.all([
        uploadPhoto ('photo.jpg'),
        signUpUser ('Bob', 'Dylan')
    ])
    .then(([photoResult, userResult]) => {
        console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
      })
      .catch(error => {
        console.log('Signup system offline');
      });
    }