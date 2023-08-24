'use client'

import { useForm } from 'react-hook-form'

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
  })

  function onSubmit(data: LoginForm) {
    console.log(data)
  }

  return (
    <div className="form-container">
      <h1>ログインフォーム</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">名前</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: '名前は必須です。' })}
        />
        <p>{errors.name?.message}</p>

        <label htmlFor="email">メールアドレス</label>
        <input
          id="email"
          type="email"
          {...register('email', { required: 'メールアドレスは必須です。' })}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">パスワード</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: 'パスワードは必須です。',
            minLength: { value: 4, message: '４文字以上で入力してください。' },
          })}
        />
        <p>{errors.password?.message}</p>

        <button type="submit">送信</button>
      </form>
    </div>
  )
}
