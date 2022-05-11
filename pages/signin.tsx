import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { NextPageWithLayout } from 'next'
import type { ReactNode } from 'react'

import { SigninForm } from '@/components/index'
import MainContent from '@/components/MainContent'
import MainHero from '@/components/MainHero'
import MainLayout from '@/layouts/MainLayout'

const theme = createTheme()

const SignIn: NextPageWithLayout = () => {
	return (
		<div>
			<Box
				sx={{
					display: 'flex',
					height: '100vh'
				}}
			>
				<MainHero path='/auth.jpg' />
				<MainContent>
					<ThemeProvider theme={theme}>
						<SigninForm />
					</ThemeProvider>
				</MainContent>
			</Box>
		</div>
	)
}
export default SignIn

SignIn.getLayout = (page: ReactNode) => <MainLayout>{page}</MainLayout>
