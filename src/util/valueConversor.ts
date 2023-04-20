export const valueConversor = (obj: any) => {
  if (!obj) return null
  if (obj.value) return obj.value
  return obj
}
