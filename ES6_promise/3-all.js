import { uploadPhoto, createUser } from './utils';

async function handleUserAndPhoto() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`body: ${photo.body} | ${user.firstName} ${user.lastName}`);
  }
  catch (error) {
    console.error('An error occurred:', error);
  }
}

handleUserAndPhoto();
