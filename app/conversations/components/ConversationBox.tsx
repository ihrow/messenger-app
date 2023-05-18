"use client";

import { Conversation } from "@prisma/client";

interface Props {
  data: Conversation;
  selected: boolean;
}

const ConversationBox = (props: Props) => {
  return <div>ConversationBox</div>;
};

export default ConversationBox;
