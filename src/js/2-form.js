const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
form.elements.email.value = savedData.email || "";
form.elements.message.value = savedData.message || "";

form.addEventListener("input", (e) => {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(data));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
}
  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();
});
