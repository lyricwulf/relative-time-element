export function timeAgo(date: Date): [number, Intl.RelativeTimeFormatUnit] {
  const ms = new Date().getTime() - date.getTime()
  const sec = Math.round(ms / 1000)
  const min = Math.round(sec / 60)
  const hr = Math.round(min / 60)
  const day = Math.round(hr / 24)
  const month = Math.round(day / 30)
  const year = Math.round(month / 12)
  if (ms < 0) {
    return [0, 'second']
  } else if (sec < 10) {
    return [0, 'second']
  } else if (sec < 45) {
    return [-sec, 'second']
  } else if (sec < 90) {
    return [-min, 'minute']
  } else if (min < 45) {
    return [-min, 'minute']
  } else if (min < 90) {
    return [-hr, 'hour']
  } else if (hr < 24) {
    return [-hr, 'hour']
  } else if (hr < 36) {
    return [-day, 'day']
  } else if (day < 30) {
    return [-day, 'day']
  } else if (month < 18) {
    return [-month, 'month']
  } else {
    return [-year, 'year']
  }
}

export function microTimeAgo(date: Date): [number, Intl.RelativeTimeFormatUnit] {
  const ms = new Date().getTime() - date.getTime()
  const sec = Math.round(ms / 1000)
  const min = Math.round(sec / 60)
  const hr = Math.round(min / 60)
  const day = Math.round(hr / 24)
  const month = Math.round(day / 30)
  const year = Math.round(month / 12)
  if (min < 1) {
    return [1, 'minute']
  } else if (min < 60) {
    return [min, 'minute']
  } else if (hr < 24) {
    return [hr, 'hour']
  } else if (day < 365) {
    return [day, 'day']
  } else {
    return [year, 'year']
  }
}

export function timeUntil(date: Date): [number, Intl.RelativeTimeFormatUnit] {
  const ms = date.getTime() - new Date().getTime()
  const sec = Math.round(ms / 1000)
  const min = Math.round(sec / 60)
  const hr = Math.round(min / 60)
  const day = Math.round(hr / 24)
  const month = Math.round(day / 30)
  const year = Math.round(month / 12)
  if (month >= 18) {
    return [year, 'year']
  } else if (month >= 12) {
    return [year, 'year']
  } else if (day >= 45) {
    return [month, 'month']
  } else if (day >= 30) {
    return [month, 'month']
  } else if (hr >= 36) {
    return [day, 'day']
  } else if (hr >= 24) {
    return [day, 'day']
  } else if (min >= 90) {
    return [hr, 'hour']
  } else if (min >= 45) {
    return [hr, 'hour']
  } else if (sec >= 90) {
    return [min, 'minute']
  } else if (sec >= 45) {
    return [min, 'minute']
  } else if (sec >= 10) {
    return [sec, 'second']
  } else {
    return [0, 'second']
  }
}

export function microTimeUntil(date: Date): [number, Intl.RelativeTimeFormatUnit] {
  const ms = date.getTime() - new Date().getTime()
  const sec = Math.round(ms / 1000)
  const min = Math.round(sec / 60)
  const hr = Math.round(min / 60)
  const day = Math.round(hr / 24)
  const month = Math.round(day / 30)
  const year = Math.round(month / 12)
  if (day >= 365) {
    return [year, 'year']
  } else if (hr >= 24) {
    return [day, 'day']
  } else if (min >= 60) {
    return [hr, 'hour']
  } else if (min > 1) {
    return [min, 'minute']
  } else {
    return [1, 'minute']
  }
}
