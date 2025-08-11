import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('flight-booking')
  async sendBooking(@Body() body: any) {
    // expects { to, departureCity, destination, departureDate, returnDate, adults, children, classType, specialRequests }
    return this.emailService.sendBookingEmail(body.to, body);
  }

  @Post('send-car-rental')
  async sendCarRental(@Body() body: any) {
    return this.emailService.sendCarRentalEmail(body.to, body);
  }

  @Post('contact-us')
  async contactUs(@Body() body: any) {
    return this.emailService.sendContactUsEmail(body.to, body);
  }

  @Post('send-tour-booking')
  async sendTourBooking(@Body() body: any) {
    return this.emailService.sendTourPackageBookingEmail(body.to, body);
  }
}
