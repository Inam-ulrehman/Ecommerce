import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ScrollToTopHook from './hooks/ScrollToTopHook'
import { ChangePassword, Profile } from './components/dashboard'
import {
  SharedLayout,
  LandingPage,
  ErrorPage,
  About,
  Contact,
  Dashboard,
  ProtectedRoute,
  SingleChangePassword,
  VerifyUser,
  SharedDashboardLayout,
  Register,
  Cart,
} from './pages'

import { Products, SingleProduct } from './pages/productPages'
import { CheckOut, PaymentStatus } from './pages/stripePages'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTopHook />
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<LandingPage />} />

          {/* =======Dashboard======== */}
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <SharedDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path='/dashboard/checkout' element={<CheckOut />} />
            <Route
              path='/dashboard/checkout/paymentStatus'
              element={<PaymentStatus />}
            />
            <Route path='/dashboard/profile' element={<Profile />} />
            <Route
              path='/dashboard/changepassword'
              element={<ChangePassword />}
            />
          </Route>
          {/* =======Dashboard======== */}
          <Route path='changepassword/:id' element={<SingleChangePassword />} />
          <Route path='verify/:id' element={<VerifyUser />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:_id' element={<SingleProduct />} />
          <Route path='contact' element={<Contact />} />
          <Route path='register' element={<Register />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
