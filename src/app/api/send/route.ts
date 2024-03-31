import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { username, subject, email, content } = await request.json()

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
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
