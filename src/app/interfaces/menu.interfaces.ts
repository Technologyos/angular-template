export type MenuItem = {
  key: string
  label: string
  isTitle?: boolean
  icon?: string
  url?: string
  badge?: {
    variant: string
    text: string
  }
  parentKey?: string
  isDisabled?: boolean
  collapsed?: boolean
  children?: MenuItem[]
}

export type SubMenus = {
  item: MenuItem
  linkClassName?: string
  subMenuClassName?: string
  activeMenuItems?: Array<string>
  toggleMenu?: (item: MenuItem, status: boolean) => void
  className?: string
}

export const MENU_ITEMS: MenuItem[] = []
