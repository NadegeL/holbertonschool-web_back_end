export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve('Success!');
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}
