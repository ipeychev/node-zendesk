export type Participant = {
    /**
     * - If the participant is an agent, the agent's user id
     */
    user_id?: number;
    /**
     * - The name of the participant
     */
    name?: string;
    /**
     * - The email address of the participant
     */
    email?: string;
    /**
     * - If the participant is a Slack user or channel, the Slack workspace id
     */
    slack_workspace_id?: string;
    /**
     * - If the participant is a Slack channel, the Slack channel id
     */
    slack_channel_id?: string;
    /**
     * - If the participant is a Support ticket, the support group id
     */
    support_group_id?: string;
    /**
     * - If the participant is a Support ticket, the support agent id
     */
    support_agent_id?: string;
    /**
     * - If the participant is a Microsoft teams channel, the Teams channel id
     */
    msteams_channel_id?: string;
};
export type Message = {
    /**
     * - The subject of the message
     */
    subject?: string;
    /**
     * - A plain text string describing the message
     */
    preview_text?: string;
    /**
     * - The plain text version of the body of the message
     */
    body?: string;
    /**
     * - The HTML version of the body of the message
     */
    html_body?: string;
    /**
     * - The participant who sent the message. See Participants
     */
    from?: Participant;
    /**
     * - The list of participants the message was sent to. See Participants
     */
    to: Participant[];
    /**
     * - List of tokens received from uploading files for comment attachments. The files are attached by creating or updating tickets with the tokens. See Attaching files in Tickets
     */
    attachment_ids?: string[];
    /**
     * - A key-value object where all values are strings. Used for message metadata
     */
    external_ids?: {
        [key: string]: string;
    };
};
export type UpdateSideConversation = {
    /**
     * - The subject of the side conversation
     */
    subject?: string;
    /**
     * - A plain text string describing the side conversation
     */
    state?: "open" | "closed";
};
export type SideConversation = {
    /**
     * - The time the side conversation was created
     */
    created_at: string;
    /**
     * - A key-value store of metadata. All values must be strings
     */
    external_ids?: {
        [key: string]: string;
    };
    /**
     * - Automatically assigned when the side conversation is created
     */
    id: string;
    /**
     * - The time of the last message on the side conversation
     */
    message_added_at: string;
    /**
     * - An array of participants in the side conversation. See Participants
     */
    participants: Participant[];
    /**
     * - A plain text text describing the side conversation
     */
    preview_text: string;
    /**
     * - The state of the side conversation
     */
    state?: string;
    /**
     * - The time of the update of the state of the side conversation
     */
    state_updated_at: string;
    /**
     * - The subject of the side conversation
     */
    subject?: string;
    /**
     * - The parent ticket id of the side conversation
     */
    ticket_id: number;
    /**
     * - The time of the last update of the side conversation
     */
    updated_at: string;
    /**
     * - The API url of the side conversation
     */
    url: string;
};
export type SideConversationAttachment = {
    /**
     * - The content type of the attachment. This is read-only.
     */
    content_type: string;
    /**
     * - The height of the attachment image. This is read-only.
     */
    height: number;
    /**
     * - The id of the side conversation attachment. This is read-only.
     */
    id: string;
    /**
     * - The name of the attachment.
     */
    name: string;
    /**
     * - The size of the attachment. This is read-only.
     */
    size: number;
    /**
     * - The width of the attachment image. This is read-only.
     */
    width: number;
};
export type CreateSideConversation = {
    /**
     * - The side conversation object.
     */
    message: Message;
    /**
     * - A key-value object where all values are strings. Used for conversation metadata
     */
    external_ids?: {
        [key: string]: string;
    };
};
export type SideConversationResponse = {
    /**
     * - The side conversation object.
     */
    side_conversation: SideConversation;
};
/**
 * @typedef {object} Participant
 * @property {number} [user_id] - If the participant is an agent, the agent's user id
 * @property {string} [name] - The name of the participant
 * @property {string} [email] - The email address of the participant
 * @property {string} [slack_workspace_id] - If the participant is a Slack user or channel, the Slack workspace id
 * @property {string} [slack_channel_id] - If the participant is a Slack channel, the Slack channel id
 * @property {string} [support_group_id] - If the participant is a Support ticket, the support group id
 * @property {string} [support_agent_id] - If the participant is a Support ticket, the support agent id
 * @property {string} [msteams_channel_id] - If the participant is a Microsoft teams channel, the Teams channel id
 */
/**
 * @typedef {object} Message
 * @property {string} [subject] - The subject of the message
 * @property {string} [preview_text] - A plain text string describing the message
 * @property {string} [body] - The plain text version of the body of the message
 * @property {string} [html_body] - The HTML version of the body of the message
 * @property {Participant} [from] - The participant who sent the message. See Participants
 * @property {Participant[]} to - The list of participants the message was sent to. See Participants
 * @property {string[]} [attachment_ids] - List of tokens received from uploading files for comment attachments. The files are attached by creating or updating tickets with the tokens. See Attaching files in Tickets
 * @property {{[key: string]: string}} [external_ids] - A key-value object where all values are strings. Used for message metadata
 */
/**
 * @typedef {object} UpdateSideConversation
 * @property {string} [subject] - The subject of the side conversation
 * @property {'open' | 'closed'} [state] - A plain text string describing the side conversation
 */
