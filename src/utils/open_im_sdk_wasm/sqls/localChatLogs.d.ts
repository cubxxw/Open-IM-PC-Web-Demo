import { Database, QueryExecResult } from '@jlongster/sql.js';
export declare type ClientMessage = {
    [key: string]: any;
};
export declare function localChatLogs(db: Database): QueryExecResult[];
export declare function getMessage(db: Database, messageId: string): QueryExecResult[];
export declare function getMultipleMessage(db: Database, msgIDList: string[]): QueryExecResult[];
export declare function getSendingMessageList(db: Database): QueryExecResult[];
export declare function getNormalMsgSeq(db: Database): QueryExecResult[];
export declare function updateMessageTimeAndStatus(db: Database, clientMsgID: string, serverMsgID: string, sendTime: number, status: number): QueryExecResult[];
export declare function updateMessage(db: Database, clientMsgId: string, message: ClientMessage): QueryExecResult[];
export declare function insertMessage(db: Database, message: ClientMessage): QueryExecResult[];
export declare function batchInsertMessageList(db: Database, messageList: ClientMessage[]): QueryExecResult[];
export declare function getMessageList(db: Database, sourceID: string, sessionType: number, count: number, startTime: number, isReverse: boolean, loginUserID: string): QueryExecResult[];
export declare function getMessageListNoTime(db: Database, sourceID: string, sessionType: number, count: number, isReverse: boolean, loginUserID: string): QueryExecResult[];
export declare function messageIfExists(db: Database, clientMsgID: string): QueryExecResult[];
export declare function messageIfExistsBySeq(db: Database, seq: number): QueryExecResult[];
export declare function searchMessageByKeyword(db: Database, contentType: number[], keywordList: string[], keywordListMatchType: number, sourceID: string, startTime: number, endTime: number, sessionType: number, offset: number, count: number): QueryExecResult[];
export declare function searchMessageByContentType(db: Database, contentType: number[], sourceID: string, startTime: number, endTime: number, sessionType: number, offset: number, count: number): QueryExecResult[];
export declare function searchMessageByContentTypeAndKeyword(db: Database, contentType: number[], keywordList: string[], keywordListMatchType: number, startTime: number, endTime: number): QueryExecResult[];
export declare function updateMsgSenderNickname(db: Database, sendID: string, nickname: string, sessionType: number): QueryExecResult[];
export declare function updateMsgSenderFaceURL(db: Database, sendID: string, faceURL: string, sessionType: number): QueryExecResult[];
export declare function updateMsgSenderFaceURLAndSenderNickname(db: Database, sendID: string, faceURL: string, nickname: string, sessionType: number): QueryExecResult[];
export declare function getMsgSeqByClientMsgID(db: Database, clientMsgID: string): QueryExecResult[];
export declare function getMsgSeqListByGroupID(db: Database, groupID: string): QueryExecResult[];
export declare function getMsgSeqListByPeerUserID(db: Database, userID: string): QueryExecResult[];
export declare function getMsgSeqListBySelfUserID(db: Database, userID: string): QueryExecResult[];
export declare function deleteAllMessage(db: Database): QueryExecResult[];
export declare function getAllUnDeleteMessageSeqList(db: Database): QueryExecResult[];
export declare function updateSingleMessageHasRead(db: Database, sendID: string, clientMsgIDList: string[]): QueryExecResult[];
export declare function updateGroupMessageHasRead(db: Database, clientMsgIDList: string[], sessionType: number): QueryExecResult[];
export declare function updateMessageStatusBySourceID(db: Database, sourceID: string, status: number, sessionType: number, loginUserID: string): QueryExecResult[];