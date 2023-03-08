// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package checkly

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Check groups allow  you to group together a set of related checks, which can also share default settings for various attributes.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
//
//	"github.com/checkly/pulumi-checkly/sdk/go/checkly"
//	"github.com/pulumi/pulumi-checkly/sdk/go/checkly"
//	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
//
// )
//
//	func main() {
//		pulumi.Run(func(ctx *pulumi.Context) error {
//			testGroup1CheckGroup, err := checkly.NewCheckGroup(ctx, "testGroup1CheckGroup", &checkly.CheckGroupArgs{
//				Activated: pulumi.Bool(true),
//				Muted:     pulumi.Bool(false),
//				Tags: pulumi.StringArray{
//					pulumi.String("auto"),
//				},
//				Locations: pulumi.StringArray{
//					pulumi.String("eu-west-1"),
//				},
//				Concurrency: pulumi.Int(3),
//				ApiCheckDefaults: &CheckGroupApiCheckDefaultsArgs{
//					Url: pulumi.String("http://example.com/"),
//					Headers: pulumi.AnyMap{
//						"X-Test": pulumi.Any("foo"),
//					},
//					QueryParameters: pulumi.AnyMap{
//						"query": pulumi.Any("foo"),
//					},
//					Assertions: CheckGroupApiCheckDefaultsAssertionArray{
//						&CheckGroupApiCheckDefaultsAssertionArgs{
//							Source:     pulumi.String("STATUS_CODE"),
//							Property:   pulumi.String(""),
//							Comparison: pulumi.String("EQUALS"),
//							Target:     pulumi.String("200"),
//						},
//						&CheckGroupApiCheckDefaultsAssertionArgs{
//							Source:     pulumi.String("TEXT_BODY"),
//							Property:   pulumi.String(""),
//							Comparison: pulumi.String("CONTAINS"),
//							Target:     pulumi.String("welcome"),
//						},
//					},
//					BasicAuth: &CheckGroupApiCheckDefaultsBasicAuthArgs{
//						Username: pulumi.String("user"),
//						Password: pulumi.String("pass"),
//					},
//				},
//				EnvironmentVariables: pulumi.AnyMap{
//					"ENVTEST": pulumi.Any("Hello world"),
//				},
//				DoubleCheck:            pulumi.Bool(true),
//				UseGlobalAlertSettings: pulumi.Bool(false),
//				AlertSettings: &CheckGroupAlertSettingsArgs{
//					EscalationType: pulumi.String("RUN_BASED"),
//					RunBasedEscalations: CheckGroupAlertSettingsRunBasedEscalationArray{
//						&CheckGroupAlertSettingsRunBasedEscalationArgs{
//							FailedRunThreshold: pulumi.Int(1),
//						},
//					},
//					TimeBasedEscalations: CheckGroupAlertSettingsTimeBasedEscalationArray{
//						&CheckGroupAlertSettingsTimeBasedEscalationArgs{
//							MinutesFailingThreshold: pulumi.Int(5),
//						},
//					},
//					Reminders: CheckGroupAlertSettingsReminderArray{
//						&CheckGroupAlertSettingsReminderArgs{
//							Amount:   pulumi.Int(2),
//							Interval: pulumi.Int(5),
//						},
//					},
//				},
//				LocalSetupScript:    pulumi.String("setup-test"),
//				LocalTeardownScript: pulumi.String("teardown-test"),
//			})
//			if err != nil {
//				return err
//			}
//			_, err = checkly.NewCheck(ctx, "testCheck1", &checkly.CheckArgs{
//				GroupId:    testGroup1CheckGroup.ID(),
//				GroupOrder: pulumi.Int(1),
//			})
//			if err != nil {
//				return err
//			}
//			emailAc1, err := checkly.NewAlertChannel(ctx, "emailAc1", &checkly.AlertChannelArgs{
//				Email: &AlertChannelEmailArgs{
//					Address: pulumi.String("info@example.com"),
//				},
//			})
//			if err != nil {
//				return err
//			}
//			emailAc2, err := checkly.NewAlertChannel(ctx, "emailAc2", &checkly.AlertChannelArgs{
//				Email: &AlertChannelEmailArgs{
//					Address: pulumi.String("info2@example.com"),
//				},
//			})
//			if err != nil {
//				return err
//			}
//			_, err = checkly.NewCheckGroup(ctx, "testGroup1Index/checkGroupCheckGroup", &checkly.CheckGroupArgs{
//				AlertChannelSubscriptions: CheckGroupAlertChannelSubscriptionArray{
//					&CheckGroupAlertChannelSubscriptionArgs{
//						ChannelId: emailAc1.ID(),
//						Activated: pulumi.Bool(true),
//					},
//					&CheckGroupAlertChannelSubscriptionArgs{
//						ChannelId: emailAc2.ID(),
//						Activated: pulumi.Bool(true),
//					},
//				},
//			})
//			if err != nil {
//				return err
//			}
//			return nil
//		})
//	}
//
// ```
type CheckGroup struct {
	pulumi.CustomResourceState

	// Determines if the checks in the group are running or not.
	Activated                 pulumi.BoolOutput                             `pulumi:"activated"`
	AlertChannelSubscriptions CheckGroupAlertChannelSubscriptionArrayOutput `pulumi:"alertChannelSubscriptions"`
	AlertSettings             CheckGroupAlertSettingsOutput                 `pulumi:"alertSettings"`
	ApiCheckDefaults          CheckGroupApiCheckDefaultsOutput              `pulumi:"apiCheckDefaults"`
	// Determines how many checks are run concurrently when triggering a check group from CI/CD or through the API.
	Concurrency pulumi.IntOutput `pulumi:"concurrency"`
	// Setting this to `true` will trigger a retry when a check fails from the failing region and another, randomly selected
	// region before marking the check as failed.
	DoubleCheck pulumi.BoolPtrOutput `pulumi:"doubleCheck"`
	// Key/value pairs for setting environment variables during check execution. These are only relevant for browser checks.
	// Use global environment variables whenever possible.
	//
	// Deprecated: The property `environment_variables` is deprecated and will be removed in a future version. Consider using the new `environment_variable` list.
	EnvironmentVariables pulumi.MapOutput `pulumi:"environmentVariables"`
	// A valid piece of Node.js code to run in the setup phase of an API check in this group.
	LocalSetupScript pulumi.StringPtrOutput `pulumi:"localSetupScript"`
	// A valid piece of Node.js code to run in the teardown phase of an API check in this group.
	LocalTeardownScript pulumi.StringPtrOutput `pulumi:"localTeardownScript"`
	// An array of one or more data center locations where to run the checks.
	Locations pulumi.StringArrayOutput `pulumi:"locations"`
	// Determines if any notifications will be sent out when a check in this group fails and/or recovers.
	Muted pulumi.BoolPtrOutput `pulumi:"muted"`
	// The name of the check group.
	Name pulumi.StringOutput `pulumi:"name"`
	// An array of one or more private locations slugs.
	PrivateLocations pulumi.StringArrayOutput `pulumi:"privateLocations"`
	// The id of the runtime to use for this group.
	RuntimeId pulumi.StringPtrOutput `pulumi:"runtimeId"`
	// An ID reference to a snippet to use in the setup phase of an API check.
	SetupSnippetId pulumi.IntPtrOutput `pulumi:"setupSnippetId"`
	// Tags for organizing and filtering checks.
	Tags pulumi.StringArrayOutput `pulumi:"tags"`
	// An ID reference to a snippet to use in the teardown phase of an API check.
	TeardownSnippetId pulumi.IntPtrOutput `pulumi:"teardownSnippetId"`
	// When true, the account level alert settings will be used, not the alert setting defined on this check group.
	UseGlobalAlertSettings pulumi.BoolPtrOutput `pulumi:"useGlobalAlertSettings"`
}

