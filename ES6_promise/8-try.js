export default function divideFunction(numerator, denominator) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (denominator === 0) {
        reject(new Error('cannot divide by 0'));
      } else {
        resolve(numerator / denominator);
      }
    }, 1000);
  });
}