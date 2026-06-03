'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, User, Loader2 } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = 'Lu adalah asisten digital dari Syntax Loft. Syntax Loft adalah software house yang menyediakan jasa pembuatan website dan aplikasi. Tugas lu promosiin jasanya. Jawab dengan santai tapi pro.'

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Halo! Saya asisten digital dari Syntax Loft. Ada yang bisa saya bantu tentang layanan pembuatan website atau aplikasi? Tanya aja! 😊',
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    if (typeof window === 'undefined' || !window.puter) {
      alert("Sistem AI sedang bersiap, tunggu sebentar ya!")
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = input.trim()
    setInput('')
    setIsLoading(true)

    try {
      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map(msg => ({ role: msg.role, content: msg.content })),
        { role: 'user', content: currentInput }
      ]

      const response = await window.puter.ai.chat(apiMessages, { model: 'gpt-5.4-nano' })

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response?.toString() || 'Maaf, ada masalah nih. Coba lagi ya!',
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Puter Error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Oops, ada error nih. Coba lagi sebentar ya! 😅',
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen max-w-6xl mx-auto">
      <div className="text-center py-6 border-b border-border bg-background/50 backdrop-blur">
        <h1 className="text-2xl font-display font-bold text-foreground mb-1">
          AI Chat Assistant
        </h1>
        <p className="text-sm text-muted">
          Tanya tentang layanan pembuatan website dan aplikasi Syntax Loft
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 pb-24">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Bot size={18} className="text-foreground" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-foreground text-background'
                    : 'bg-muted/30 text-foreground'
                }`}
              >
                <p className="text-sm sm:text-base whitespace-pre-wrap">{message.content}</p>
              </div>
              {message.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center flex-shrink-0">
                  <User size={18} className="text-foreground" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 justify-start"
          >
            <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
              <Bot size={18} className="text-foreground" />
            </div>
            <div className="bg-muted/30 rounded-2xl px-4 py-3">
              <div className="flex items-center gap-2 text-muted">
                <Loader2 size={16} className="animate-spin" />
                <span className="text-sm">Ketik...</span>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-border p-4">
        <form onSubmit={handleSubmit} className="flex gap-3 max-w-3xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tulis pesan..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-muted/30 border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-foreground/50 transition-colors"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="px-5 py-3 bg-foreground text-background rounded-xl font-medium hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            <Send size={18} />
            <span className="hidden sm:inline">Kirim</span>
          </button>
        </form>
      </div>
    </div>
  )
}