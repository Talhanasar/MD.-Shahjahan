import {
  Users,
  BookOpen,
  Phone,
  Heart,
  MapPin,
  Leaf,
  Globe,
  Truck,
  Cpu,
  Trees as TreeIcon,
  HelpCircle
} from "lucide-react"
import React from "react"

// Registry of icon components. Keys should be simple identifiers you use from data (e.g. "book", "education", "bookopen")
export const ICON_REGISTRY: Record<string, React.ComponentType<any>> = {
  users: Users,
  user: Users,
  bookopen: BookOpen,
  book: BookOpen,
  phone: Phone,
  contact: Phone,
  heart: Heart,
  health: Heart,
  mappin: MapPin,
  mappin_alt: MapPin,
  map: MapPin,
  leaf: Leaf,
  subarnachar: Leaf,
  globe: Globe,
  truck: Truck,
  transport: Truck,
  cpu: Cpu,
  tech: Cpu,
  tree: TreeIcon,
  treeicon: TreeIcon,
  help: HelpCircle,
  helpcircle: HelpCircle
}

// normalize a string into a key: lowercase + remove non-alphanumeric
function normalizeKey(s?: string) {
  if (!s) return ""
  return s.toLowerCase().replace(/[^a-z0-9]/g, "")
}

// get an icon component from a candidate key (explicit) or fallbackKey (title)
export function getIconComponent(key?: string, fallbackKey?: string) {
  const keysToTry: string[] = []
  if (key) keysToTry.push(normalizeKey(key))
  if (fallbackKey) keysToTry.push(normalizeKey(fallbackKey))
  // try a few standard fallbacks
  keysToTry.push("mappin", "users")

  for (const k of keysToTry) {
    if (k && ICON_REGISTRY[k]) return ICON_REGISTRY[k]
  }
  // final fallback
  return MapPin
}