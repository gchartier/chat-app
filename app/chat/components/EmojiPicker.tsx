import { darkTheme } from "picmo";
import styled from "styled-components";
import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { createPopup, PopupPickerController } from "@picmo/popup-picker";

interface Props {
    onSelect: (emoji: string) => void;
}

export function EmojiPicker({ onSelect }: Props) {
    const emojiPickerRef = useRef<HTMLButtonElement>(null);
    const [emojiPicker, setEmojiPicker] = useState<PopupPickerController | null>(null);

    useLayoutEffect(() => {
        function handleEmojiSelect(event: any) {
            onSelect(event.emoji);
        }

        if (!emojiPicker && emojiPickerRef.current) {
            const picker = createPopup(
                { theme: darkTheme },
                {
                    triggerElement: emojiPickerRef.current,
                    referenceElement: emojiPickerRef.current,
                    position: "right-start",
                }
            );

            picker.addEventListener("emoji:select", handleEmojiSelect);

            setEmojiPicker(picker);
        }

        return () => emojiPicker?.removeEventListener("emoji:select", handleEmojiSelect);
    }, [emojiPickerRef, emojiPicker, setEmojiPicker, onSelect]);

    return (
        <EmojiPickerButton
            onClick={() => {
                emojiPicker?.toggle();
            }}
            type="button"
            ref={emojiPickerRef}
        >
            🍆
        </EmojiPickerButton>
    );
}

const EmojiPickerButton = styled.button`
    unset: all;
    padding: 0.5rem;
    border: 2px dotted #ccc;
    cursor: pointer;
`;
