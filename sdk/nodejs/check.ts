// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Checks allows you to monitor key webapp flows, backend API's and set up alerting, so you get a notification when things break or slow down.
 */
export class Check extends pulumi.CustomResource {
    /**
     * Get an existing Check resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CheckState, opts?: pulumi.CustomResourceOptions): Check {
        return new Check(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkly:index/check:Check';

    /**
     * Returns true if the given object is an instance of Check.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Check {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Check.__pulumiType;
    }

    /**
     * Determines if the check is running or not. Possible values `true`, and `false`.
     */
    public readonly activated!: pulumi.Output<boolean>;
    /**
     * An array of channel IDs and whether they're activated or not. If you don't set at least one alert subscription for your check, we won't be able to alert you in case something goes wrong with it.
     */
    public readonly alertChannelSubscriptions!: pulumi.Output<outputs.CheckAlertChannelSubscription[] | undefined>;
    public readonly alertSettings!: pulumi.Output<outputs.CheckAlertSettings>;
    /**
     * The response time in milliseconds starting from which a check should be considered degraded. Possible values are between 0 and 30000. (Default `15000`).
     */
    public readonly degradedResponseTime!: pulumi.Output<number | undefined>;
    /**
     * Setting this to `true` will trigger a retry when a check fails from the failing region and another, randomly selected region before marking the check as failed.
     *
     * @deprecated The property `doubleCheck` is deprecated and will be removed in a future version. To enable retries for failed check runs, use the `retryStrategy` property instead.
     */
    public readonly doubleCheck!: pulumi.Output<boolean | undefined>;
    /**
     * Key/value pairs for setting environment variables during check execution, add locked = true to keep value hidden, add secret = true to create a secret variable. These are only relevant for browser checks. Use global environment variables whenever possible.
     */
    public readonly environmentVariable!: pulumi.Output<outputs.CheckEnvironmentVariable[] | undefined>;
    /**
     * Key/value pairs for setting environment variables during check execution. These are only relevant for browser checks. Use global environment variables whenever possible.
     *
     * @deprecated The property `environmentVariables` is deprecated and will be removed in a future version. Consider using the new `environmentVariable` list.
     */
    public readonly environmentVariables!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The frequency in minutes to run the check. Possible values are `0`, `1`, `2`, `5`, `10`, `15`, `30`, `60`, `120`, `180`, `360`, `720`, and `1440`.
     */
    public readonly frequency!: pulumi.Output<number>;
    /**
     * This property only valid for API high frequency checks. To create a hight frequency check, the property `frequency` must be `0` and `frequencyOffset` could be `10`, `20` or `30`.
     */
    public readonly frequencyOffset!: pulumi.Output<number | undefined>;
    /**
     * The id of the check group this check is part of.
     */
    public readonly groupId!: pulumi.Output<number | undefined>;
    /**
     * The position of this check in a check group. It determines in what order checks are run when a group is triggered from the API or from CI/CD.
     */
    public readonly groupOrder!: pulumi.Output<number | undefined>;
    /**
     * A valid piece of Node.js code to run in the setup phase.
     */
    public readonly localSetupScript!: pulumi.Output<string | undefined>;
    /**
     * A valid piece of Node.js code to run in the teardown phase.
     */
    public readonly localTeardownScript!: pulumi.Output<string | undefined>;
    /**
     * An array of one or more data center locations where to run the this check. (Default ["us-east-1"])
     */
    public readonly locations!: pulumi.Output<string[] | undefined>;
    /**
     * The response time in milliseconds starting from which a check should be considered failing. Possible values are between 0 and 30000. (Default `30000`).
     */
    public readonly maxResponseTime!: pulumi.Output<number | undefined>;
    /**
     * Determines if any notifications will be sent out when a check fails/degrades/recovers.
     */
    public readonly muted!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the check.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * An array of one or more private locations slugs.
     */
    public readonly privateLocations!: pulumi.Output<string[] | undefined>;
    /**
     * An API check might have one request config.
     */
    public readonly request!: pulumi.Output<outputs.CheckRequest | undefined>;
    /**
     * A strategy for retrying failed check runs.
     */
    public readonly retryStrategy!: pulumi.Output<outputs.CheckRetryStrategy>;
    /**
     * Determines if the check should run in all selected locations in parallel or round-robin.
     */
    public readonly runParallel!: pulumi.Output<boolean | undefined>;
    /**
     * The id of the runtime to use for this check.
     */
    public readonly runtimeId!: pulumi.Output<string | undefined>;
    /**
     * A valid piece of Node.js JavaScript code describing a browser interaction with the Puppeteer/Playwright framework or a reference to an external JavaScript file.
     */
    public readonly script!: pulumi.Output<string | undefined>;
    /**
     * An ID reference to a snippet to use in the setup phase of an API check.
     */
    public readonly setupSnippetId!: pulumi.Output<number | undefined>;
    /**
     * Allows to invert the behaviour of when a check is considered to fail. Allows for validating error status like 404.
     */
    public readonly shouldFail!: pulumi.Output<boolean | undefined>;
    /**
     * Determines if the SSL certificate should be validated for expiry.
     *
     * @deprecated The property `sslCheck` is deprecated and it's ignored by the Checkly Public API. It will be removed in a future version.
     */
    public readonly sslCheck!: pulumi.Output<boolean | undefined>;
    /**
     * A valid fully qualified domain name (FQDN) to check its SSL certificate.
     */
    public readonly sslCheckDomain!: pulumi.Output<string | undefined>;
    /**
     * A list of tags for organizing and filtering checks.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * An ID reference to a snippet to use in the teardown phase of an API check.
     */
    public readonly teardownSnippetId!: pulumi.Output<number | undefined>;
    /**
     * The type of the check. Possible values are `API`, `BROWSER`, and `MULTI_STEP`.
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * When true, the account level alert settings will be used, not the alert setting defined on this check.
     */
    public readonly useGlobalAlertSettings!: pulumi.Output<boolean | undefined>;

