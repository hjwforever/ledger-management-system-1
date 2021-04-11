import Cookies from 'js-cookie'

const LMSKey = 'lms_key'

export function getEmail() {
  return Cookies.get(LMSKey)
}

export function setEmail(key) {
  return Cookies.set(LMSKey, key)
}

export function removeEmail() {
  return Cookies.remove(LMSKey)
}
