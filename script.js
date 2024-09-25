// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Inicializar componentes de Materialize
  M.AutoInit();
});

const generateButton = document.getElementById('generate-button');
const copyButton = document.getElementById('copy-button');
const passwordDisplay = document.getElementById('generated-password');
const notification = document.getElementById('notification');

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);
passwordDisplay.addEventListener('click', copyPassword); // Nueva línea

function generatePassword() {
  const length = parseInt(document.getElementById('length').value);
  const lowercase = document.getElementById('lowercase').checked;
  const uppercase = document.getElementById('uppercase').checked;
  const numbers = document.getElementById('numbers').checked;
  const symbols = document.getElementById('symbols').checked;
  const specialChars = document.getElementById('specialChars').checked;

  let charset = '';
  if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (numbers) charset += '0123456789';
  if (symbols) charset += '!@#$%^&*';

  // Ampliar caracteres especiales
  if (specialChars) charset += '¿¡ñÑáéíóúüÁÉÍÓÚÜ±§¢£¥©®™°µ¶÷×[]{}()<>/\\|`~;:"\',.?@€¬';

  if (charset === '') {
    showNotification('Selecciona al menos una opción de caracteres.', true);
    return;
  }

  let password = '';
  const charsetLength = charset.length;
  const randomValues = new Uint32Array(length);
  window.crypto.getRandomValues(randomValues);

  for (let i = 0; i < length; i++) {
    password += charset.charAt(randomValues[i] % charsetLength);
  }

  passwordDisplay.textContent = password;
}

function copyPassword() {
  const password = passwordDisplay.textContent;
  if (!password) {
    showNotification('No hay contraseña para copiar.', true);
    return;
  }

  navigator.clipboard.writeText(password).then(function() {
    showNotification('¡Contraseña copiada al portapapeles!', false);
  }, function(err) {
    console.error('Error al copiar la contraseña: ', err);
  });
}

// Función para mostrar notificaciones
function showNotification(message, isError) {
  notification.textContent = message;
  notification.style.backgroundColor = isError ? '#e53935' : '#4caf50';
  notification.style.display = 'block';
  setTimeout(function() {
    notification.style.display = 'none';
  }, 3000);
}

// Añadir estilo de cursor al pasar el mouse sobre la contraseña generada
passwordDisplay.style.cursor = 'pointer';