import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from "./Header/Header";
import MyGridSystem from "./Grid/MyGridSystem";
import MediaCard from "./Card/MediaCard";

let destination = document.querySelector("#container");

ReactDOM.render(
    <>
        <CssBaseline/>
        <Header/>
        <Container maxWidth={"lg"}>
            <h1>Lorem ipsum.</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores blanditiis, consectetur
                consequuntur corporis dolor dolorem doloremque enim eum id illum incidunt itaque magnam magni minus
                nobis non pariatur porro possimus provident quaerat quam quasi quia quidem voluptate! Veniam,
                voluptatum.</p>
            <MyGridSystem {...{
                first: <MediaCard/>,
                second: <MediaCard/>,
                third: <MediaCard/>,
                fourth: <MediaCard/>
            }}/>
            <MyGridSystem {...{
                first: <MediaCard/>,
                second: <MediaCard/>,
                third: <MediaCard/>,
                fourth: <MediaCard/>
            }}/>
        </Container>
    </>,
    destination
);