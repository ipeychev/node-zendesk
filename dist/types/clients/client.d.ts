export type ZendeskClientOptions = import("../index").ZendeskClientOptions;
/**
 * This type extends `ZendeskClientOptions` to be used for configuring the Client instance.
 * All properties of `ZendeskClientOptions` are available here.
 */
export type ClientOptions = ZendeskClientOptions;
/**
 * @typedef {import('../index').ZendeskClientOptions} ZendeskClientOptions
 */
/**
 * @typedef {ZendeskClientOptions} ClientOptions
 *
 * This type extends `ZendeskClientOptions` to be used for configuring the Client instance.
 * All properties of `ZendeskClientOptions` are available here.
 */
/**
 * Represents a client to interact with the Zendesk API, providing functionalities to make various types of requests.
 * This client handles request construction, response processing, event emission, and more.
 * @class
 * @property {ClientOptions} options - Configuration options for the client.
 * @property {Array} sideLoad - Array to handle side-loaded resources.
 * @property {Array} jsonAPINames - Array to hold names used in the JSON API.
 * @property {boolean} useDotJson - Flag to indicate if the API endpoint should use '.json' ending.
 * @property {ApiTypes} apiType - Type of Zendesk API to initialize (e.g., 'core', 'helpcenter').
 * @property {CustomEventTarget} eventTarget - Event target to handle custom events.
 * @property {Transporter} transporter - Transporter for making requests.
 */
export class Client {
    /**
     * @param {ClientOptions} options - Configuration options for the client.
     * @param {ApiTypes} apiType - Type of Zendesk API to initialize (e.g., 'core', 'helpcenter').
     */
    constructor(options: ClientOptions, apiType: ApiTypes);
    options: import("../index").ZendeskClientOptions & {
        get: (key: string) => any;
    };
    sideLoad: any[];
    jsonAPINames: any[];
    useDotJson: boolean;
    eventTarget: CustomEventTarget;
    get transporter(): Transporter;
    _transporter: Transporter;
    emit(eventType: any, eventData: any): void;
    on(eventType: any, callback: any): void;
    /**
     * Helper method to build client options.
     * @param {ClientOptions} options - Client configuration options.
     * @param {ApiTypes} apiType - Type of Zendesk API.
     * @returns {ClientOptions & {get: (key: string) => any}} - Built client options.
     * @private
     */
    private _buildOptions;
    /**
     * Helper method to get the endpoint URI.
     * @param {string} subdomain - The subdomain for the Zendesk instance.
     * @param {ApiTypes} apiType - Type of Zendesk API.
     * @returns {string} - The endpoint URI.
     * @private
     */
    private _getEndpointUri;
    setSideLoad(array: any): void;
    get(resource: any): Promise<NodeModule>;
    /**
     * Patches a resource.
     * @param {...any} arguments_ - The resources or parts of the resource path followed by the body.
     * @returns {Promise<void|object>} - Either void or response object
     */
    patch(...arguments_: any[]): Promise<void | object>;
    put(resource: any, body: any): Promise<NodeModule>;
    post(resource: any, body: any): Promise<NodeModule>;
    /**
     * Deletes a resource.
     * @param {...any} arguments_ - The resources or parts of the resource path.
     * @returns {Promise<void|object>} - Either void or response object
     */
    delete(...arguments_: any[]): Promise<void | object>;
    getAll(resource: any): Promise<any[]>;
    _rawRequest(method: any, uri: any, ...arguments_: any[]): Promise<{
        response: any;
        result: {};
    }>;
    /**
     * @template T
     * @type {object} ApiResponse<T>
     * @property {object} response - Response object from the request.
     * @property {T} result - Result object from the request.
     */
    /**
     * Request method that handles various HTTP methods.
     * @template T
     * @param {string} method - HTTP method (e.g., 'GET', 'POST').
     * @param {string} uri - The URI for the request.
     * @param {...any} arguments_ - Additional arguments for the request.
     * @returns {Promise<module:client.ApiResponse<T>>} - The API response.
     */
    request<T>(method: string, uri: string, ...arguments_: any[]): Promise<NodeModule>;
    requestAll(method: any, uri: any, ...arguments_: any[]): Promise<any[]>;
    requestUpload(uri: any, file: any): Promise<any>;
}
import { CustomEventTarget } from "./custom-event-target";
import { Transporter } from "./transporter";
import { ApiTypes } from "../constants";
