/**
 * Represents a client for Zendesk OAuth Clients API.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/oauth/oauth_clients/}
 */
export class OAuthClients extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    /**
     * Lists all OAuth clients.
     * @returns {Promise<Array>} A list of OAuth clients.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/oauth/oauth_clients/#list-clients}
     * @example const clientsList = await client.oauthclients.list();
     */
    list(): Promise<any[]>;
    /**
     * Retrieves a specific OAuth client by ID.
     * @param {number} id - The ID of the OAuth client.
     * @returns {Promise<object>} The OAuth client details.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/oauth/oauth_clients/#show-client}
     * @example const clientDetails = await client.oauthclients.show(1234);
     */
    show(id: number): Promise<object>;
    /**
     * Creates a new OAuth client with the provided details.
     * @param {object} client - The details of the client to be created.
     * @returns {Promise<object>} The details of the created OAuth client.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/oauth/oauth_clients/#create-client}
     * @example
     * const newClient = {
     *   name: "Test Client",
     *   identifier: "unique_id"
     * };
     * const createdClient = await client.oauthclients.create(newClient);
     */
    create(client: object): Promise<object>;
    /**
     * Updates a specific OAuth client by ID.
     * @param {number} id - The ID of the OAuth client.
     * @param {object} client - The new details of the client.
     * @returns {Promise<object>} The updated OAuth client details.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/oauth/oauth_clients/#update-client}
     * @example
     * const updatedClient = {
     *   name: "My New OAuth2 Client"
     * };
     * const updatedDetails = await client.oauthclients.update(1234, updatedClient);
     */
    update(id: number, client: object): Promise<object>;
    /**
     * Deletes a specific OAuth client by ID.
     * @param {number} id - The ID of the OAuth client.
     * @returns {Promise<void>}
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/oauth/oauth_clients/#delete-client}
     * @example await client.oauthclients.delete(1234);
     */
    delete(id: number): Promise<void>;
    /**
     * Generates a new client secret for a specific OAuth client by ID.
     * @param {number} id - The ID of the OAuth client.
     * @returns {Promise<object>} The new client secret.
     * @throws {Error} Throws an error if the request fails.
     * @see {@link https://developer.zendesk.com/api-reference/ticketing/oauth/oauth_clients/#generate-secret}
     * @example const newSecret = await client.oauthclients.generateSecret(1234);
     */
    generateSecret(id: number): Promise<object>;
}
import { Client } from "../client";
