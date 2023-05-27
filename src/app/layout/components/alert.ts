import Swal from 'sweetalert2';

export function errorDialog(msg: string, callback?: () => void) {
  return Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Oops...',
    text: msg,
    showConfirmButton: false,
    timer: 2000,
  }).then(() => {
    if (callback) {
      callback();
    }
  });
}
export function successDialog(msg: string, callback?: () => void) {
  return Swal.fire({
    position: 'center',
    title: 'Success',
    icon: 'success',
    text: msg,
    showConfirmButton: false,
    timer: 2000,
  }).then(() => {
    if (callback) {
      callback();
    }
  });
}

export function miniSuccesDialog(title: string) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  return Toast.fire({
    icon: 'success',
    title: title,
  });
}

export function miniErrorDialog(title: string) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  return Toast.fire({
    icon: 'error',
    title: title,
  });
}
