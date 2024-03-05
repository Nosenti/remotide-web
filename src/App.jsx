import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Home from './pages/Home';
import Talent from './pages/Talent';
import Company from './pages/Company';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Product';
import AppLayout from './ui/AppLayout';
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <> 
      <QueryClientProvider client={queryClient}>
        <Analytics/>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path='talent' element={<Talent />} />
              <Route path='company' element={<Company />} />
              <Route path='settings' element={<Company />} />
              <Route path='product' element={<Product />} />

              <Route path='*' element={<PageNotFound />} />
            </Route>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Signup />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position='top-center'
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            className: 'text-base max-w-md py-4 px-6 bg-gray-50 text-gray-700',
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
