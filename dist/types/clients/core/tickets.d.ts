/**
 * A recursive type that makes all properties of an object optional, including nested objects.
 */
export type RecursivePartial<T> = {
    /**
     * - A recursive partial property of T.
     */
    key?: Partial<{ [K in keyof T]: RecursivePartial<T[K]>; }>;
};
export type Attachment = {
    /**
     * - The content type of the image. Example value: "image/png"
     */
    content_type: string;
    /**
     * - A full URL where the attachment image file can be downloaded. The file may be hosted externally so take care not to inadvertently send Zendesk authentication credentials. See Working with url properties
     */
    content_url: string;
    /**
     * - If true, the attachment has been deleted
     */
    deleted: boolean;
    /**
     * - The name of the image file
     */
    file_name: string;
    /**
     * - The height of the image file in pixels. If height is unknown, returns null
     */
    height: string;
    /**
     * - Automatically assigned when created
     */
    id: number;
    /**
     * - If true, the attachment is excluded from the attachment list and the attachment's URL can be referenced within the comment of a ticket. Default is false
     */
    inline: boolean;
    /**
     * - If true, you can download an attachment flagged as malware. If false, you can't download such an attachment.
     */
    malware_access_override: boolean;
    /**
     * - The result of the malware scan. There is a delay between the time the attachment is uploaded and when the malware scan is completed. Usually the scan is done within a few seconds, but high load conditions can delay the scan results. Possible values: "malware_found", "malware_not_found", "failed_to_scan", "not_scanned"
     */
    malware_scan_result: string;
    /**
     * - The URL the attachment image file has been mapped to
     */
    mapped_content_url: string;
    /**
     * - The size of the image file in bytes
     */
    size: number;
    /**
     * - An array of attachment objects. Note that photo thumbnails do not have thumbnails
     */
    thumbnails: object[];
    /**
     * - A URL to access the attachment details
     */
    url: string;
    /**
     * - The width of the image file in pixels. If width is unknown, returns null
     */
    width: string;
};
export type TicketComment = {
    /**
     * - Attachments, if any. See Attachment
     */
    attachments?: Attachment[];
    /**
     * - The id of the ticket audit record. See Show Audit
     */
    audit_id: number;
    /**
     * - The id of the comment author. See Author id
     */
    author_id: number;
    /**
     * - The comment string. See Bodies
     */
    body: string;
    /**
     * - The time the comment was created
     */
    created_at: string;
    /**
     * - The comment formatted as HTML. See Bodies
     */
    html_body: string;
    /**
     * - Automatically assigned when the comment is created
     */
    id: number;
    /**
     * - System information (web client, IP address, etc.) and comment flags, if any. See Comment flags
     */
    metadata?: object;
    /**
     * - The comment presented as plain text. See Bodies
     */
    plain_body: string;
    /**
     * - true if a public comment; false if an internal note. The initial value set on ticket creation persists for any additional comment unless you change it
     */
    public: boolean;
    /**
     * - Comment or VoiceComment. The JSON object for adding voice comments to tickets is different. See Adding voice comments to tickets
     */
    type: string;
    /**
     * - List of tokens received from uploading files for comment attachments. The files are attached by creating or updating tickets with the tokens. See Attaching files in Tickets
     */
    uploads?: string[];
    /**
     * - Describes how the object was created. See the Via object reference
     */
    via?: object;
};
/**
 * Tickets are the means through which your end users (customers) communicate with agents in Zendesk Support.
 */
