import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

export function mount(container: HTMLElement | null): void {
  if (!container) {
    throw new Error('Root element #root not found');
  }
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

mount(document.getElementById('root'));
