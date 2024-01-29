import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                maxWidth: '1300px',
                margin: '0px auto',
                padding: '20px 0px'
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h5" component="h2">
                        Bryce ai
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h7" component="h2">
                        socials
                    </Typography>
                </Grid>
            </Grid>
            <br/>
            <Box sx={{
                padding: '10px 0px'
            }}>
                <Typography variant="h6" component="h2">
                    <hr/>
                    powered by TLK.com
                </Typography>   
            </Box>
            
        </Box>
    )
}
export default Footer;