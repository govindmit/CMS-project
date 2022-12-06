import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Auth from './Components/Auth'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Auth />
    </div>

  )
}
