/**
 * A recursive type that makes all properties of an object optional, including nested objects.
 */
export type RecursivePartial<T> = {
    /**
     * - A recursive partial property of T.
     */
    key?: Partial<{ [K in keyof T]: RecursivePartial<T[K]>; }>;
};
/**
 * Represents a group within Zendesk.
 */
export type Group = {
    /**
     * - The time the group was created.
     */
    created_at: string;
    /**
     * - If the group is the default one for the account.
     */
    default: boolean;
    /**
     * - Deleted groups get marked as such.
     */
    deleted: boolean;
    /**
     * - The description of the group.
     */
    description?: string;
    /**
     * - Automatically assigned when creating groups.
     */
    id: number;
    /**
     * - If true, the group is public. If false, the group is private. You can't change a private group to a public group.
     */
    is_public?: boolean;
    /**
     * - The name of the group.
     */
    name: string;
    /**
     * - The time of the last update of the group.
     */
    updated_at: string;
    /**
     * - The API URL of the group.
     */
    url: string;
};
/**
 * Represents the data structure to create or update a group.
 */
export type CreateOrUpdateGroup = {
    /**
     * - The group to create or update.
     */
    group: RecursivePartial<Group>;
};
/**
 * A recursive type that makes all properties of an object optional, including nested objects.
 * @template T
 * @typedef {object} RecursivePartial
 * @property {Partial<{[K in keyof T]: RecursivePartial<T[K]>}>} [key] - A recursive partial property of T.
 */
/**
 * Represents a group within Zendesk.
 * @typedef {object} Group
 * @property {string} created_at - The time the group was created.
 * @property {boolean} default - If the group is the default one for the account.
 * @property {boolean} deleted - Deleted groups get marked as such.
 * @property {string} [description] - The description of the group.
 * @property {number} id - Automatically assigned when creating groups.
 * @property {boolean} [is_public] - If true, the group is public. If false, the group is private. You can't change a private group to a public group.
 * @property {string} name - The name of the group.
 * @property {string} updated_at - The time of the last update of the group.
 * @property {string} url - The API URL of the group.
 */
/**
 * Represents the data structure to create or update a group.
 * @typedef {object} CreateOrUpdateGroup
 * @property {RecursivePartial<Group>} group - The group to create or update.
 */
/**
 * A client for interfacing with the Zendesk Groups API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/}
 */
export class Groups extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    sideLoadMap: {
        field: string;
        name: string;
        dataset: string;
        all: boolean;
    }[];
    /**
     * Retrieves a list of all groups.
     * @returns {Promise<Array<Group>>} A promise that resolves to the list of groups.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#list-groups}
     * @example
     * const allGroups = await client.groups.list();
     */
    list(): Promise<Array<Group>>;
    /**
     * Retrieves an approximate count of groups.
     * If the count exceeds 100,000, it is updated every 24 hours.
     * @returns {Promise<object>} A promise that resolves to the group count data.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#count-groups}
     * @example
     * const count = await client.groups.count();
     */
    count(): Promise<object>;
    /**
     * Retrieves the approximate count of groups for a specified user.
     * @param {number} userID - The ID of the user for whom to count the groups.
     * @returns {Promise<object>} A promise that resolves to the approximate count of groups for the user.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#count-groups}
     * @example
     * const groupCount = await client.groups.countByUser(12345);
     */
    countByUser(userID: number): Promise<object>;
    /**
     * Retrieves a list of all assignable groups.
     * @returns {Promise<object>} A promise that resolves to the list of assignable groups.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#list-assignable-groups}
     * @example
     * const assignableGroups = await client.groups.assignable();
     */
    assignable(): Promise<object>;
    /**
     * Retrieves details of a specific group by its ID.
     * @param {number} groupID - The ID of the group.
     * @returns {Promise<{result: Group}>} A promise that resolves to the group's details.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#show-group}
     * @example
     * const groupDetails = await client.groups.show(12345);
     */
    show(groupID: number): Promise<{
        result: Group;
    }>;
    /**
     * Creates a new group.
     * @param {CreateOrUpdateGroup} group - The group details to create.
     * @returns {Promise<{result: Group}>} A promise that resolves to the details of the created group.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#create-group}
     * @example
     * const newGroup = {
     *   name: "Support Team",
     *   description: "Handles support tickets"
     * };
     * const createdGroup = await client.groups.create(newGroup);
     */
    create(group: CreateOrUpdateGroup): Promise<{
        result: Group;
    }>;
    /**
     * Updates a specified group.
     * @param {number} groupID - The ID of the group to update.
     * @param {CreateOrUpdateGroup} group - The updated group details.
     * @returns {Promise<{result: Group}>} A promise that resolves to the details of the updated group.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#update-group}
     * @example
     * const updatedInfo = {
     *   name: "Updated Support Team"
     * };
     * const updatedGroup = await client.groups.update(12345, updatedInfo);
     */
    update(groupID: number, group: CreateOrUpdateGroup): Promise<{
        result: Group;
    }>;
    /**
     * Deletes a specified group by its ID.
     * @param {number} groupID - The ID of the group to delete.
     * @returns {Promise<object>} A promise that resolves to the response data (might be empty or a confirmation).
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/groups/groups/#delete-group}
     * @example
     * await client.groups.delete(12345);
     */
    delete(groupID: number): Promise<object>;
}
import { Client } from "../client";
