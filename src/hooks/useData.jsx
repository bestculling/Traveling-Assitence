import { central } from '../data/central'
import { east } from '../data/east'
import { north } from '../data/north'
import { south } from '../data/south'
import { west } from '../data/west'

export function useData() {
    return [
        ...central,
        ...east,
        ...west,
        ...north,
        ...south
    ]
}