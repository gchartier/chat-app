import * as UI from "@chakra-ui/react";
import { useMessages } from "app/chat/util/data";

export function MessageList() {
    const [messages, loading, error] = useMessages({ limit: 100 });

    if (loading) return <UI.Spinner />;
    if (error) return <UI.Text>{error.message}</UI.Text>;

    return (
        <UI.UnorderedList>
            {messages?.map((message) => (
                <UI.ListItem key={message.id}>
                    <UI.Text>
                        {message.authorName}: {message.text} at {message.time}
                    </UI.Text>
                </UI.ListItem>
            ))}
        </UI.UnorderedList>
    );
}
