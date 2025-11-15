function saveToLS(key, value) {
  const formatedValue = JSON.stringify(value);
  localStorage.setItem(key, formatedValue);
}

function loadFromLS(key) {
  const item = localStorage.getItem(key);
  try {
    const value = JSON.parse(item);
    return value;
  } catch {
    return item;
  }
}

const storageKeyName = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

document.addEventListener('DOMContentLoaded', event => {
  const data = loadFromLS(storageKeyName);
  if (!data) return;
  formData.email = data.email || '';
  formData.message = data.message || '';

  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
});

form.addEventListener('input', event => {
  const data = new FormData(form);
  formData.email = data.get('email');
  formData.message = data.get('message');

  saveToLS(storageKeyName, formData);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(storageKeyName);
  formData.email = '';
  formData.message = '';
  form.reset();
});