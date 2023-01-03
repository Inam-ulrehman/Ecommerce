import {
  FaHome,
  FaEnvelope,
  FaRegAddressBook,
  FaInstagramSquare,
  FaFacebook,
  FaTwitterSquare,
  FaProductHunt,
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
  { id: 4, path: '/contact', title: 'Contact', icon: <FaRegAddressBook /> },
]

// ================About Page================
export const aboutHeading = {
  title: 'Meet Our Team Members',
  paragraph:
    'We have very hardworking and dedicated team members, teamwork play a huge role in a project and outcomes shine when it comes to good understanding.',
}
// ==========Team Members=========
export const teamMembers = [
  {
    img: 'https://res.cloudinary.com/inam6530/image/upload/v1667047659/inamwebsolutions/Untitled_design_1_zufr0r.svg',
    titleName: 'Sania Rehman',
    titleJob: 'Marketing Manager',
    description: `Sania writes content for business and also take care of digital marketing campaigns.`,
  },
  {
    img: 'https://res.cloudinary.com/inam6530/image/upload/v1666904764/inamwebsolutions/Untitled_design_1_wwzfww.png',
    titleName: 'Inam Rehman',
    titleJob: 'Software engineer',
    description: `Inam creates Digital Solutions for your business and helps you launch your product all over the internet.`,
  },
  {
    img: 'https://res.cloudinary.com/inam6530/image/upload/v1666886063/inamwebsolutions/Untitled_design_qj4p3g.png',
    titleName: 'George Bush',
    titleJob: 'Software engineer',
    description: `George is a coding addict most of the time he fixes bugs and searching new technologies.`,
  },
]
// =======Dashboard========
export const dashboardNavLink = [
  { id: 1, title: 'dashboard', path: '/dashboard' },
  { id: 2, title: 'Orders', path: '/dashboard/orders' },
  { id: 3, title: 'Profile', path: '/dashboard/profile' },
  { id: 4, title: 'Change password', path: '/dashboard/changepassword' },
]
// ==================footer //============

// ======Data for SocialIcons=====Start
export const socialIcons = [
  {
    id: 1,
    path: 'https://facebook.com',
    target: '_blank',
    rel: 'noreferrer',
    icon: <FaFacebook />,
    title: 'Facebook',
  },
  {
    id: 2,
    path: 'https://Twitter.com',
    target: '_blank',
    rel: 'noreferrer',
    icon: <FaTwitterSquare />,
    title: 'Twitter',
  },
  {
    id: 5,
    path: 'https://www.instagram.com/',
    target: '_blank',
    rel: 'noreferrer',
    icon: <FaInstagramSquare />,
    title: 'Instagram',
  },
]
// ======== Stripe  ==========

export const StripePaymentStatus =
  'http://localhost:3000/dashboard/paymentstatus'

export const STRIPE_PUBLISHABLE_KEY =
  'pk_test_51MCOOyAWL09tx3q3PEZKwZOjJyC94URRgxK9l8Efy9siYmXPybFxYhj3ByPZnjZfvaVmyvCpcT6NaLZogWkiUKK700XGTZL0aq'
