"use client"
import { useState, useEffect } from "react"
import styles from "./FloatingVideo.module.scss"
import API_BASE_URL from "@/constants/API_BASE_URL"
import ky from "ky"

interface VideoItem {
  id: number
  video: string
}

const FloatingVideo = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [firstVideo, setFirstVideo] = useState<VideoItem | null>(null)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/video`).json()
        if (Array.isArray(response) && response.length > 0) {
          setFirstVideo(response[0])
          console.log("First Video:", response[0])
        }
      } catch (error) {
        console.error(error)
      }
    }

    getVideos()
  }, [])

  return (
    <article className={`${styles.video} ${isClicked ? styles.clicked : ""}`} onClick={handleClick}>
      {firstVideo && (
        <figure>
          <video src={firstVideo.video} autoPlay muted={!isClicked} loop width="300" height="200" />
        </figure>
      )}
    </article>
  )
}

export default FloatingVideo
