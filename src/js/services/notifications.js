import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showSuccess(message) {
  iziToast.show({
    title: 'Успіх',
    message: message,
    position: 'topRight',
    timeout: 3000,
    class: 'toast-success',
  });
}

export function showError(message) {
  iziToast.show({
    title: 'Помилка',
    message: message,
    position: 'topRight',
    timeout: 3000,
    class: 'toast-error',
  });
}