// NewCheckGroup registers a new resource with the given unique name, arguments, and options.
func NewCheckGroup(ctx *pulumi.Context,
	name string, args *CheckGroupArgs, opts ...pulumi.ResourceOption) (*CheckGroup, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Activated == nil {
		return nil, errors.New("invalid value for required argument 'Activated'")
	}
	if args.Concurrency == nil {
		return nil, errors.New("invalid value for required argument 'Concurrency'")
	}
	if args.ApiCheckDefaults != nil {
		args.ApiCheckDefaults = args.ApiCheckDefaults.ToCheckGroupApiCheckDefaultsPtrOutput().ApplyT(func(v *CheckGroupApiCheckDefaults) *CheckGroupApiCheckDefaults { return v.Defaults() }).(CheckGroupApiCheckDefaultsPtrOutput)
	}
	opts = pkgResourceDefaultOpts(opts)
	var resource CheckGroup
	err := ctx.RegisterResource("checkly:index/checkGroup:CheckGroup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCheckGroup gets an existing CheckGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCheckGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CheckGroupState, opts ...pulumi.ResourceOption) (*CheckGroup, error) {
	var resource CheckGroup
	err := ctx.ReadResource("checkly:index/checkGroup:CheckGroup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering CheckGroup resources.
type checkGroupState struct {
	// Determines if the checks in the group are running or not.
	Activated                 *bool                                `pulumi:"activated"`
	AlertChannelSubscriptions []CheckGroupAlertChannelSubscription `pulumi:"alertChannelSubscriptions"`
	AlertSettings             *CheckGroupAlertSettings             `pulumi:"alertSettings"`
	ApiCheckDefaults          *CheckGroupApiCheckDefaults          `pulumi:"apiCheckDefaults"`
	// Determines how many checks are run concurrently when triggering a check group from CI/CD or through the API.
	Concurrency *int `pulumi:"concurrency"`
	// Setting this to `true` will trigger a retry when a check fails from the failing region and another, randomly selected
	// region before marking the check as failed.
	DoubleCheck *bool `pulumi:"doubleCheck"`
	// Key/value pairs for setting environment variables during check execution. These are only relevant for browser checks.
	// Use global environment variables whenever possible.
	//
	// Deprecated: The property `environment_variables` is deprecated and will be removed in a future version. Consider using the new `environment_variable` list.
	EnvironmentVariables map[string]interface{} `pulumi:"environmentVariables"`
	// A valid piece of Node.js code to run in the setup phase of an API check in this group.
	LocalSetupScript *string `pulumi:"localSetupScript"`
	// A valid piece of Node.js code to run in the teardown phase of an API check in this group.
	LocalTeardownScript *string `pulumi:"localTeardownScript"`
	// An array of one or more data center locations where to run the checks.
	Locations []string `pulumi:"locations"`
	// Determines if any notifications will be sent out when a check in this group fails and/or recovers.
	Muted *bool `pulumi:"muted"`
	// The name of the check group.
	Name *string `pulumi:"name"`
	// An array of one or more private locations slugs.
	PrivateLocations []string `pulumi:"privateLocations"`
	// The id of the runtime to use for this group.
	RuntimeId *string `pulumi:"runtimeId"`
	// An ID reference to a snippet to use in the setup phase of an API check.
	SetupSnippetId *int `pulumi:"setupSnippetId"`
	// Tags for organizing and filtering checks.
	Tags []string `pulumi:"tags"`
	// An ID reference to a snippet to use in the teardown phase of an API check.
	TeardownSnippetId *int `pulumi:"teardownSnippetId"`
	// When true, the account level alert settings will be used, not the alert setting defined on this check group.
	UseGlobalAlertSettings *bool `pulumi:"useGlobalAlertSettings"`
}

type CheckGroupState struct {
	// Determines if the checks in the group are running or not.
	Activated                 pulumi.BoolPtrInput
	AlertChannelSubscriptions CheckGroupAlertChannelSubscriptionArrayInput
	AlertSettings             CheckGroupAlertSettingsPtrInput
	ApiCheckDefaults          CheckGroupApiCheckDefaultsPtrInput
	// Determines how many checks are run concurrently when triggering a check group from CI/CD or through the API.
	Concurrency pulumi.IntPtrInput
	// Setting this to `true` will trigger a retry when a check fails from the failing region and another, randomly selected
	// region before marking the check as failed.
	DoubleCheck pulumi.BoolPtrInput
	// Key/value pairs for setting environment variables during check execution. These are only relevant for browser checks.
	// Use global environment variables whenever possible.
	//
	// Deprecated: The property `environment_variables` is deprecated and will be removed in a future version. Consider using the new `environment_variable` list.
	EnvironmentVariables pulumi.MapInput
	// A valid piece of Node.js code to run in the setup phase of an API check in this group.
	LocalSetupScript pulumi.StringPtrInput
	// A valid piece of Node.js code to run in the teardown phase of an API check in this group.
	LocalTeardownScript pulumi.StringPtrInput
	// An array of one or more data center locations where to run the checks.
	Locations pulumi.StringArrayInput
	// Determines if any notifications will be sent out when a check in this group fails and/or recovers.
	Muted pulumi.BoolPtrInput
	// The name of the check group.
	Name pulumi.StringPtrInput
	// An array of one or more private locations slugs.
	PrivateLocations pulumi.StringArrayInput
	// The id of the runtime to use for this group.
	RuntimeId pulumi.StringPtrInput
	// An ID reference to a snippet to use in the setup phase of an API check.
	SetupSnippetId pulumi.IntPtrInput
	// Tags for organizing and filtering checks.
	Tags pulumi.StringArrayInput
	// An ID reference to a snippet to use in the teardown phase of an API check.
	TeardownSnippetId pulumi.IntPtrInput
	// When true, the account level alert settings will be used, not the alert setting defined on this check group.
	UseGlobalAlertSettings pulumi.BoolPtrInput
}

func (CheckGroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*checkGroupState)(nil)).Elem()
}

type checkGroupArgs struct {
	// Determines if the checks in the group are running or not.
	Activated                 bool                                 `pulumi:"activated"`
	AlertChannelSubscriptions []CheckGroupAlertChannelSubscription `pulumi:"alertChannelSubscriptions"`
	AlertSettings             *CheckGroupAlertSettings             `pulumi:"alertSettings"`
	ApiCheckDefaults          *CheckGroupApiCheckDefaults          `pulumi:"apiCheckDefaults"`
	// Determines how many checks are run concurrently when triggering a check group from CI/CD or through the API.
	Concurrency int `pulumi:"concurrency"`
	// Setting this to `true` will trigger a retry when a check fails from the failing region and another, randomly selected
	// region before marking the check as failed.
	DoubleCheck *bool `pulumi:"doubleCheck"`
	// Key/value pairs for setting environment variables during check execution. These are only relevant for browser checks.
	// Use global environment variables whenever possible.
	//
	// Deprecated: The property `environment_variables` is deprecated and will be removed in a future version. Consider using the new `environment_variable` list.
	EnvironmentVariables map[string]interface{} `pulumi:"environmentVariables"`
	// A valid piece of Node.js code to run in the setup phase of an API check in this group.
	LocalSetupScript *string `pulumi:"localSetupScript"`
	// A valid piece of Node.js code to run in the teardown phase of an API check in this group.
	LocalTeardownScript *string `pulumi:"localTeardownScript"`
	// An array of one or more data center locations where to run the checks.
	Locations []string `pulumi:"locations"`
	// Determines if any notifications will be sent out when a check in this group fails and/or recovers.
	Muted *bool `pulumi:"muted"`
	// The name of the check group.
	Name *string `pulumi:"name"`
	// An array of one or more private locations slugs.
	PrivateLocations []string `pulumi:"privateLocations"`
	// The id of the runtime to use for this group.
	RuntimeId *string `pulumi:"runtimeId"`
	// An ID reference to a snippet to use in the setup phase of an API check.
	SetupSnippetId *int `pulumi:"setupSnippetId"`
	// Tags for organizing and filtering checks.
	Tags []string `pulumi:"tags"`
	// An ID reference to a snippet to use in the teardown phase of an API check.
	TeardownSnippetId *int `pulumi:"teardownSnippetId"`
	// When true, the account level alert settings will be used, not the alert setting defined on this check group.
	UseGlobalAlertSettings *bool `pulumi:"useGlobalAlertSettings"`
}

// The set of arguments for constructing a CheckGroup resource.
type CheckGroupArgs struct {
	// Determines if the checks in the group are running or not.
	Activated                 pulumi.BoolInput
	AlertChannelSubscriptions CheckGroupAlertChannelSubscriptionArrayInput
	AlertSettings             CheckGroupAlertSettingsPtrInput
	ApiCheckDefaults          CheckGroupApiCheckDefaultsPtrInput
	// Determines how many checks are run concurrently when triggering a check group from CI/CD or through the API.
	Concurrency pulumi.IntInput
	// Setting this to `true` will trigger a retry when a check fails from the failing region and another, randomly selected
	// region before marking the check as failed.
	DoubleCheck pulumi.BoolPtrInput
	// Key/value pairs for setting environment variables during check execution. These are only relevant for browser checks.
	// Use global environment variables whenever possible.
	//
	// Deprecated: The property `environment_variables` is deprecated and will be removed in a future version. Consider using the new `environment_variable` list.
	EnvironmentVariables pulumi.MapInput
	// A valid piece of Node.js code to run in the setup phase of an API check in this group.
	LocalSetupScript pulumi.StringPtrInput
	// A valid piece of Node.js code to run in the teardown phase of an API check in this group.
	LocalTeardownScript pulumi.StringPtrInput
	// An array of one or more data center locations where to run the checks.
	Locations pulumi.StringArrayInput
	// Determines if any notifications will be sent out when a check in this group fails and/or recovers.
	Muted pulumi.BoolPtrInput
	// The name of the check group.
	Name pulumi.StringPtrInput
	// An array of one or more private locations slugs.
	PrivateLocations pulumi.StringArrayInput
	// The id of the runtime to use for this group.
	RuntimeId pulumi.StringPtrInput
	// An ID reference to a snippet to use in the setup phase of an API check.
	SetupSnippetId pulumi.IntPtrInput
	// Tags for organizing and filtering checks.
	Tags pulumi.StringArrayInput
	// An ID reference to a snippet to use in the teardown phase of an API check.
	TeardownSnippetId pulumi.IntPtrInput
	// When true, the account level alert settings will be used, not the alert setting defined on this check group.
	UseGlobalAlertSettings pulumi.BoolPtrInput
}

func (CheckGroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*checkGroupArgs)(nil)).Elem()
}

