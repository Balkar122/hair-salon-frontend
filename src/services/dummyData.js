import { galleryImages, heroImage } from '../assets/images'

export const services = [
  { id: 1, title: 'Hair Cut', price: '$25', duration: '45 min', image: heroImage, description: 'Precision cuts tailored to your face shape and style.' },
  { id: 2, title: 'Hair Styling', price: '$40', duration: '60 min', image: heroImage, description: 'Elegant blowouts and styling for every occasion.' },
  { id: 3, title: 'Hair Coloring', price: '$90', duration: '120 min', image: heroImage, description: 'Premium color treatments with expert blending.' },
  { id: 4, title: 'Hair Spa', price: '$55', duration: '50 min', image: heroImage, description: 'Deep nourishment and relaxation for healthy hair.' },
  { id: 5, title: 'Keratin', price: '$120', duration: '150 min', image: heroImage, description: 'Smooth, frizz-free finish with luxury keratin treatment.' },
  { id: 6, title: 'Facial', price: '$60', duration: '60 min', image: heroImage, description: 'Rejuvenating skincare tailored to your skin type.' },
  { id: 7, title: 'Beard Styling', price: '$20', duration: '30 min', image: heroImage, description: 'Sharp beard shaping and grooming services.' },
  { id: 8, title: 'Bridal Makeup', price: '$180', duration: '180 min', image: heroImage, description: 'Luxury bridal beauty package for your special day.' },
]

export const teamMembers = [
  { id: 1, name: 'Sophia Carter', designation: 'Creative Director', experience: '10 Years', skills: 'Color, Styling', photo: heroImage },
  { id: 2, name: 'Emma Stone', designation: 'Senior Stylist', experience: '8 Years', skills: 'Cut, Spa', photo: heroImage },
  { id: 3, name: 'Liam James', designation: 'Grooming Expert', experience: '6 Years', skills: 'Beard, Men Styling', photo: heroImage },
]

export const reviews = [
  { id: 1, name: 'Ava Wilson', image: heroImage, stars: 5, comment: 'Absolutely luxurious experience. My hair has never looked better.', date: '12 Jan 2026' },
  { id: 2, name: 'Olivia Brown', image: heroImage, stars: 5, comment: 'Professional team, elegant atmosphere, and stunning results.', date: '28 Feb 2026' },
  { id: 3, name: 'Noah Martin', image: heroImage, stars: 4, comment: 'Excellent grooming service and very welcoming staff.', date: '10 Mar 2026' },
]

export const faqs = [
  { id: 1, question: 'Do I need an appointment?', answer: 'Walk-ins are welcome, but appointments are recommended for premium services.' },
  { id: 2, question: 'Do you offer bridal packages?', answer: 'Yes, we offer customized bridal beauty packages.' },
  { id: 3, question: 'Which products do you use?', answer: 'We use professional salon-grade luxury products.' },
]

export const gallery = galleryImages.map((img, index) => ({
  id: index + 1,
  image: img,
  category: ['Hair', 'Color', 'Bridal', 'Spa'][index % 4],
}))