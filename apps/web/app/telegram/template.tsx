export default function TelegramTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full overflow-hidden">
      {children}
    </div>
  )
}