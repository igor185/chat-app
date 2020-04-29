import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'
import './styles.sass'
import {Button} from "semantic-ui-react";
import {dataURLtoFile, uploadFile} from "../../helpers";

class Cropper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            preview: null,
            src: ""
        };
        this.onCrop = this.onCrop.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.setState({preview: null})
    }

    onCrop(preview) {
        this.setState({preview})
    }

    onSave(){
        const [info, data] = this.state.preview.split(',');
        const [typeTemp] = info.split(";");
        const encoding = typeTemp.split("/")[1];
        const file = dataURLtoFile(this.state.preview, `avatar.${encoding}`);
        uploadFile(file)
            .then(file => {
                this.props.onClose(file.fileDownloadUri);
            })
            .catch(console.log);
    }

    render() {
        return (
            <>
                <div className="cropper">
                    <Avatar
                        width={320}
                        height={200}
                        onCrop={this.onCrop}
                        onClose={this.onClose}
                        onBeforeFileLoad={this.onBeforeFileLoad}
                    />

                    <div className="preview">
                        {this.state.preview && (
                            <img src={this.state.preview} alt="Preview"/>)
                        }
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button color='blue' onClick={() => this.props.onClose()}>Close</Button>
                    {this.state.preview && <Button color='blue' onClick={() => this.onSave()}>Save</Button>}
                </div>
            </>

        )
    }
}

export default Cropper;