import { Injectable } from '@nestjs/common';
import { transporter, bookingEmailTemplate } from './email.provider';
import { configDotenv } from 'dotenv';
configDotenv();
@Injectable()
export class EmailService {
  async sendBookingEmail(to: string, data: {
    departureCity: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    adults: number;
    children: number;
    classType?: string;
    specialRequests?: string;
  }) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: 'New Booking Request',
      html: bookingEmailTemplate(data),
    };
    return transporter.sendMail(mailOptions);
  }
}
