import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';


let destination = document.querySelector("#container");

ReactDOM.render(
    <>
        <CssBaseline/>
        <Container maxWidth={"lg"}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

            <ButtonGroup
                variant="contained"
                color="default"
                size="large"
                aria-label="contained primary button group"
            >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
        </Container>
    </>,
    destination
);