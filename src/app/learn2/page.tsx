import MailForm from '@/components/MailForm/MailForm'

export default function Page() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="font-semibold text-2xl mb-4">お問い合わせフォーム</h2>
        <MailForm />
      </div>
    </main>
  )
}
