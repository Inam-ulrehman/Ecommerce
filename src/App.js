import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ScrollToTopHook from './hooks/ScrollToTopHook'
import {
  SharedLayout,
  LandingPage,
  ErrorPage,
  About,
  Contact,
  Products,
  Dashboard,
  ProtectedRoute,
  ChangePassword,
  SingleChangePassword,
} from './pages'
import Register from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTopHook />
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path='*' element={<ErrorPage />} />
          <Route path='changepassword' element={<ChangePassword />} />
          <Route path='changepassword/:id' element={<SingleChangePassword />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='contact' element={<Contact />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
