interface Props {
  text: string
  className?: string
  onClickFn?: () => void
}

export function Button({ text, className, onClickFn }: Props): JSX.Element {
  return (
    <button className={className} onClick={onClickFn}>
      {text}
    </button>
  )
}