type CheckGroupInput interface {
	pulumi.Input

	ToCheckGroupOutput() CheckGroupOutput
	ToCheckGroupOutputWithContext(ctx context.Context) CheckGroupOutput
}

func (*CheckGroup) ElementType() reflect.Type {
	return reflect.TypeOf((**CheckGroup)(nil)).Elem()
}

func (i *CheckGroup) ToCheckGroupOutput() CheckGroupOutput {
	return i.ToCheckGroupOutputWithContext(context.Background())
}

func (i *CheckGroup) ToCheckGroupOutputWithContext(ctx context.Context) CheckGroupOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CheckGroupOutput)
}

// CheckGroupArrayInput is an input type that accepts CheckGroupArray and CheckGroupArrayOutput values.
// You can construct a concrete instance of `CheckGroupArrayInput` via:
//
//	CheckGroupArray{ CheckGroupArgs{...} }
type CheckGroupArrayInput interface {
	pulumi.Input

	ToCheckGroupArrayOutput() CheckGroupArrayOutput
	ToCheckGroupArrayOutputWithContext(context.Context) CheckGroupArrayOutput
}

type CheckGroupArray []CheckGroupInput

func (CheckGroupArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*CheckGroup)(nil)).Elem()
}

func (i CheckGroupArray) ToCheckGroupArrayOutput() CheckGroupArrayOutput {
	return i.ToCheckGroupArrayOutputWithContext(context.Background())
}

