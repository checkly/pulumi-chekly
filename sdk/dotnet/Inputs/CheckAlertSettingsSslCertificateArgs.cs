// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Checkly.Inputs
{

    public sealed class CheckAlertSettingsSslCertificateArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// How long before SSL certificate expiry to send alerts. Possible values `3`, `7`, `14`, `30`. (Default `3`).
        /// </summary>
        [Input("alertThreshold")]
        public Input<int>? AlertThreshold { get; set; }

        /// <summary>
        /// Determines if alert notifications should be sent for expiring SSL certificates. Possible values `true`, and `false`. (Default `false`).
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        public CheckAlertSettingsSslCertificateArgs()
        {
        }
        public static new CheckAlertSettingsSslCertificateArgs Empty => new CheckAlertSettingsSslCertificateArgs();
    }
}
