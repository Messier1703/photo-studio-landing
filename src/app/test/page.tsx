'use client'
import API_BASE_URL from '@/api/API_BASE_URL'
// import ky from 'ky'
import axios from 'axios'

const page = () => {
  // async function fetchAPI() {
  //   try {
  //     const response = await axios.get(`${API_BASE_URL}/services`)
  //     console.log(response)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  async function login() {
    const requestBody = {
      email: 'user@example.com',
      password: 'string',
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login_user`, requestBody)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return <div onClick={login}>page</div>
}

export default page
