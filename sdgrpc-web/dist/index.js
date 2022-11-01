import { proto3, Message, protoInt64, MethodKind } from '@bufbuild/protobuf';

var FinishReason = /* @__PURE__ */ ((FinishReason2) => {
  FinishReason2[FinishReason2["NULL"] = 0] = "NULL";
  FinishReason2[FinishReason2["LENGTH"] = 1] = "LENGTH";
  FinishReason2[FinishReason2["STOP"] = 2] = "STOP";
  FinishReason2[FinishReason2["ERROR"] = 3] = "ERROR";
  FinishReason2[FinishReason2["FILTER"] = 4] = "FILTER";
  return FinishReason2;
})(FinishReason || {});
proto3.util.setEnumType(FinishReason, "gooseai.FinishReason", [
  { no: 0, name: "NULL" },
  { no: 1, name: "LENGTH" },
  { no: 2, name: "STOP" },
  { no: 3, name: "ERROR" },
  { no: 4, name: "FILTER" }
]);
var ArtifactType = /* @__PURE__ */ ((ArtifactType2) => {
  ArtifactType2[ArtifactType2["ARTIFACT_NONE"] = 0] = "ARTIFACT_NONE";
  ArtifactType2[ArtifactType2["ARTIFACT_IMAGE"] = 1] = "ARTIFACT_IMAGE";
  ArtifactType2[ArtifactType2["ARTIFACT_VIDEO"] = 2] = "ARTIFACT_VIDEO";
  ArtifactType2[ArtifactType2["ARTIFACT_TEXT"] = 3] = "ARTIFACT_TEXT";
  ArtifactType2[ArtifactType2["ARTIFACT_TOKENS"] = 4] = "ARTIFACT_TOKENS";
  ArtifactType2[ArtifactType2["ARTIFACT_EMBEDDING"] = 5] = "ARTIFACT_EMBEDDING";
  ArtifactType2[ArtifactType2["ARTIFACT_CLASSIFICATIONS"] = 6] = "ARTIFACT_CLASSIFICATIONS";
  ArtifactType2[ArtifactType2["ARTIFACT_MASK"] = 7] = "ARTIFACT_MASK";
  return ArtifactType2;
})(ArtifactType || {});
proto3.util.setEnumType(ArtifactType, "gooseai.ArtifactType", [
  { no: 0, name: "ARTIFACT_NONE" },
  { no: 1, name: "ARTIFACT_IMAGE" },
  { no: 2, name: "ARTIFACT_VIDEO" },
  { no: 3, name: "ARTIFACT_TEXT" },
  { no: 4, name: "ARTIFACT_TOKENS" },
  { no: 5, name: "ARTIFACT_EMBEDDING" },
  { no: 6, name: "ARTIFACT_CLASSIFICATIONS" },
  { no: 7, name: "ARTIFACT_MASK" }
]);
var GaussianDirection = /* @__PURE__ */ ((GaussianDirection2) => {
  GaussianDirection2[GaussianDirection2["DIRECTION_NONE"] = 0] = "DIRECTION_NONE";
  GaussianDirection2[GaussianDirection2["DIRECTION_UP"] = 1] = "DIRECTION_UP";
  GaussianDirection2[GaussianDirection2["DIRECTION_DOWN"] = 2] = "DIRECTION_DOWN";
  return GaussianDirection2;
})(GaussianDirection || {});
proto3.util.setEnumType(GaussianDirection, "gooseai.GaussianDirection", [
  { no: 0, name: "DIRECTION_NONE" },
  { no: 1, name: "DIRECTION_UP" },
  { no: 2, name: "DIRECTION_DOWN" }
]);
var ChannelSource = /* @__PURE__ */ ((ChannelSource2) => {
  ChannelSource2[ChannelSource2["CHANNEL_R"] = 0] = "CHANNEL_R";
  ChannelSource2[ChannelSource2["CHANNEL_G"] = 1] = "CHANNEL_G";
  ChannelSource2[ChannelSource2["CHANNEL_B"] = 2] = "CHANNEL_B";
  ChannelSource2[ChannelSource2["CHANNEL_A"] = 3] = "CHANNEL_A";
  ChannelSource2[ChannelSource2["CHANNEL_ZERO"] = 4] = "CHANNEL_ZERO";
  ChannelSource2[ChannelSource2["CHANNEL_ONE"] = 5] = "CHANNEL_ONE";
  ChannelSource2[ChannelSource2["CHANNEL_DISCARD"] = 6] = "CHANNEL_DISCARD";
  return ChannelSource2;
})(ChannelSource || {});
proto3.util.setEnumType(ChannelSource, "gooseai.ChannelSource", [
  { no: 0, name: "CHANNEL_R" },
  { no: 1, name: "CHANNEL_G" },
  { no: 2, name: "CHANNEL_B" },
  { no: 3, name: "CHANNEL_A" },
  { no: 4, name: "CHANNEL_ZERO" },
  { no: 5, name: "CHANNEL_ONE" },
  { no: 6, name: "CHANNEL_DISCARD" }
]);
var RescaleMode = /* @__PURE__ */ ((RescaleMode2) => {
  RescaleMode2[RescaleMode2["RESCALE_STRICT"] = 0] = "RESCALE_STRICT";
  RescaleMode2[RescaleMode2["RESCALE_CROP"] = 2] = "RESCALE_CROP";
  RescaleMode2[RescaleMode2["RESCALE_FIT"] = 3] = "RESCALE_FIT";
  return RescaleMode2;
})(RescaleMode || {});
proto3.util.setEnumType(RescaleMode, "gooseai.RescaleMode", [
  { no: 0, name: "RESCALE_STRICT" },
  { no: 2, name: "RESCALE_CROP" },
  { no: 3, name: "RESCALE_FIT" }
]);
var DiffusionSampler = /* @__PURE__ */ ((DiffusionSampler2) => {
  DiffusionSampler2[DiffusionSampler2["SAMPLER_DDIM"] = 0] = "SAMPLER_DDIM";
  DiffusionSampler2[DiffusionSampler2["SAMPLER_DDPM"] = 1] = "SAMPLER_DDPM";
  DiffusionSampler2[DiffusionSampler2["SAMPLER_K_EULER"] = 2] = "SAMPLER_K_EULER";
  DiffusionSampler2[DiffusionSampler2["SAMPLER_K_EULER_ANCESTRAL"] = 3] = "SAMPLER_K_EULER_ANCESTRAL";
  DiffusionSampler2[DiffusionSampler2["SAMPLER_K_HEUN"] = 4] = "SAMPLER_K_HEUN";
  DiffusionSampler2[DiffusionSampler2["SAMPLER_K_DPM_2"] = 5] = "SAMPLER_K_DPM_2";
  DiffusionSampler2[DiffusionSampler2["SAMPLER_K_DPM_2_ANCESTRAL"] = 6] = "SAMPLER_K_DPM_2_ANCESTRAL";
  DiffusionSampler2[DiffusionSampler2["SAMPLER_K_LMS"] = 7] = "SAMPLER_K_LMS";
  return DiffusionSampler2;
})(DiffusionSampler || {});
proto3.util.setEnumType(DiffusionSampler, "gooseai.DiffusionSampler", [
  { no: 0, name: "SAMPLER_DDIM" },
  { no: 1, name: "SAMPLER_DDPM" },
  { no: 2, name: "SAMPLER_K_EULER" },
  { no: 3, name: "SAMPLER_K_EULER_ANCESTRAL" },
  { no: 4, name: "SAMPLER_K_HEUN" },
  { no: 5, name: "SAMPLER_K_DPM_2" },
  { no: 6, name: "SAMPLER_K_DPM_2_ANCESTRAL" },
  { no: 7, name: "SAMPLER_K_LMS" }
]);
var Upscaler = /* @__PURE__ */ ((Upscaler2) => {
  Upscaler2[Upscaler2["RGB"] = 0] = "RGB";
  Upscaler2[Upscaler2["GFPGAN"] = 1] = "GFPGAN";
  Upscaler2[Upscaler2["ESRGAN"] = 2] = "ESRGAN";
  return Upscaler2;
})(Upscaler || {});
proto3.util.setEnumType(Upscaler, "gooseai.Upscaler", [
  { no: 0, name: "UPSCALER_RGB" },
  { no: 1, name: "UPSCALER_GFPGAN" },
  { no: 2, name: "UPSCALER_ESRGAN" }
]);
var GuidancePreset = /* @__PURE__ */ ((GuidancePreset2) => {
  GuidancePreset2[GuidancePreset2["NONE"] = 0] = "NONE";
  GuidancePreset2[GuidancePreset2["FAST"] = 1] = "FAST";
  GuidancePreset2[GuidancePreset2["EFFICIENT"] = 2] = "EFFICIENT";
  GuidancePreset2[GuidancePreset2["BALANCED"] = 3] = "BALANCED";
  GuidancePreset2[GuidancePreset2["QUALITY"] = 4] = "QUALITY";
  return GuidancePreset2;
})(GuidancePreset || {});
proto3.util.setEnumType(GuidancePreset, "gooseai.GuidancePreset", [
  { no: 0, name: "GUIDANCE_PRESET_NONE" },
  { no: 1, name: "GUIDANCE_PRESET_FAST" },
  { no: 2, name: "GUIDANCE_PRESET_EFFICIENT" },
  { no: 3, name: "GUIDANCE_PRESET_BALANCED" },
  { no: 4, name: "GUIDANCE_PRESET_QUALITY" }
]);
var ModelArchitecture = /* @__PURE__ */ ((ModelArchitecture2) => {
  ModelArchitecture2[ModelArchitecture2["NONE"] = 0] = "NONE";
  ModelArchitecture2[ModelArchitecture2["CLIP_VIT"] = 1] = "CLIP_VIT";
  ModelArchitecture2[ModelArchitecture2["CLIP_RESNET"] = 2] = "CLIP_RESNET";
  ModelArchitecture2[ModelArchitecture2["LDM"] = 3] = "LDM";
  return ModelArchitecture2;
})(ModelArchitecture || {});
proto3.util.setEnumType(ModelArchitecture, "gooseai.ModelArchitecture", [
  { no: 0, name: "MODEL_ARCHITECTURE_NONE" },
  { no: 1, name: "MODEL_ARCHITECTURE_CLIP_VIT" },
  { no: 2, name: "MODEL_ARCHITECTURE_CLIP_RESNET" },
  { no: 3, name: "MODEL_ARCHITECTURE_LDM" }
]);
var Action = /* @__PURE__ */ ((Action2) => {
  Action2[Action2["PASSTHROUGH"] = 0] = "PASSTHROUGH";
  Action2[Action2["REGENERATE_DUPLICATE"] = 1] = "REGENERATE_DUPLICATE";
  Action2[Action2["REGENERATE"] = 2] = "REGENERATE";
  Action2[Action2["OBFUSCATE_DUPLICATE"] = 3] = "OBFUSCATE_DUPLICATE";
  Action2[Action2["OBFUSCATE"] = 4] = "OBFUSCATE";
  Action2[Action2["DISCARD"] = 5] = "DISCARD";
  return Action2;
})(Action || {});
proto3.util.setEnumType(Action, "gooseai.Action", [
  { no: 0, name: "ACTION_PASSTHROUGH" },
  { no: 1, name: "ACTION_REGENERATE_DUPLICATE" },
  { no: 2, name: "ACTION_REGENERATE" },
  { no: 3, name: "ACTION_OBFUSCATE_DUPLICATE" },
  { no: 4, name: "ACTION_OBFUSCATE" },
  { no: 5, name: "ACTION_DISCARD" }
]);
var ClassifierMode = /* @__PURE__ */ ((ClassifierMode2) => {
  ClassifierMode2[ClassifierMode2["CLSFR_MODE_ZEROSHOT"] = 0] = "CLSFR_MODE_ZEROSHOT";
  ClassifierMode2[ClassifierMode2["CLSFR_MODE_MULTICLASS"] = 1] = "CLSFR_MODE_MULTICLASS";
  return ClassifierMode2;
})(ClassifierMode || {});
proto3.util.setEnumType(ClassifierMode, "gooseai.ClassifierMode", [
  { no: 0, name: "CLSFR_MODE_ZEROSHOT" },
  { no: 1, name: "CLSFR_MODE_MULTICLASS" }
]);
var AssetAction = /* @__PURE__ */ ((AssetAction2) => {
  AssetAction2[AssetAction2["ASSET_PUT"] = 0] = "ASSET_PUT";
  AssetAction2[AssetAction2["ASSET_GET"] = 1] = "ASSET_GET";
  AssetAction2[AssetAction2["ASSET_DELETE"] = 2] = "ASSET_DELETE";
  return AssetAction2;
})(AssetAction || {});
proto3.util.setEnumType(AssetAction, "gooseai.AssetAction", [
  { no: 0, name: "ASSET_PUT" },
  { no: 1, name: "ASSET_GET" },
  { no: 2, name: "ASSET_DELETE" }
]);
var StageAction = /* @__PURE__ */ ((StageAction2) => {
  StageAction2[StageAction2["PASS"] = 0] = "PASS";
  StageAction2[StageAction2["DISCARD"] = 1] = "DISCARD";
  StageAction2[StageAction2["RETURN"] = 2] = "RETURN";
  return StageAction2;
})(StageAction || {});
proto3.util.setEnumType(StageAction, "gooseai.StageAction", [
  { no: 0, name: "STAGE_ACTION_PASS" },
  { no: 1, name: "STAGE_ACTION_DISCARD" },
  { no: 2, name: "STAGE_ACTION_RETURN" }
]);
class Token extends Message {
  text;
  id = 0;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.Token";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "text", kind: "scalar", T: 9, opt: true },
    { no: 2, name: "id", kind: "scalar", T: 13 }
  ]);
  static fromBinary(bytes, options) {
    return new Token().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new Token().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new Token().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(Token, a, b);
  }
}
class Tokens extends Message {
  tokens = [];
  tokenizerId;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.Tokens";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tokens", kind: "message", T: Token, repeated: true },
    { no: 2, name: "tokenizer_id", kind: "scalar", T: 9, opt: true }
  ]);
  static fromBinary(bytes, options) {
    return new Tokens().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new Tokens().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new Tokens().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(Tokens, a, b);
  }
}
class ImageAdjustment_Gaussian extends Message {
  sigma = 0;
  direction = 0 /* DIRECTION_NONE */;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ImageAdjustment_Gaussian";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sigma", kind: "scalar", T: 2 },
    { no: 2, name: "direction", kind: "enum", T: proto3.getEnumType(GaussianDirection) }
  ]);
  static fromBinary(bytes, options) {
    return new ImageAdjustment_Gaussian().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ImageAdjustment_Gaussian().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ImageAdjustment_Gaussian().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ImageAdjustment_Gaussian, a, b);
  }
}
class ImageAdjustment_Invert extends Message {
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ImageAdjustment_Invert";
  static fields = proto3.util.newFieldList(() => []);
  static fromBinary(bytes, options) {
    return new ImageAdjustment_Invert().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ImageAdjustment_Invert().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ImageAdjustment_Invert().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ImageAdjustment_Invert, a, b);
  }
}
class ImageAdjustment_Levels extends Message {
  inputLow = 0;
  inputHigh = 0;
  outputLow = 0;
  outputHigh = 0;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ImageAdjustment_Levels";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "input_low", kind: "scalar", T: 2 },
    { no: 2, name: "input_high", kind: "scalar", T: 2 },
    { no: 3, name: "output_low", kind: "scalar", T: 2 },
    { no: 4, name: "output_high", kind: "scalar", T: 2 }
  ]);
  static fromBinary(bytes, options) {
    return new ImageAdjustment_Levels().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ImageAdjustment_Levels().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ImageAdjustment_Levels().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ImageAdjustment_Levels, a, b);
  }
}
class ImageAdjustment_Channels extends Message {
  r;
  g;
  b;
  a;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ImageAdjustment_Channels";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "r", kind: "enum", T: proto3.getEnumType(ChannelSource), opt: true },
    { no: 2, name: "g", kind: "enum", T: proto3.getEnumType(ChannelSource), opt: true },
    { no: 3, name: "b", kind: "enum", T: proto3.getEnumType(ChannelSource), opt: true },
    { no: 4, name: "a", kind: "enum", T: proto3.getEnumType(ChannelSource), opt: true }
  ]);
  static fromBinary(bytes, options) {
    return new ImageAdjustment_Channels().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ImageAdjustment_Channels().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ImageAdjustment_Channels().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ImageAdjustment_Channels, a, b);
  }
}
class ImageAdjustment_Rescale extends Message {
  height = protoInt64.zero;
  width = protoInt64.zero;
  mode = 0 /* RESCALE_STRICT */;
  algorithmHint = [];
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ImageAdjustment_Rescale";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 4 },
    { no: 2, name: "width", kind: "scalar", T: 4 },
    { no: 3, name: "mode", kind: "enum", T: proto3.getEnumType(RescaleMode) },
    { no: 4, name: "algorithm_hint", kind: "scalar", T: 9, repeated: true }
  ]);
  static fromBinary(bytes, options) {
    return new ImageAdjustment_Rescale().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ImageAdjustment_Rescale().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ImageAdjustment_Rescale().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ImageAdjustment_Rescale, a, b);
  }
}
class ImageAdjustment_Crop extends Message {
  top = protoInt64.zero;
  left = protoInt64.zero;
  width = protoInt64.zero;
  height = protoInt64.zero;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ImageAdjustment_Crop";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "top", kind: "scalar", T: 4 },
    { no: 2, name: "left", kind: "scalar", T: 4 },
    { no: 3, name: "width", kind: "scalar", T: 4 },
    { no: 4, name: "height", kind: "scalar", T: 4 }
  ]);
  static fromBinary(bytes, options) {
    return new ImageAdjustment_Crop().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ImageAdjustment_Crop().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ImageAdjustment_Crop().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ImageAdjustment_Crop, a, b);
  }
}
class ImageAdjustment extends Message {
  adjustment = { case: void 0 };
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ImageAdjustment";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "blur", kind: "message", T: ImageAdjustment_Gaussian, oneof: "adjustment" },
    { no: 2, name: "invert", kind: "message", T: ImageAdjustment_Invert, oneof: "adjustment" },
    { no: 3, name: "levels", kind: "message", T: ImageAdjustment_Levels, oneof: "adjustment" },
    { no: 4, name: "channels", kind: "message", T: ImageAdjustment_Channels, oneof: "adjustment" },
    { no: 5, name: "rescale", kind: "message", T: ImageAdjustment_Rescale, oneof: "adjustment" },
    { no: 6, name: "crop", kind: "message", T: ImageAdjustment_Crop, oneof: "adjustment" }
  ]);
  static fromBinary(bytes, options) {
    return new ImageAdjustment().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ImageAdjustment().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ImageAdjustment().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ImageAdjustment, a, b);
  }
}
class Artifact extends Message {
  id = protoInt64.zero;
  type = 0 /* ARTIFACT_NONE */;
  mime = "";
  magic;
  data = { case: void 0 };
  index = 0;
  finishReason = 0 /* NULL */;
  seed = 0;
  adjustments = [];
  postAdjustments = [];
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.Artifact";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(ArtifactType) },
    { no: 3, name: "mime", kind: "scalar", T: 9 },
    { no: 4, name: "magic", kind: "scalar", T: 9, opt: true },
    { no: 5, name: "binary", kind: "scalar", T: 12, oneof: "data" },
    { no: 6, name: "text", kind: "scalar", T: 9, oneof: "data" },
    { no: 7, name: "tokens", kind: "message", T: Tokens, oneof: "data" },
    { no: 11, name: "classifier", kind: "message", T: ClassifierParameters, oneof: "data" },
    { no: 8, name: "index", kind: "scalar", T: 13 },
    { no: 9, name: "finish_reason", kind: "enum", T: proto3.getEnumType(FinishReason) },
    { no: 10, name: "seed", kind: "scalar", T: 13 },
    { no: 500, name: "adjustments", kind: "message", T: ImageAdjustment, repeated: true },
    { no: 501, name: "postAdjustments", kind: "message", T: ImageAdjustment, repeated: true }
  ]);
  static fromBinary(bytes, options) {
    return new Artifact().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new Artifact().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new Artifact().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(Artifact, a, b);
  }
}
class PromptParameters extends Message {
  init;
  weight;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.PromptParameters";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "init", kind: "scalar", T: 8, opt: true },
    { no: 2, name: "weight", kind: "scalar", T: 2, opt: true }
  ]);
  static fromBinary(bytes, options) {
    return new PromptParameters().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new PromptParameters().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new PromptParameters().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(PromptParameters, a, b);
  }
}
class Prompt extends Message {
  parameters;
  prompt = { case: void 0 };
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.Prompt";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "parameters", kind: "message", T: PromptParameters, opt: true },
    { no: 2, name: "text", kind: "scalar", T: 9, oneof: "prompt" },
    { no: 3, name: "tokens", kind: "message", T: Tokens, oneof: "prompt" },
    { no: 4, name: "artifact", kind: "message", T: Artifact, oneof: "prompt" }
  ]);
  static fromBinary(bytes, options) {
    return new Prompt().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new Prompt().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new Prompt().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(Prompt, a, b);
  }
}
class SamplerParameters extends Message {
  eta;
  samplingSteps;
  latentChannels;
  downsamplingFactor;
  cfgScale;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.SamplerParameters";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "eta", kind: "scalar", T: 2, opt: true },
    { no: 2, name: "sampling_steps", kind: "scalar", T: 4, opt: true },
    { no: 3, name: "latent_channels", kind: "scalar", T: 4, opt: true },
    { no: 4, name: "downsampling_factor", kind: "scalar", T: 4, opt: true },
    { no: 5, name: "cfg_scale", kind: "scalar", T: 2, opt: true }
  ]);
  static fromBinary(bytes, options) {
    return new SamplerParameters().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new SamplerParameters().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new SamplerParameters().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(SamplerParameters, a, b);
  }
}
class ConditionerParameters extends Message {
  vectorAdjustPrior;
  conditioner;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ConditionerParameters";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "vector_adjust_prior", kind: "scalar", T: 9, opt: true },
    { no: 2, name: "conditioner", kind: "message", T: Model, opt: true }
  ]);
  static fromBinary(bytes, options) {
    return new ConditionerParameters().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ConditionerParameters().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ConditionerParameters().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ConditionerParameters, a, b);
  }
}
class ScheduleParameters extends Message {
  start;
  end;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ScheduleParameters";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "start", kind: "scalar", T: 2, opt: true },
    { no: 2, name: "end", kind: "scalar", T: 2, opt: true }
  ]);
  static fromBinary(bytes, options) {
    return new ScheduleParameters().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ScheduleParameters().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ScheduleParameters().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ScheduleParameters, a, b);
  }
}
class StepParameter extends Message {
  scaledStep = 0;
  sampler;
  schedule;
  guidance;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.StepParameter";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "scaled_step", kind: "scalar", T: 2 },
    { no: 2, name: "sampler", kind: "message", T: SamplerParameters, opt: true },
    { no: 3, name: "schedule", kind: "message", T: ScheduleParameters, opt: true },
    { no: 4, name: "guidance", kind: "message", T: GuidanceParameters, opt: true }
  ]);
  static fromBinary(bytes, options) {
    return new StepParameter().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new StepParameter().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new StepParameter().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(StepParameter, a, b);
  }
}
class Model extends Message {
  architecture = 0 /* NONE */;
  publisher = "";
  dataset = "";
  version = 0;
  semanticVersion = "";
  alias = "";
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.Model";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "architecture", kind: "enum", T: proto3.getEnumType(ModelArchitecture) },
    { no: 2, name: "publisher", kind: "scalar", T: 9 },
    { no: 3, name: "dataset", kind: "scalar", T: 9 },
    { no: 4, name: "version", kind: "scalar", T: 2 },
    { no: 5, name: "semantic_version", kind: "scalar", T: 9 },
    { no: 6, name: "alias", kind: "scalar", T: 9 }
  ]);
  static fromBinary(bytes, options) {
    return new Model().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new Model().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new Model().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(Model, a, b);
  }
}
class CutoutParameters extends Message {
  cutouts = [];
  count;
  gray;
  blur;
  sizePower;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.CutoutParameters";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "cutouts", kind: "message", T: CutoutParameters, repeated: true },
    { no: 2, name: "count", kind: "scalar", T: 13, opt: true },
    { no: 3, name: "gray", kind: "scalar", T: 2, opt: true },
    { no: 4, name: "blur", kind: "scalar", T: 2, opt: true },
    { no: 5, name: "size_power", kind: "scalar", T: 2, opt: true }
  ]);
  static fromBinary(bytes, options) {
    return new CutoutParameters().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new CutoutParameters().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new CutoutParameters().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(CutoutParameters, a, b);
  }
}
class GuidanceInstanceParameters extends Message {
  models = [];
  guidanceStrength;
  schedule = [];
  cutouts;
  prompt;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.GuidanceInstanceParameters";
  static fields = proto3.util.newFieldList(() => [
    { no: 2, name: "models", kind: "message", T: Model, repeated: true },
    { no: 3, name: "guidance_strength", kind: "scalar", T: 2, opt: true },
    { no: 4, name: "schedule", kind: "message", T: ScheduleParameters, repeated: true },
    { no: 5, name: "cutouts", kind: "message", T: CutoutParameters, opt: true },
    { no: 6, name: "prompt", kind: "message", T: Prompt, opt: true }
  ]);
  static fromBinary(bytes, options) {
    return new GuidanceInstanceParameters().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new GuidanceInstanceParameters().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new GuidanceInstanceParameters().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(GuidanceInstanceParameters, a, b);
  }
}
class GuidanceParameters extends Message {
  guidancePreset = 0 /* NONE */;
  instances = [];
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.GuidanceParameters";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "guidance_preset", kind: "enum", T: proto3.getEnumType(GuidancePreset) },
    { no: 2, name: "instances", kind: "message", T: GuidanceInstanceParameters, repeated: true }
  ]);
  static fromBinary(bytes, options) {
    return new GuidanceParameters().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new GuidanceParameters().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new GuidanceParameters().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(GuidanceParameters, a, b);
  }
}
class TransformType extends Message {
  type = { case: void 0 };
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.TransformType";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "diffusion", kind: "enum", T: proto3.getEnumType(DiffusionSampler), oneof: "type" },
    { no: 2, name: "upscaler", kind: "enum", T: proto3.getEnumType(Upscaler), oneof: "type" }
  ]);
  static fromBinary(bytes, options) {
    return new TransformType().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new TransformType().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new TransformType().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(TransformType, a, b);
  }
}
class ExtendedParameter extends Message {
  name = "";
  value = { case: void 0 };
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ExtendedParameter";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 },
    { no: 2, name: "float", kind: "scalar", T: 2, oneof: "value" },
    { no: 3, name: "int", kind: "scalar", T: 4, oneof: "value" },
    { no: 4, name: "str", kind: "scalar", T: 9, oneof: "value" }
  ]);
  static fromBinary(bytes, options) {
    return new ExtendedParameter().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ExtendedParameter().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ExtendedParameter().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ExtendedParameter, a, b);
  }
}
class ExtendedParameters extends Message {
  parameters = [];
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ExtendedParameters";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "parameters", kind: "message", T: ExtendedParameter, repeated: true }
  ]);
  static fromBinary(bytes, options) {
    return new ExtendedParameters().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ExtendedParameters().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ExtendedParameters().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ExtendedParameters, a, b);
  }
}
class ImageParameters extends Message {
  height;
  width;
  seed = [];
  samples;
  steps;
  transform;
  parameters = [];
  extension;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ImageParameters";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 4, opt: true },
    { no: 2, name: "width", kind: "scalar", T: 4, opt: true },
    { no: 3, name: "seed", kind: "scalar", T: 13, repeated: true },
    { no: 4, name: "samples", kind: "scalar", T: 4, opt: true },
    { no: 5, name: "steps", kind: "scalar", T: 4, opt: true },
    { no: 6, name: "transform", kind: "message", T: TransformType, opt: true },
    { no: 7, name: "parameters", kind: "message", T: StepParameter, repeated: true },
    { no: 500, name: "extension", kind: "message", T: ExtendedParameters, opt: true }
  ]);
  static fromBinary(bytes, options) {
    return new ImageParameters().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ImageParameters().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ImageParameters().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ImageParameters, a, b);
  }
}
class ClassifierConcept extends Message {
  concept = "";
  threshold;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ClassifierConcept";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "concept", kind: "scalar", T: 9 },
    { no: 2, name: "threshold", kind: "scalar", T: 2, opt: true }
  ]);
  static fromBinary(bytes, options) {
    return new ClassifierConcept().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ClassifierConcept().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ClassifierConcept().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ClassifierConcept, a, b);
  }
}
class ClassifierCategory extends Message {
  name = "";
  concepts = [];
  adjustment;
  action;
  classifierMode;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ClassifierCategory";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 },
    { no: 2, name: "concepts", kind: "message", T: ClassifierConcept, repeated: true },
    { no: 3, name: "adjustment", kind: "scalar", T: 2, opt: true },
    { no: 4, name: "action", kind: "enum", T: proto3.getEnumType(Action), opt: true },
    { no: 5, name: "classifier_mode", kind: "enum", T: proto3.getEnumType(ClassifierMode), opt: true }
  ]);
  static fromBinary(bytes, options) {
    return new ClassifierCategory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ClassifierCategory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ClassifierCategory().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ClassifierCategory, a, b);
  }
}
class ClassifierParameters extends Message {
  categories = [];
  exceeds = [];
  realizedAction;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ClassifierParameters";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "categories", kind: "message", T: ClassifierCategory, repeated: true },
    { no: 2, name: "exceeds", kind: "message", T: ClassifierCategory, repeated: true },
    { no: 3, name: "realized_action", kind: "enum", T: proto3.getEnumType(Action), opt: true }
  ]);
  static fromBinary(bytes, options) {
    return new ClassifierParameters().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ClassifierParameters().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ClassifierParameters().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ClassifierParameters, a, b);
  }
}
class AssetParameters extends Message {
  action = 0 /* ASSET_PUT */;
  project = protoInt64.zero;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.AssetParameters";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "action", kind: "enum", T: proto3.getEnumType(AssetAction) },
    { no: 2, name: "project", kind: "scalar", T: 4 }
  ]);
  static fromBinary(bytes, options) {
    return new AssetParameters().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new AssetParameters().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new AssetParameters().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(AssetParameters, a, b);
  }
}
class AnswerMeta extends Message {
  gpuId;
  cpuId;
  nodeId;
  engineId;
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.AnswerMeta";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "gpu_id", kind: "scalar", T: 9, opt: true },
    { no: 2, name: "cpu_id", kind: "scalar", T: 9, opt: true },
    { no: 3, name: "node_id", kind: "scalar", T: 9, opt: true },
    { no: 4, name: "engine_id", kind: "scalar", T: 9, opt: true }
  ]);
  static fromBinary(bytes, options) {
    return new AnswerMeta().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new AnswerMeta().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new AnswerMeta().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(AnswerMeta, a, b);
  }
}
class Answer extends Message {
  answerId = "";
  requestId = "";
  received = protoInt64.zero;
  created = protoInt64.zero;
  meta;
  artifacts = [];
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.Answer";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "answer_id", kind: "scalar", T: 9 },
    { no: 2, name: "request_id", kind: "scalar", T: 9 },
    { no: 3, name: "received", kind: "scalar", T: 4 },
    { no: 4, name: "created", kind: "scalar", T: 4 },
    { no: 6, name: "meta", kind: "message", T: AnswerMeta, opt: true },
    { no: 7, name: "artifacts", kind: "message", T: Artifact, repeated: true }
  ]);
  static fromBinary(bytes, options) {
    return new Answer().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new Answer().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new Answer().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(Answer, a, b);
  }
}
class Request extends Message {
  engineId = "";
  requestId = "";
  requestedType = 0 /* ARTIFACT_NONE */;
  prompt = [];
  params = { case: void 0 };
  conditioner;
  requestAgent = "";
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.Request";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "engine_id", kind: "scalar", T: 9 },
    { no: 2, name: "request_id", kind: "scalar", T: 9 },
    { no: 3, name: "requested_type", kind: "enum", T: proto3.getEnumType(ArtifactType) },
    { no: 4, name: "prompt", kind: "message", T: Prompt, repeated: true },
    { no: 5, name: "image", kind: "message", T: ImageParameters, oneof: "params" },
    { no: 7, name: "classifier", kind: "message", T: ClassifierParameters, oneof: "params" },
    { no: 8, name: "asset", kind: "message", T: AssetParameters, oneof: "params" },
    { no: 6, name: "conditioner", kind: "message", T: ConditionerParameters, opt: true },
    { no: 500, name: "request_agent", kind: "scalar", T: 9 }
  ]);
  static fromBinary(bytes, options) {
    return new Request().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new Request().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new Request().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(Request, a, b);
  }
}
class OnStatus extends Message {
  reason = [];
  target;
  action = [];
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.OnStatus";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "reason", kind: "enum", T: proto3.getEnumType(FinishReason), repeated: true },
    { no: 2, name: "target", kind: "scalar", T: 9, opt: true },
    { no: 3, name: "action", kind: "enum", T: proto3.getEnumType(StageAction), repeated: true }
  ]);
  static fromBinary(bytes, options) {
    return new OnStatus().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new OnStatus().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new OnStatus().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(OnStatus, a, b);
  }
}
class Stage extends Message {
  id = "";
  request;
  onStatus = [];
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.Stage";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 },
    { no: 2, name: "request", kind: "message", T: Request },
    { no: 3, name: "on_status", kind: "message", T: OnStatus, repeated: true }
  ]);
  static fromBinary(bytes, options) {
    return new Stage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new Stage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new Stage().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(Stage, a, b);
  }
}
class ChainRequest extends Message {
  requestId = "";
  stage = [];
  constructor(data) {
    super();
    proto3.util.initPartial(data, this);
  }
  static runtime = proto3;
  static typeName = "gooseai.ChainRequest";
  static fields = proto3.util.newFieldList(() => [
    { no: 1, name: "request_id", kind: "scalar", T: 9 },
    { no: 2, name: "stage", kind: "message", T: Stage, repeated: true }
  ]);
  static fromBinary(bytes, options) {
    return new ChainRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new ChainRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new ChainRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(ChainRequest, a, b);
  }
}

