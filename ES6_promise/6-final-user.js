import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup() {
  return Promise.all([
    uploadPhoto('photo.jpg'),
    signUpUser('Bob', 'Dylan'),
  ])
    .then(([photoResult, userResult]) => {
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
