export interface IMode {
  isDark: boolean
  toggleDarkMode: () => void
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
