import { useState } from 'react';

import {
    EuiFlexGrid,
    EuiFlexItem,
    EuiButton,
    EuiButtonEmpty,
    EuiModal,
    EuiModalHeader,
    EuiModalHeaderTitle,
    EuiModalBody,
    EuiModalFooter,
    EuiForm,
    EuiFormRow,
    EuiFieldText,
    EuiFieldPassword
} from '@elastic/eui';


export default function Auth() {
    const [modalParams, setModalParams] = useState(null);

    const onLoginClick = () => {
        setModalParams({
            title: "Log in",
            onSubmit: onLogIn
        });
    }
    const onSigninClick = () => {
        setModalParams({
            title: "Sign in",
            onSubmit: onSignIn
        });
    }

    const onCloseModal = () => setModalParams(null);
    const onLogIn = ({email, password}) => {
        console.log("log in", {email, password});
        onCloseModal();
    }
    const onSignIn = ({email, password}) => {
        console.log("sign in", {email, password});
        onCloseModal();
    }

    return (
        <>
            <EuiFlexGrid>
                <EuiFlexItem>
                    <EuiButton onClick={onLoginClick}>Log in</EuiButton>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiButton onClick={onSigninClick}>Sign up</EuiButton>
                </EuiFlexItem>
            </EuiFlexGrid>
            {modalParams && (
                <AuthModalForm
                    title={modalParams.title}  
                    onClose={onCloseModal}
                    onSubmit={modalParams.onSubmit}
                />
            )}
        </>
    )
}


function AuthModalForm({title, onClose, onSubmit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitForm = event => {
        event.preventDefault();
        onSubmit({email, password});
    }

    return (
        <EuiModal onClose={onClose} initialFocus="[name=email]">
            <EuiModalHeader>
                <EuiModalHeaderTitle>
                    <h1>{title}</h1>
                </EuiModalHeaderTitle>
            </EuiModalHeader>
            <EuiModalBody>
                <EuiForm id="authFormId" component="form" onSubmit={onSubmitForm}>
                    <EuiFormRow label="Email">
                        <EuiFieldText
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </EuiFormRow>
                    <EuiFormRow label="Password">
                        <EuiFieldPassword
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </EuiFormRow>
                </EuiForm>
            </EuiModalBody>
            <EuiModalFooter>
                <EuiButtonEmpty onClick={onClose}>Cancelar</EuiButtonEmpty>
                <EuiButton type="submit" form="authFormId" fill>
                    {title}
                </EuiButton>
            </EuiModalFooter>
        </EuiModal>
    );
}
