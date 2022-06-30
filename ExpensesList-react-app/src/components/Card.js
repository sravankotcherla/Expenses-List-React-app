//Composition to prevent duplication of CSS code and pass the JSX code between custom open and closing tags as props.

import "./Card.css"

function Card(props){
    const classes= 'card '+ props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card