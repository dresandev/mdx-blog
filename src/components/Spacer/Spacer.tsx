interface SpacerProps {
  width?: string
  height: string
}

export const Spacer: React.FC<SpacerProps> = ({ width = '100%', height }) => {
  return (
    <div style={{ width, height }}></div>
  )
}
