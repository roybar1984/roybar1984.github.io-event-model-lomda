import "./TextWithCodeBlocks.css";
import { Markup } from "interweave";
import BlackCodeBlock from "./../blackCodeBlock/BlackCodeBlock";

function TextWithCodeBlocks(props) {
  return (
    <div>
      <div>
        <Markup content={props.Data[props.page].text[0]} />
      </div>
      {props.isFunctions ? (
        <BlackCodeBlock
          codeBlocksText={props.codeBlocksText[0]}
          className={props.className}
        />
      ) : (
        <BlackCodeBlock
          codeBlocksText={props.codeBlocksText}
          className={props.className}
        />
      )}
      <div>
        <Markup content={props.Data[props.page].text[1]} />
      </div>
      {props.isFunctions && (
        <BlackCodeBlock
          codeBlocksText={props.codeBlocksText[1]}
          className={props.className}
        />
      )}
    </div>
  );
}

export default TextWithCodeBlocks;
