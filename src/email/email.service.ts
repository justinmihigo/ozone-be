import { Injectable } from '@nestjs/common';
import { transporter, bookingEmailTemplate, carRentalEmailTemplate, contactUsEmailTemplate, tourPackageBookingEmailTemplate } from './email.provider';
import { configDotenv } from 'dotenv';
configDotenv();
@Injectable()
export class EmailService {
  async sendBookingEmail(to: string, data: {
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
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: 'New Booking Request',
      html: bookingEmailTemplate(data),
    };
    return transporter.sendMail(mailOptions);
  }

  async sendCarRentalEmail(to: string, data: any) {
    const { name, email, phone, pickupLocation, dropoffLocation, pickupDate, vehicleType, specialRequirements } = data;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: 'Car Rental Request',
      html: carRentalEmailTemplate({ name, email, phone, pickupLocation, dropoffLocation, pickupDate, vehicleType, specialRequirements }),
    };
    return transporter.sendMail(mailOptions);
  }

  async sendContactUsEmail(to: string, data: any) {
    const { name, email, phone, subject, message } = data;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: `Contact Us: ${subject}`,
      html: contactUsEmailTemplate({ name, email, phone, subject, message }),
    };
    return transporter.sendMail(mailOptions);
  }

  async sendTourPackageBookingEmail(to: string, data: any) {
    const { name, email, phone, tourPackage, message } = data;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: 'Tour Package Booking',
      html: tourPackageBookingEmailTemplate({ name, email, phone, tourPackage, message }),
    };
    return transporter.sendMail(mailOptions);
  }
}
