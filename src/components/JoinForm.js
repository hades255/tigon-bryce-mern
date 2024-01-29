import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const JoinForm = () => {
    return(
        <Box
            sx={{
                margin: '4rem'
            }}
        >
            <p class="font_raleway font-36 center bold">Join BryceAI</p>
            <p class="font_raleway font-20 center"
                style={{color: '#858585', letterSpacing: '1px'}}
            >
                Caryn AI is at capacity, but we're accepting users on a rolling basis. Join our Waitlist!
            </p>
            <Box>
                <Grid container spacing={2}
                    sx={{
                        margin: '3rem auto',
                        maxWidth: '1000px'
                    }}
                >
                    <Grid item xs={6}>
                        <TextField 
                            placeholder="Name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            placeholder="Email"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            placeholder="Message"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <div class="button font_raleway center font-20"
                            style={{
                                padding: '0.7rem 0',
                                borderRadius: '5px'
                            }}
                        >
                            Send
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
export default JoinForm;