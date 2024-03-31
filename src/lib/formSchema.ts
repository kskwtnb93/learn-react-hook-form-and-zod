import { z } from 'zod'

export const formDefaultValues = {
  username: '',
  subject: '',
  email: '',
  content: '',
}

export const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'ユーザー名は２文字以上で入力してください。' }),
  subject: z.string().min(2, {
    message: '主題は２文字以上で入力してください。',
  }),
  email: z
    .string()
    .email({ message: '適切なメールアドレスを入力してください。' }),
  content: z
    .string()
    .min(10, '本文は１０文字以上で入力してください。')
    .max(160, '本文は１６０文字以内で入力してください'),
})

export type FormType = z.infer<typeof formSchema>
