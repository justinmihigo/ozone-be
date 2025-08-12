import * as nodemailer from 'nodemailer';
import { configDotenv } from 'dotenv';
configDotenv();
export const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 465,
  tls: {
    ciphers: 'SSLv3',
  },
  secure: true,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY, // Use the SendGrid API key from .env
  },
  
});

export function bookingEmailTemplate(data: {
  name: string;
  email: string;
  phone: string;
  departureCity: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  adults: number;
  children: number;
  classType?: string;
  specialRequests?: string;
}) {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f9f9f9; padding: 32px; border-radius: 12px; max-width: 480px; margin: 0 auto; box-shadow: 0 2px 8px rgba(0,0,0,0.07);">
      <h2 style="color: #2d6cdf; text-align: center; margin-bottom: 24px;">New Booking Request</h2>
      <p style="font-size: 16px; color: #222; margin-bottom: 20px;">Hello, my name is <span style='font-weight:600;'>${data.name}</span> and I would like to make a booking request with the following details:</p>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Name:</span> <span style="color: #444;">${data.name}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Email:</span> <span style="color: #444;">${data.email}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Phone:</span> <span style="color: #444;">${data.phone}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Departure City:</span> <span style="color: #444;">${data.departureCity}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Destination:</span> <span style="color: #444;">${data.destination}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Departure Date:</span> <span style="color: #444;">${data.departureDate}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Return Date:</span> <span style="color: #444;">${data.returnDate}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Adults:</span> <span style="color: #444;">${data.adults}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Children:</span> <span style="color: #444;">${data.children}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Class:</span> <span style="color: #444;">${data.classType || '-'}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Special Requests:</span> <span style="color: #444;">${data.specialRequests || '-'}</span></li>
      </ul>
      <div style="margin-top: 32px; text-align: center; color: #888; font-size: 13px;">Ozone Travel</div>
    </div>
  `;
}

export function carRentalEmailTemplate(data: {
  name: string;
  email: string;
  phone: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  vehicleType: string;
  specialRequirements?: string;
}) {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f9f9f9; padding: 32px; border-radius: 12px; max-width: 480px; margin: 0 auto; box-shadow: 0 2px 8px rgba(0,0,0,0.07);">
      <h2 style="color: #2d6cdf; text-align: center; margin-bottom: 24px;">Car Rental Request</h2>
      <p style="font-size: 16px; color: #222; margin-bottom: 20px;">Hello, my name is <span style='font-weight:600;'>${data.name}</span> and I would like to request a car rental with the following details:</p>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Name:</span> <span style="color: #444;">${data.name}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Email:</span> <span style="color: #444;">${data.email}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Phone:</span> <span style="color: #444;">${data.phone}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Pickup Location:</span> <span style="color: #444;">${data.pickupLocation}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Dropoff Location:</span> <span style="color: #444;">${data.dropoffLocation}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Pickup Date:</span> <span style="color: #444;">${data.pickupDate}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Vehicle Type:</span> <span style="color: #444;">${data.vehicleType}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Special Requirements:</span> <span style="color: #444;">${data.specialRequirements || '-'}</span></li>
      </ul>
      <div style="margin-top: 32px; text-align: center; color: #888; font-size: 13px;">Ozone Travel</div>
    </div>
  `;
}

export function contactUsEmailTemplate(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f9f9f9; padding: 32px; border-radius: 12px; max-width: 480px; margin: 0 auto; box-shadow: 0 2px 8px rgba(0,0,0,0.07);">
      <h2 style="color: #2d6cdf; text-align: center; margin-bottom: 24px;">Contact Us Message</h2>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Name:</span> <span style="color: #444;">${data.name}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Email:</span> <span style="color: #444;">${data.email}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Phone:</span> <span style="color: #444;">${data.phone}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Subject:</span> <span style="color: #444;">${data.subject}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Message:</span> <span style="color: #444;">${data.message}</span></li>
      </ul>
      <div style="margin-top: 32px; text-align: center; color: #888; font-size: 13px;">Ozone Travel</div>
    </div>
  `;
}

export function tourPackageBookingEmailTemplate(data: {
  name: string;
  email: string;
  phone: string;
  tourPackage: string;
  message: string;
}) {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f9f9f9; padding: 32px; border-radius: 12px; max-width: 480px; margin: 0 auto; box-shadow: 0 2px 8px rgba(0,0,0,0.07);">
      <h2 style="color: #2d6cdf; text-align: center; margin-bottom: 24px;">Tour Package Booking</h2>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Name:</span> <span style="color: #444;">${data.name}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Email:</span> <span style="color: #444;">${data.email}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Phone:</span> <span style="color: #444;">${data.phone}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Tour Package:</span> <span style="color: #444;">${data.tourPackage}</span></li>
        <li style="margin-bottom: 10px;"><span style="font-weight: 600; color: #333;">Message:</span> <span style="color: #444;">${data.message}</span></li>
      </ul>
      <div style="margin-top: 32px; text-align: center; color: #888; font-size: 13px;">Ozone Travel</div>
    </div>
  `;
}
