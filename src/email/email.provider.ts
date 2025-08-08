import * as nodemailer from 'nodemailer';
import { configDotenv } from 'dotenv';
configDotenv();
export const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export function bookingEmailTemplate(data: {
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
      <ul style="list-style: none; padding: 0; margin: 0;">
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
