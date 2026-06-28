const express = require('express');
const { createNewBooking, getAllBookings, updateBookingStatus } = require('../controllers/bookingController');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', createNewBooking);
router.get('/', protect, authorize('admin'), getAllBookings);
router.put('/:id', protect, authorize('admin'), updateBookingStatus);

module.exports = router;