func (i CheckGroupArray) ToCheckGroupArrayOutputWithContext(ctx context.Context) CheckGroupArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CheckGroupArrayOutput)
}

// CheckGroupMapInput is an input type that accepts CheckGroupMap and CheckGroupMapOutput values.
// You can construct a concrete instance of `CheckGroupMapInput` via:
//
//	CheckGroupMap{ "key": CheckGroupArgs{...} }
type CheckGroupMapInput interface {
	pulumi.Input

	ToCheckGroupMapOutput() CheckGroupMapOutput
	ToCheckGroupMapOutputWithContext(context.Context) CheckGroupMapOutput
}

type CheckGroupMap map[string]CheckGroupInput

func (CheckGroupMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*CheckGroup)(nil)).Elem()
}

func (i CheckGroupMap) ToCheckGroupMapOutput() CheckGroupMapOutput {
	return i.ToCheckGroupMapOutputWithContext(context.Background())
}

func (i CheckGroupMap) ToCheckGroupMapOutputWithContext(ctx context.Context) CheckGroupMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CheckGroupMapOutput)
}

type CheckGroupOutput struct{ *pulumi.OutputState }

func (CheckGroupOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**CheckGroup)(nil)).Elem()
}

func (o CheckGroupOutput) ToCheckGroupOutput() CheckGroupOutput {
	return o
}

