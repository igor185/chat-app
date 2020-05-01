import React from "react";
import './styles.scss';

export interface IProps {
    width: number
    height: number
    src: string
    online: boolean
}
export default (props: IProps) => (
    <div className={`avatar ${props.online && "online"}`}>
        <img
            width={props.width}
            height={props.height}
            className="rounded-circle"
            src={props.src}
            alt=""/>
    </div>
)