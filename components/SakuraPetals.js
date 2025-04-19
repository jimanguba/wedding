'use client'
import { useEffect } from 'react'

export default function SakuraPetals() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/petals/sakura.js'
    script.async = true
    script.onload = () => {
      if (typeof window.Sakura === 'function') {
        new window.Sakura('body')
      } else {
        console.warn('Sakura not loaded as expected 💀', window.Sakura)
      }
    }
    document.body.appendChild(script)
  }, [])

  return null
}
