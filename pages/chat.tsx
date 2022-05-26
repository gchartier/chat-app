import { NextPage } from "next";
import * as UI from "@chakra-ui/react";
import { addMessage } from "app/chat/util/data";
import { useAuthState } from "app/firebase/auth";
import { MessageList } from "app/chat/components/MessagesList";
import { SignInButton } from "app/chat/components/SignInButton";
import { SignOutButton } from "app/chat/components/SignOutButton";

const ChatPage: NextPage = () => {
    const [user, loading, error] = useAuthState();

    if (loading) return <UI.Spinner />;
    if (error) return <UI.Text>{error.message}</UI.Text>;
    if (!user) return <SignInButton />;

    const handleAddClick = () => {
        addMessage({
            text: "Blake is a rotten egg",
            authorName: "Gabriel",
            uid: user.uid,
            time: Date.now(),
        });
    };

    return (
        <>
            <SignOutButton />

            <UI.Divider />

            <MessageList />

            <UI.Divider />

            <UI.Button colorScheme="green" onClick={handleAddClick}>
                Add test message
            </UI.Button>
        </>
    );
};

export default ChatPage;
