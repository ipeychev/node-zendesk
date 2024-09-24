export type User = {
    /**
     * - false if the user has been deleted
     */
    active: boolean;
    /**
     * - An alias displayed to end users
     */
    alias?: string;
    /**
     * - Whether or not the user is a chat-only agent
     */
    chat_only: boolean;
    /**
     * - The time the user was created
     */
    created_at: string;
    /**
     * - A custom role if the user is an agent on the Enterprise plan or above
     */
    custom_role_id?: number;
    /**
     * - The id of the user's default group
     */
    default_group_id?: number;
    /**
     * - Any details you want to store about the user, such as an address
     */
    details?: string;
    /**
     * - The user's primary email address. *Writeable on create only. On update, a secondary email is added. See Email Address
     */
    email?: string;
    /**
     * - A unique identifier from another system. The API treats the id as case insensitive. Example: "ian1" and "IAN1" are the same value.
     */
    external_id?: string;
    /**
     * - The time zone for the user
     */
    iana_time_zone: string;
    /**
     * - Automatically assigned when the user is created
     */
    id: number;
    /**
     * - Last time the user signed in to Zendesk Support or made an API request using an API token or basic authentication
     */
    last_login_at: string;
    /**
     * - The user's locale. A BCP-47 compliant tag for the locale. If both "locale" and "locale_id" are present on create or update, "locale_id" is ignored and only "locale" is used.
     */
    locale?: string;
    /**
     * - The user's language identifier
     */
    locale_id?: number;
    /**
     * - Designates whether the user has forum moderation capabilities
     */
    moderator?: boolean;
    /**
     * - The user's name
     */
    name: string;
    /**
     * - Any notes you want to store about the user
     */
    notes?: string;
    /**
     * - true if the user can only create private comments
     */
    only_private_comments?: boolean;
    /**
     * - The id of the user's organization. If the user has more than one organization memberships, the id of the user's default organization. If updating, see Organization ID
     */
    organization_id?: number;
    /**
     * - The user's primary phone number. See Phone Number below
     */
    phone?: string;
    /**
     * - The user's profile picture represented as an Attachment object
     */
    photo?: object;
    /**
     * - A URL pointing to the user's profile picture.
     */
    remote_photo_url?: string;
    /**
     * - This parameter is inert and has no effect. It may be deprecated in the future. Previously, this parameter determined whether a user could access a CSV report in a legacy Guide dashboard. This dashboard has been removed. See Announcing Guide legacy reporting upgrade to Explore
     */
    report_csv: boolean;
    /**
     * - If the agent has any restrictions; false for admins and unrestricted agents, true for other agents
     */
    restricted_agent?: boolean;
    /**
     * - The user's role. Possible values are "end-user", "agent", or "admin"
     */
    role?: string;
    /**
     * - The user's role id. 0 for a custom agent, 1 for a light agent, 2 for a chat agent, 3 for a chat agent added to the Support account as a contributor (Chat Phase 4), 4 for an admin, and 5 for a billing admin
     */
    role_type: number;
    /**
     * - If the user is shared from a different Zendesk Support instance. Ticket sharing accounts only
     */
    shared: boolean;
    /**
     * - If the user is a shared agent from a different Zendesk Support instance. Ticket sharing accounts only
     */
    shared_agent: boolean;
    /**
     * - Whether the phone number is shared or not. See Phone Number below
     */
    shared_phone_number?: boolean;
    /**
     * - The user's signature. Only agents and admins can have signatures
     */
    signature?: string;
    /**
     * - If the agent is suspended. Tickets from suspended users are also suspended, and these users cannot sign in to the end user portal
     */
    suspended?: boolean;
    /**
     * - The user's tags. Only present if your account has user tagging enabled
     */
    tags?: string[];
    /**
     * - Specifies which tickets the user has access to. Possible values are: "organization", "groups", "assigned", "requested", null. "groups" and "assigned" are valid only for agents. If you pass an invalid value to an end user (for example, "groups"), they will be assigned to "requested", regardless of their previous access
     */
    ticket_restriction?: string;
    /**
     * - The user's time zone. See Time Zone
     */
    time_zone?: string;
    /**
     * - If two factor authentication is enabled
     */
    two_factor_auth_enabled: boolean;
    /**
     * - The time the user was last updated
     */
    updated_at: string;
    /**
     * - The user's API url
     */
    url: string;
    /**
     * - Values of custom fields in the user's profile. See User Fields
     */
    user_fields?: object;
    /**
     * - Any of the user's identities is verified. See User Identities
     */
    verified?: boolean;
};
/**
 * @typedef {object} User
 * @property {boolean} active - false if the user has been deleted
 * @property {string} [alias] - An alias displayed to end users
 * @property {boolean} chat_only - Whether or not the user is a chat-only agent
 * @property {string} created_at - The time the user was created
 * @property {number} [custom_role_id] - A custom role if the user is an agent on the Enterprise plan or above
 * @property {number} [default_group_id] - The id of the user's default group
 * @property {string} [details] - Any details you want to store about the user, such as an address
 * @property {string} [email] - The user's primary email address. *Writeable on create only. On update, a secondary email is added. See Email Address
 * @property {string} [external_id] - A unique identifier from another system. The API treats the id as case insensitive. Example: "ian1" and "IAN1" are the same value.
 * @property {string} iana_time_zone - The time zone for the user
 * @property {number} id - Automatically assigned when the user is created
 * @property {string} last_login_at - Last time the user signed in to Zendesk Support or made an API request using an API token or basic authentication
 * @property {string} [locale] - The user's locale. A BCP-47 compliant tag for the locale. If both "locale" and "locale_id" are present on create or update, "locale_id" is ignored and only "locale" is used.
 * @property {number} [locale_id] - The user's language identifier
 * @property {boolean} [moderator] - Designates whether the user has forum moderation capabilities
 * @property {string} name - The user's name
 * @property {string} [notes] - Any notes you want to store about the user
 * @property {boolean} [only_private_comments] - true if the user can only create private comments
 * @property {number} [organization_id] - The id of the user's organization. If the user has more than one organization memberships, the id of the user's default organization. If updating, see Organization ID
 * @property {string} [phone] - The user's primary phone number. See Phone Number below
 * @property {object} [photo] - The user's profile picture represented as an Attachment object
 * @property {string} [remote_photo_url] - A URL pointing to the user's profile picture.
 * @property {boolean} report_csv - This parameter is inert and has no effect. It may be deprecated in the future. Previously, this parameter determined whether a user could access a CSV report in a legacy Guide dashboard. This dashboard has been removed. See Announcing Guide legacy reporting upgrade to Explore
 * @property {boolean} [restricted_agent] - If the agent has any restrictions; false for admins and unrestricted agents, true for other agents
 * @property {string} [role] - The user's role. Possible values are "end-user", "agent", or "admin"
 * @property {number} role_type - The user's role id. 0 for a custom agent, 1 for a light agent, 2 for a chat agent, 3 for a chat agent added to the Support account as a contributor (Chat Phase 4), 4 for an admin, and 5 for a billing admin
 * @property {boolean} shared - If the user is shared from a different Zendesk Support instance. Ticket sharing accounts only
 * @property {boolean} shared_agent - If the user is a shared agent from a different Zendesk Support instance. Ticket sharing accounts only
 * @property {boolean} [shared_phone_number] - Whether the phone number is shared or not. See Phone Number below
 * @property {string} [signature] - The user's signature. Only agents and admins can have signatures
 * @property {boolean} [suspended] - If the agent is suspended. Tickets from suspended users are also suspended, and these users cannot sign in to the end user portal
 * @property {string[]} [tags] - The user's tags. Only present if your account has user tagging enabled
 * @property {string} [ticket_restriction] - Specifies which tickets the user has access to. Possible values are: "organization", "groups", "assigned", "requested", null. "groups" and "assigned" are valid only for agents. If you pass an invalid value to an end user (for example, "groups"), they will be assigned to "requested", regardless of their previous access
 * @property {string} [time_zone] - The user's time zone. See Time Zone
 * @property {boolean} two_factor_auth_enabled - If two factor authentication is enabled
 * @property {string} updated_at - The time the user was last updated
 * @property {string} url - The user's API url
 * @property {object} [user_fields] - Values of custom fields in the user's profile. See User Fields
 * @property {boolean} [verified] - Any of the user's identities is verified. See User Identities
 */
