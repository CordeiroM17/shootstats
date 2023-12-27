import { z } from 'zod';

export const shooterSchema = z.object({
  firstName: z
    .string({
      required_error: 'First Name is required',
    })
    .max(20, {
      message: 'The maximum number of characters is 20',
    })
    .min(1, {
      message: 'The minimum number of characters is 1',
    }),
  lastName: z
    .string({
      required_error: 'Last Name is required',
    })
    .max(20, {
      message: 'The maximum number of characters is 20',
    })
    .min(1, {
      message: 'The minimum number of characters is 1',
    }),
  age: z
    .number({
      required_error: 'Age is required',
    })
    .positive({
      message: 'The number must be positive',
    })
    .gte(10, {
      message: 'The number must be greater than 10',
    })
    .lte(100, {
      message: 'The number must be less than 100',
    }),
});
