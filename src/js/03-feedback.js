import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state"
const form = document.querySelector('.feedback-form')
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

populateInput() 

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(evt){
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function onFormSubmit(evt){
  evt.preventDefault();
  evt.currentTarget.reset()
  localStorage.removeItem(STORAGE_KEY)
  console.log(formData)
}

function populateInput() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)); 
   if (savedMessage) {
    if (savedMessage.email) {
      form.email.value = savedMessage.email;
    }
    if (savedMessage.message) {
      form.message.value = savedMessage.message;
    }
  }
}
   
