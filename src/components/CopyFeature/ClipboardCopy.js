import "./ClipboardCopy.css";
import { useState } from "react";

function ClipboardCopy({ copyText }) {
  //holds the state for if the text was copied
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    //checks to see if the browser supports copy feature
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
      //if the feature is support the promise will be returned saying it is suppported
    } else {
      return document.execCommand("copy", true, text);
      //if it is not supported, we will use this function as a back up
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 5500);
        //the setIsCopied will be true for 15 seconds, then change back to false
      })
      .catch((err) => {
        console.log(err);
        //if it didnt work, an error will throw in the console
      });
  };

  return (
    <div className="clipboard-copy">
      <div className="container">
        <input type="text" value={copyText} readOnly id="copy-text" />
        <button
          id="copy-button"
          onClick={handleCopyClick}
          style={{
            backgroundColor: isCopied
              ? "var(--secondary-dark)"
              : "var(--primary-color)",
          }}
        >
          <span>{isCopied ? "Copied!" : "Copy email"}</span>
        </button>
      </div>
    </div>
  );
}

export default ClipboardCopy;
