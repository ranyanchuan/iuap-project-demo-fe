import React, { Component } from 'react'
import { Tooltip } from "tinper-bee";

class ConTooltip extends React.Component {
    render() {
        const { text_val } = this.props;
        return (
            <Tooltip inverse overlay={text_val}>
                <span tootip={text_val} style={{
                    display: "block",
                    width: "100%",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    verticalAlign: "bottom",
                }}>{text_val}</span>
            </Tooltip>
        );
    }
}

export default ConTooltip;