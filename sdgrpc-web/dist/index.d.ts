import * as _bufbuild_protobuf_dist_types_private_proto_runtime from '@bufbuild/protobuf/dist/types/private/proto-runtime';
import { Message, PartialMessage, FieldList, BinaryReadOptions, JsonValue, JsonReadOptions, PlainMessage, MethodKind } from '@bufbuild/protobuf';

/**
 * @generated from enum gooseai.FinishReason
 */
declare enum FinishReason {
    /**
     * @generated from enum value: NULL = 0;
     */
    NULL = 0,
    /**
     * @generated from enum value: LENGTH = 1;
     */
    LENGTH = 1,
    /**
     * @generated from enum value: STOP = 2;
     */
    STOP = 2,
    /**
     * @generated from enum value: ERROR = 3;
     */
    ERROR = 3,
    /**
     * @generated from enum value: FILTER = 4;
     */
    FILTER = 4
}
/**
 * @generated from enum gooseai.ArtifactType
 */
declare enum ArtifactType {
    /**
     * @generated from enum value: ARTIFACT_NONE = 0;
     */
    ARTIFACT_NONE = 0,
    /**
     * @generated from enum value: ARTIFACT_IMAGE = 1;
     */
    ARTIFACT_IMAGE = 1,
    /**
     * @generated from enum value: ARTIFACT_VIDEO = 2;
     */
    ARTIFACT_VIDEO = 2,
    /**
     * @generated from enum value: ARTIFACT_TEXT = 3;
     */
    ARTIFACT_TEXT = 3,
    /**
     * @generated from enum value: ARTIFACT_TOKENS = 4;
     */
    ARTIFACT_TOKENS = 4,
    /**
     * @generated from enum value: ARTIFACT_EMBEDDING = 5;
     */
    ARTIFACT_EMBEDDING = 5,
    /**
     * @generated from enum value: ARTIFACT_CLASSIFICATIONS = 6;
     */
    ARTIFACT_CLASSIFICATIONS = 6,
    /**
     * @generated from enum value: ARTIFACT_MASK = 7;
     */
    ARTIFACT_MASK = 7
}
/**
 * @generated from enum gooseai.GaussianDirection
 */
declare enum GaussianDirection {
    /**
     * @generated from enum value: DIRECTION_NONE = 0;
     */
    DIRECTION_NONE = 0,
    /**
     * @generated from enum value: DIRECTION_UP = 1;
     */
    DIRECTION_UP = 1,
    /**
     * @generated from enum value: DIRECTION_DOWN = 2;
     */
    DIRECTION_DOWN = 2
}
/**
 * @generated from enum gooseai.ChannelSource
 */
declare enum ChannelSource {
    /**
     * @generated from enum value: CHANNEL_R = 0;
     */
    CHANNEL_R = 0,
    /**
     * @generated from enum value: CHANNEL_G = 1;
     */
    CHANNEL_G = 1,
    /**
     * @generated from enum value: CHANNEL_B = 2;
     */
    CHANNEL_B = 2,
    /**
     * @generated from enum value: CHANNEL_A = 3;
     */
    CHANNEL_A = 3,
    /**
     * @generated from enum value: CHANNEL_ZERO = 4;
     */
    CHANNEL_ZERO = 4,
    /**
     * @generated from enum value: CHANNEL_ONE = 5;
     */
    CHANNEL_ONE = 5,
    /**
     * @generated from enum value: CHANNEL_DISCARD = 6;
     */
    CHANNEL_DISCARD = 6
}
/**
 * @generated from enum gooseai.RescaleMode
 */
declare enum RescaleMode {
    /**
     * @generated from enum value: RESCALE_STRICT = 0;
     */
    RESCALE_STRICT = 0,
    /**
     * @generated from enum value: RESCALE_CROP = 2;
     */
    RESCALE_CROP = 2,
    /**
     * @generated from enum value: RESCALE_FIT = 3;
     */
    RESCALE_FIT = 3
}
/**
 * DiffusionSampler identifies which sampler to use for Diffusion, and represents
 * the internal set of supported samplers.
 *
 * @generated from enum gooseai.DiffusionSampler
 */
declare enum DiffusionSampler {
    /**
     * @generated from enum value: SAMPLER_DDIM = 0;
     */
    SAMPLER_DDIM = 0,
    /**
     * @generated from enum value: SAMPLER_DDPM = 1;
     */
    SAMPLER_DDPM = 1,
    /**
     * @generated from enum value: SAMPLER_K_EULER = 2;
     */
    SAMPLER_K_EULER = 2,
    /**
     * @generated from enum value: SAMPLER_K_EULER_ANCESTRAL = 3;
     */
    SAMPLER_K_EULER_ANCESTRAL = 3,
    /**
     * @generated from enum value: SAMPLER_K_HEUN = 4;
     */
    SAMPLER_K_HEUN = 4,
    /**
     * @generated from enum value: SAMPLER_K_DPM_2 = 5;
     */
    SAMPLER_K_DPM_2 = 5,
    /**
     * @generated from enum value: SAMPLER_K_DPM_2_ANCESTRAL = 6;
     */
    SAMPLER_K_DPM_2_ANCESTRAL = 6,
    /**
     * @generated from enum value: SAMPLER_K_LMS = 7;
     */
    SAMPLER_K_LMS = 7
}
/**
 * Future, unimplemented.
 *
 * @generated from enum gooseai.Upscaler
 */