export type Ticket = {
    /**
     * - Permission for agents to add add attachments to a comment. Defaults to true
     */
    allow_attachments: boolean;
    /**
     * - Is false if channelback is disabled, true otherwise. Only applicable for channels framework ticket
     */
    allow_channelback: boolean;
    /**
     * - Write only. The email address of the agent to assign the ticket to
     */
    assignee_email?: string;
    /**
     * - The agent currently assigned to the ticket
     */
    assignee_id?: number;
    /**
     * - Write only. An array of the IDs of attribute values to be associated with the ticket
     */
    attribute_value_ids?: number[];
    /**
     * - Enterprise only. The id of the brand this ticket is associated with
     */
    brand_id?: number;
    /**
     * - The ids of users currently CC'ed on the ticket
     */
    collaborator_ids?: number[];
    /**
     * - POST requests only. Users to add as cc's when creating a ticket. See Setting Collaborators
     */
    collaborators?: object[];
    /**
     * - Write only. An object that adds a comment to the ticket. See Ticket comments. To include an attachment with the comment, see Attaching files
     */
    comment?: TicketComment;
    /**
     * - When this record was created
     */
    created_at: string;
    /**
     * - Custom fields for the ticket. See Setting custom field values
     */
    custom_fields?: Array<CustomField>;
    /**
     * - The custom ticket status id of the ticket. See custom ticket statuses
     */
    custom_status_id?: number;
    /**
     * - Read-only first comment on the ticket. When creating a ticket, use comment to set the description. See Description and first comment
     */
    description: string;
    /**
     * - If this is a ticket of type "task" it has a due date. Due date format uses ISO 8601 format.
     */
    due_at?: string;
    /**
     * - The ids of agents or end users currently CC'ed on the ticket. See CCs and followers resources in the Support Help Center
     */
    email_cc_ids?: number[];
    /**
     * - Write only. An array of objects that represent agent or end users email CCs to add or delete from the ticket. See Setting email CCs
     */
    email_ccs?: object;
    /**
     * - An id you can use to link Zendesk Support tickets to local records
     */
    external_id?: string;
    /**
     * - The ids of agents currently following the ticket. See CCs and followers resources
     */
    follower_ids?: number[];
    /**
     * - Write only. An array of objects that represent agent followers to add or delete from the ticket. See Setting followers
     */
    followers?: object;
    /**
     * - The ids of the followups created from this ticket. Ids are only visible once the ticket is closed
     */
    followup_ids: number[];
    /**
     * - The topic in the Zendesk Web portal this ticket originated from, if any. The Web portal is deprecated
     */
    forum_topic_id?: number;
    /**
     * - If true, the ticket's via type is a messaging channel.
     */
    from_messaging_channel: boolean;
    /**
     * - The group this ticket is assigned to
     */
    group_id?: number;
    /**
     * - Is true if a ticket is a problem type and has one or more incidents linked to it. Otherwise, the value is false.
     */
    has_incidents: boolean;
    /**
     * - Automatically assigned when the ticket is created
     */
    id: number;
    /**
     * - Is true if any comments are public, false otherwise
     */
    is_public: boolean;
    /**
     * - Write only. A macro ID to be recorded in the ticket audit
     */
    macro_id?: number;
    /**
     * - POST requests only. List of macro IDs to be recorded in the ticket audit
     */
    macro_ids?: number[];
    /**
     * - Write only. Metadata for the audit. In the audit object, the data is specified in the custom property of the metadata object. See Setting Metadata
     */
    metadata?: object;
    /**
     * - The organization of the requester. You can only specify the ID of an organization associated with the requester. See Organization Memberships
     */
    organization_id?: number;
    /**
     * - The urgency with which the ticket should be addressed. Allowed values are "urgent", "high", "normal", or "low".
     */
    priority?: Priority;
    /**
     * - For tickets of type "incident", the ID of the problem the incident is linked to
     */
    problem_id?: number;
    /**
     * - The dynamic content placeholder, if present, or the "subject" value, if not. See Dynamic Content Items
     */
    raw_subject?: string;
    /**
     * - The original recipient e-mail address of the ticket. Notification emails for the ticket are sent from this address
     */
    recipient?: string;
    /**
     * - Write only. See Creating a ticket with a new requester
     */
    requester?: object;
    /**
     * - The user who requested this ticket
     */
    requester_id: number;
    /**
     * - Write only. Optional boolean. When true and an update_stamp date is included, protects against ticket update collisions and returns a message to let you know if one occurs. See Protecting against ticket update collisions. A value of false has the same effect as true. Omit the property to force the updates to not be safe
     */
    safe_update?: boolean;
    /**
     * - The satisfaction rating of the ticket, if it exists, or the state of satisfaction, "offered" or "unoffered". The value is null for plan types that don't support CSAT
     */
    satisfaction_rating?: object;
    /**
     * - The ids of the sharing agreements used for this ticket
     */
    sharing_agreement_ids?: number[];
    /**
     * - The state of the ticket. If your account has activated custom ticket statuses, this is the ticket's status category. See custom ticket statuses. Allowed values are "new", "open", "pending", "hold", "solved", or "closed".
     */
    status?: Status;
    /**
     * - The value of the subject field for this ticket
     */
    subject?: string;
    /**
     * - The user who submitted the ticket. The submitter always becomes the author of the first comment on the ticket
     */
    submitter_id?: number;
    /**
     * - The array of tags applied to this ticket
     */
    tags?: string[];
    /**
     * - Enterprise only. The id of the ticket form to render for the ticket
     */
    ticket_form_id?: number;
    /**
     * - The type of this ticket. Allowed values are "problem", "incident", "question", or "task".
     */
    type?: Type;
    /**
     * - When this record last got updated
     */
    updated_at: string;
    /**
     * - Write only. Datetime of last update received from API. See the safe_update property
     */
    updated_stamp?: string;
    /**
     * - The API url of this ticket
     */
    url: string;
    /**
     * - For more information, see the Via object reference
     */
    via?: object;
    /**
     * - POST requests only. The id of a closed ticket when creating a follow-up ticket. See Creating a follow-up ticket
     */
    via_followup_source_id?: number;
    /**
     * - Write only. For more information, see the Via object reference
     */
    via_id?: number;
    /**
     * - Write only. See Creating voicemail ticket
     */
    voice_comment?: object;
};
export type CustomField = {
    /**
     * - The ID of the custom field.
     */
    id: number;
    /**
     * - The value of the custom field.
     */
    value: string | number | boolean;
};
export type Priority = "urgent" | "high" | "normal" | "low";
export type Status = "new" | "open" | "pending" | "hold" | "solved" | "closed";
export type Type = "problem" | "incident" | "question" | "task";
export type CreateOrUpdateTicket = {
    /**
     * - The ticket object to create or update.
     */
    ticket?: RecursivePartial<Ticket>;
};
export type CreateManyTickets = {
    /**
     * - The ticket object to create many tickets.
     */
    tickets?: Array<Ticket>;
};
/**
 * A recursive type that makes all properties of an object optional, including nested objects.
 * @template T
 * @typedef {object} RecursivePartial
 * @property {Partial<{[K in keyof T]: RecursivePartial<T[K]>}>} [key] - A recursive partial property of T.
 */
