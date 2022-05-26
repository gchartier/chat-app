import * as UI from "@chakra-ui/react";
import { signOut } from "app/firebase/auth";

export function SignOutButton() {
    return (
        <UI.Button colorScheme="green" onClick={() => signOut()}>
            Sign Out
        </UI.Button>
    );
}
