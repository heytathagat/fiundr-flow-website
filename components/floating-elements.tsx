"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-20 left-10 w-4 h-4 bg-gray-400 rounded-full animate-bounce"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-40 right-20 w-6 h-6 bg-gray-500 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 left-20 w-3 h-3 bg-gray-300 rounded-full animate-bounce"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-5 h-5 bg-gray-600 rounded-full animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-2 h-2 bg-gray-400 rounded-full animate-ping"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/3 w-3 h-3 bg-gray-500 rounded-full animate-ping"
        style={{ animationDelay: "3s" }}
      ></div>
    </div>
  )
}
