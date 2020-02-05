import defaultSettings from '@/settings'

const title = defaultSettings.title || 'e洁家政服务平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
