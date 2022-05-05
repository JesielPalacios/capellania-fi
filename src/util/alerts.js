import Swal from 'sweetalert2';

const fireAlertNotification = (title, message, alertType) => {
  Swal.fire(title, message, alertType);
};
const fireAlertWithConfirmation = (
  title,
  message,
  confirmButtonText,
  callback,
) => {
  Swal.fire({
    title,
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#D33',
    confirmButtonText,
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    }
  });
};

export default {
  fireAlertNotification,
  fireAlertWithConfirmation,
};
