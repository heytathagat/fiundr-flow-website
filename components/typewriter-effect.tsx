"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TypewriterEffectProps {
  words: Array<{
    text: string
    className?: string
  }>
  className?: string
  cursorClassName?: string
}

export function TypewriterEffect({ words, className, cursorClassName }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentWord = words[currentWordIndex]

        if (isDeleting) {
          setCurrentText(currentWord.text.substring(0, currentText.length - 1))
        } else {
          setCurrentText(currentWord.text.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === currentWord.text) {
          setTimeout(() => setIsDeleting(true), 1000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <div className={cn("inline-block", className)}>
      <span className={words[currentWordIndex]?.className}>{currentText}</span>
      <span className={cn("animate-pulse", cursorClassName, words[currentWordIndex]?.className)}>|</span>
    </div>
  )
}
