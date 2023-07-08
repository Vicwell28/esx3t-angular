import swal from 'sweetalert2';

export function errorDialog(msg: string, callback?: () => void) {
  return swal
    .fire({
      position: 'center',
      icon: 'error',
      title: 'Oops...',
      text: msg,
      showConfirmButton: false,
      timer: 2000,
    })
    .then(() => {
      if (callback) {
        callback();
      }
    });
}
export function successDialog(msg: string, callback?: () => void) {
  return swal
    .fire({
      position: 'center',
      title: 'Success',
      icon: 'success',
      text: msg,
      showConfirmButton: false,
      timer: 2000,
    })
    .then(() => {
      if (callback) {
        callback();
      }
    });
}

export function miniSuccesDialog(title: string) {
  const Toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', swal.stopTimer);
      toast.addEventListener('mouseleave', swal.resumeTimer);
    },
  });

  return Toast.fire({
    icon: 'success',
    title: title,
  });
}

export function miniErrorDialog(title: string) {
  const Toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', swal.stopTimer);
      toast.addEventListener('mouseleave', swal.resumeTimer);
    },
  });

  return Toast.fire({
    icon: 'error',
    title: title,
  });
}
