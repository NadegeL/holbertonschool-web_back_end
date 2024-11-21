export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        if (firstName && lastName) {
          resolve({ firstName, lastName });
        } else {
          reject(new Error('Missing first name or last name'));
        }
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}
