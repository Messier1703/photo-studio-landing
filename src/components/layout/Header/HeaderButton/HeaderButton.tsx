import { Button } from '@mui/base'
import s from './HeaderButton.module.scss'

interface HeaderButtonProps {
  children: string
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ children }) => {
  return <Button className={s.button}>{children}</Button>
}

export default HeaderButton
