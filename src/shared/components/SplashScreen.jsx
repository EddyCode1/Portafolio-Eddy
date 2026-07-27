import { FaCoffee } from 'react-icons/fa'

function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-black">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-24 w-24 animate-ping rounded-full bg-indigo-500/20" />
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/30">
          <FaCoffee className="text-3xl text-white" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">
          Bienvenido
        </h1>
        <p className="text-lg text-slate-400">conoce mi trabajo</p>
      </div>

      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-indigo-400" style={{ animationDelay: '0ms' }} />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-indigo-400" style={{ animationDelay: '150ms' }} />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-indigo-400" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  )
}

export default SplashScreen