/**
 * Client for the Zendesk Users API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/}
 */
export class Users extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    sideLoadMap: ({
        field: string;
        name: string;
        dataset: string;
        all: boolean;
        array?: undefined;
        dataKey?: undefined;
    } | {
        field: string;
        name: string;
        dataset: string;
        array: boolean;
        dataKey: string;
        all?: undefined;
    } | {
        field: string;
        name: string;
        dataset: string;
        all?: undefined;
        array?: undefined;
        dataKey?: undefined;
    })[];
    /**
     * Authenticates the current user.
     * @returns {Promise<object>} The authenticated user's details.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#show-the-currently-authenticated-user}
     * @example
     * const user = await client.users.auth();
     */
    auth(): Promise<object>;
    /**
     * Lists all users.
     * @returns {Promise<Array<User>>} An array of user objects.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#list-users}
     * @example
     * const users = await client.users.list();
     */
    list(): Promise<Array<User>>;
    /**
     * Lists users with a specific filter.
     * @param {string} type - The type of filter.
     * @param {string|number} value - The value for the filter.
     * @returns {Promise<Array<User>>} An array of user objects.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#list-users}
     * @example
     * const users = await client.users.listWithFilter('type', 'value');
     */
    listWithFilter(type: string, value: string | number): Promise<Array<User>>;
    /**
     * Lists users by group ID.
     * @param {number} id - The ID of the group.
     * @returns {Promise<Array<User>>} An array of user objects.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#list-users}
     * @example
     * const users = await client.users.listByGroup(12345);
     */
    listByGroup(id: number): Promise<Array<User>>;
    /**
     * Lists users by organization ID.
     * @param {number} id - The ID of the organization.
     * @returns {Promise<Array<User>>} An array of user objects.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#list-users}
     * @example
     * const users = await client.users.listByOrganization(12345);
     */
    listByOrganization(id: number): Promise<Array<User>>;
    /**
     * Shows details of a user by ID.
     * @param {number} id - The ID of the user.
     * @returns {Promise<{result: User}>} The user's details.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#show-user}
     * @example
     * const user = await client.users.show(12345);
     */
    show(id: number): Promise<{
        result: User;
    }>;
    /**
     * Shows details of multiple users by their IDs.
     * @param {Array<number>} userIds - An array of user IDs.
     * @returns {Promise<Array<User>>} An array of user details.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#show-many-users}
     * @example
     * const users = await client.users.showMany([12345, 67890]);
     */
    showMany(userIds: Array<number>): Promise<Array<User>>;
    /**
     * Creates a new user.
     * @param {object} user - The user details.
     * @returns {Promise<User>} The created user's details.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#create-user}
     * @example
     * const newUser = await client.users.create({name: 'John Doe', email: 'john@example.com'});
     */
    create(user: object): Promise<User>;
    /**
     * Creates multiple users.
     * @param {Array<object>} users - An array of user details.
     * @returns {Promise<Array<User>>} An array of created user details.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#create-many-users}
     * @example
     * const newUsers = await client.users.createMany([{name: 'John Doe', email: 'john@example.com'}, {name: 'Jane Smith', email: 'jane@example.com'}]);
     */
    createMany(users: Array<object>): Promise<Array<User>>;
    /**
     * Creates or updates a user.
     * @param {object} user - The user details.
     * @returns {Promise<User>} The created or updated user's details.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#create-or-update-user}
     * @example
     * const user = await client.users.createOrUpdate({name: 'John Doe', email: 'john@example.com'});
     */
    createOrUpdate(user: object): Promise<User>;
    /**
     * Creates or updates multiple users.
     * @param {Array<object>} users - An array of user details.
     * @returns {Promise<Array<User>>} An array of created or updated user details.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#create-or-update-many-users}
     * @example
     * const users = await client.users.createOrUpdateMany([{name: 'John Doe', email: 'john@example.com'}, {name: 'Jane Smith', email: 'jane@example.com'}]);
     */
    createOrUpdateMany(users: Array<object>): Promise<Array<User>>;
    /**
     * Updates a user by ID.
     * @param {number} id - The ID of the user.
     * @param {object} user - The updated user details.
     * @returns {Promise<User>} The updated user's details.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#update-user}
     * @example
     * const updatedUser = await client.users.update(12345, {name: 'Johnathan Doe'});
     */
    update(id: number, user: object): Promise<User>;
    /**
     * Updates multiple users.
     * @param {...*} arguments_ - Arguments including optional IDs and user details.
     * @returns {Promise<Array<User>>} An array of updated user details.
     * @throws {Error} Throws an error if not enough arguments are provided.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#update-many-users}
     * @example
     * const updatedUsers = await client.users.updateMany([12345, 67890], [{name: 'John Doe'}, {name: 'Jane Smith'}]);
     */
    updateMany(...arguments_: any[]): Promise<Array<User>>;
    /**
     * Suspends a user by ID.
     * @param {number} id - The ID of the user to suspend.
     * @returns {Promise<User>} The suspended user's details.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#suspend-user}
     * @example
     * await client.users.suspend(12345);
     */
    suspend(id: number): Promise<User>;
    /**
     * Unsuspends a user by ID.
     * @param {number} id - The ID of the user to unsuspend.
     * @returns {Promise<User>} The unsuspended user's details.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#unsuspend-user}
     * @example
     * await client.users.unsuspend(12345);
     */
    unsuspend(id: number): Promise<User>;
    /**
     * Deletes a user by ID.
     * @param {number} id - The ID of the user to delete.
     * @returns {Promise<void>}
     * @throws {Error} Throws an error if the user cannot be deleted.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#delete-user}
     * @example
     * await client.users.delete(12345);
     */
    delete(id: number): Promise<void>;
    /**
     * Deletes multiple users.
     * @param {...any} arguments_ - Arguments including optional IDs and user details.
     * @returns {Promise<void>}
     * @throws {Error} Throws an error if not enough arguments are provided.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#delete-many-users}
     * @example
     * await client.users.destroyMany([12345, 67890]);
     */
    destroyMany(...arguments_: any[]): Promise<void>;
    /**
     * Searches for users based on specific parameters.
     * @param {object} parameters - The search parameters.
     * @returns {Promise<Array<User>>} An array of user objects that match the search criteria.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#search-users}
     * @example
     * const users = await client.users.search({query: 'john@example.com'});
     */
    search(parameters: object): Promise<Array<User>>;
    /**
     * Retrieves details of the currently authenticated user.
     * @returns {Promise<{result: User}>} The user's details.The authenticated user's details.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#show-the-currently-authenticated-user}
     * @example
     * const user = await client.users.me();
     */
    me(): Promise<{
        result: User;
    }>;
    /**
     * Merges a user into another user.
     * @param {number} id - The ID of the user to be merged.
     * @param {number} targetId - The ID of the user into which the first user will be merged.
     * @returns {Promise<object>} The details of the merged user.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#merge-user-into-another-user}
     * @example
     * await client.users.merge(12345, 67890);
     */
    merge(id: number, targetId: number): Promise<object>;
    /**
     * Changes the password of a user.
     * @param {number} userId - The ID of the user whose password is to be changed.
     * @param {string} oldPassword - The current password of the user.
     * @param {string} newPassword - The new password for the user.
     * @returns {Promise<object>} The user's details after the password change.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#change-password}
     * @example
     * await client.users.password(12345, 'oldPassword123', 'newPassword456');
     */
    password(userId: number, oldPassword: string, newPassword: string): Promise<object>;
    /**
     * Retrieves users incrementally with included related data.
     * @param {number} startTime - The start time for the incremental export.
     * @param {string} include - The related data to include.
     * @returns {Promise<Array<object>>} An array of user objects with included data.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#incremental-export-users}
     * @example
     * const users = await client.users.incrementalInclude(1632614395, 'relatedData');
     */
    incrementalInclude(startTime: number, include: string): Promise<Array<object>>;
    /**
     * Retrieves users incrementally.
     * @param {number} startTime - The start time for the incremental export.
     * @returns {Promise<Array<object>>} An array of user objects.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#incremental-export-users}
     * @example
     * const users = await client.users.incremental(1632614395);
     */
    incremental(startTime: number): Promise<Array<object>>;
    /**
     * Retrieves a sample of users incrementally.
     * @param {number} startTime - The start time for the incremental export.
     * @returns {Promise<Array<object>>} A sample array of user objects.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/users/#incremental-sample-export-users}
     * @example
     * const usersSample = await client.users.incrementalSample(1632614395);
     */
    incrementalSample(startTime: number): Promise<Array<object>>;
    /**
     * Lists tags associated with a user.
     * @param {number} userId - The ID of the user.
     * @returns {Promise<Array<string>>} An array of tags associated with the user.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user-tags/#list-tags}
     * @example
     * const tags = await client.users.listTags(12345);
     */
    listTags(userId: number): Promise<Array<string>>;
    /**
     * Sets tags for a user.
     * @param {number} userId - The ID of the user.
     * @param {Array<string>} tags - An array of tags to set for the user.
     * @returns {Promise<object>} The user's details with the updated tags.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user-tags/#set-tags}
     * @example
     * await client.users.setTags(12345, ['tag1', 'tag2']);
     */
    setTags(userId: number, tags: Array<string>): Promise<object>;
    /**
     * Adds tags to a user.
     * @param {number} userId - The ID of the user.
     * @param {Array<string>} tags - An array of tags to add to the user.
     * @returns {Promise<object>} The user's details with the added tags.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user-tags/#add-tags}
     * @example
     * await client.users.addTags(12345, ['tag3', 'tag4']);
     */
    addTags(userId: number, tags: Array<string>): Promise<object>;
    /**
     * Removes tags from a user.
     * @param {number} userId - The ID of the user.
     * @param {Array<string>} tags - An array of tags to remove from the user.
     * @returns {Promise<void>}
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/users/user-tags/#remove-tags}
     * @example
     * await client.users.removeTags(12345, ['tag3', 'tag4']);
     */
    removeTags(userId: number, tags: Array<string>): Promise<void>;
}
import { Client } from "../client";
