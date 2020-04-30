import {Dimmer, Icon, Loader, Header} from "semantic-ui-react";
import React, {useEffect, useState} from 'react';

import './styles.sass';
import request from "../../helpers/webApi";
import {CONFIRM_EMAIL_DONE} from "../../var/routers";

const ConfirmPage = (props: { token: string }) => {
    const [isFetching, setLoad] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        request(
            CONFIRM_EMAIL_DONE,
            {
                method: "POST",
                body: JSON.stringify({
                    token: props.token
                })
            }
        )
            .then(res => {
                if (!res) {
                    setError(true);
                }
                setLoad(false);
            })
            .catch(err => {
                console.log(err);
                setError(true);
                setLoad(false);
            })
    }, []);

    return <div className={"confirm-wrap"}> {!isFetching ? (
        <Dimmer active>
            <Header as='h2' icon color={"black"}>
                <Icon name={!error ? 'check circle' : 'close'} color={!error ? "green" : "red"}/>
                Email doesn't confirmed!
                <Header.Subheader><span onClick={() => window.location.replace("/")}>Go to app</span></Header.Subheader>
            </Header>
        </Dimmer>
    ) : (
        <Dimmer inverted>
            <Loader inverted/>
        </Dimmer>
    )
    }
    </div>
};


export default ConfirmPage;