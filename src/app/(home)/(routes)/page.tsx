import MainSection from '@/components/sections/MainSection/MainSection'
import TeamSection from '@/components/sections/TeamSection/TeamSection'

const HomePage = () => {
  // const [services, setServices] = useState<requestInterface | null>(null)
  // const [preShoot, setPreShoot] = useState<requestInterface | null>(null)
  // const [infographics, setInfographics] = useState<requestInterface | null>(null)

  // useEffect(() => {
  //   const getServices = async () => {
  //     try {
  //       const response = await ky.get(`${API_BASE_URL}/services`).json<requestInterface[]>()
  //       setServices(response[0])
  //     } catch (error) {
  //       console.error('Error fetching services:', error)
  //     }
  //   }

  //   const getPreShoot = async () => {
  //     try {
  //       const response = await ky.get(`${API_BASE_URL}/pre_shoot`).json<requestInterface[]>()
  //       setPreShoot(response[0])
  //     } catch (error) {
  //       console.error('Error fetching services:', error)
  //     }
  //   }

  //   const getInfographics = async () => {
  //     try {
  //       const response = await ky.get(`${API_BASE_URL}/infographic`).json<requestInterface[]>()
  //       setInfographics(response[0])
  //     } catch (error) {
  //       console.error('Error fetching services:', error)
  //     }
  //   }

  //   getServices()
  //   getPreShoot()
  //   getInfographics()
  // }, [])

  return (
    <>
      <MainSection />
      <TeamSection />
    </>
  )
}

export default HomePage
