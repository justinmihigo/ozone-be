import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send-booking')
  async sendBooking(@Body() body: any) {
    // expects { to, departureCity, destination, departureDate, returnDate, adults, children, classType, specialRequests }
    return this.emailService.sendBookingEmail(body.to, body);
  }
}