/**
 * @typedef {object} Attachment
 * @property {string} content_type - The content type of the image. Example value: "image/png"
 * @property {string} content_url - A full URL where the attachment image file can be downloaded. The file may be hosted externally so take care not to inadvertently send Zendesk authentication credentials. See Working with url properties
 * @property {boolean} deleted - If true, the attachment has been deleted
 * @property {string} file_name - The name of the image file
 * @property {string} height - The height of the image file in pixels. If height is unknown, returns null
 * @property {number} id - Automatically assigned when created
 * @property {boolean} inline - If true, the attachment is excluded from the attachment list and the attachment's URL can be referenced within the comment of a ticket. Default is false
 * @property {boolean} malware_access_override - If true, you can download an attachment flagged as malware. If false, you can't download such an attachment.
 * @property {string} malware_scan_result - The result of the malware scan. There is a delay between the time the attachment is uploaded and when the malware scan is completed. Usually the scan is done within a few seconds, but high load conditions can delay the scan results. Possible values: "malware_found", "malware_not_found", "failed_to_scan", "not_scanned"
 * @property {string} mapped_content_url - The URL the attachment image file has been mapped to
 * @property {number} size - The size of the image file in bytes
 * @property {object[]} thumbnails - An array of attachment objects. Note that photo thumbnails do not have thumbnails
 * @property {string} url - A URL to access the attachment details
 * @property {string} width - The width of the image file in pixels. If width is unknown, returns null
 */
/**
 * @typedef {object} TicketComment
 * @property {Attachment[]} [attachments] - Attachments, if any. See Attachment
 * @property {number} audit_id - The id of the ticket audit record. See Show Audit
 * @property {number} author_id - The id of the comment author. See Author id
 * @property {string} body - The comment string. See Bodies
 * @property {string} created_at - The time the comment was created
 * @property {string} html_body - The comment formatted as HTML. See Bodies
 * @property {number} id - Automatically assigned when the comment is created
 * @property {object} [metadata] - System information (web client, IP address, etc.) and comment flags, if any. See Comment flags
 * @property {string} plain_body - The comment presented as plain text. See Bodies
 * @property {boolean} public - true if a public comment; false if an internal note. The initial value set on ticket creation persists for any additional comment unless you change it
 * @property {string} type - Comment or VoiceComment. The JSON object for adding voice comments to tickets is different. See Adding voice comments to tickets
 * @property {string[]} [uploads] - List of tokens received from uploading files for comment attachments. The files are attached by creating or updating tickets with the tokens. See Attaching files in Tickets
 * @property {object} [via] - Describes how the object was created. See the Via object reference
 */
