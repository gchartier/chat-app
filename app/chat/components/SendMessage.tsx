import { User } from "firebase/auth";
import * as UI from "@chakra-ui/react";
import styled from "styled-components";
import { addMessage } from "app/chat/util/data";
import { useForm, SubmitHandler } from "react-hook-form";
import { EmojiPicker } from "app/chat/components/EmojiPicker";

interface Props {
    user: User;
}

type Inputs = {
    message: string;
};

export function SendMessage({ user }: Props) {
    const { register, handleSubmit, reset, watch, setValue } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        addMessage({
            text: data.message,
            authorName: "Gabriel",
            uid: user.uid,
            time: Date.now(),
        });

        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <MessageBox>
                <MessageInput {...register("message", { required: true })} />
                <EmojiPicker
                    onSelect={(emoji: string) => {
                        const message = watch("message");
                        setValue("message", `${message ?? ""}${emoji}`);
                    }}
                />
                <UI.Button colorScheme="green" type="submit">
                    Send
                </UI.Button>
            </MessageBox>
        </form>
    );
}

const MessageBox = styled.div`
    display: flex;
    position: relative;
`;

const MessageInput = styled.input`
    width: 25%;
    padding: 0.5rem;
    background-color: peachpuff;
`;
