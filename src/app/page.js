import Image from 'next/image'

export default function Home() {
  return (
    <main >
     Home
     <a href='/auth/login'>Login</a>
     <a href='/auth/signup'>Signup</a>
     <a href='/card_editor'>card_editor</a>
    </main>
  )
}