/**
 * @typedef {object} SideConversation
 * @property {string} created_at - The time the side conversation was created
 * @property {{[key: string]: string}} [external_ids] - A key-value store of metadata. All values must be strings
 * @property {string} id - Automatically assigned when the side conversation is created
 * @property {string} message_added_at - The time of the last message on the side conversation
 * @property {Participant[]} participants - An array of participants in the side conversation. See Participants
 * @property {string} preview_text - A plain text text describing the side conversation
 * @property {string} [state] - The state of the side conversation
 * @property {string} state_updated_at - The time of the update of the state of the side conversation
 * @property {string} [subject] - The subject of the side conversation
 * @property {number} ticket_id - The parent ticket id of the side conversation
 * @property {string} updated_at - The time of the last update of the side conversation
 * @property {string} url - The API url of the side conversation
 */
/**
 * @typedef {object} SideConversationAttachment
 * @property {string} content_type - The content type of the attachment. This is read-only.
 * @property {number} height - The height of the attachment image. This is read-only.
 * @property {string} id - The id of the side conversation attachment. This is read-only.
 * @property {string} name - The name of the attachment.
 * @property {number} size - The size of the attachment. This is read-only.
 * @property {number} width - The width of the attachment image. This is read-only.
 */
/**
 * @typedef {object} CreateSideConversation
 * @property {Message} message - The side conversation object.
 * @property {{[key: string]: string}} [external_ids] - A key-value object where all values are strings. Used for conversation metadata
 */
/**
 * @typedef {object} SideConversationResponse
 * @property {SideConversation} side_conversation - The side conversation object.
 */
export class SideConversations extends Client {
    /**
     * @param {import('../client').ClientOptions} options - The client options.
     */
    constructor(options: import("../client").ClientOptions);
    jsonAPINames: string[];
    /**
     * Create a Side Conversation.
     * @param {number} ticketId - The ID of the ticket.
     * @param {CreateSideConversation} message - The side conversation object.
     * @returns {Promise<{result: SideConversationResponse}>} The created ticket details.
     * @throws {Error} If the details are not provided or invalid.
     * @see https://developer.zendesk.com/api-reference/ticketing/side_conversation/side_conversation/#create-side-conversation
     */
    create(ticketId: number, message: CreateSideConversation): Promise<{
        result: SideConversationResponse;
    }>;
    /**
     * Reply to a Side Conversation.
     * @param {number} ticketId - The ID of the ticket.
     * @param {string} sideConversationId - The ID of the side conversation.
     * @param {{message: Message}} message - The reply object.
     * @returns {Promise<{result: SideConversationResponse}>} The created ticket details.
     * @throws {Error} If the details are not provided or invalid.
     * @see https://developer.zendesk.com/api-reference/ticketing/side_conversation/side_conversation/#reply-to-side-conversation
     */
    reply(ticketId: number, sideConversationId: string, message: {
        message: Message;
    }): Promise<{
        result: SideConversationResponse;
    }>;
    /**
     * Update to a Side Conversation.
     * @param {number} ticketId - The ID of the ticket.
     * @param {string} sideConversationId - The ID of the side conversation.
     * @param {{side_conversation: Partial<UpdateSideConversation>}} update - The update object.
     * @returns {Promise<{result: SideConversationResponse}>} The updated ticket details.
     * @throws {Error} If the details are not provided or invalid.
     * @see https://developer.zendesk.com/api-reference/ticketing/side_conversation/side_conversation/#update-side-conversation
     */
    update(ticketId: number, sideConversationId: string, update: {
        side_conversation: Partial<UpdateSideConversation>;
    }): Promise<{
        result: SideConversationResponse;
    }>;
    /**
     * List all the Side Conversations tickets.
     * @param {number} ticketID - the Id of the ticket.
     * @returns {Promise<{result: Array<{ side_conversations: SideConversation[] }>}>} An array of tickets.
     * @see https://developer.zendesk.com/api-reference/ticketing/side_conversation/side_conversation/#list-side-conversations
     * @example
     * const tickets = await client.sideconversations.list(123);
     */
    list(ticketID: number): Promise<{
        result: Array<{
            side_conversations: SideConversation[];
        }>;
    }>;
    /**
     * Retrieve a specific ticket by its ID.
     * @param {number} ticketId - The ID of the ticket.
     * @param {string} sideConversationId - The ID of the side conversation.
     * @returns {Promise<{result: SideConversation}>} Details of the side conversation.
     * @throws {Error} If the ticket ID is not provided or invalid.
     * @see https://developer.zendesk.com/api-reference/ticketing/side_conversation/side_conversation/#show-side-conversation
     * @example
     * const ticket = await client.sideconversations.show(12345, 12333);
     */
    show(ticketId: number, sideConversationId: string): Promise<{
        result: SideConversation;
    }>;
    /**
     * Upload a file to be attached to a ticket comment.
     * @param {ArrayBuffer} file - The file data.
     * @param {object} options - The file options.
     * @param {string} options.filename - The name of the file.
     * @returns {Promise<SideConversationAttachment>} The attachment details.
     */
    attachments(file: ArrayBuffer, { filename }: {
        filename: string;
    }): Promise<SideConversationAttachment>;
}
import { Client } from "../client";
