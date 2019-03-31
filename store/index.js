import data from '../static/data/quakka.json'

const dataMap = {}

export function getAll () {
  return data
}

export function getSum () {
  return data.length
}

export function getAllKeys () {
  return data.map(d => d.name)
}

export function getNextKey (key) {
  const idx = getIndex(key, false)
  const sum = getSum()
  const next = idx >= sum - 1 ? 0 : idx + 1
  return data[next].name
}

export function getPrevKey (key) {
  const idx = getIndex(key, false)
  const sum = getSum()
  const prev = idx <= 0 ? sum - 1 : idx - 1
  return data[prev].name
}

export function getByKey (key) {
  if (dataMap[key]) {
    return data[dataMap[key]] || null
  }
  const idx = getIndex(key)
  if (idx < 0) {
    return null
  }
  dataMap[key] = idx
  return data[idx]
}

function getIndex (key, fuzzy = true) {
  const func = fuzzy === true
    ? d => d.name.indexOf(key) >= 0
    : d => d.name === key
  return data.findIndex(func)
}