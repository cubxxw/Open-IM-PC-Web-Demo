import { Badge } from "antd";
import clsx from "clsx";
import { t } from "i18next";
import type {
  ConversationItem,
  ConversationItem as ConversationItemType,
  MessageItem,
} from "open-im-sdk-wasm/lib/types/entity";
import { memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import OIMAvatar from "@/components/OIMAvatar";
import { parseTwemoji } from "@/components/Twemoji";
import { useConversationStore } from "@/store";
import { formatConversionTime, formatMessageByType } from "@/utils/imCommon";

import styles from "./conversation-item.module.scss";

interface IConversationProps {
  isActive: boolean;
  conversation: ConversationItemType;
}

const ConversationItem = ({ isActive, conversation }: IConversationProps) => {
  const navigate = useNavigate();
  const updateCurrentConversation = useConversationStore(
    (state) => state.updateCurrentConversation,
  );

  const toSpecifiedConversation = () => {
    if (isActive) {
      return;
    }
    updateCurrentConversation({ ...conversation });
    navigate(`/chat/${conversation.conversationID}`);
  };

  const latestMessageContent = useMemo(() => {
    let content = "";
    try {
      content = formatMessageByType(JSON.parse(conversation.latestMsg) as MessageItem);
    } catch (error) {
      content = t("messageDescription.catchMessage");
    }
    return parseTwemoji(content);
  }, [conversation.draftText, conversation.latestMsg, isActive]);

  const latestMessageTime = formatConversionTime(conversation.latestMsgSendTime);

  return (
    <div
      className={clsx(
        styles["conversation-item"],
        "border border-transparent",
        (isActive || conversation.isPinned) && `bg-[var(--primary-active)]`,
        conversation.isPinned && styles["conversation-item-pinned"],
      )}
      onClick={toSpecifiedConversation}
    >
      <Badge size="small" count={conversation.unreadCount}>
        <OIMAvatar
          src={conversation.faceURL}
          isgroup={Boolean(conversation.groupID)}
          text={conversation.showName}
        />
      </Badge>

      <div className="ml-3 flex h-11 flex-1 flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex-1 truncate font-medium">{conversation.showName}</div>
          <div className="ml-2 text-xs text-[var(--sub-text)]">{latestMessageTime}</div>
        </div>

        <div className="flex items-center">
          <div className="flex min-h-[16px] flex-1 items-center overflow-hidden text-xs">
            <div
              className="truncate text-[rgba(81,94,112,0.5)]"
              dangerouslySetInnerHTML={{
                __html: latestMessageContent,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ConversationItem);
