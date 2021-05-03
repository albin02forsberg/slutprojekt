import React from "react";

import sendToServer from "../static/script/sendToServer.js";

function Modal(props) {
  let alertStyle = "btn btn-" + props.type;
  return (
    <div>
      <div
        className="modal"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{props.text}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Stäng
              </button>
              <button
                type="button"
                className={alertStyle}
                onClick={() => {
                  sendToServer(props.id, props.db, null, props.action);
                }}
              >
                {props.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
