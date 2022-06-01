import { NextPage } from "next";
import * as UI from "@chakra-ui/react";
import styled from "styled-components";
import { useAuthState } from "app/firebase/auth";
import { MessageList } from "app/chat/components/MessagesList";
import { SignInButton } from "app/chat/components/SignInButton";
import { SignOutButton } from "app/chat/components/SignOutButton";
import { SendMessage } from "app/chat/components/SendMessage";

const ChatPage: NextPage = () => {
    const [user, loading, error] = useAuthState();

    if (loading) return <UI.Spinner />;
    if (error) return <UI.Text>{error.message}</UI.Text>;
    if (!user) return <SignInButton />;

    return (
        <PageWrapper>
            <SignOutButton />

            <UI.Divider />

            <MessageList />

            <UI.Divider />

            <SendMessage user={user} />
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 1rem;
`;

export default ChatPage;
