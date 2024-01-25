// not-found-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  NotFoundException,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus() || HttpStatus.NOT_FOUND;
    response.status(status).json({
      statusCode: status,
      message: exception.message,
    });
  }
}
