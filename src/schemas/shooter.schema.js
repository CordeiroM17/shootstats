import { z } from 'zod';

let actualDate = new Date();

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
});
