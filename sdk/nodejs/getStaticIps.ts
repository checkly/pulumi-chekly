// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getStaticIps(args?: GetStaticIpsArgs, opts?: pulumi.InvokeOptions): Promise<GetStaticIpsResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkly:index/getStaticIps:getStaticIps", {
        "ipFamily": args.ipFamily,
        "locations": args.locations,
    }, opts);
}

/**
 * A collection of arguments for invoking getStaticIps.
 */
export interface GetStaticIpsArgs {
    /**
     * Specify the IP families you want to get static IPs for. Only `IPv6` or `IPv4` are valid options.
     */
    ipFamily?: string;
    /**
     * Specify the locations you want to get static IPs for.
     */
    locations?: string[];
}

/**
 * A collection of values returned by getStaticIps.
 */
export interface GetStaticIpsResult {
    /**
     * Static IP addresses for Checkly's runner infrastructure.
     */
    readonly addresses: string[];
    /**
     * ID of the static IPs data source.
     */
    readonly id: string;
    /**
     * Specify the IP families you want to get static IPs for. Only `IPv6` or `IPv4` are valid options.
     */
    readonly ipFamily?: string;
    /**
     * Specify the locations you want to get static IPs for.
     */
    readonly locations?: string[];
}
export function getStaticIpsOutput(args?: GetStaticIpsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStaticIpsResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("checkly:index/getStaticIps:getStaticIps", {
        "ipFamily": args.ipFamily,
        "locations": args.locations,
    }, opts);
}

/**
 * A collection of arguments for invoking getStaticIps.
 */
export interface GetStaticIpsOutputArgs {
    /**
     * Specify the IP families you want to get static IPs for. Only `IPv6` or `IPv4` are valid options.
     */
    ipFamily?: pulumi.Input<string>;
    /**
     * Specify the locations you want to get static IPs for.
     */
    locations?: pulumi.Input<pulumi.Input<string>[]>;
}
