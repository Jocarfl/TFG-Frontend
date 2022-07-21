import React, {useRef,useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"
import "./css/Modal.css"


export default class ModalInfoPaciente extends React.Component {
  render() {
    return(
      <Popup open={this.props.open} modal>
        {() => ( 
          <>
          <label>Hola</label>
            <button onClick={() => this.props.setOpen(false)}>
              close
            </button>
          </>
        )}
      </Popup>
    )
  }
}
