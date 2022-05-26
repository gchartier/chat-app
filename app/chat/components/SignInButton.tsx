import * as UI from "@chakra-ui/react";
import { useSignIn } from "app/firebase/auth";

export function SignInButton() {
    const [signIn, , loading] = useSignIn();

    return (
        <UI.Button
            colorScheme="green"
            onClick={() => {
                signIn();
            }}
            disabled={loading}
        >
            Sign In with Google
        </UI.Button>
    );
}
