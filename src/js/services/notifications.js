import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showSuccessMessage(message) {
  iziToast.success({
    title: 'Success',
    message,
    position: 'topRight',
  });
}

export function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message,
    position: 'topRight',
  });
}
