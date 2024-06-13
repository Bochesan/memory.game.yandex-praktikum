interface Item {
  id: number
  [key: string]: unknown
}

export function mergeObjects(array1: Item[], array2: Item[]): Item[] {
  const mergedArray: Item[] = []
  const map: Map<number, Item> = new Map()

  array1.forEach(item => {
    map.set(item.id, { ...item })
  })

  array2.forEach(item => {
    if (map.has(item.id)) {
      const existingItem = map.get(item.id)!
      map.set(item.id, { ...existingItem, ...item })
    } else {
      map.set(item.id, { ...item })
    }
  })

  map.forEach(value => mergedArray.push(value))

  return mergedArray
}
