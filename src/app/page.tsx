'use client'

import { useForm } from 'react-hook-form'
import { validationSchema } from '@/utils/validationSchema'
import { zodResolver } from '@hookform/resolvers/zod'

interface LoginForm {
  name: string
  email: string
  password: string
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  })

  function onSubmit(data: LoginForm) {
    console.log(data)
  }

  return (
    <div className="form-container">
      <h1>ログインフォーム</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">名前</label>
        <input id="name" type="text" {...register('name')} />
        <p>{errors.name?.message}</p>

        <label htmlFor="email">メールアドレス</label>
        <input id="email" type="email" {...register('email')} />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">パスワード</label>
        <input id="password" type="password" {...register('password')} />
        <p>{errors.password?.message}</p>

        <button type="submit">送信</button>
      </form>
    </div>
  )
}
