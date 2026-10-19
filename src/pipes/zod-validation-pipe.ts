import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { z, ZodError, ZodType } from 'zod'
import { fromZodError } from 'zod-validation-error'

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodType<any>) {}

  transform(value: any) {
    try {
      this.schema.parse(value)
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException(
          {
            errors: fromZodError(error),
            message: 'Validation failed',
            statusCode: 400
          }
        )
      }

      throw new BadRequestException('Validation failed')
    }
    return value
  }
}