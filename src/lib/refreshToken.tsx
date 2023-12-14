import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"

const refreshToken = async () => {
  try {
    const response = await ky.post(`${API_BASE_URL}/auth/refresh_token`, { credentials: "include" })
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

export default refreshToken
