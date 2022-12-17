import { Database, QueryExecResult } from '@jlongster/sql.js';
export declare type ClientSuperGroupMessage = {
    [key: string]: any;
};
export declare function localSgChatLogs(db: Database, groupID: string): QueryExecResult[];
export declare function getSuperGroupNormalMsgSeq(db: Database, groupID: string): QueryExecResult[];
export declare function superGroupGetNormalMinSeq(db: Database, groupID: string): QueryExecResult[];
export declare function superGroupGetMessage(db: Database, groupID: string, clientMsgID: string): QueryExecResult[];
export declare function superGroupUpdateMessage(db: Database, groupID: string, clientMsgID: string, message: ClientSuperGroupMessage): QueryExecResult[];
export declare function superGroupBatchInsertMessageList(db: Database, groupID: string, messageList: ClientSuperGroupMessage[]): QueryExecResult[];
export declare function superGroupInsertMessage(db: Database, groupID: string, message: ClientSuperGroupMessage): QueryExecResult[];
export declare function superGroupGetMultipleMessage(db: Database, groupID: string, msgIDList: string[]): QueryExecResult[];
export declare function superGroupUpdateMessageTimeAndStatus(db: Database, groupID: string, clientMsgID: string, serverMsgID: string, sendTime: number, status: number): QueryExecResult[];
export declare function superGroupGetMessageListNoTime(db: Database, groupID: string, sessionType: number, count: number, isReverse: boolean): QueryExecResult[];
export declare function superGroupGetMessageList(db: Database, groupID: string, sessionType: number, count: number, startTime: number, isReverse: boolean): QueryExecResult[];
export declare function superGroupDeleteAllMessage(db: Database, groupID: string): QueryExecResult[];
export declare function superGroupSearchMessageByKeyword(db: Database, contentType: number[], keywordList: string[], keywordListMatchType: number, sourceID: string, startTime: number, endTime: number, sessionType: number, offset: number, count: number): QueryExecResult[];
export declare function superGroupSearchMessageByContentType(db: Database, contentType: number[], sourceID: string, startTime: number, endTime: number, sessionType: number, offset: number, count: number): QueryExecResult[];
export declare function superGroupSearchMessageByContentTypeAndKeyword(db: Database, contentType: number[], keywordList: string[], keywordListMatchType: number, startTime: number, endTime: number, groupID: string): QueryExecResult[];
export declare function superGroupUpdateMessageStatusBySourceID(db: Database, sourceID: string, status: string, sessionType: number): QueryExecResult[];
export declare function superGroupGetSendingMessageList(db: Database, groupID: string): QueryExecResult[];
export declare function superGroupUpdateGroupMessageHasRead(db: Database, msgIDList: string[], groupID: string): QueryExecResult[];
export declare function superGroupGetMsgSeqByClientMsgID(db: Database, clientMsgID: string, groupID: string): QueryExecResult[];