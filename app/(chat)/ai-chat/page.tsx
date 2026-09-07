import { AIChat } from '@/components/ai-chat'

export const metadata = {
  title: 'AI Chat | WIRASA TECH',
  description: 'Chat dengan asisten digital WIRASA TECH untuk info layanan pembuatan website dan aplikasi',
}

export default function AIChatPage() {
  return (
    <>
      <script src="https://js.puter.com/v2/" async></script>
      <div className="min-h-screen px-4">
        <AIChat />
      </div>
    </>
  )
}