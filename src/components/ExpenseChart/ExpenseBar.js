import "./ExpenseBar.css"

function ExpenseBar(props) {
    let percentHeight = 0;
    if (props.maxValue > 0) {
        percentHeight= Math.round(((props.expense / parseInt(props.maxValue)) * 100)) + '%'; 
    }
    return (
        <div className="container" >
            <div className="bar">
                <div className="fill" style={{height:percentHeight}}></div>
            </div>
            <h4 className="month">{props.month}</h4>
        </div>
    )
}

export default ExpenseBar;