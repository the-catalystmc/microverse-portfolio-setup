const formData = document.querySelector('form');

export const saveInputData = () => {
  const data = {
    saveName: formData.user_name.value,
    saveMail: formData.user_email.value,
    saveText: formData.user_message.value,
  };
  localStorage.setItem('userForm', JSON.stringify(data));
};

export const loadInputData = () => {
  if (localStorage.getItem('userForm') !== null) {
    const loadedData = JSON.parse(localStorage.getItem('userForm'));
    formData.user_name.value = loadedData.saveName;
    formData.user_email.value = loadedData.saveMail;
    formData.user_message.value = loadedData.saveText;
  } else {
    formData.user_name.value = '';
    formData.user_email.value = '';
    formData.user_message.value = '';
  }
};
