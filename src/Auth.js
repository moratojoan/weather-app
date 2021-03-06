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

import 'firebase/auth';
import {
    useFirebaseApp,
    useUser
} from 'reactfire';

import * as authServices from './firebase/auth';


export default function Auth() {
    const firebase = useFirebaseApp();
    const { data: user } = useUser();
    const [modalParams, setModalParams] = useState(null);

    const onLoginClick = () => {
        setModalParams({
            title: "Log in",
            onSubmit: login
        });
    }
    const onSigninClick = () => {
        setModalParams({
            title: "Sign in",
            onSubmit: signin
        });
    }
    const onCloseModal = () => setModalParams(null);

    const login = ({email, password}) => {
        authServices.login(firebase.auth(), {email, password})
    }
    const signin = ({email, password}) => {
        authServices.signin(firebase.auth(), {email, password})
    }
    const logout = () => authServices.logout(firebase.auth());

    return (
        <>
            {user ? (
                <EuiFlexGrid>
                    <EuiFlexItem>
                        <EuiButton onClick={logout}>Log out: {user.email}</EuiButton>
                    </EuiFlexItem>
                </EuiFlexGrid>
            ) : (
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
            )}
        </>
    )
}


function AuthModalForm({title, onClose, onSubmit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitForm = async event => {
        event.preventDefault();
        await onSubmit({email, password});
        onClose();
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
