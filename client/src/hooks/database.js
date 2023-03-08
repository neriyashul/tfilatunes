import { useMemo } from 'react'
import getDB from '../db/db-factory'

export default function useDatabase() {
  return useMemo(() => getDB(), [])
}
