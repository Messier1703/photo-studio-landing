interface BrightButtonProps {
  children: string
}

const BrightButton: React.FC<BrightButtonProps> = ({ children }) => {
  return <button>{children}</button>
}

export default BrightButton
