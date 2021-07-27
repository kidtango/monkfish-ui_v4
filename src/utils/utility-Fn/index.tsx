import filter from 'ramda/src/filter'
import curry from 'ramda/src/curry'

interface GenericObj {
  name: string
}

const isFound = curry(
  <T extends GenericObj>(targetValue: string, obj: T) =>
    obj.name.toLowerCase().indexOf(targetValue) !== -1,
)

export const filterObjectsByName = <T extends GenericObj>(
  targetValue: string,
  objects: T[],
) => filter(isFound(targetValue), objects)
