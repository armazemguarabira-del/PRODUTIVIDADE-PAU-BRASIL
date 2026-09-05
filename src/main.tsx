import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './utils/safeLocalStorage';
import App from './App.tsx';
import { CrossFilterProvider } from './context/CrossFilterContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <CrossFilterProvider>
          <App />
        </CrossFilterProvider>
      </ErrorBoundary>
    </StrictMode>,
  );
} else {
  console.error('Target container #root not found.');
}
