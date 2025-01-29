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
    public sealed class AlertChannelSlack
    {
        /// <summary>
        /// The name of the alert's Slack channel
        /// </summary>
        public readonly string Channel;
        /// <summary>
        /// The Slack webhook URL
        /// </summary>
        public readonly string Url;

        [OutputConstructor]
        private AlertChannelSlack(
            string channel,

            string url)
        {
            Channel = channel;
            Url = url;
        }
    }
}
