// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Checkly
{
    /// <summary>
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using System.Collections.Generic;
    /// using System.Linq;
    /// using Pulumi;
    /// using Checkly = Pulumi.Checkly;
    /// 
    /// return await Deployment.RunAsync(() =&gt; 
    /// {
    ///     var example1 = new Checkly.Snippet("example_1", new()
    ///     {
    ///         Name = "Example 1",
    ///         Script = "console.log('test');",
    ///     });
    /// 
    ///     // An alternative way to use multi-line script.
    ///     var example2 = new Checkly.Snippet("example_2", new()
    ///     {
    ///         Name = "Example 2",
    ///         Script = @"    console.log('test1');
    ///     console.log('test2');
    /// ",
    ///     });
    /// 
    /// });
    /// ```
    /// </summary>
    [ChecklyResourceType("checkly:index/snippet:Snippet")]
    public partial class Snippet : global::Pulumi.CustomResource
    {
        /// <summary>
        /// The name of the snippet
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Your Node.js code that interacts with the API check lifecycle, or functions as a partial for browser checks.
        /// </summary>
        [Output("script")]
        public Output<string> Script { get; private set; } = null!;


        /// <summary>
        /// Create a Snippet resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Snippet(string name, SnippetArgs args, CustomResourceOptions? options = null)
            : base("checkly:index/snippet:Snippet", name, args ?? new SnippetArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Snippet(string name, Input<string> id, SnippetState? state = null, CustomResourceOptions? options = null)
            : base("checkly:index/snippet:Snippet", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                PluginDownloadURL = "github://api.github.com/checkly",
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Snippet resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Snippet Get(string name, Input<string> id, SnippetState? state = null, CustomResourceOptions? options = null)
        {
            return new Snippet(name, id, state, options);
        }
    }

    public sealed class SnippetArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the snippet
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Your Node.js code that interacts with the API check lifecycle, or functions as a partial for browser checks.
        /// </summary>
        [Input("script", required: true)]
        public Input<string> Script { get; set; } = null!;

        public SnippetArgs()
        {
        }
        public static new SnippetArgs Empty => new SnippetArgs();
    }

    public sealed class SnippetState : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the snippet
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Your Node.js code that interacts with the API check lifecycle, or functions as a partial for browser checks.
        /// </summary>
        [Input("script")]
        public Input<string>? Script { get; set; }

        public SnippetState()
        {
        }
        public static new SnippetState Empty => new SnippetState();
    }
}
