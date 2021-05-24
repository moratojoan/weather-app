


export function login(auth, {email, password}) {
    auth.signInWithEmailAndPassword(email, password);
}

export function signin(auth, {email, password}) {
    auth.createUserWithEmailAndPassword(email, password)
}

export function logout(auth) {
    auth.signOut();
}
