import {z} from 'zod'

const userSchema = z.object({
    username : z.string().min(3,'Username is required'),
    email: z.string.email('Invalid email'),
    password: z.string.min(6, 'Password must be 6 charactres'),
    avatar: z.string.url('Invalid URl').optional()
})

export {userSchema}