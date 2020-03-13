import React from "react";

function Quote(props){



  return(
    <div className="card">
      <div className="quote-content">
        {props.quote.text}
      </div>
      <div className="author">{props.quote.author}</div>
      <div className="source">{props.quote.source}</div>
    </div>
  )
}

export default Quote;
