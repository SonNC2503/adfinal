import { Typography, Box } from "@mui/material";
import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import CloseIcon from "@mui/icons-material/Close";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";


export default function EditAboutUs({ CloseEvent }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };



    return (
        <div>
            <Box sx={{ m: 2 }} />
            <Typography variant="h5" align="center">
                Edit About Us
            </Typography>
            <IconButton
                style={{ position: "absolute", top: "0", right: "0" }}
                onClick={CloseEvent}
            >
                <CloseIcon />
            </IconButton>
            <Box height={20} />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Title" onChange={handleTitleChange} variant="outlined" size="small" value={title} sx={{ minWidth: "100%" }} />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Content" onChange={handleContentChange} variant="outlined" size="small" value={content} sx={{ minWidth: "100%" }} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" align="center">
                        <Button variant="contained" onClick={EditAboutUs}>
                            Submit
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{ m: 4 }} />
        </div>

    )
}