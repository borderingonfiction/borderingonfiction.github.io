import './styles.css';
import { createRoot } from 'react-dom/client';
import {renderNav} from './components.js'; 

const navDomNode = document.getElementById('navMenu');
const navRoot = createRoot(navDomNode);
navRoot.render(<renderNav />);
