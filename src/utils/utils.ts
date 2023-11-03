export const sanitizeTitleForURL = title => {
  // Elimina caracteres especiales y espacios en blanco al principio y al final
  let sanitizedTitle = title.trim().replace(/[^a-zA-Z0-9\s]/g, '')
  // Reemplaza espacios en blanco con guiones bajos
  sanitizedTitle = sanitizedTitle.replace(/\s+/g, '-')
  // Convierte a minúsculas
  sanitizedTitle = sanitizedTitle.toLowerCase()
  return sanitizedTitle
}
