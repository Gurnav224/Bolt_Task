import { toast } from 'react-toastify';
import type { ToastOptions } from 'react-toastify';

const toastConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function success(message: string) {
  toast.success(message, toastConfig);
}

function error(message: string) {
  toast.error(message, toastConfig);
}
function info(message: string) {
  toast.info(message, toastConfig);
}
function warning(message: string) {
  toast.warning(message, toastConfig);
}

const Toast = {
  success,
  error,
  info,
  warning,
};

export default Toast;