declare enum Upscaler {
    /**
     * @generated from enum value: UPSCALER_RGB = 0;
     */
    RGB = 0,
    /**
     * @generated from enum value: UPSCALER_GFPGAN = 1;
     */
    GFPGAN = 1,
    /**
     * @generated from enum value: UPSCALER_ESRGAN = 2;
     */
    ESRGAN = 2
}
/**
 * Presets for CLIP guidance.
 *
 * @generated from enum gooseai.GuidancePreset
 */
declare enum GuidancePreset {
    /**
     * @generated from enum value: GUIDANCE_PRESET_NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: GUIDANCE_PRESET_FAST = 1;
     */
    FAST = 1,
    /**
     * @generated from enum value: GUIDANCE_PRESET_EFFICIENT = 2;
     */
    EFFICIENT = 2,
    /**
     * @generated from enum value: GUIDANCE_PRESET_BALANCED = 3;
     */
    BALANCED = 3,
    /**
     * @generated from enum value: GUIDANCE_PRESET_QUALITY = 4;
     */
    QUALITY = 4
}
/**
 * @generated from enum gooseai.ModelArchitecture
 */
declare enum ModelArchitecture {
    /**
     * @generated from enum value: MODEL_ARCHITECTURE_NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: MODEL_ARCHITECTURE_CLIP_VIT = 1;
     */
    CLIP_VIT = 1,
    /**
     * @generated from enum value: MODEL_ARCHITECTURE_CLIP_RESNET = 2;
     */
    CLIP_RESNET = 2,
    /**
     * @generated from enum value: MODEL_ARCHITECTURE_LDM = 3;
     */
    LDM = 3
}
/**
 * @generated from enum gooseai.Action
 */
declare enum Action {
    /**
     * @generated from enum value: ACTION_PASSTHROUGH = 0;
     */
    PASSTHROUGH = 0,
    /**
     * @generated from enum value: ACTION_REGENERATE_DUPLICATE = 1;
     */
    REGENERATE_DUPLICATE = 1,
    /**
     * @generated from enum value: ACTION_REGENERATE = 2;
     */
    REGENERATE = 2,
    /**
     * @generated from enum value: ACTION_OBFUSCATE_DUPLICATE = 3;
     */
    OBFUSCATE_DUPLICATE = 3,
    /**
     * @generated from enum value: ACTION_OBFUSCATE = 4;
     */
    OBFUSCATE = 4,
    /**
     * @generated from enum value: ACTION_DISCARD = 5;
     */
    DISCARD = 5
}
/**
 * @generated from enum gooseai.ClassifierMode
 */
declare enum ClassifierMode {
    /**
     * @generated from enum value: CLSFR_MODE_ZEROSHOT = 0;
     */
    CLSFR_MODE_ZEROSHOT = 0,
    /**
     * CLSFR_MODE_ODDSRATIO = 2;
     *
     * @generated from enum value: CLSFR_MODE_MULTICLASS = 1;
     */
    CLSFR_MODE_MULTICLASS = 1
}
/**
 * @generated from enum gooseai.AssetAction
 */
declare enum AssetAction {
    /**
     * @generated from enum value: ASSET_PUT = 0;
     */
    ASSET_PUT = 0,
    /**
     * @generated from enum value: ASSET_GET = 1;
     */
    ASSET_GET = 1,
    /**
     * @generated from enum value: ASSET_DELETE = 2;
     */
    ASSET_DELETE = 2
}
/**
 * @generated from enum gooseai.StageAction
 */
declare enum StageAction {
    /**
     * @generated from enum value: STAGE_ACTION_PASS = 0;
     */
    PASS = 0,
    /**
     * @generated from enum value: STAGE_ACTION_DISCARD = 1;
     */
    DISCARD = 1,
    /**
     * @generated from enum value: STAGE_ACTION_RETURN = 2;
     */
    RETURN = 2
}
/**
 * Generally, a GPT BPE 16-bit token, paired with an optional string representation.
 *
 * @generated from message gooseai.Token
 */
