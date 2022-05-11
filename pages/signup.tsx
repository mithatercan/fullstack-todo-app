import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { SignupForm } from '@/components/index'
import MainContent from '@/components/MainContent'
import MainHero from '@/components/MainHero'

const theme = createTheme()

const SignUp: () => JSX.Element = () => {
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
						<SignupForm />
					</ThemeProvider>
				</MainContent>
			</Box>
		</div>
	)
}

export default SignUp
