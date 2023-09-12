export const getUtcData = (data) => {
  if (data) {
    const localDate = new Date(data)

    const utcYear = localDate.getUTCFullYear()
    const utcMonth = localDate.getUTCMonth() + 1
    const utcDay = localDate.getUTCDate()

    return `${utcYear}-${String(utcMonth).padStart(2, '0')}-${String(
      utcDay
    ).padStart(2, '0')}`
  }
}

export const getTime = (data) => {
  if (data) {
    const hours = Math.floor(data / 60)
    const minutes = data % 60

    return `${hours}hr : ${minutes}mins`
  }

  return
}

export const getGenres = (data) => {
  console.log(data)
  if (data) {
    const genres = data?.map((item) => item.name)

    console.log(genres)
    return genres
  }
  return
}
