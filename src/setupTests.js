import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom';

// Asegurarse de que TextEncoder y TextDecoder estén disponibles globalmente en el entorno de Jest
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
