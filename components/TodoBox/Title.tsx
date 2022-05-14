import { Box, Checkbox, Typography } from '@mui/material'

const Title = ({ completed, id, title }) => {
	return (
		<Box className='flex items-center'>
			<Checkbox
				className='text-zinc-400'
				data-cy='todo-checkbox'
				checked={completed}
			/>
			<Typography
				data-cy='todo-title'
				className={`${
					completed ? 'line-through text-zinc-400' : ''
				}  text-[1.1rem] font-light`}
			>
				{title}
			</Typography>
		</Box>
	)
}

export default Title