    /**
     * Create a Check resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CheckArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CheckArgs | CheckState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CheckState | undefined;
            resourceInputs["activated"] = state ? state.activated : undefined;
            resourceInputs["alertChannelSubscriptions"] = state ? state.alertChannelSubscriptions : undefined;
            resourceInputs["alertSettings"] = state ? state.alertSettings : undefined;
            resourceInputs["degradedResponseTime"] = state ? state.degradedResponseTime : undefined;
            resourceInputs["doubleCheck"] = state ? state.doubleCheck : undefined;
            resourceInputs["environmentVariable"] = state ? state.environmentVariable : undefined;
            resourceInputs["environmentVariables"] = state ? state.environmentVariables : undefined;
            resourceInputs["frequency"] = state ? state.frequency : undefined;
            resourceInputs["frequencyOffset"] = state ? state.frequencyOffset : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["groupOrder"] = state ? state.groupOrder : undefined;
            resourceInputs["localSetupScript"] = state ? state.localSetupScript : undefined;
            resourceInputs["localTeardownScript"] = state ? state.localTeardownScript : undefined;
            resourceInputs["locations"] = state ? state.locations : undefined;
            resourceInputs["maxResponseTime"] = state ? state.maxResponseTime : undefined;
            resourceInputs["muted"] = state ? state.muted : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["privateLocations"] = state ? state.privateLocations : undefined;
            resourceInputs["request"] = state ? state.request : undefined;
            resourceInputs["retryStrategy"] = state ? state.retryStrategy : undefined;
            resourceInputs["runParallel"] = state ? state.runParallel : undefined;
            resourceInputs["runtimeId"] = state ? state.runtimeId : undefined;
            resourceInputs["script"] = state ? state.script : undefined;
            resourceInputs["setupSnippetId"] = state ? state.setupSnippetId : undefined;
            resourceInputs["shouldFail"] = state ? state.shouldFail : undefined;
            resourceInputs["sslCheck"] = state ? state.sslCheck : undefined;
            resourceInputs["sslCheckDomain"] = state ? state.sslCheckDomain : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["teardownSnippetId"] = state ? state.teardownSnippetId : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["useGlobalAlertSettings"] = state ? state.useGlobalAlertSettings : undefined;
        } else {
            const args = argsOrState as CheckArgs | undefined;
            if ((!args || args.activated === undefined) && !opts.urn) {
                throw new Error("Missing required property 'activated'");
            }
            if ((!args || args.frequency === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frequency'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["activated"] = args ? args.activated : undefined;
            resourceInputs["alertChannelSubscriptions"] = args ? args.alertChannelSubscriptions : undefined;
            resourceInputs["alertSettings"] = args ? args.alertSettings : undefined;
            resourceInputs["degradedResponseTime"] = args ? args.degradedResponseTime : undefined;
            resourceInputs["doubleCheck"] = args ? args.doubleCheck : undefined;
            resourceInputs["environmentVariable"] = args ? args.environmentVariable : undefined;
            resourceInputs["environmentVariables"] = args ? args.environmentVariables : undefined;
            resourceInputs["frequency"] = args ? args.frequency : undefined;
            resourceInputs["frequencyOffset"] = args ? args.frequencyOffset : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["groupOrder"] = args ? args.groupOrder : undefined;
            resourceInputs["localSetupScript"] = args ? args.localSetupScript : undefined;
            resourceInputs["localTeardownScript"] = args ? args.localTeardownScript : undefined;
            resourceInputs["locations"] = args ? args.locations : undefined;
            resourceInputs["maxResponseTime"] = args ? args.maxResponseTime : undefined;
            resourceInputs["muted"] = args ? args.muted : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["privateLocations"] = args ? args.privateLocations : undefined;
            resourceInputs["request"] = args ? args.request : undefined;
            resourceInputs["retryStrategy"] = args ? args.retryStrategy : undefined;
            resourceInputs["runParallel"] = args ? args.runParallel : undefined;
            resourceInputs["runtimeId"] = args ? args.runtimeId : undefined;
            resourceInputs["script"] = args ? args.script : undefined;
            resourceInputs["setupSnippetId"] = args ? args.setupSnippetId : undefined;
            resourceInputs["shouldFail"] = args ? args.shouldFail : undefined;
            resourceInputs["sslCheck"] = args ? args.sslCheck : undefined;
            resourceInputs["sslCheckDomain"] = args ? args.sslCheckDomain : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["teardownSnippetId"] = args ? args.teardownSnippetId : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["useGlobalAlertSettings"] = args ? args.useGlobalAlertSettings : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Check.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Check resources.
 */
export interface CheckState {
    /**
     * Determines if the check is running or not. Possible values `true`, and `false`.
     */
    activated?: pulumi.Input<boolean>;
    /**
     * An array of channel IDs and whether they're activated or not. If you don't set at least one alert subscription for your check, we won't be able to alert you in case something goes wrong with it.
     */
    alertChannelSubscriptions?: pulumi.Input<pulumi.Input<inputs.CheckAlertChannelSubscription>[]>;
    alertSettings?: pulumi.Input<inputs.CheckAlertSettings>;
    /**
     * The response time in milliseconds starting from which a check should be considered degraded. Possible values are between 0 and 30000. (Default `15000`).
     */
    degradedResponseTime?: pulumi.Input<number>;
    /**
     * Setting this to `true` will trigger a retry when a check fails from the failing region and another, randomly selected region before marking the check as failed.
     *
     * @deprecated The property `doubleCheck` is deprecated and will be removed in a future version. To enable retries for failed check runs, use the `retryStrategy` property instead.
     */
    doubleCheck?: pulumi.Input<boolean>;
    /**
     * Key/value pairs for setting environment variables during check execution, add locked = true to keep value hidden, add secret = true to create a secret variable. These are only relevant for browser checks. Use global environment variables whenever possible.
     */
    environmentVariable?: pulumi.Input<pulumi.Input<inputs.CheckEnvironmentVariable>[]>;
    /**
     * Key/value pairs for setting environment variables during check execution. These are only relevant for browser checks. Use global environment variables whenever possible.
     *
     * @deprecated The property `environmentVariables` is deprecated and will be removed in a future version. Consider using the new `environmentVariable` list.
     */
    environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The frequency in minutes to run the check. Possible values are `0`, `1`, `2`, `5`, `10`, `15`, `30`, `60`, `120`, `180`, `360`, `720`, and `1440`.
     */
    frequency?: pulumi.Input<number>;
    /**
     * This property only valid for API high frequency checks. To create a hight frequency check, the property `frequency` must be `0` and `frequencyOffset` could be `10`, `20` or `30`.
     */
    frequencyOffset?: pulumi.Input<number>;
    /**
     * The id of the check group this check is part of.
     */
    groupId?: pulumi.Input<number>;
    /**
     * The position of this check in a check group. It determines in what order checks are run when a group is triggered from the API or from CI/CD.
     */
    groupOrder?: pulumi.Input<number>;
    /**
     * A valid piece of Node.js code to run in the setup phase.
     */
    localSetupScript?: pulumi.Input<string>;
    /**
     * A valid piece of Node.js code to run in the teardown phase.
     */
    localTeardownScript?: pulumi.Input<string>;
    /**
     * An array of one or more data center locations where to run the this check. (Default ["us-east-1"])
     */
    locations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The response time in milliseconds starting from which a check should be considered failing. Possible values are between 0 and 30000. (Default `30000`).
     */
    maxResponseTime?: pulumi.Input<number>;
    /**
     * Determines if any notifications will be sent out when a check fails/degrades/recovers.
     */
    muted?: pulumi.Input<boolean>;
    /**
     * The name of the check.
     */
    name?: pulumi.Input<string>;
    /**
     * An array of one or more private locations slugs.
     */
    privateLocations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An API check might have one request config.
     */
    request?: pulumi.Input<inputs.CheckRequest>;
    /**
     * A strategy for retrying failed check runs.
     */
    retryStrategy?: pulumi.Input<inputs.CheckRetryStrategy>;
    /**
     * Determines if the check should run in all selected locations in parallel or round-robin.
     */
    runParallel?: pulumi.Input<boolean>;
    /**
     * The id of the runtime to use for this check.
     */
    runtimeId?: pulumi.Input<string>;
    /**
     * A valid piece of Node.js JavaScript code describing a browser interaction with the Puppeteer/Playwright framework or a reference to an external JavaScript file.
     */
    script?: pulumi.Input<string>;
    /**
     * An ID reference to a snippet to use in the setup phase of an API check.
     */
    setupSnippetId?: pulumi.Input<number>;
    /**
     * Allows to invert the behaviour of when a check is considered to fail. Allows for validating error status like 404.
     */
    shouldFail?: pulumi.Input<boolean>;
    /**
     * Determines if the SSL certificate should be validated for expiry.
     *
     * @deprecated The property `sslCheck` is deprecated and it's ignored by the Checkly Public API. It will be removed in a future version.
     */
    sslCheck?: pulumi.Input<boolean>;
    /**
     * A valid fully qualified domain name (FQDN) to check its SSL certificate.
     */
    sslCheckDomain?: pulumi.Input<string>;
    /**
     * A list of tags for organizing and filtering checks.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An ID reference to a snippet to use in the teardown phase of an API check.
     */
    teardownSnippetId?: pulumi.Input<number>;
    /**
     * The type of the check. Possible values are `API`, `BROWSER`, and `MULTI_STEP`.
     */
    type?: pulumi.Input<string>;
    /**
     * When true, the account level alert settings will be used, not the alert setting defined on this check.
     */
    useGlobalAlertSettings?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Check resource.
 */
export interface CheckArgs {
    /**
     * Determines if the check is running or not. Possible values `true`, and `false`.
     */
    activated: pulumi.Input<boolean>;
    /**
     * An array of channel IDs and whether they're activated or not. If you don't set at least one alert subscription for your check, we won't be able to alert you in case something goes wrong with it.
     */
    alertChannelSubscriptions?: pulumi.Input<pulumi.Input<inputs.CheckAlertChannelSubscription>[]>;
    alertSettings?: pulumi.Input<inputs.CheckAlertSettings>;
    /**
     * The response time in milliseconds starting from which a check should be considered degraded. Possible values are between 0 and 30000. (Default `15000`).
     */
    degradedResponseTime?: pulumi.Input<number>;
    /**
     * Setting this to `true` will trigger a retry when a check fails from the failing region and another, randomly selected region before marking the check as failed.
     *
     * @deprecated The property `doubleCheck` is deprecated and will be removed in a future version. To enable retries for failed check runs, use the `retryStrategy` property instead.
     */
    doubleCheck?: pulumi.Input<boolean>;
    /**
     * Key/value pairs for setting environment variables during check execution, add locked = true to keep value hidden, add secret = true to create a secret variable. These are only relevant for browser checks. Use global environment variables whenever possible.
     */
    environmentVariable?: pulumi.Input<pulumi.Input<inputs.CheckEnvironmentVariable>[]>;
    /**
     * Key/value pairs for setting environment variables during check execution. These are only relevant for browser checks. Use global environment variables whenever possible.
     *
     * @deprecated The property `environmentVariables` is deprecated and will be removed in a future version. Consider using the new `environmentVariable` list.
     */
    environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The frequency in minutes to run the check. Possible values are `0`, `1`, `2`, `5`, `10`, `15`, `30`, `60`, `120`, `180`, `360`, `720`, and `1440`.
     */
    frequency: pulumi.Input<number>;
    /**
     * This property only valid for API high frequency checks. To create a hight frequency check, the property `frequency` must be `0` and `frequencyOffset` could be `10`, `20` or `30`.
     */
    frequencyOffset?: pulumi.Input<number>;
    /**
     * The id of the check group this check is part of.
     */
    groupId?: pulumi.Input<number>;
    /**
     * The position of this check in a check group. It determines in what order checks are run when a group is triggered from the API or from CI/CD.
     */
    groupOrder?: pulumi.Input<number>;
    /**
     * A valid piece of Node.js code to run in the setup phase.
     */
    localSetupScript?: pulumi.Input<string>;
    /**
     * A valid piece of Node.js code to run in the teardown phase.
     */
    localTeardownScript?: pulumi.Input<string>;
    /**
     * An array of one or more data center locations where to run the this check. (Default ["us-east-1"])
     */
    locations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The response time in milliseconds starting from which a check should be considered failing. Possible values are between 0 and 30000. (Default `30000`).
     */
    maxResponseTime?: pulumi.Input<number>;
    /**
     * Determines if any notifications will be sent out when a check fails/degrades/recovers.
     */
    muted?: pulumi.Input<boolean>;
    /**
     * The name of the check.
     */
    name?: pulumi.Input<string>;
    /**
     * An array of one or more private locations slugs.
     */
    privateLocations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An API check might have one request config.
     */
    request?: pulumi.Input<inputs.CheckRequest>;
    /**
     * A strategy for retrying failed check runs.
     */
    retryStrategy?: pulumi.Input<inputs.CheckRetryStrategy>;
    /**
     * Determines if the check should run in all selected locations in parallel or round-robin.
     */
    runParallel?: pulumi.Input<boolean>;
    /**
     * The id of the runtime to use for this check.
     */
    runtimeId?: pulumi.Input<string>;
    /**
     * A valid piece of Node.js JavaScript code describing a browser interaction with the Puppeteer/Playwright framework or a reference to an external JavaScript file.
     */
    script?: pulumi.Input<string>;
    /**
     * An ID reference to a snippet to use in the setup phase of an API check.
     */
    setupSnippetId?: pulumi.Input<number>;
    /**
     * Allows to invert the behaviour of when a check is considered to fail. Allows for validating error status like 404.
     */
    shouldFail?: pulumi.Input<boolean>;
    /**
     * Determines if the SSL certificate should be validated for expiry.
     *
     * @deprecated The property `sslCheck` is deprecated and it's ignored by the Checkly Public API. It will be removed in a future version.
     */
    sslCheck?: pulumi.Input<boolean>;
    /**
     * A valid fully qualified domain name (FQDN) to check its SSL certificate.
     */
    sslCheckDomain?: pulumi.Input<string>;
    /**
     * A list of tags for organizing and filtering checks.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An ID reference to a snippet to use in the teardown phase of an API check.
     */
    teardownSnippetId?: pulumi.Input<number>;
    /**
     * The type of the check. Possible values are `API`, `BROWSER`, and `MULTI_STEP`.
     */
    type: pulumi.Input<string>;
    /**
     * When true, the account level alert settings will be used, not the alert setting defined on this check.
     */
    useGlobalAlertSettings?: pulumi.Input<boolean>;
}
