/**
 * Manages services for the Zendesk client.
 *
 * This class provides access to various service-related functionality within the Zendesk API.
 */
export class ZendeskClientServices {
    /**
     * Creates a new instance of ZendeskClientServices.
     * @param {import('../../index.js').ZendeskClient} client - The Zendesk client instance.
     */
    constructor(client: import("../../index.js").ZendeskClient);
    client: import("../../index.js").ZendeskClient;
    /**
     * Instantiates a new service class.
     * @template T
     * @param {new (options: import('../../index.js').ZendeskClientOptions) => T} className - The class to instantiate.
     * @returns {T} An instance of the provided class.
     */
    _instantiate<T>(className: new (options: import("../../index.js").ZendeskClientOptions) => T): T;
    get links(): import("./links").Links;
}