const GenerationService = {
  typeName: "gooseai.GenerationService",
  methods: {
    generate: {
      name: "Generate",
      I: Request,
      O: Answer,
      kind: MethodKind.ServerStreaming
    },
    chainGenerate: {
      name: "ChainGenerate",
      I: ChainRequest,
      O: Answer,
      kind: MethodKind.ServerStreaming
    }
  }
};

export { Action, Answer, AnswerMeta, Artifact, ArtifactType, AssetAction, AssetParameters, ChainRequest, ChannelSource, ClassifierCategory, ClassifierConcept, ClassifierMode, ClassifierParameters, ConditionerParameters, CutoutParameters, DiffusionSampler, ExtendedParameter, ExtendedParameters, FinishReason, GaussianDirection, GenerationService, GuidanceInstanceParameters, GuidanceParameters, GuidancePreset, ImageAdjustment, ImageAdjustment_Channels, ImageAdjustment_Crop, ImageAdjustment_Gaussian, ImageAdjustment_Invert, ImageAdjustment_Levels, ImageAdjustment_Rescale, ImageParameters, Model, ModelArchitecture, OnStatus, Prompt, PromptParameters, Request, RescaleMode, SamplerParameters, ScheduleParameters, Stage, StageAction, StepParameter, Token, Tokens, TransformType, Upscaler };
//# sourceMappingURL=index.js.map
