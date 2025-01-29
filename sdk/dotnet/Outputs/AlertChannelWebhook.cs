// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Checkly.Outputs
{

    [OutputType]
    public sealed class AlertChannelWebhook
    {
        public readonly ImmutableDictionary<string, string>? Headers;
        /// <summary>
        /// (Default `POST`)
        /// </summary>
        public readonly string? Method;
        public readonly string Name;
        public readonly ImmutableDictionary<string, string>? QueryParameters;
        public readonly string? Template;
        public readonly string Url;
        public readonly string? WebhookSecret;
        /// <summary>
        /// Type of the webhook. Possible values are 'WEBHOOK*DISCORD', 'WEBHOOK*FIREHYDRANT', 'WEBHOOK*GITLAB*ALERT', 'WEBHOOK*SPIKESH', 'WEBHOOK*SPLUNK', 'WEBHOOK*MSTEAMS' and 'WEBHOOK*TELEGRAM'.
        /// </summary>
        public readonly string? WebhookType;

        [OutputConstructor]
        private AlertChannelWebhook(
            ImmutableDictionary<string, string>? headers,

            string? method,

            string name,

            ImmutableDictionary<string, string>? queryParameters,

            string? template,

            string url,

            string? webhookSecret,

            string? webhookType)
        {
            Headers = headers;
            Method = method;
            Name = name;
            QueryParameters = queryParameters;
            Template = template;
            Url = url;
            WebhookSecret = webhookSecret;
            WebhookType = webhookType;
        }
    }
}
