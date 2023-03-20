import React from 'react'
import styles from "./style"
import { Box, Typography } from '@mui/material'

export default function Loading(props) {
  return (
    <Box {...props}>
      <Typography sx={styles.loading}>טוען מידע...</Typography>
    </Box>
  )
}