declare class Token extends Message<Token> {
    /**
     * @generated from field: optional string text = 1;
     */
    text?: string;
    /**
     * @generated from field: uint32 id = 2;
     */
    id: number;
    constructor(data?: PartialMessage<Token>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.Token";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Token;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Token;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Token;
    static equals(a: Token | PlainMessage<Token> | undefined, b: Token | PlainMessage<Token> | undefined): boolean;
}
/**
 * Sequence of tokens, paired with the id of the tokenizer used to generate them.
 *
 * @generated from message gooseai.Tokens
 */
declare class Tokens extends Message<Tokens> {
    /**
     * @generated from field: repeated gooseai.Token tokens = 1;
     */
    tokens: Token[];
    /**
     * @generated from field: optional string tokenizer_id = 2;
     */
    tokenizerId?: string;
    constructor(data?: PartialMessage<Tokens>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.Tokens";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tokens;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tokens;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tokens;
    static equals(a: Tokens | PlainMessage<Tokens> | undefined, b: Tokens | PlainMessage<Tokens> | undefined): boolean;
}
/**
 * @generated from message gooseai.ImageAdjustment_Gaussian
 */
declare class ImageAdjustment_Gaussian extends Message<ImageAdjustment_Gaussian> {
    /**
     * @generated from field: float sigma = 1;
     */
    sigma: number;
    /**
     * @generated from field: gooseai.GaussianDirection direction = 2;
     */
    direction: GaussianDirection;
    constructor(data?: PartialMessage<ImageAdjustment_Gaussian>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ImageAdjustment_Gaussian";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageAdjustment_Gaussian;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageAdjustment_Gaussian;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageAdjustment_Gaussian;
    static equals(a: ImageAdjustment_Gaussian | PlainMessage<ImageAdjustment_Gaussian> | undefined, b: ImageAdjustment_Gaussian | PlainMessage<ImageAdjustment_Gaussian> | undefined): boolean;
}
/**
 * @generated from message gooseai.ImageAdjustment_Invert
 */
declare class ImageAdjustment_Invert extends Message<ImageAdjustment_Invert> {
    constructor(data?: PartialMessage<ImageAdjustment_Invert>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ImageAdjustment_Invert";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageAdjustment_Invert;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageAdjustment_Invert;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageAdjustment_Invert;
    static equals(a: ImageAdjustment_Invert | PlainMessage<ImageAdjustment_Invert> | undefined, b: ImageAdjustment_Invert | PlainMessage<ImageAdjustment_Invert> | undefined): boolean;
}
/**
 * @generated from message gooseai.ImageAdjustment_Levels
 */
declare class ImageAdjustment_Levels extends Message<ImageAdjustment_Levels> {
    /**
     * @generated from field: float input_low = 1;
     */
    inputLow: number;
    /**
     * @generated from field: float input_high = 2;
     */
    inputHigh: number;
    /**
     * @generated from field: float output_low = 3;
     */
    outputLow: number;
    /**
     * @generated from field: float output_high = 4;
     */
    outputHigh: number;
    constructor(data?: PartialMessage<ImageAdjustment_Levels>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ImageAdjustment_Levels";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageAdjustment_Levels;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageAdjustment_Levels;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageAdjustment_Levels;
    static equals(a: ImageAdjustment_Levels | PlainMessage<ImageAdjustment_Levels> | undefined, b: ImageAdjustment_Levels | PlainMessage<ImageAdjustment_Levels> | undefined): boolean;
}
/**
 * @generated from message gooseai.ImageAdjustment_Channels
 */
declare class ImageAdjustment_Channels extends Message<ImageAdjustment_Channels> {
    /**
     * @generated from field: optional gooseai.ChannelSource r = 1;
     */
    r?: ChannelSource;
    /**
     * @generated from field: optional gooseai.ChannelSource g = 2;
     */
    g?: ChannelSource;
    /**
     * @generated from field: optional gooseai.ChannelSource b = 3;
     */
    b?: ChannelSource;
    /**
     * @generated from field: optional gooseai.ChannelSource a = 4;
     */
    a?: ChannelSource;
    constructor(data?: PartialMessage<ImageAdjustment_Channels>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ImageAdjustment_Channels";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageAdjustment_Channels;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageAdjustment_Channels;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageAdjustment_Channels;
    static equals(a: ImageAdjustment_Channels | PlainMessage<ImageAdjustment_Channels> | undefined, b: ImageAdjustment_Channels | PlainMessage<ImageAdjustment_Channels> | undefined): boolean;
}
/**
 * @generated from message gooseai.ImageAdjustment_Rescale
 */
declare class ImageAdjustment_Rescale extends Message<ImageAdjustment_Rescale> {
    /**
     * @generated from field: uint64 height = 1;
     */
    height: bigint;
    /**
     * @generated from field: uint64 width = 2;
     */
    width: bigint;
    /**
     * @generated from field: gooseai.RescaleMode mode = 3;
     */
    mode: RescaleMode;
    /**
     * @generated from field: repeated string algorithm_hint = 4;
     */
    algorithmHint: string[];
    constructor(data?: PartialMessage<ImageAdjustment_Rescale>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ImageAdjustment_Rescale";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageAdjustment_Rescale;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageAdjustment_Rescale;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageAdjustment_Rescale;
    static equals(a: ImageAdjustment_Rescale | PlainMessage<ImageAdjustment_Rescale> | undefined, b: ImageAdjustment_Rescale | PlainMessage<ImageAdjustment_Rescale> | undefined): boolean;
}
/**
 * @generated from message gooseai.ImageAdjustment_Crop
 */
declare class ImageAdjustment_Crop extends Message<ImageAdjustment_Crop> {
    /**
     * @generated from field: uint64 top = 1;
     */
    top: bigint;
    /**
     * @generated from field: uint64 left = 2;
     */
    left: bigint;
    /**
     * @generated from field: uint64 width = 3;
     */
    width: bigint;
    /**
     * @generated from field: uint64 height = 4;
     */
    height: bigint;
    constructor(data?: PartialMessage<ImageAdjustment_Crop>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ImageAdjustment_Crop";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageAdjustment_Crop;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageAdjustment_Crop;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageAdjustment_Crop;
    static equals(a: ImageAdjustment_Crop | PlainMessage<ImageAdjustment_Crop> | undefined, b: ImageAdjustment_Crop | PlainMessage<ImageAdjustment_Crop> | undefined): boolean;
}
/**
 * @generated from message gooseai.ImageAdjustment
 */
declare class ImageAdjustment extends Message<ImageAdjustment> {
    /**
     * @generated from oneof gooseai.ImageAdjustment.adjustment
     */
    adjustment: {
        /**
         * @generated from field: gooseai.ImageAdjustment_Gaussian blur = 1;
         */
        value: ImageAdjustment_Gaussian;
        case: "blur";
    } | {
        /**
         * @generated from field: gooseai.ImageAdjustment_Invert invert = 2;
         */
        value: ImageAdjustment_Invert;
        case: "invert";
    } | {
        /**
         * @generated from field: gooseai.ImageAdjustment_Levels levels = 3;
         */
        value: ImageAdjustment_Levels;
        case: "levels";
    } | {
        /**
         * @generated from field: gooseai.ImageAdjustment_Channels channels = 4;
         */
        value: ImageAdjustment_Channels;
        case: "channels";
    } | {
        /**
         * @generated from field: gooseai.ImageAdjustment_Rescale rescale = 5;
         */
        value: ImageAdjustment_Rescale;
        case: "rescale";
    } | {
        /**
         * @generated from field: gooseai.ImageAdjustment_Crop crop = 6;
         */
        value: ImageAdjustment_Crop;
        case: "crop";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<ImageAdjustment>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ImageAdjustment";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageAdjustment;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageAdjustment;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageAdjustment;
    static equals(a: ImageAdjustment | PlainMessage<ImageAdjustment> | undefined, b: ImageAdjustment | PlainMessage<ImageAdjustment> | undefined): boolean;
}
/**
 * A tangible Artifact, such as an image, video, or text that is used for input
 * or output.
 *
 * @generated from message gooseai.Artifact
 */
declare class Artifact extends Message<Artifact> {
    /**
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * @generated from field: gooseai.ArtifactType type = 2;
     */
    type: ArtifactType;
    /**
     * MIME type identifier, e.g. "image/png"
     *
     * @generated from field: string mime = 3;
     */
    mime: string;
    /**
     * Magic number, e.g. "PNG"
     *
     * @generated from field: optional string magic = 4;
     */
    magic?: string;
    /**
     * @generated from oneof gooseai.Artifact.data
     */
    data: {
        /**
         * Binary data, e.g. PNG image
         *
         * @generated from field: bytes binary = 5;
         */
        value: Uint8Array;
        case: "binary";
    } | {
        /**
         * Text data, e.g. text prompt
         *
         * @generated from field: string text = 6;
         */
        value: string;
        case: "text";
    } | {
        /**
         * Tokenized text data, e.g. GPT tokens
         *
         * @generated from field: gooseai.Tokens tokens = 7;
         */
        value: Tokens;
        case: "tokens";
    } | {
        /**
         * @generated from field: gooseai.ClassifierParameters classifier = 11;
         */
        value: ClassifierParameters;
        case: "classifier";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * Index of this artifact in input/output list
     *
     * @generated from field: uint32 index = 8;
     */
    index: number;
    /**
     * Reason for finishing, if applicable
     *
     * @generated from field: gooseai.FinishReason finish_reason = 9;
     */
    finishReason: FinishReason;
    /**
     * Seed used to generate this artifact
     *
     * @generated from field: uint32 seed = 10;
     */
    seed: number;
    /**
     * Adjustments to this image / mask before generation
     *
     * @generated from field: repeated gooseai.ImageAdjustment adjustments = 500;
     */
    adjustments: ImageAdjustment[];
    /**
     * Adjustments to this image / mask after generation
     *
     * @generated from field: repeated gooseai.ImageAdjustment postAdjustments = 501;
     */
    postAdjustments: ImageAdjustment[];
    constructor(data?: PartialMessage<Artifact>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.Artifact";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Artifact;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Artifact;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Artifact;
    static equals(a: Artifact | PlainMessage<Artifact> | undefined, b: Artifact | PlainMessage<Artifact> | undefined): boolean;
}
/**
 * A set of parameters for each individual Prompt.
 *
 * @generated from message gooseai.PromptParameters
 */
declare class PromptParameters extends Message<PromptParameters> {
    /**
     * @generated from field: optional bool init = 1;
     */
    init?: boolean;
    /**
     * @generated from field: optional float weight = 2;
     */
    weight?: number;
    constructor(data?: PartialMessage<PromptParameters>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.PromptParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PromptParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PromptParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PromptParameters;
    static equals(a: PromptParameters | PlainMessage<PromptParameters> | undefined, b: PromptParameters | PlainMessage<PromptParameters> | undefined): boolean;
}
/**
 * A Prompt is a special type of Artifact that is used to generate an output.
 * There can be multiple Prompts that affect the same output. Currently, the
 * only Prompts supported are:
 *   - Text (singular)
 *   - Init Image (singular, optional, type ARTIFACT_IMAGE, with init=true)
 *   - Mask (singular, optional, Artifact type ARTIFACT_MASK)
 *
 * @generated from message gooseai.Prompt
 */
declare class Prompt extends Message<Prompt> {
    /**
     * @generated from field: optional gooseai.PromptParameters parameters = 1;
     */
    parameters?: PromptParameters;
    /**
     * @generated from oneof gooseai.Prompt.prompt
     */
    prompt: {
        /**
         * @generated from field: string text = 2;
         */
        value: string;
        case: "text";
    } | {
        /**
         * @generated from field: gooseai.Tokens tokens = 3;
         */
        value: Tokens;
        case: "tokens";
    } | {
        /**
         * @generated from field: gooseai.Artifact artifact = 4;
         */
        value: Artifact;
        case: "artifact";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<Prompt>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.Prompt";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Prompt;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Prompt;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Prompt;
    static equals(a: Prompt | PlainMessage<Prompt> | undefined, b: Prompt | PlainMessage<Prompt> | undefined): boolean;
}
/**
 * Parameters that affect the behavior of the sampler, typically used for CFG.
 *
 * @generated from message gooseai.SamplerParameters
 */
declare class SamplerParameters extends Message<SamplerParameters> {
    /**
     * @generated from field: optional float eta = 1;
     */
    eta?: number;
    /**
     * @generated from field: optional uint64 sampling_steps = 2;
     */
    samplingSteps?: bigint;
    /**
     * @generated from field: optional uint64 latent_channels = 3;
     */
    latentChannels?: bigint;
    /**
     * @generated from field: optional uint64 downsampling_factor = 4;
     */
    downsamplingFactor?: bigint;
    /**
     * @generated from field: optional float cfg_scale = 5;
     */
    cfgScale?: number;
    constructor(data?: PartialMessage<SamplerParameters>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.SamplerParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SamplerParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SamplerParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SamplerParameters;
    static equals(a: SamplerParameters | PlainMessage<SamplerParameters> | undefined, b: SamplerParameters | PlainMessage<SamplerParameters> | undefined): boolean;
}
/**
 * Unused, but reserved for future use. Adjustments to the latents after
 * initialization.
 *
 * @generated from message gooseai.ConditionerParameters
 */
declare class ConditionerParameters extends Message<ConditionerParameters> {
    /**
     * @generated from field: optional string vector_adjust_prior = 1;
     */
    vectorAdjustPrior?: string;
    /**
     * @generated from field: optional gooseai.Model conditioner = 2;
     */
    conditioner?: Model;
    constructor(data?: PartialMessage<ConditionerParameters>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ConditionerParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConditionerParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConditionerParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConditionerParameters;
    static equals(a: ConditionerParameters | PlainMessage<ConditionerParameters> | undefined, b: ConditionerParameters | PlainMessage<ConditionerParameters> | undefined): boolean;
}
/**
 * When does this schedule definition apply?
 *
 * @generated from message gooseai.ScheduleParameters
 */
declare class ScheduleParameters extends Message<ScheduleParameters> {
    /**
     * 0.0 to 1.0
     *
     * @generated from field: optional float start = 1;
     */
    start?: number;
    /**
     * 0.0 to 1.0
     *
     * @generated from field: optional float end = 2;
     */
    end?: number;
    constructor(data?: PartialMessage<ScheduleParameters>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ScheduleParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScheduleParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScheduleParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScheduleParameters;
    static equals(a: ScheduleParameters | PlainMessage<ScheduleParameters> | undefined, b: ScheduleParameters | PlainMessage<ScheduleParameters> | undefined): boolean;
}
/**
 * Parameters that apply to this block of the schedule.
 *
 * @generated from message gooseai.StepParameter
 */
declare class StepParameter extends Message<StepParameter> {
    /**
     * @generated from field: float scaled_step = 1;
     */
    scaledStep: number;
    /**
     * @generated from field: optional gooseai.SamplerParameters sampler = 2;
     */
    sampler?: SamplerParameters;
    /**
     * @generated from field: optional gooseai.ScheduleParameters schedule = 3;
     */
    schedule?: ScheduleParameters;
    /**
     * @generated from field: optional gooseai.GuidanceParameters guidance = 4;
     */
    guidance?: GuidanceParameters;
    constructor(data?: PartialMessage<StepParameter>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.StepParameter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StepParameter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StepParameter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StepParameter;
    static equals(a: StepParameter | PlainMessage<StepParameter> | undefined, b: StepParameter | PlainMessage<StepParameter> | undefined): boolean;
}
/**
 * @generated from message gooseai.Model
 */
declare class Model extends Message<Model> {
    /**
     * @generated from field: gooseai.ModelArchitecture architecture = 1;
     */
    architecture: ModelArchitecture;
    /**
     * @generated from field: string publisher = 2;
     */
    publisher: string;
    /**
     * @generated from field: string dataset = 3;
     */
    dataset: string;
    /**
     * @generated from field: float version = 4;
     */
    version: number;
    /**
     * @generated from field: string semantic_version = 5;
     */
    semanticVersion: string;
    /**
     * @generated from field: string alias = 6;
     */
    alias: string;
    constructor(data?: PartialMessage<Model>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.Model";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Model;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Model;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Model;
    static equals(a: Model | PlainMessage<Model> | undefined, b: Model | PlainMessage<Model> | undefined): boolean;
}
/**
 * @generated from message gooseai.CutoutParameters
 */
declare class CutoutParameters extends Message<CutoutParameters> {
    /**
     * Nested cutouts, unsupported
     *
     * @generated from field: repeated gooseai.CutoutParameters cutouts = 1;
     */
    cutouts: CutoutParameters[];
    /**
     * 0 to n, usually 8 to 32, 0 inner
     *
     * @generated from field: optional uint32 count = 2;
     */
    count?: number;
    /**
     * 0.0 to 1.0, defaults to 0.2
     *
     * @generated from field: optional float gray = 3;
     */
    gray?: number;
    /**
     * percentage of cutouts to blur
     *
     * @generated from field: optional float blur = 4;
     */
    blur?: number;
    /**
     * defaults to inner: 0.5, outer: 0.0
     *
     * @generated from field: optional float size_power = 5;
     */
    sizePower?: number;
    constructor(data?: PartialMessage<CutoutParameters>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.CutoutParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CutoutParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CutoutParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CutoutParameters;
    static equals(a: CutoutParameters | PlainMessage<CutoutParameters> | undefined, b: CutoutParameters | PlainMessage<CutoutParameters> | undefined): boolean;
}
/**
 * Parameters that affect the behavior of the guidance, typically used for CLIP.
 * We can specify more than one model, and the guidance will be a weighted sum
 * of the models.
 *
 * @generated from message gooseai.GuidanceInstanceParameters
 */
declare class GuidanceInstanceParameters extends Message<GuidanceInstanceParameters> {
    /**
     * models to use for this set
     *
     * @generated from field: repeated gooseai.Model models = 2;
     */
    models: Model[];
    /**
     * 0.0 to 1.0, usually 0.05 to 0.225
     *
     * @generated from field: optional float guidance_strength = 3;
     */
    guidanceStrength?: number;
    /**
     * when to apply guidance
     *
     * @generated from field: repeated gooseai.ScheduleParameters schedule = 4;
     */
    schedule: ScheduleParameters[];
    /**
     * cutout parameters
     *
     * @generated from field: optional gooseai.CutoutParameters cutouts = 5;
     */
    cutouts?: CutoutParameters;
    /**
     * prompt to use for guidance
     *
     * @generated from field: optional gooseai.Prompt prompt = 6;
     */
    prompt?: Prompt;
    constructor(data?: PartialMessage<GuidanceInstanceParameters>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.GuidanceInstanceParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GuidanceInstanceParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GuidanceInstanceParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GuidanceInstanceParameters;
    static equals(a: GuidanceInstanceParameters | PlainMessage<GuidanceInstanceParameters> | undefined, b: GuidanceInstanceParameters | PlainMessage<GuidanceInstanceParameters> | undefined): boolean;
}
/**
 * Parameters that affect the behavior of the guidance, typically used for CLIP.
 * The omission of this field implies the default guidance of CFG.
 *
 * @generated from message gooseai.GuidanceParameters
 */
declare class GuidanceParameters extends Message<GuidanceParameters> {
    /**
     * base preset for guidance
     *
     * @generated from field: gooseai.GuidancePreset guidance_preset = 1;
     */
    guidancePreset: GuidancePreset;
    /**
     * guidance instances
     *
     * @generated from field: repeated gooseai.GuidanceInstanceParameters instances = 2;
     */
    instances: GuidanceInstanceParameters[];
    constructor(data?: PartialMessage<GuidanceParameters>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.GuidanceParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GuidanceParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GuidanceParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GuidanceParameters;
    static equals(a: GuidanceParameters | PlainMessage<GuidanceParameters> | undefined, b: GuidanceParameters | PlainMessage<GuidanceParameters> | undefined): boolean;
}
/**
 * @generated from message gooseai.TransformType
 */
declare class TransformType extends Message<TransformType> {
    /**
     * @generated from oneof gooseai.TransformType.type
     */
    type: {
        /**
         * @generated from field: gooseai.DiffusionSampler diffusion = 1;
         */
        value: DiffusionSampler;
        case: "diffusion";
    } | {
        /**
         * @generated from field: gooseai.Upscaler upscaler = 2;
         */
        value: Upscaler;
        case: "upscaler";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<TransformType>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.TransformType";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransformType;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransformType;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransformType;
    static equals(a: TransformType | PlainMessage<TransformType> | undefined, b: TransformType | PlainMessage<TransformType> | undefined): boolean;
}
/**
 * @generated from message gooseai.ExtendedParameter
 */
declare class ExtendedParameter extends Message<ExtendedParameter> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from oneof gooseai.ExtendedParameter.value
     */
    value: {
        /**
         * @generated from field: float float = 2;
         */
        value: number;
        case: "float";
    } | {
        /**
         * @generated from field: uint64 int = 3;
         */
        value: bigint;
        case: "int";
    } | {
        /**
         * @generated from field: string str = 4;
         */
        value: string;
        case: "str";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<ExtendedParameter>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ExtendedParameter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExtendedParameter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExtendedParameter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExtendedParameter;
    static equals(a: ExtendedParameter | PlainMessage<ExtendedParameter> | undefined, b: ExtendedParameter | PlainMessage<ExtendedParameter> | undefined): boolean;
}
/**
 * @generated from message gooseai.ExtendedParameters
 */
declare class ExtendedParameters extends Message<ExtendedParameters> {
    /**
     * @generated from field: repeated gooseai.ExtendedParameter parameters = 1;
     */
    parameters: ExtendedParameter[];
    constructor(data?: PartialMessage<ExtendedParameters>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ExtendedParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExtendedParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExtendedParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExtendedParameters;
    static equals(a: ExtendedParameters | PlainMessage<ExtendedParameters> | undefined, b: ExtendedParameters | PlainMessage<ExtendedParameters> | undefined): boolean;
}
/**
 * @generated from message gooseai.ImageParameters
 */
declare class ImageParameters extends Message<ImageParameters> {
    /**
     * @generated from field: optional uint64 height = 1;
     */
    height?: bigint;
    /**
     * @generated from field: optional uint64 width = 2;
     */
    width?: bigint;
    /**
     * @generated from field: repeated uint32 seed = 3;
     */
    seed: number[];
    /**
     * @generated from field: optional uint64 samples = 4;
     */
    samples?: bigint;
    /**
     * @generated from field: optional uint64 steps = 5;
     */
    steps?: bigint;
    /**
     * @generated from field: optional gooseai.TransformType transform = 6;
     */
    transform?: TransformType;
    /**
     * @generated from field: repeated gooseai.StepParameter parameters = 7;
     */
    parameters: StepParameter[];
    /**
     * @generated from field: optional gooseai.ExtendedParameters extension = 500;
     */
    extension?: ExtendedParameters;
    constructor(data?: PartialMessage<ImageParameters>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ImageParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageParameters;
    static equals(a: ImageParameters | PlainMessage<ImageParameters> | undefined, b: ImageParameters | PlainMessage<ImageParameters> | undefined): boolean;
}
/**
 * @generated from message gooseai.ClassifierConcept
 */
declare class ClassifierConcept extends Message<ClassifierConcept> {
    /**
     * @generated from field: string concept = 1;
     */
    concept: string;
    /**
     * @generated from field: optional float threshold = 2;
     */
    threshold?: number;
    constructor(data?: PartialMessage<ClassifierConcept>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ClassifierConcept";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClassifierConcept;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClassifierConcept;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClassifierConcept;
    static equals(a: ClassifierConcept | PlainMessage<ClassifierConcept> | undefined, b: ClassifierConcept | PlainMessage<ClassifierConcept> | undefined): boolean;
}
/**
 * @generated from message gooseai.ClassifierCategory
 */
declare class ClassifierCategory extends Message<ClassifierCategory> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: repeated gooseai.ClassifierConcept concepts = 2;
     */
    concepts: ClassifierConcept[];
    /**
     * @generated from field: optional float adjustment = 3;
     */
    adjustment?: number;
    /**
     * @generated from field: optional gooseai.Action action = 4;
     */
    action?: Action;
    /**
     * @generated from field: optional gooseai.ClassifierMode classifier_mode = 5;
     */
    classifierMode?: ClassifierMode;
    constructor(data?: PartialMessage<ClassifierCategory>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ClassifierCategory";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClassifierCategory;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClassifierCategory;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClassifierCategory;
    static equals(a: ClassifierCategory | PlainMessage<ClassifierCategory> | undefined, b: ClassifierCategory | PlainMessage<ClassifierCategory> | undefined): boolean;
}
/**
 * @generated from message gooseai.ClassifierParameters
 */
declare class ClassifierParameters extends Message<ClassifierParameters> {
    /**
     * @generated from field: repeated gooseai.ClassifierCategory categories = 1;
     */
    categories: ClassifierCategory[];
    /**
     * @generated from field: repeated gooseai.ClassifierCategory exceeds = 2;
     */
    exceeds: ClassifierCategory[];
    /**
     * @generated from field: optional gooseai.Action realized_action = 3;
     */
    realizedAction?: Action;
    constructor(data?: PartialMessage<ClassifierParameters>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ClassifierParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClassifierParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClassifierParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClassifierParameters;
    static equals(a: ClassifierParameters | PlainMessage<ClassifierParameters> | undefined, b: ClassifierParameters | PlainMessage<ClassifierParameters> | undefined): boolean;
}
/**
 * @generated from message gooseai.AssetParameters
 */
declare class AssetParameters extends Message<AssetParameters> {
    /**
     * @generated from field: gooseai.AssetAction action = 1;
     */
    action: AssetAction;
    /**
     * @generated from field: uint64 project = 2;
     */
    project: bigint;
    constructor(data?: PartialMessage<AssetParameters>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.AssetParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetParameters;
    static equals(a: AssetParameters | PlainMessage<AssetParameters> | undefined, b: AssetParameters | PlainMessage<AssetParameters> | undefined): boolean;
}
/**
 * AnswerMeta is a set of metadata about an answer, usually the operating
 * environment.
 *
 * @generated from message gooseai.AnswerMeta
 */
declare class AnswerMeta extends Message<AnswerMeta> {
    /**
     * @generated from field: optional string gpu_id = 1;
     */
    gpuId?: string;
    /**
     * @generated from field: optional string cpu_id = 2;
     */
    cpuId?: string;
    /**
     * @generated from field: optional string node_id = 3;
     */
    nodeId?: string;
    /**
     * @generated from field: optional string engine_id = 4;
     */
    engineId?: string;
    constructor(data?: PartialMessage<AnswerMeta>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.AnswerMeta";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnswerMeta;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnswerMeta;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnswerMeta;
    static equals(a: AnswerMeta | PlainMessage<AnswerMeta> | undefined, b: AnswerMeta | PlainMessage<AnswerMeta> | undefined): boolean;
}
/**
 * An Answer is a response to a Request. It is a set of Artifacts, which can be
 * of any type and forwarded to the client or the next stage.
 *
 * @generated from message gooseai.Answer
 */
declare class Answer extends Message<Answer> {
    /**
     * @generated from field: string answer_id = 1;
     */
    answerId: string;
    /**
     * @generated from field: string request_id = 2;
     */
    requestId: string;
    /**
     * @generated from field: uint64 received = 3;
     */
    received: bigint;
    /**
     * @generated from field: uint64 created = 4;
     */
    created: bigint;
    /**
     * @generated from field: optional gooseai.AnswerMeta meta = 6;
     */
    meta?: AnswerMeta;
    /**
     * @generated from field: repeated gooseai.Artifact artifacts = 7;
     */
    artifacts: Artifact[];
    constructor(data?: PartialMessage<Answer>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.Answer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Answer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Answer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Answer;
    static equals(a: Answer | PlainMessage<Answer> | undefined, b: Answer | PlainMessage<Answer> | undefined): boolean;
}
/**
 * A Request is a set of Artifacts, which can be of any type with model or
 * transform parameters. It is sent to the server, which will respond with an
 * Answer.
 *
 * @generated from message gooseai.Request
 */
declare class Request extends Message<Request> {
    /**
     * @generated from field: string engine_id = 1;
     */
    engineId: string;
    /**
     * @generated from field: string request_id = 2;
     */
    requestId: string;
    /**
     * @generated from field: gooseai.ArtifactType requested_type = 3;
     */
    requestedType: ArtifactType;
    /**
     * @generated from field: repeated gooseai.Prompt prompt = 4;
     */
    prompt: Prompt[];
    /**
     * @generated from oneof gooseai.Request.params
     */
    params: {
        /**
         * @generated from field: gooseai.ImageParameters image = 5;
         */
        value: ImageParameters;
        case: "image";
    } | {
        /**
         * @generated from field: gooseai.ClassifierParameters classifier = 7;
         */
        value: ClassifierParameters;
        case: "classifier";
    } | {
        /**
         * @generated from field: gooseai.AssetParameters asset = 8;
         */
        value: AssetParameters;
        case: "asset";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: optional gooseai.ConditionerParameters conditioner = 6;
     */
    conditioner?: ConditionerParameters;
    /**
     * @generated from field: string request_agent = 500;
     */
    requestAgent: string;
    constructor(data?: PartialMessage<Request>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.Request";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Request;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Request;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Request;
    static equals(a: Request | PlainMessage<Request> | undefined, b: Request | PlainMessage<Request> | undefined): boolean;
}
/**
 * @generated from message gooseai.OnStatus
 */
declare class OnStatus extends Message<OnStatus> {
    /**
     * @generated from field: repeated gooseai.FinishReason reason = 1;
     */
    reason: FinishReason[];
    /**
     * @generated from field: optional string target = 2;
     */
    target?: string;
    /**
     * @generated from field: repeated gooseai.StageAction action = 3;
     */
    action: StageAction[];
    constructor(data?: PartialMessage<OnStatus>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.OnStatus";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OnStatus;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OnStatus;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OnStatus;
    static equals(a: OnStatus | PlainMessage<OnStatus> | undefined, b: OnStatus | PlainMessage<OnStatus> | undefined): boolean;
}
/**
 * @generated from message gooseai.Stage
 */
declare class Stage extends Message<Stage> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: gooseai.Request request = 2;
     */
    request?: Request;
    /**
     * @generated from field: repeated gooseai.OnStatus on_status = 3;
     */
    onStatus: OnStatus[];
    constructor(data?: PartialMessage<Stage>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.Stage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Stage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Stage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Stage;
    static equals(a: Stage | PlainMessage<Stage> | undefined, b: Stage | PlainMessage<Stage> | undefined): boolean;
}
/**
 * @generated from message gooseai.ChainRequest
 */
declare class ChainRequest extends Message<ChainRequest> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: repeated gooseai.Stage stage = 2;
     */
    stage: Stage[];
    constructor(data?: PartialMessage<ChainRequest>);
    static readonly runtime: _bufbuild_protobuf_dist_types_private_proto_runtime.ProtoRuntime;
    static readonly typeName = "gooseai.ChainRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainRequest;
    static equals(a: ChainRequest | PlainMessage<ChainRequest> | undefined, b: ChainRequest | PlainMessage<ChainRequest> | undefined): boolean;
}

/**
 *
 * gRPC services
 *
 *
 * @generated from service gooseai.GenerationService
 */
declare const GenerationService: {
    readonly typeName: "gooseai.GenerationService";
    readonly methods: {
        /**
         * @generated from rpc gooseai.GenerationService.Generate
         */
        readonly generate: {
            readonly name: "Generate";
            readonly I: typeof Request;
            readonly O: typeof Answer;
            readonly kind: MethodKind.ServerStreaming;
        };
        /**
         * @generated from rpc gooseai.GenerationService.ChainGenerate
         */
        readonly chainGenerate: {
            readonly name: "ChainGenerate";
            readonly I: typeof ChainRequest;
            readonly O: typeof Answer;
            readonly kind: MethodKind.ServerStreaming;
        };
    };
};

export { Action, Answer, AnswerMeta, Artifact, ArtifactType, AssetAction, AssetParameters, ChainRequest, ChannelSource, ClassifierCategory, ClassifierConcept, ClassifierMode, ClassifierParameters, ConditionerParameters, CutoutParameters, DiffusionSampler, ExtendedParameter, ExtendedParameters, FinishReason, GaussianDirection, GenerationService, GuidanceInstanceParameters, GuidanceParameters, GuidancePreset, ImageAdjustment, ImageAdjustment_Channels, ImageAdjustment_Crop, ImageAdjustment_Gaussian, ImageAdjustment_Invert, ImageAdjustment_Levels, ImageAdjustment_Rescale, ImageParameters, Model, ModelArchitecture, OnStatus, Prompt, PromptParameters, Request, RescaleMode, SamplerParameters, ScheduleParameters, Stage, StageAction, StepParameter, Token, Tokens, TransformType, Upscaler };
