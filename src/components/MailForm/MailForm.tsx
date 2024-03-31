'use client'

import React, { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useMailForm } from '../../hooks/useMailForm'
import ClipLoader from 'react-spinners/ClipLoader'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MailForm = () => {
  const { form, onSubmit } = useMailForm()

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      toast.success('メール送信に成功しました！')
    }
  }, [form.formState.isSubmitSuccessful])

  return (
    <>
      <ToastContainer />

      <Form {...form}>
        <form
          className="container flex flex-col gap-3"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ユーザー名</FormLabel>

                <FormControl>
                  <Input placeholder="ユーザー名" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>メールアドレス</FormLabel>

                <FormControl>
                  <Input placeholder="メールアドレス" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>主題</FormLabel>

                <FormControl>
                  <Input placeholder="主題" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>本文</FormLabel>

                <FormControl>
                  <Textarea placeholder="本文" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="file"
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>添付画像</FormLabel>

                <FormControl>
                  <Input
                    accept="image/*"
                    type="file"
                    placeholder="添付画像"
                    onChange={(event) => {
                      onChange(event.target.files)
                    }}
                    {...fieldProps}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? <ClipLoader /> : '送信'}
          </Button>
        </form>
      </Form>
    </>
  )
}

export default MailForm