/**
 * Tickets are the means through which your end users (customers) communicate with agents in Zendesk Support.
 * @typedef {object} Ticket
 * @property {boolean} allow_attachments - Permission for agents to add add attachments to a comment. Defaults to true
 * @property {boolean} allow_channelback - Is false if channelback is disabled, true otherwise. Only applicable for channels framework ticket
 * @property {string} [assignee_email] - Write only. The email address of the agent to assign the ticket to
 * @property {number} [assignee_id] - The agent currently assigned to the ticket
 * @property {number[]} [attribute_value_ids] - Write only. An array of the IDs of attribute values to be associated with the ticket
 * @property {number} [brand_id] - Enterprise only. The id of the brand this ticket is associated with
 * @property {number[]} [collaborator_ids] - The ids of users currently CC'ed on the ticket
 * @property {object[]} [collaborators] - POST requests only. Users to add as cc's when creating a ticket. See Setting Collaborators
 * @property {TicketComment} [comment] - Write only. An object that adds a comment to the ticket. See Ticket comments. To include an attachment with the comment, see Attaching files
 * @property {string} created_at - When this record was created
 * @property {Array<CustomField>} [custom_fields] - Custom fields for the ticket. See Setting custom field values
 * @property {number} [custom_status_id] - The custom ticket status id of the ticket. See custom ticket statuses
 * @property {string} description - Read-only first comment on the ticket. When creating a ticket, use comment to set the description. See Description and first comment
 * @property {string} [due_at] - If this is a ticket of type "task" it has a due date. Due date format uses ISO 8601 format.
 * @property {number[]} [email_cc_ids] - The ids of agents or end users currently CC'ed on the ticket. See CCs and followers resources in the Support Help Center
 * @property {object} [email_ccs] - Write only. An array of objects that represent agent or end users email CCs to add or delete from the ticket. See Setting email CCs
 * @property {string} [external_id] - An id you can use to link Zendesk Support tickets to local records
 * @property {number[]} [follower_ids] - The ids of agents currently following the ticket. See CCs and followers resources
 * @property {object} [followers] - Write only. An array of objects that represent agent followers to add or delete from the ticket. See Setting followers
 * @property {number[]} followup_ids - The ids of the followups created from this ticket. Ids are only visible once the ticket is closed
 * @property {number} [forum_topic_id] - The topic in the Zendesk Web portal this ticket originated from, if any. The Web portal is deprecated
 * @property {boolean} from_messaging_channel - If true, the ticket's via type is a messaging channel.
 * @property {number} [group_id] - The group this ticket is assigned to
 * @property {boolean} has_incidents - Is true if a ticket is a problem type and has one or more incidents linked to it. Otherwise, the value is false.
 * @property {number} id - Automatically assigned when the ticket is created
 * @property {boolean} is_public - Is true if any comments are public, false otherwise
 * @property {number} [macro_id] - Write only. A macro ID to be recorded in the ticket audit
 * @property {number[]} [macro_ids] - POST requests only. List of macro IDs to be recorded in the ticket audit
 * @property {object} [metadata] - Write only. Metadata for the audit. In the audit object, the data is specified in the custom property of the metadata object. See Setting Metadata
 * @property {number} [organization_id] - The organization of the requester. You can only specify the ID of an organization associated with the requester. See Organization Memberships
 * @property {Priority} [priority] - The urgency with which the ticket should be addressed. Allowed values are "urgent", "high", "normal", or "low".
 * @property {number} [problem_id] - For tickets of type "incident", the ID of the problem the incident is linked to
 * @property {string} [raw_subject] - The dynamic content placeholder, if present, or the "subject" value, if not. See Dynamic Content Items
 * @property {string} [recipient] - The original recipient e-mail address of the ticket. Notification emails for the ticket are sent from this address
 * @property {object} [requester] - Write only. See Creating a ticket with a new requester
 * @property {number} requester_id - The user who requested this ticket
 * @property {boolean} [safe_update] - Write only. Optional boolean. When true and an update_stamp date is included, protects against ticket update collisions and returns a message to let you know if one occurs. See Protecting against ticket update collisions. A value of false has the same effect as true. Omit the property to force the updates to not be safe
 * @property {object} [satisfaction_rating] - The satisfaction rating of the ticket, if it exists, or the state of satisfaction, "offered" or "unoffered". The value is null for plan types that don't support CSAT
 * @property {number[]} [sharing_agreement_ids] - The ids of the sharing agreements used for this ticket
 * @property {Status} [status] - The state of the ticket. If your account has activated custom ticket statuses, this is the ticket's status category. See custom ticket statuses. Allowed values are "new", "open", "pending", "hold", "solved", or "closed".
 * @property {string} [subject] - The value of the subject field for this ticket
 * @property {number} [submitter_id] - The user who submitted the ticket. The submitter always becomes the author of the first comment on the ticket
 * @property {string[]} [tags] - The array of tags applied to this ticket
 * @property {number} [ticket_form_id] - Enterprise only. The id of the ticket form to render for the ticket
 * @property {Type} [type] - The type of this ticket. Allowed values are "problem", "incident", "question", or "task".
 * @property {string} updated_at - When this record last got updated
 * @property {string} [updated_stamp] - Write only. Datetime of last update received from API. See the safe_update property
 * @property {string} url - The API url of this ticket
 * @property {object} [via] - For more information, see the Via object reference
 * @property {number} [via_followup_source_id] - POST requests only. The id of a closed ticket when creating a follow-up ticket. See Creating a follow-up ticket
 * @property {number} [via_id] - Write only. For more information, see the Via object reference
 * @property {object} [voice_comment] - Write only. See Creating voicemail ticket
 */
