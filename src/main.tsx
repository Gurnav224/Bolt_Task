import 'react-toastify/dist/ReactToastify.css';
import '@/styles/index.scss';
import '@/styles/theme.scss';
import '@/styles/utils.scss';
import '@/styles/vars.scss';
import { createRoot } from 'react-dom/client';
import Provider from './Provider';
import CONFIG from './Config';

createRoot(document.getElementById(CONFIG.APP_TAG)!).render(<Provider />);
