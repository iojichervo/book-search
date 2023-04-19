const BASE_URL = 'https://openlibrary.org'

export const fetcher = (url: string) =>
  fetch(BASE_URL + url).then((r) => {
    if (!r.ok) {
      throw new Error(r.status + '-' + r.statusText)
    }
    return r.json()
  })
