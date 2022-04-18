import { Button, Typography } from "@mui/material";

import { SettingsPower, Settings, Add, Pets, Clear } from "@mui/icons-material";

function App() {
	return (
		<>
			<Button variant="text">Text</Button>
			<Button startIcon={<Settings />} variant="contained">
				Contained
			</Button>
			<Button
				startIcon={<SettingsPower />}
				variant="contained"
				size="small"
				color="success"
			>
				Power
			</Button>
			<Button startIcon={<Add />} variant="text" size="small" color="success">
				Add New Post
			</Button>
			<Button
				startIcon={<Pets />}
				variant="contained"
				size="small"
				color="secondary"
			>
				Pets
			</Button>
			<Button variant="outlined" disabled>
				disabled
			</Button>
			<Button
				startIcon={<Clear />}
				variant="outlined"
				size="small"
				color="error"
			>
				Delete
			</Button>
			<Typography variant="h1" component="p">
				Paragraph notes here
			</Typography>
			<Button
				variant="contained"
				disabled
				sx={{
					backgroundColor: "skyblue",
					color: "primary",
					margin: 5,
					"&:hover": {
						backgroundColor: "lightblue",
					},
					"&:disabled": {
						backgroundColor: "grey",
						color: "white",
					},
				}}
			>
				Strange Button
			</Button>
		</>
	);
}

export default App;
