import { z } from 'zod';

// MUST HAVE THE SAME NAME AS THE INPUT IDS
const Schema = z.object({
	title: z.string().min(1, { message: "Title can't be empty" }),
	details: z.string().min(1, { message: "Details can't be empty" }),
	min_price: z.string().min(1, { message: 'Minimum required' }),
	max_price: z.string().min(1, { message: 'Maximum required' }),
});
// .refine((data) => Number(min_price) < Number(max_price), {
//   message: "Max price should be higher than minimun price",
//   path: ["max_price"], // path of error
// })

export default Schema;
