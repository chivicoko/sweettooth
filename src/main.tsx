import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ProductsProvider from './contexts/ProductsContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>,
);
