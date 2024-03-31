import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema, formDefaultValues, type FormType } from '@/lib/formSchema'

export const useMailForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  })

  const onSubmit = useCallback(async (values: FormType) => {
    const { username, email, subject, content } = values

    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          subject,
          content,
        }),
      })
    } catch (error) {
      console.error(error)
    }
  }, [])

  return { form, onSubmit }
}
