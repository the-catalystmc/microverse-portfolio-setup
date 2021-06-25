const form = document.querySelector('form');

export const saveUserData = () => {
  console.log("he")
  const data = {
    userName: form.user_name.value,
    userEmail: form.user_email.value,
    userText: form.user_message.value,
  };
  return data;
}

export const loadUserData = () => {

}

export const isDataSaved = () => {

}