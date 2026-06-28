const Booking = require('../models/Booking');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createNewBooking = async (req, res) => {
  const { customerName, customerEmail, customerPhone, service, stylist, date, time, notes, amountInCents } = req.body;
  
  try {
    // Generate an optional payment intent processing token if checking out online
    let paymentIntent = null;
    if (amountInCents && amountInCents > 0) {
      paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: 'usd',
        metadata: { customerEmail, service }
      });
    }

    const booking = await Booking.create({
      customerName, customerEmail, customerPhone, service, stylist, date, time, notes,
      paymentStatus: paymentIntent ? 'Unpaid' : 'Unpaid', 
      stripePaymentIntentId: paymentIntent ? paymentIntent.id : null
    });

    res.status(201).json({
      success: true,
      booking,
      clientSecret: paymentIntent ? paymentIntent.client_secret : null
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({}).sort({ createdAt: -1 });
    res.json({ success: true, count: bookings.length, data: bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ success: false, message: 'Resource Target Booking Record ID not discovered' });

    booking.status = req.body.status || booking.status;
    booking.paymentStatus = req.body.paymentStatus || booking.paymentStatus;
    
    await booking.save();
    res.json({ success: true, data: booking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};