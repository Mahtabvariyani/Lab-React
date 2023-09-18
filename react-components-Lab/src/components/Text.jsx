import React from "react";

class Text extends React.Component {
  render() { 
    return <> 
    <div className="textContainer">
    <h1 className="h1Tag">
        Say Hello To 
        <br />
        ReactJS
    </h1>
      <br />
      <p className="Paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia praesentium veritatis molestiae corrupti, illo magnam deserunt aperiam exercitationem numquam odio?
      </p>
    </div>
    </>
  }
}

export default Text;
