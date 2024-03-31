import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const formData = await request.formData()

  const username = formData.get('username')
  const email = formData.get('email')
  const subject = formData.get('subject')
  const content = formData.get('content')
  const file = formData.get('file')

  const buffer = await Buffer.from(await file.arrayBuffer())

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [process.env.TO_MAIL_ADDRESS],
      subject: subject,
      react: EmailTemplate({
        username: username,
        email: email,
        content: content,
      }),
      attachments: [{ filename: file.name, content: buffer }],
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
