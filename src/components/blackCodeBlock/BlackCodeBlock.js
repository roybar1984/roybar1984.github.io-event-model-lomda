import "./BlackCodeBlock.css";
import { Markup } from "interweave";
function BlackCodeBlock(props) {
  return (
    <div className={`black-code-block-container  ${props.className}`}>
      <p className="code-type">{props.type}</p>
      <Markup content={props.codeBlocksText} />
    </div>
  );
}

export default BlackCodeBlock;