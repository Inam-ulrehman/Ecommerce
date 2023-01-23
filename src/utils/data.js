import {
  FaHome,
  FaEnvelope,
  FaRegAddressBook,
  FaDollarSign,
  FaProductHunt,
  FaCalendarAlt,
  // FaSignInAlt,
} from 'react-icons/fa'
// ========logo =========== //
export const logo =
  'https://res.cloudinary.com/inam6530/image/upload/v1667486202/inamwebsolutions/Inam_n9s4i4.svg'
// ========Nav Bar=========== //

export const navbar = [
  { id: 1, path: '/', title: 'Home', icon: <FaHome /> },
  { id: 2, path: '/about', title: 'About', icon: <FaEnvelope /> },
  { id: 3, path: '/products', title: 'Products', icon: <FaProductHunt /> },
  { id: 4, path: '/prices', title: 'Pricing', icon: <FaDollarSign /> },
  { id: 4, path: '/booking', title: 'Booking', icon: <FaCalendarAlt /> },
  { id: 5, path: '/contact', title: 'Contact', icon: <FaRegAddressBook /> },
]

// =======Dashboard========
export const dashboardNavLink = [
  { id: 1, title: 'dashboard', path: '/dashboard' },
  { id: 2, title: 'Orders', path: '/dashboard/orders' },
  { id: 3, title: 'Profile', path: '/dashboard/profile' },
  { id: 4, title: 'Change password', path: '/dashboard/changepassword' },
]
// ======================time ============
export const slot = [
  { _id: 1, startTime: '07:00', endTime: '07:30' },
  { _id: 2, startTime: '07:30', endTime: '08:00' },
  { _id: 3, startTime: '08:00', endTime: '08:30' },
  { _id: 4, startTime: '08:30', endTime: '09:00' },
  { _id: 5, startTime: '09:00', endTime: '09:30' },
  { _id: 6, startTime: '09:30', endTime: '10:00' },
  { _id: 7, startTime: '10:00', endTime: '10:30' },
  { _id: 8, startTime: '10:30', endTime: '11:00' },
  { _id: 9, startTime: '11:00', endTime: '12:30' },
  { _id: 10, startTime: '12:30', endTime: '13:00' },
  { _id: 11, startTime: '13:00', endTime: '13:30' },
  { _id: 12, startTime: '13:30', endTime: '14:00' },
  { _id: 13, startTime: '14:00', endTime: '14:30' },
  { _id: 14, startTime: '14:30', endTime: '15:00' },
  { _id: 15, startTime: '15:00', endTime: '15:30' },
  { _id: 16, startTime: '15:30', endTime: '16:00' },
  { _id: 17, startTime: '16:00', endTime: '16:30' },
  { _id: 18, startTime: '16:30', endTime: '17:00' },
]

// ======== Stripe  ==========

export const StripePaymentStatus =
  'http://localhost:3000/dashboard/paymentstatus'

export const STRIPE_PUBLISHABLE_KEY =
  'pk_test_51MCOOyAWL09tx3q3PEZKwZOjJyC94URRgxK9l8Efy9siYmXPybFxYhj3ByPZnjZfvaVmyvCpcT6NaLZogWkiUKK700XGTZL0aq'