/**
 * @typedef {object} CustomField
 * @property {number} id - The ID of the custom field.
 * @property {string|number|boolean} value - The value of the custom field.
 */
/**
 * @typedef {'urgent' | 'high' | 'normal' | 'low'} Priority
 */
/**
 * @typedef {'new' | 'open' | 'pending' | 'hold' | 'solved' | 'closed'} Status
 */
/**
 * @typedef {'problem' |'incident' | 'question' | 'task'} Type
 */
/**
 * @typedef {object} CreateOrUpdateTicket
 * @property {RecursivePartial<Ticket>} [ticket] - The ticket object to create or update.
 */
/**
 * @typedef {object} CreateManyTickets
 * @property {Array<Ticket>} [tickets] - The ticket object to create many tickets.
 */
/**
 * @class
 * Client for the Zendesk API - Tickets.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/}
 */
export class Tickets extends Client {
    /**
     * @param {import('../client').ClientOptions} options - The client options.
     */
    constructor(options: import("../client").ClientOptions);
    jsonAPINames: string[];
    sideLoadMap: {
        field: string;
        name: string;
        dataset: string;
    }[];
    /**
     * List all the tickets.
     * @returns {Promise<Array<Ticket>>} An array of tickets.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#list-tickets}
     * @example
     * const tickets = await client.tickets.list();
     */
    list(): Promise<Array<Ticket>>;
    /**
     * List all tickets assigned to a specific user.
     * @param {number} userID - The ID of the user.
     * @returns {Promise<Array<Ticket>>} An array of tickets assigned to the user.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#list-tickets}
     * @example
     * const assignedTickets = await client.tickets.listAssigned(12345);
     */
    listAssigned(userID: number): Promise<Array<Ticket>>;
    /**
     * List all tickets associated with a specific organization.
     * @param {number} orgID - The ID of the organization.
     * @returns {Promise<Array<Ticket>>} An array of tickets under the organization.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#list-tickets}
     * @example
     * const orgTickets = await client.tickets.listByOrganization(6789);
     */
    listByOrganization(orgID: number): Promise<Array<Ticket>>;
    /**
     * List all tickets requested by a specific user.
     * @param {number} userID - The ID of the user.
     * @returns {Promise<Array<Ticket>>} An array of tickets requested by the user.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#list-tickets}
     * @example
     * const requestedTickets = await client.tickets.listByUserRequested(12345);
     */
    listByUserRequested(userID: number): Promise<Array<Ticket>>;
    /**
     * List all tickets where a specific user is CC'd.
     * @param {number} userID - The ID of the user.
     * @returns {Promise<Array<Ticket>>} An array of tickets where the user is CC'd.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#list-tickets}
     * @example
     * const ccdTickets = await client.tickets.listByUserCCD(12345);
     */
    listByUserCCD(userID: number): Promise<Array<Ticket>>;
    /**
     * List tickets based on a specific filter.
     * @param {string} type - Type of filter.
     * @param {string|number} value - Value for the filter.
     * @returns {Promise<Array<Ticket>>} An array of tickets matching the filter.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#list-tickets}
     * @example
     * const filteredTickets = await client.tickets.listWithFilter('status', 'open');
     */
    listWithFilter(type: string, value: string | number): Promise<Array<Ticket>>;
    /**
     * List recently viewed tickets by the requesting agent.
     * @returns {Promise<Array<Ticket>>} An array of recently viewed tickets.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#list-tickets}
     * @example
     * const recentTickets = await client.tickets.listRecent();
     */
    listRecent(): Promise<Array<Ticket>>;
    /**
     * List collaborators of a specific ticket.
     * @param {number} ticketId - The ID of the ticket.
     * @returns {Promise<Array>} An array of collaborators for the ticket.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#list-tickets}
     * @example
     * const collaborators = await client.tickets.listCollaborators(7890);
     */
    listCollaborators(ticketId: number): Promise<any[]>;
    /**
     * List incidents related to a specific ticket.
     * @param {number} ticketId - The ID of the ticket.
     * @returns {Promise<Array>} An array of incidents related to the ticket.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#list-tickets}
     * @example
     * const incidents = await client.tickets.listIncidents(7890);
     */
    listIncidents(ticketId: number): Promise<any[]>;
    /**
     * Retrieve metrics for a specific ticket.
     * @param {number} ticketId - The ID of the ticket.
     * @returns {Promise<object>} Metrics details for the ticket.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#list-tickets}
     * @example
     * const metrics = await client.tickets.listMetrics(7890);
     */
    listMetrics(ticketId: number): Promise<object>;
    /**
     * Retrieve a specific ticket by its ID.
     * @param {number} ticketId - The ID of the ticket.
     * @returns {Promise<{result: Ticket}>} Details of the ticket.
     * @throws {Error} If the ticket ID is not provided or invalid.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#show-ticket}
     * @example
     * const ticket = await client.tickets.show(12345);
     */
    show(ticketId: number): Promise<{
        result: Ticket;
    }>;
    /**
     * Retrieve details for multiple tickets based on their IDs.
     * @param {Array<number>} ticketIds - An array of ticket IDs to fetch.
     * @returns {Promise<Array<Ticket>>} An array of ticket details.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#show-multiple-tickets}
     * @example
     * const ticketsDetails = await client.tickets.showMany([123, 456, 789]);
     */
    showMany(ticketIds: Array<number>): Promise<Array<Ticket>>;
    /**
     * Create a new ticket.
     * @param {CreateOrUpdateTicket} ticket - Details of the ticket to be created.
     * @returns {Promise<{result: Ticket}>} The created ticket details.
     * @throws {Error} If the ticket details are not provided or invalid.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#create-ticket}
     * @example
     * const newTicket = await client.tickets.create({ subject: 'New ticket', description: 'Ticket description' });
     */
    create(ticket: CreateOrUpdateTicket): Promise<{
        result: Ticket;
    }>;
    /**
     * Create multiple new tickets.
     * @param {CreateManyTickets} tickets - An object of tickets containing an array of tickets.
     * @returns {Promise<Array<Ticket>>} A promise that resolves to an array of created ticket objects.
     * @throws {Error} If the provided `tickets` is not an array or is empty.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#create-many-tickets}
     * @example
     * // Create multiple new tickets
     * const newTickets = {
     *  tickets: [
     *    { subject: 'Ticket 1', description: 'Description 1' },
     *    { subject: 'Ticket 2', description: 'Description 2' },
     *   ]
     * };
     * const createdTickets = await client.tickets.createMany(newTickets);
     */
    createMany(tickets: CreateManyTickets): Promise<Array<Ticket>>;
    /**
     * Update an existing ticket by its ID.
     * @param {number} ticketId - The ID of the ticket to update.
     * @param {CreateOrUpdateTicket} ticket - The updated ticket data as an object.
     * @returns {Promise<{result: Ticket, response: {ticket:Ticket, audit:any[]}}>} A promise that resolves to the updated ticket object.
     * @throws {Error} If `ticketId` is not a number or if `ticket` is not an object.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#update-ticket}
     * @example
     * // Update an existing ticket
     * const updatedTicketData = {
     *   subject: 'Updated Ticket Subject',
     *   description: 'Updated Ticket Description',
     * };
     * const updatedTicket = await client.tickets.update(123, updatedTicketData);
     */
    update(ticketId: number, ticket: CreateOrUpdateTicket): Promise<{
        result: Ticket;
        response: {
            ticket: Ticket;
            audit: any[];
        };
    }>;
    /**
     * Update multiple tickets by their IDs.
     * @param {Array<number>} ticketIds - An array of ticket IDs to update.
     * @param {object} ticket - The updated ticket data as an object.
     * @returns {Promise<object>} A promise that resolves to the updated ticket object.
     * @throws {Error} If `ticketIds` is not an array of numbers or if `ticket` is not an object.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#update-many-tickets}
     * @example
     * // Update multiple tickets by their IDs
     * const ticketIdsToUpdate = [123, 456, 789];
     * const updatedTicketData = {
     *   status: 'solved',
     *   priority: 'high',
     * };
     * const updatedTickets = await client.tickets.updateMany(ticketIdsToUpdate, updatedTicketData);
     */
    updateMany(ticketIds: Array<number>, ticket: object): Promise<object>;
    /**
     * Delete a ticket by its ID.
     * @param {number} ticketId - The ID of the ticket to delete.
     * @returns {Promise<void>} A promise that resolves when the ticket is successfully deleted.
     * @throws {Error} If `ticketId` is not a number or is not provided.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#delete-ticket}
     * @example
     * // Delete a ticket by its ID
     * const ticketIdToDelete = 123;
     * await client.tickets.delete(ticketIdToDelete);
     */
    delete(ticketId: number): Promise<void>;
    /**
     * Delete multiple tickets by their IDs.
     * @param {Array<number>} ticketIds - An array of ticket IDs to delete.
     * @returns {Promise<void>} A promise that resolves when the tickets are successfully deleted.
     * @throws {Error} If `ticketIds` is not an array of valid ticket IDs.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#bulk-delete-tickets}
     * @example
     * // Delete multiple tickets by their IDs
     * const ticketIdsToDelete = [123, 456, 789];
     * await client.tickets.deleteMany(ticketIdsToDelete);
     */
    deleteMany(ticketIds: Array<number>): Promise<void>;
    /**
     * Merge a ticket with another ticket.
     * @param {number} ticketId - The ID of the ticket to be merged.
     * @param {object} mergedTicket - The ticket object representing the ticket to merge with.
     * @returns {Promise<object>} A promise that resolves with the merged ticket object.
     * @throws {Error} If `ticketId` is not a valid ticket ID or `mergedTicket` is not a valid ticket object.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#merge-tickets}
     * @example
     * // Merge a ticket with another ticket
     * const sourceTicketId = 123;
     * const targetTicket = {
     *   subject: 'Merged Ticket',
     *   description: 'This is the merged ticket description.',
     *   // ...other ticket properties
     * };
     * const mergedTicket = await client.tickets.merge(sourceTicketId, targetTicket);
     */
    merge(ticketId: number, mergedTicket: object): Promise<object>;
    /**
     * **DEPRECATED**: Use the `TicketExport` class method `export` instead.
     *
     * Export tickets based on a specified start time.
     * @param {string} startTime - The start time for exporting tickets.
     * @returns {Promise<object>} A promise that resolves with the exported tickets.
     * @throws {Error} If `startTime` is not a valid string.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#ticket-export}
     * @example
     * // Export tickets based on a start time
     * const startTime = '2023-01-01T00:00:00Z';
     * const exportedTickets = await client.tickets.export(startTime);
     * @deprecated Use `TicketExport.export(startTime)` method instead.
     */
    export(startTime: string): Promise<object>;
    /**
     * **DEPRECATED**: Use the `TicketExport` class method `sample` instead.
     *
     * Export a sample of tickets based on a specified start time.
     * @param {string} startTime - The start time for exporting the sample of tickets.
     * @returns {Promise<object>} A promise that resolves with the exported sample of tickets.
     * @throws {Error} If `startTime` is not a valid string.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-sample-export}
     * @example
     * // Export a sample of tickets based on a start time
     * const startTime = '2023-01-01T00:00:00Z';
     * const exportedSample = await client.tickets.exportSample(startTime);
     * @deprecated Use `TicketExport.sample(startTime)` method instead.
     */
    exportSample(startTime: string): Promise<object>;
    /**
     * **DEPRECATED**: Use the `TicketExport` class method `export` instead.
     *
     * Export incremental tickets based on a specified start time.
     * @param {string} startTime - The start time for exporting incremental tickets.
     * @returns {Promise<Array>} A promise that resolves with an array of exported incremental tickets.
     * @throws {Error} If `startTime` is not a valid string.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#ticket-export-incremental}
     * @example
     * // Export incremental tickets based on a start time
     * const startTime = '2023-01-01T00:00:00Z';
     * const incrementalTickets = await client.tickets.incremental(startTime);
     * @deprecated Use `TicketExport.export(startTime)` method instead.
     */
    incremental(startTime: string): Promise<any[]>;
    /**
     * **DEPRECATED**: Use the `TicketExport` class method `exportWithInclude` instead.
     *
     * Export incremental tickets based on a specified start time and optional include parameters.
     * @param {string} startTime - The start time for exporting incremental tickets.
     * @param {string} include - Optional parameters to include in the export.
     * @returns {Promise<Array>} A promise that resolves with an array of exported incremental tickets.
     * @throws {Error} If `startTime` is not a valid string.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#ticket-export-incremental-include}
     * @example
     * // Export incremental tickets based on a start time with optional include parameters
     * const startTime = '2023-01-01T00:00:00Z';
     * const include = 'users,groups';
     * const incrementalTickets = await client.tickets.incrementalInclude(startTime, include);
     * @deprecated Use `TicketExport.exportWithInclude(startTime, include)` method instead.
     */
    incrementalInclude(startTime: string, include: string): Promise<any[]>;
    /**
     * **DEPRECATED**: Use the `TicketExport` class method `sample` instead.
     *
     * Export a sample of incremental tickets based on a specified start time.
     * @param {string} startTime - The start time for exporting the sample of incremental tickets.
     * @returns {Promise<Array>} A promise that resolves with an array of exported incremental tickets.
     * @throws {Error} If `startTime` is not a valid string.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#ticket-export-incremental-sample}
     * @example
     * // Export a sample of incremental tickets based on a start time
     * const startTime = '2023-01-01T00:00:00Z';
     * const incrementalSampleTickets = await client.tickets.incrementalSample(startTime);
     * @deprecated Use `TicketExport.sample(startTime)` method instead.
     */
    incrementalSample(startTime: string): Promise<any[]>;
    /**
     * Retrieve comments associated with a specific ticket.
     * @param {number} ticketId - The ID of the ticket to retrieve comments for.
     * @returns {Promise<Array>} A promise that resolves with an array of comments associated with the ticket.
     * @throws {Error} If `ticketId` is not a valid number.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_comments/}
     * @example
     * // Retrieve comments for a specific ticket
     * const ticketId = 12345;
     * const comments = await client.tickets.getComments(ticketId);
     */
    getComments(ticketId: number): Promise<any[]>;
    /**
     * Retrieve audits associated with a specific ticket. (Deprecated: Use TicketAudits class list method instead)
     * @param {number} ticketId - The ID of the ticket to retrieve audits for.
     * @returns {Promise<Array>} A promise that resolves with an array of audits associated with the ticket.
     * @throws {Error} If `ticketId` is not a valid number.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#listing-ticket-audits}
     * @example
     * // Retrieve audits for a specific ticket (deprecated)
     * const ticketId = 12345;
     * const audits = await client.tickets.exportAudit(ticketId);
     * @deprecated Use the `TicketAudits` class `list` method instead.
     */
    exportAudit(ticketId: number): Promise<any[]>;
    /**
     * Add tags to a specific ticket.
     * @param {number} ticketId - The ID of the ticket to add tags to.
     * @param {Array<string>} tags - An array of tags to add to the ticket.
     * @returns {Promise<void>} A promise that resolves when the tags are successfully added to the ticket.
     * @throws {Error} If `ticketId` is not a valid number or `tags` is not an array of strings.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#updating-tag-lists}
     * @example
     * // Add tags to a specific ticket
     * const ticketId = 12345;
     * const tags = ['tag1', 'tag2'];
     * await client.tickets.addTags(ticketId, tags);
     */
    addTags(ticketId: number, tags: Array<string>): Promise<void>;
    /**
     * Replace tags on a specific ticket with new tags.
     * @param {number} ticketId - The ID of the ticket to replace tags on.
     * @param {Array<string>} tags - An array of new tags to replace the existing tags on the ticket.
     * @returns {Promise<void>} A promise that resolves when the tags are successfully replaced on the ticket.
     * @throws {Error} If `ticketId` is not a valid number or `tags` is not an array of strings.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/#updating-tag-lists}
     * @example
     * // Replace tags on a specific ticket
     * const ticketId = 12345;
     * const newTags = ['newTag1', 'newTag2'];
     * await client.tickets.updateTags(ticketId, newTags);
     */
    updateTags(ticketId: number, tags: Array<string>): Promise<void>;
}
import { Client } from "../client";
