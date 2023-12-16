import styles from "./FileInput.module.scss"
import Image from "next/image"
import fileIcon from "public/svg/file-icon.svg"

interface FileInputProps {
  accept: string
  name: string
  multiple?: boolean
}

const FileInput: React.FC<FileInputProps> = ({ accept, name, multiple }) => {
  return (
    <div className={styles.input}>
      <figure>
        <Image src={fileIcon} alt="Иконка" />
      </figure>
      <input className={styles.input} name={name} type="file" accept={accept} multiple={multiple} />
    </div>
  )
}

export default FileInput