func (o CheckGroupOutput) ToCheckGroupOutputWithContext(ctx context.Context) CheckGroupOutput {
	return o
}

type CheckGroupArrayOutput struct{ *pulumi.OutputState }

func (CheckGroupArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*CheckGroup)(nil)).Elem()
}

func (o CheckGroupArrayOutput) ToCheckGroupArrayOutput() CheckGroupArrayOutput {
	return o
}

func (o CheckGroupArrayOutput) ToCheckGroupArrayOutputWithContext(ctx context.Context) CheckGroupArrayOutput {
	return o
}

func (o CheckGroupArrayOutput) Index(i pulumi.IntInput) CheckGroupOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *CheckGroup {
		return vs[0].([]*CheckGroup)[vs[1].(int)]
	}).(CheckGroupOutput)
}

type CheckGroupMapOutput struct{ *pulumi.OutputState }

func (CheckGroupMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*CheckGroup)(nil)).Elem()
}

func (o CheckGroupMapOutput) ToCheckGroupMapOutput() CheckGroupMapOutput {
	return o
}

func (o CheckGroupMapOutput) ToCheckGroupMapOutputWithContext(ctx context.Context) CheckGroupMapOutput {
	return o
}

func (o CheckGroupMapOutput) MapIndex(k pulumi.StringInput) CheckGroupOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *CheckGroup {
		return vs[0].(map[string]*CheckGroup)[vs[1].(string)]
	}).(CheckGroupOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*CheckGroupInput)(nil)).Elem(), &CheckGroup{})
	pulumi.RegisterInputType(reflect.TypeOf((*CheckGroupArrayInput)(nil)).Elem(), CheckGroupArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*CheckGroupMapInput)(nil)).Elem(), CheckGroupMap{})
	pulumi.RegisterOutputType(CheckGroupOutput{})
	pulumi.RegisterOutputType(CheckGroupArrayOutput{})
	pulumi.RegisterOutputType(CheckGroupMapOutput{})
}
