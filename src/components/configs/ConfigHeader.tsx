import React, {ChangeEvent, createRef, FC, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import './config-header.css';

interface ConfigHeaderProps {
    close: () => void
    isUpload: boolean
    add: ()=> void
}

const ConfigHeader: FC<ConfigHeaderProps> = ({close, add, isUpload}) => {

    const addImages = (event:ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
        //const addImages = (files: FileList | null) => {
    if (files){
        console.log(files)
        for (let i = 0; i < files.length; i++) {
            let file = files.item(i)
        }
    }
}

    if (isUpload) {

        return (
            <div className="row config-header">
                <div className={"col-6"}/>
                <input type="file" id={"input"}
                       onChange={(e)=> addImages(e)}
                style={{display: "none"}}/>
                <button onClick={()=>{let i = document.getElementById("input");
                i?.click()}}
                    className={"btn-light btn-sm col-2 config-header-button"}
                >Add</button>
                <div className={"col-1"}/>
                <button className="btn-light btn-sm col-2 config-header-button"
                        onClick={() => {
                            close()
                        }}>Close
                </button>
                <div className={"col-1"}></div>
            </div>
        )
    } else

        return (

            <div className="row config-header">
                <div className={"col-6"}></div>
                <button className="btn-light btn-sm col-2 config-header-button">Add</button>
                <div className={"col-1"}></div>
                <button className="btn-light btn-sm col-2 config-header-button"
                        onClick={() => {
                            close()
                        }}>Close
                </button>
                <div className={"col-1"}></div>
            </div>

        );
};

export default observer(ConfigHeader);