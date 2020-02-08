if (typeof(parent.Init) != 'undefined')
  parent.Init[4] = $init;
if (typeof(parent.Init2) != 'undefined')
  parent.Init2[4] = $init2;
var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.animcube4;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.2";
var $strongName = 'B7BE40D08786B9FF34D34EAB81DC6849';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = {3:1, 7:1, 6:1}, $intern_1 = {9:1, 3:1}, $intern_2 = {8:1, 3:1, 7:1, 6:1}, $intern_3 = {4:1, 3:1}, $intern_4 = {3:1, 7:1, 15:1, 6:1, 13:1}, $intern_5 = {3:1, 7:1, 15:1, 55:1, 56:1, 6:1, 13:1, 54:1}, $intern_6 = {3:1, 7:1, 14:1, 11:1, 6:1, 12:1}, $intern_7 = {16:1, 3:1, 7:1, 15:1, 6:1, 13:1}, $intern_8 = 1000, $intern_9 = -0.2617993877991494, $intern_10 = 3.141592653589793, $intern_11 = 4194304, $intern_12 = {51:1, 38:1, 47:1, 46:1, 52:1, 29:1, 25:1}, $intern_13 = {3:1, 10:1}, $intern_14 = {3:1, 7:1, 11:1, 6:1}, $intern_15 = {17:1, 3:1, 20:1, 22:1}, $intern_16 = {35:1, 3:1, 10:1}, $intern_17 = {26:1, 3:1, 10:1}, $intern_18 = 4194303, $intern_19 = 1048575, $intern_20 = 17592186044416, $intern_21 = 524288, $intern_22 = -17592186044416, $intern_23 = 65536, $intern_24 = {51:1, 38:1, 47:1, 46:1, 52:1, 44:1, 29:1, 25:1}, $intern_25 = {3:1, 6:1}, $intern_26 = {37:1}, $intern_27 = {21:1}, $intern_28 = {3:1, 23:1, 88:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_7(object){
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
}

bootstrap();
function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_0(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return this === other;
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_0(){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (number = hashCode__I__devirtual$(this) >>> 0 , number.toString(16));
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

function charToString(x_0){
  return String.fromCharCode(x_0);
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(71, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_9(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 71);
defineClass(175, 1, {});
var instance;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 175);
defineClass(59, 1, {59:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 59);
function $isNativelySupported(){
  return !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame;
}

function AnimationSchedulerImplStandard(){
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(69, 175, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 69);
function AnimationSchedulerImplStandard$1(){
}

defineClass(165, 59, {59:1}, AnimationSchedulerImplStandard$1);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 165);
function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initUnidimensionalArray(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {205:1, 3:1, 6:1}, 66, this$static.animationRequests.array.length, 0, 1);
  curAnimations = castTo($toArray(this$static.animationRequests, curAnimations), 205);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove(this$static.animationRequests, requestId);
    $execute(requestId.callback);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, $wnd.Math.max(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(70, 175, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_1(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(callback);
  $add_2(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 70);
function $cancel(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0('must be non-negative'));
  }
  !!this$static.timerId && $cancel(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(57, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 57);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(166, 57, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 166);
function AnimationSchedulerImplTimer$AnimationHandleImpl(callback){
  this.callback = callback;
}

defineClass(66, 59, {59:1, 66:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 66);
function $clinit_AnimCube4(){
  $clinit_AnimCube4 = emptyMethod;
  faceNormals = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 2), $intern_0, 9, 0, [stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [0, -1, 0]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [0, 1, 0]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [0, 0, -1]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [0, 0, 1]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [-1, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [1, 0, 0])]);
  cornerCoords = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 2), $intern_0, 9, 0, [stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [-1, -1, -1]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [1, -1, -1]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [1, -1, 1]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [-1, -1, 1]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [-1, 1, -1]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [1, 1, -1]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [1, 1, 1]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [-1, 1, 1])]);
  faceCorners = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 2, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 7, 6, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4, 5, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 6, 7, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 3, 7, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 5, 6, 2])]);
  oppositeCorners = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 3, 2, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 3, 2, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 2, 1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 2, 1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 3, 2, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 3, 2, 1])]);
  adjacentFaces = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 5, 3, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 3, 5, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 1, 5, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 1, 4, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 3, 1, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 1, 3, 0])]);
  faceTwistDirs = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 1, -1, -1, -1, -1]);
  posFaceTransform = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 2, 0, 5, 1, 4]);
  posFaceletTransform = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [12, 8, 4, 0, 13, 9, 5, 1, 14, 10, 6, 2, 15, 11, 7, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 7, 11, 15, 2, 6, 10, 14, 1, 5, 9, 13, 0, 4, 8, 12]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [12, 8, 4, 0, 13, 9, 5, 1, 14, 10, 6, 2, 15, 11, 7, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])]);
  moveModes = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2]);
  moveCodes = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 2, 3, 4, 5, 1, 2, 4, 5, 2, 0, 5, 2, 0, 0, 1, 2, 3, 4, 5]);
  modeChar = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), {3:1}, 5, 15, [109, 116, 99, 115, 97, 119]);
  turnSymbol = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 3), $intern_4, 54, 0, [stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 2), $intern_5, 12, 0, [stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['U', 'D', 'F', 'B', 'L', 'R']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['Um', 'Dm', 'Fm', 'Bm', 'Lm', 'Rm']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['Ut', 'Dt', 'Ft', 'Bt', 'Lt', 'Rt']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['Uc', 'Dc', 'Fc', 'Bc', 'Lc', 'Rc']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['Us', 'Ds', 'Fs', 'Bs', 'Ls', 'Rs']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['Ua', 'Da', 'Fa', 'Ba', 'La', 'Ra']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['Uw', 'Dw', 'Fw', 'Bw', 'Lw', 'Rw'])]), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 2), $intern_5, 12, 0, [stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['U', 'D', 'F', 'B', 'L', 'R']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['~E', 'E', 'S', '~S', 'M', '~M']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['u', 'd', 'f', 'b', 'l', 'r']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['Z', '~Z', 'Y', '~Y', '~X', 'X']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['Us', 'Ds', 'Fs', 'Bs', 'Ls', 'Rs']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['Ua', 'Da', 'Fa', 'Ba', 'La', 'Ra']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['Uw', 'Dw', 'Fw', 'Bw', 'Lw', 'Rw'])]), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 2), $intern_5, 12, 0, [stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['U', 'D', 'F', 'B', 'L', 'R']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['~E', 'E', 'S', '~S', 'M', '~M']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['u', 'd', 'f', 'b', 'l', 'r']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['Y', '~Y', 'Z', '~Z', '~X', 'X']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['Us', 'Ds', 'Fs', 'Bs', 'Ls', 'Rs']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['Ua', 'Da', 'Fa', 'Ba', 'La', 'Ra']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['Uw', 'Dw', 'Fw', 'Bw', 'Lw', 'Rw'])]), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 2), $intern_5, 12, 0, [stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['U', 'D', 'F', 'B', 'L', 'R']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['u', 'd', 'f', 'b', 'l', 'r']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['Uu', 'Dd', 'Ff', 'Bb', 'Ll', 'Rr']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['QU', 'QD', 'QF', 'QB', 'QL', 'QR']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ["UD'", "DU'", "FB'", "BF'", "LR'", "RL'"]), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['UD', 'DU', 'FB', 'BF', 'LR', 'RL']), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ["ud'", "du'", "fb'", "bf'", "lr'", "rl'"])])]);
  modifierStrings = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['', '2', "'", "2'"]);
  metricChar = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['', 'q', 'h', 's']);
  cubeBlocks = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4])])]);
  topBlockTable = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4])])]);
  topBlockFaceDim = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0, 3, 3, 2, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 5, 5, 4, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 3, 1, 0, 3, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 5, 0, 1, 5, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 2, 2, 4, 1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 4, 4, 2, 0, 1])]);
  botBlockFaceDim = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 5, 5, 4, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0, 3, 3, 2, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 5, 0, 1, 5, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 3, 1, 0, 3, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 4, 4, 2, 0, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 2, 2, 4, 1, 0])]);
  midBlockTable = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 3])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 2])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4])])]);
  midBlockFaceDim = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 4, 4, 2, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 3, 3, 1, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 4, 0, 0, 4, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 3, 0, 0, 3, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 2, 2, 1, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 1, 1, 2, 0, 0])]);
  midBlockFaceDim2 = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 3, 3, 1, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 4, 4, 2, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 3, 0, 0, 3, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 4, 0, 0, 4, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 1, 1, 2, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 2, 2, 1, 0, 0])]);
  dragBlocks = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 0])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 3])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 2])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 0])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 3])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0])])]);
  areaDirs = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [-1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, -1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [-1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, -1])]);
  twistDirs = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 1, 1, 1, 1, 1, 1, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 1, 1, 1, 1, 1, 1, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, -1, 1, -1, 1, -1, 1, -1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, -1, 1, -1, 1, -1, 1, -1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [-1, 1, -1, 1, -1, 1, -1, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, -1, 1, -1, 1, -1, 1, -1])]);
  rotCos = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 1])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 0])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 1])])]);
  rotSin = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [-1, 0, 0])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [-1, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 0])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, -1, 0])])]);
  rotVec = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 0])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 1])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0, 0])])]);
  rotSign = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, -1, 1, -1, 1, -1]);
  border = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 2), $intern_0, 9, 0, [stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [0.1, 0.1]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [0.9, 0.1]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [0.9, 0.9]), stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [0.1, 0.9])]);
  factors = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0])]);
  textOffsetInit = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 1, -1, -1, -1, 1, 1, -1, -1, 0, 1, 0, 0, 1, 0, -1]);
  textOffset = initUnidimensionalArray(D_classLit, $intern_1, 5, 16, 15, 1);
  buttonAction = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [-1, 3, 1, -1, 0, 2, 4, -1]);
}

function $$init(this$static){
  this$static.config = new HashMap;
  this$static.colors = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_6, 2, 24, 6, 1);
  this$static.cube = initMultidimensionalArray(I_classLit, [$intern_2, $intern_3], [4, 5], 15, [6, 16], 2);
  this$static.scube = initMultidimensionalArray(I_classLit, [$intern_2, $intern_3], [4, 5], 15, [6, 16], 2);
  this$static.initialCube = initMultidimensionalArray(I_classLit, [$intern_2, $intern_3], [4, 5], 15, [6, 16], 2);
  this$static.initialSCube = initMultidimensionalArray(I_classLit, [$intern_2, $intern_3], [4, 5], 15, [6, 16], 2);
  this$static.eye = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [0, 0, -1]);
  this$static.eyeX = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_1, 5, 15, [1, 0, 0]);
  this$static.eyeY = initUnidimensionalArray(D_classLit, $intern_1, 5, 3, 15, 1);
  this$static.initialEye = initUnidimensionalArray(D_classLit, $intern_1, 5, 3, 15, 1);
  this$static.initialEyeX = initUnidimensionalArray(D_classLit, $intern_1, 5, 3, 15, 1);
  this$static.initialEyeY = initUnidimensionalArray(D_classLit, $intern_1, 5, 3, 15, 1);
  this$static.cubeDiv = $getElementById($doc, cubeDivName);
  this$static.topBlocks = initUnidimensionalArray(I_classLit, $intern_7, 8, 6, 0, 3);
  this$static.midBlocks = initUnidimensionalArray(I_classLit, $intern_7, 8, 6, 0, 3);
  this$static.midBlocks2 = initUnidimensionalArray(I_classLit, $intern_7, 8, 6, 0, 3);
  this$static.botBlocks = initUnidimensionalArray(I_classLit, $intern_7, 8, 6, 0, 3);
  this$static.twistArray = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 4), $intern_4, 16, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 3])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 2])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 8]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 8]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 8]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 1])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 12]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 12]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 12]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 0])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 12]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 15])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 8]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 7]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 14])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 11]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 13])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 9]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 6]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 10])])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 3])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 7]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 7]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 7])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 11]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 11]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 11])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 12]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 15])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 12])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 7]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 8])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 11]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 6]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 10]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 9])])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 12]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 12]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 0])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 8]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 8]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 1])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 2])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 3])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 12])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 7]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 8])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 11]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 6]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 10]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 9])])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 12]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 12])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 11]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 11]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 13])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 7]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 7]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 14])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 15])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 12])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 7]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 8])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 11]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 6]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 10]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 9])])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 12]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 8]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 1])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 2])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 12]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 3])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 12])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 7]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 8])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 11]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 6]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 10]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 9])])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 12]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 12]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 15])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 11])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 7])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 3])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 15]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 12])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 7]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 8])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 11]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 6]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 10]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 9])])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 7])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 6])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 9]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 9]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 9]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 5])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 11])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 6]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 6]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 6]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 10])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 10]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 10]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 10]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 9])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 8])])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 9]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 9]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 5])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 6]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 6])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 7]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 7])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 8]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 8])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 9]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 10]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 10]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 9])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 10]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 6]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 6]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 10])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 11]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [5, 11])])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 13]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 11]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 4])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 9]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 10]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 5])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 6]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 9]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 6])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 7]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 8]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 7])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 8]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 14]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 7]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 8])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 9]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 10]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 6]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 9])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 10]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 6]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 5]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 10])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 11]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 11])])])]);
  this$static.superTwistArr = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 3), $intern_7, 8, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 4, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 5])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [12, 1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 4, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 4, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [12, 1, 5])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 4, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 4, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [4, 1, 5])]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [8, 1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 4, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 4, 4]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [8, 1, 5])])]);
  this$static.dragCornersX = initMultidimensionalArray(I_classLit, [$intern_2, $intern_3], [4, 5], 15, [24, 4], 2);
  this$static.dragCornersY = initMultidimensionalArray(I_classLit, [$intern_2, $intern_3], [4, 5], 15, [24, 4], 2);
  this$static.dragDirsX = initUnidimensionalArray(D_classLit, $intern_1, 5, 24, 15, 1);
  this$static.dragDirsY = initUnidimensionalArray(D_classLit, $intern_1, 5, 24, 15, 1);
  this$static.dragLayers = initUnidimensionalArray(I_classLit, $intern_3, 5, 24, 15, 1);
  this$static.dragModes = initUnidimensionalArray(I_classLit, $intern_3, 5, 24, 15, 1);
  this$static.tempEye = initUnidimensionalArray(D_classLit, $intern_1, 5, 3, 15, 1);
  this$static.tempEyeX = initUnidimensionalArray(D_classLit, $intern_1, 5, 3, 15, 1);
  this$static.tempEyeY = initUnidimensionalArray(D_classLit, $intern_1, 5, 3, 15, 1);
  this$static.tempEye2 = initUnidimensionalArray(D_classLit, $intern_1, 5, 3, 15, 1);
  this$static.tempEyeX2 = initUnidimensionalArray(D_classLit, $intern_1, 5, 3, 15, 1);
  this$static.tempEyeY2 = initUnidimensionalArray(D_classLit, $intern_1, 5, 3, 15, 1);
  this$static.perspEye = initUnidimensionalArray(D_classLit, $intern_1, 5, 3, 15, 1);
  this$static.perspEyeI = initUnidimensionalArray(D_classLit, $intern_1, 5, 3, 15, 1);
  this$static.perspNormal = initUnidimensionalArray(D_classLit, $intern_1, 5, 3, 15, 1);
  this$static.eyeArray = initUnidimensionalArray(D_classLit, $intern_0, 9, 3, 0, 2);
  this$static.eyeArrayX = initUnidimensionalArray(D_classLit, $intern_0, 9, 3, 0, 2);
  this$static.eyeArrayY = initUnidimensionalArray(D_classLit, $intern_0, 9, 3, 0, 2);
  this$static.eyeOrder = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 1, 0, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 1, 1, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0, 0, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 0, 0, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 1, 0])]);
  this$static.blockArray = initUnidimensionalArray(I_classLit, $intern_4, 16, 4, 0, 4);
  this$static.blockMode = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 2, 2, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 1, 2, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 2, 2, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 2, 2, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 2, 2, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 2, 2, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 2, 2, 0])]);
  this$static.drawOrder = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 2, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 2, 1, 0]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 3, 2, 1])]);
  this$static.fillX = initUnidimensionalArray(I_classLit, $intern_3, 5, 4, 15, 1);
  this$static.fillY = initUnidimensionalArray(I_classLit, $intern_3, 5, 4, 15, 1);
  this$static.coordsX = initUnidimensionalArray(D_classLit, $intern_1, 5, 8, 15, 1);
  this$static.coordsY = initUnidimensionalArray(D_classLit, $intern_1, 5, 8, 15, 1);
  this$static.cooX = initMultidimensionalArray(D_classLit, [$intern_0, $intern_1], [9, 5], 15, [6, 4], 2);
  this$static.cooY = initMultidimensionalArray(D_classLit, [$intern_0, $intern_1], [9, 5], 15, [6, 4], 2);
  this$static.tempNormal = initUnidimensionalArray(D_classLit, $intern_1, 5, 3, 15, 1);
  this$static.eyeD = initUnidimensionalArray(D_classLit, $intern_1, 5, 3, 15, 1);
  this$static.ds = initUnidimensionalArray(D_classLit, $intern_1, 5, 10, 15, 1);
  this$static.nativePreviewHandler = new AnimCube4$1(this$static);
  this$static.canv = (!detector && (detector = new Canvas$CanvasElementSupportDetectedNo) , null);
  !detector && (detector = new Canvas$CanvasElementSupportDetectedNo);
}

function $brighter(s){
  var b, g, number, number0, number1, r;
  s.substr(0, 1) != '#' && (s = s == 'white'?'#FFFFFF':s == 'black'?'#000000':s == 'gray'?'#808080':'#808080');
  r = __parseAndValidateInt(s.substr(1, 2), 16);
  g = __parseAndValidateInt(s.substr(3, 2), 16);
  b = __parseAndValidateInt(s.substr(5, 2), 16);
  r = round_int(r * 1.3);
  g = round_int(g * 1.3);
  b = round_int(b * 1.3);
  return '#' + $lpad((number0 = (r > 255?255:r) >>> 0 , number0.toString(16))) + $lpad((number1 = (g > 255?255:g) >>> 0 , number1.toString(16))) + $lpad((number = (b > 255?255:b) >>> 0 , number.toString(16)));
}

function $clear(this$static){
  var i, i0, j;
  this$static.movePos = 0;
  this$static.move.length > 0 && $initInfoText(this$static, this$static.move[this$static.curMove]);
  this$static.natural = true;
  this$static.mirrored = false;
  for (i0 = 0; i0 < 6; i0++)
    for (j = 0; j < 16; j++) {
      this$static.cube[i0][j] = this$static.initialCube[i0][j];
      this$static.scube[i0][j] = this$static.initialSCube[i0][j];
    }
  scramble > 0 && (this$static.move = $getMove(this$static, randMoves(randMoveCount), false));
  scramble == 2 && $doMove(this$static, this$static.cube, this$static.move[0], 0, this$static.move[0].length, true);
  for (i = 0; i < 3; i++) {
    this$static.eye[i] = this$static.initialEye[i];
    this$static.eyeX[i] = this$static.initialEyeX[i];
    this$static.eyeY[i] = this$static.initialEyeY[i];
  }
}

function $colorAverage(s){
  var b, g, r;
  s.substr(0, 1) != '#' && (s = s == 'white'?'#FFFFFF':s == 'black'?'#000000':s == 'gray'?'#808080':'#808080');
  r = __parseAndValidateInt(s.substr(1, 2), 16);
  g = __parseAndValidateInt(s.substr(3, 2), 16);
  b = __parseAndValidateInt(s.substr(5, 2), 16);
  return (r * 299 + g * 587 + b * 114) / $intern_8 | 0;
}

function $darker(s){
  var b, g, number, number0, number1, r;
  s.substr(0, 1) != '#' && (s = s == 'white'?'#FFFFFF':s == 'black'?'#000000':s == 'gray'?'#808080':'#808080');
  r = __parseAndValidateInt(s.substr(1, 2), 16);
  g = __parseAndValidateInt(s.substr(3, 2), 16);
  b = __parseAndValidateInt(s.substr(5, 2), 16);
  r = round_int(r * 0.7);
  g = round_int(g * 0.7);
  b = round_int(b * 0.7);
  return '#' + $lpad((number0 = r >>> 0 , number0.toString(16))) + $lpad((number1 = g >>> 0 , number1.toString(16))) + $lpad((number = b >>> 0 , number.toString(16)));
}

function $doMove(this$static, cube, move, start_0, length_0, reversed){
  var mode, modifier, position;
  position = reversed?start_0 + length_0:start_0;
  while (true) {
    if (reversed) {
      if (position <= start_0)
        break;
      --position;
    }
    if (move[position] >= $intern_8) {
      this$static.curInfoText = reversed?-1:move[position] - $intern_8;
    }
     else if (move[position] >= 0) {
      modifier = move[position] % 4 + 1;
      mode = (move[position] / 4 | 0) % 7;
      modifier == 4 && (modifier = 2);
      reversed && (modifier = 4 - modifier);
      $twistLayers(this$static, cube, move[position] / 28 | 0, modifier, mode);
    }
    if (!reversed) {
      ++position;
      if (position >= start_0 + length_0)
        break;
    }
  }
}

function $drawArrow(x_0, y_0, dir_0){
  var d3, fillX, fillY;
  d3 = 3 * dpr;
  fillX = initUnidimensionalArray(D_classLit, $intern_1, 5, 5, 15, 1);
  fillY = initUnidimensionalArray(D_classLit, $intern_1, 5, 5, 15, 1);
  fillX[0] = x_0;
  fillX[1] = x_0 + dir_0;
  fillX[2] = x_0 + 4 * dpr * dir_0;
  fillX[3] = x_0 + dir_0;
  fillX[4] = x_0;
  fillY[0] = y_0 - d3;
  fillY[1] = y_0 - d3;
  fillY[2] = y_0;
  fillY[3] = y_0 + d3;
  fillY[4] = y_0 + d3;
  $drawArrow2();
}

function $drawArrow2(){
  var i;
  null.$_nullMethod();
  null.$_nullMethod();
  for (i = 1; i < 5; i++)
    null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod('white');
  null.$_nullMethod('black');
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
}

function $drawButton(this$static, i, x_0, y_0){
  switch (i) {
    case 0:
      drawRect();
      $drawArrow(x_0 + this$static.ds[4], y_0, -1);
      break;
    case 1:
      drawRect();
      $drawArrow(x_0 - this$static.ds[1], y_0, -1);
      break;
    case 2:
      $drawArrow(x_0 + this$static.ds[1], y_0, -1);
      break;
    case 3:
      if (this$static.animating)
        drawRect();
      else {
        drawRect();
        drawRect();
      }

      break;
    case 4:
      $drawArrow(x_0 - this$static.ds[2], y_0, 1);
      break;
    case 5:
      drawRect();
      $drawArrow(x_0, y_0, 1);
      break;
    case 6:
      drawRect();
      $drawArrow(x_0 - this$static.ds[4], y_0, 1);
      break;
    case 7:
      this$static.buttonPressed == 7?null.$_nullMethod($darker(this$static.buttonBgColor)):null.$_nullMethod(this$static.buttonBgColor);
      null.$_nullMethod();
      null.$_nullMethod();
      null.$_nullMethod(this$static.buttonBorderColor);
      null.$_nullMethod();
      dpr % 2 == 0?null.$_nullMethod():null.$_nullMethod();
      null.$_nullMethod();
      $drawArrow(x_0 - this$static.ds[3], y_0 + this$static.ds[1], 1);
  }
}

function $drawButtons(this$static){
  var adj, buttonWidth, buttonX, i;
  adj = this$static.buttonHeight % 2 == 0?1:0;
  adj += round_int(dpr + 0.5) - 1;
  if (this$static.buttonBar == 2) {
    this$static.buttonPressed == 0 || scramble > 0 && this$static.buttonPressed == 6?null.$_nullMethod($darker(this$static.buttonBgColor)):null.$_nullMethod(this$static.buttonBgColor);
    null.$_nullMethod();
    null.$_nullMethod();
    null.$_nullMethod(this$static.buttonBorderColor);
    null.$_nullMethod();
    null.$_nullMethod();
    null.$_nullMethod();
    $drawButton(this$static, 0, this$static.buttonHeight / 2 | 0, this$static.height - ((this$static.buttonHeight + 1) / 2 | 0) - adj);
    return;
  }
  if (this$static.buttonBar == 1) {
    buttonX = 0;
    for (i = 0; i < 7; i++) {
      buttonWidth = (this$static.width_0 - buttonX) / (7 - i) | 0;
      this$static.buttonPressed == i?null.$_nullMethod($darker(this$static.buttonBgColor)):null.$_nullMethod(this$static.buttonBgColor);
      null.$_nullMethod();
      null.$_nullMethod();
      null.$_nullMethod(this$static.buttonBorderColor);
      null.$_nullMethod();
      i == 0?null.$_nullMethod():null.$_nullMethod();
      null.$_nullMethod();
      null.$_nullMethod('black');
      $drawButton(this$static, i, buttonX + (buttonWidth / 2 | 0), this$static.height + (this$static.buttonHeight / 2 | 0) - adj);
      buttonX += buttonWidth;
    }
    this$static.drawButtons = false;
    return;
  }
}

function $drawMoveText(this$static){
  var pos, w1, w2, w3, x_0;
  pos = this$static.movePos == 0?arrayMovePos(this$static.move[this$static.curMove], this$static.movePos):this$static.movePos;
  $moveText(this$static, this$static.move[this$static.curMove], 0, pos);
  $turnText(this$static, this$static.move[this$static.curMove], pos);
  $moveText(this$static, this$static.move[this$static.curMove], pos + 1, this$static.move[this$static.curMove].length);
  w1 = round_int(null.$_nullMethod().$_nullMethod());
  w2 = round_int(null.$_nullMethod().$_nullMethod());
  w3 = round_int(null.$_nullMethod().$_nullMethod());
  if (1 + w1 + w2 + w3 > this$static.width_0) {
    x_0 = $wnd.Math.min(1, (this$static.width_0 / 2 | 0) - w1 - (w2 / 2 | 0));
    $wnd.Math.max(x_0, this$static.width_0 - w1 - w2 - w3 - 2);
  }
  if (w2 > 0) {
    null.$_nullMethod(this$static.hlColor);
    null.$_nullMethod();
    null.$_nullMethod('black');
    null.$_nullMethod();
    utextHeight <= 14?null.$_nullMethod():null.$_nullMethod();
  }
  w1 > 0 && $drawString(this$static);
  w2 > 0 && $drawString(this$static);
  w3 > 0 && $drawString(this$static);
}

function $drawPolygon(fillColor){
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod(fillColor);
  null.$_nullMethod(fillColor);
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
}

function $drawString(this$static){
  var i;
  if (this$static.outlined) {
    null.$_nullMethod('black');
    for (i = 0; i < textOffset.length; i += 2)
      null.$_nullMethod();
    null.$_nullMethod('white');
  }
   else 
    null.$_nullMethod(this$static.textColor);
  null.$_nullMethod();
}

function $drawSuperArrow(xx, yy, face_0, superTwist, color_0){
  var i, rot, x_0, y_0;
  x_0 = initUnidimensionalArray(I_classLit, $intern_3, 5, 4, 15, 1);
  y_0 = initUnidimensionalArray(I_classLit, $intern_3, 5, 4, 15, 1);
  rot = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 1, 2, 3]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [3, 0, 1, 2]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [2, 3, 0, 1]), stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [1, 2, 3, 0])]);
  if (scw == 2 && color_0 == '#ffffff')
    return;
  for (i = 0; i < 4; i++) {
    x_0[i] = round_int(xx[i] + (xx[rot[2][i]] - xx[i]) * 0.05);
    y_0[i] = round_int(yy[i] + (yy[rot[2][i]] - yy[i]) * 0.05);
  }
  face_0 == 0 && (superTwist = (superTwist + 1) % 4);
  face_0 == 4 && (superTwist = (superTwist + 3) % 4);
  null.$_nullMethod(color_0);
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod('black');
  null.$_nullMethod();
}

function $fixBlock(this$static, eye, eyeX, eyeY, blocks, mode, call_0){
  var dxh, dxv, dyh, dyv, i, i0, i1, i2, i3, j, k, min_0, n, o, p, q, sideH, sideW, v, x_0, y_0, z_0;
  for (i0 = 0; i0 < 8; i0++) {
    min_0 = this$static.width_0 < this$static.height?this$static.width_0:this$static.height - this$static.progressHeight;
    x_0 = min_0 / 3.7 * vProd(cornerCoords[i0], eyeX) * this$static.scale;
    y_0 = min_0 / 3.7 * vProd(cornerCoords[i0], eyeY) * this$static.scale;
    z_0 = min_0 / (5 + this$static.persp) * vProd(cornerCoords[i0], eye) * this$static.scale;
    x_0 = x_0 / (1 - z_0 / min_0);
    y_0 = y_0 / (1 - z_0 / min_0);
    this$static.coordsX[i0] = this$static.width_0 / 2 + x_0;
    this$static.align_0 == 0?(this$static.coordsY[i0] = (this$static.height - this$static.progressHeight) / 2 * this$static.scale - y_0):this$static.align_0 == 2?(this$static.coordsY[i0] = this$static.height - this$static.progressHeight - (this$static.height - this$static.progressHeight) / 2 * this$static.scale - y_0):(this$static.coordsY[i0] = (this$static.height - this$static.progressHeight) / 2 - y_0);
  }
  for (i1 = 0; i1 < 6; i1++) {
    for (j = 0; j < 4; j++) {
      this$static.cooX[i1][j] = this$static.coordsX[faceCorners[i1][j]];
      this$static.cooY[i1][j] = this$static.coordsY[faceCorners[i1][j]];
    }
  }
  if (this$static.hint) {
    for (i2 = 0; i2 < 6; i2++) {
      vSub(vScale(vCopy(this$static.perspEye, eye), 5 + this$static.persp), faceNormals[i2]);
      if (vProd(this$static.perspEye, faceNormals[i2]) < 0) {
        vScale(vCopy(this$static.tempNormal, faceNormals[i2]), this$static.faceShift);
        min_0 = this$static.width_0 < this$static.height?this$static.width_0:this$static.height - this$static.progressHeight;
        x_0 = min_0 / 3.7 * vProd(this$static.tempNormal, eyeX);
        y_0 = min_0 / 3.7 * vProd(this$static.tempNormal, eyeY);
        z_0 = min_0 / (5 + this$static.persp) * vProd(this$static.tempNormal, eye);
        x_0 = x_0 / (1 - z_0 / min_0);
        y_0 = y_0 / (1 - z_0 / min_0);
        sideW = blocks[i2][0][1] - blocks[i2][0][0];
        sideH = blocks[i2][1][1] - blocks[i2][1][0];
        if (sideW > 0 && sideH > 0) {
          for (n = 0 , p = blocks[i2][1][0]; n < sideH; ++n , p++) {
            for (o = 0 , q = blocks[i2][0][0]; o < sideW; ++o , q++) {
              for (j = 0; j < 4; j++) {
                $getCorners(this$static, i2, j, this$static.fillX, this$static.fillY, q + border[j][0], p + border[j][1], this$static.mirrored);
                this$static.fillX[j] = round_int(this$static.fillX[j] + (this$static.mirrored?-x_0:x_0));
                this$static.fillY[j] = round_int(this$static.fillY[j] - y_0);
              }
              if (superCube) {
                $drawPolygon('#fdfdfd');
                $drawSuperArrow(this$static.fillX, this$static.fillY, i2, this$static.scube[i2][p * 4 + q], this$static.colors[this$static.cube[i2][p * 4 + q]]);
              }
               else 
                $drawPolygon(this$static.colors[this$static.cube[i2][p * 4 + q]]);
            }
          }
        }
      }
    }
  }
  for (i3 = 0; i3 < 6; i3++) {
    sideW = blocks[i3][0][1] - blocks[i3][0][0];
    sideH = blocks[i3][1][1] - blocks[i3][1][0];
    if (sideW <= 0 || sideH <= 0) {
      v = 0;
      mode == 0 && call_0 == 0?(v = 0.75):mode == 1 && call_0 == 1?(v = 0.5):mode == 1 && call_0 == 2 && this$static.twistedLayer == i3?(v = 0.25):mode == 2 && call_0 == 0 && (v = this$static.twistedMode == 0?0.25:this$static.twistedLayer == i3?0.5:0.75);
      mode == 2 && this$static.twistedMode > 3 && (v = 0.5);
      if (v != 0) {
        for (j = 0; j < 4; j++) {
          k = oppositeCorners[i3][j];
          this$static.fillX[j] = round_int(this$static.cooX[i3][j] + (this$static.cooX[i3 ^ 1][k] - this$static.cooX[i3][j]) * v);
          this$static.fillY[j] = round_int(this$static.cooY[i3][j] + (this$static.cooY[i3 ^ 1][k] - this$static.cooY[i3][j]) * v);
          this$static.mirrored && (this$static.fillX[j] = this$static.width_0 - this$static.fillX[j]);
        }
        $drawPolygon(this$static.cubeColor);
      }
    }
     else {
      for (j = 0; j < 4; j++)
        $getCorners(this$static, i3, j, this$static.fillX, this$static.fillY, blocks[i3][0][factors[j][0]], blocks[i3][1][factors[j][1]], this$static.mirrored);
      if (call_0 < 3)
        $drawPolygon(this$static.cubeColor);
      else {
        vSub(vScale(vCopy(this$static.perspEye, eye), 5 + this$static.persp), faceNormals[i3]);
        vProd(this$static.perspEye, faceNormals[i3]) > 0 && $drawPolygon(this$static.cubeColor);
      }
    }
  }
  for (i = 0; i < 6; i++) {
    vSub(vScale(vCopy(this$static.perspEye, eye), 5 + this$static.persp), faceNormals[i]);
    if (vProd(this$static.perspEye, faceNormals[i]) > 0) {
      sideW = blocks[i][0][1] - blocks[i][0][0];
      sideH = blocks[i][1][1] - blocks[i][1][0];
      if (sideW > 0 && sideH > 0) {
        for (n = 0 , p = blocks[i][1][0]; n < sideH; ++n , p++) {
          for (o = 0 , q = blocks[i][0][0]; o < sideW; ++o , q++) {
            for (j = 0; j < 4; j++)
              $getCorners(this$static, i, j, this$static.fillX, this$static.fillY, q + border[j][0], p + border[j][1], this$static.mirrored);
            if (superCube) {
              $drawPolygon('#fdfdfd');
              $drawSuperArrow(this$static.fillX, this$static.fillY, i, this$static.scube[i][p * 4 + q], this$static.colors[this$static.cube[i][p * 4 + q]]);
            }
             else 
              $drawPolygon(this$static.colors[this$static.cube[i][p * 4 + q]]);
          }
        }
      }
      if (!this$static.editable || this$static.animating)
        continue;
      dxh = (this$static.cooX[i][1] - this$static.cooX[i][0] + this$static.cooX[i][2] - this$static.cooX[i][3]) / 6;
      dyh = (this$static.cooX[i][3] - this$static.cooX[i][0] + this$static.cooX[i][2] - this$static.cooX[i][1]) / 6;
      dxv = (this$static.cooY[i][1] - this$static.cooY[i][0] + this$static.cooY[i][2] - this$static.cooY[i][3]) / 6;
      dyv = (this$static.cooY[i][3] - this$static.cooY[i][0] + this$static.cooY[i][2] - this$static.cooY[i][1]) / 6;
      if (mode == 3) {
        for (j = 0; j < 8; j++) {
          for (k = 0; k < 4; k++)
            $getCorners(this$static, i, k, this$static.dragCornersX[this$static.dragAreas], this$static.dragCornersY[this$static.dragAreas], dragBlocks[j][k][0], dragBlocks[j][k][1], false);
          this$static.dragDirsX[this$static.dragAreas] = (dxh * areaDirs[j][0] + dxv * areaDirs[j][1]) * twistDirs[i][j];
          this$static.dragDirsY[this$static.dragAreas] = (dyh * areaDirs[j][0] + dyv * areaDirs[j][1]) * twistDirs[i][j];
          this$static.dragLayers[this$static.dragAreas] = adjacentFaces[i][j % 4];
          this$static.dragModes[this$static.dragAreas] = j / 4 | 0;
          ++this$static.dragAreas;
          if (this$static.dragAreas == 24)
            break;
        }
      }
       else if (mode == 0) {
        if (i != this$static.twistedLayer && sideW > 0 && sideH > 0) {
          j = sideW == 4?blocks[i][1][0] == 0?0:2:blocks[i][0][0] == 0?3:1;
          for (k = 0; k < 4; k++)
            $getCorners(this$static, i, k, this$static.dragCornersX[this$static.dragAreas], this$static.dragCornersY[this$static.dragAreas], dragBlocks[j][k][0], dragBlocks[j][k][1], false);
          this$static.dragDirsX[this$static.dragAreas] = (dxh * areaDirs[j][0] + dxv * areaDirs[j][1]) * twistDirs[i][j];
          this$static.dragDirsY[this$static.dragAreas] = (dyh * areaDirs[j][0] + dyv * areaDirs[j][1]) * twistDirs[i][j];
          this$static.dragLayers[this$static.dragAreas] = this$static.twistedLayer;
          this$static.dragModes[this$static.dragAreas] = 0;
          ++this$static.dragAreas;
        }
      }
       else if (mode == 1) {
        if (i != this$static.twistedLayer && sideW > 0 && sideH > 0) {
          j = sideW == 4?blocks[i][1][0] == 1?0:2:blocks[i][0][0] == 1?3:1;
          j += 4;
          for (k = 0; k < 4; k++)
            $getCorners(this$static, i, k, this$static.dragCornersX[this$static.dragAreas], this$static.dragCornersY[this$static.dragAreas], dragBlocks[j][k][0], dragBlocks[j][k][1], false);
          this$static.dragDirsX[this$static.dragAreas] = (dxh * areaDirs[j][0] + dxv * areaDirs[j][1]) * twistDirs[i][j];
          this$static.dragDirsY[this$static.dragAreas] = (dyh * areaDirs[j][0] + dyv * areaDirs[j][1]) * twistDirs[i][j];
          this$static.dragLayers[this$static.dragAreas] = this$static.twistedLayer;
          this$static.dragModes[this$static.dragAreas] = 1;
          ++this$static.dragAreas;
        }
      }
    }
  }
}

function $getCorners(this$static, face_0, corner, cornersX, cornersY, factor1, factor2, mirror){
  var x1, x2, y1, y2;
  factor1 /= 4;
  factor2 /= 4;
  x1 = this$static.cooX[face_0][0] + (this$static.cooX[face_0][1] - this$static.cooX[face_0][0]) * factor1;
  y1 = this$static.cooY[face_0][0] + (this$static.cooY[face_0][1] - this$static.cooY[face_0][0]) * factor1;
  x2 = this$static.cooX[face_0][3] + (this$static.cooX[face_0][2] - this$static.cooX[face_0][3]) * factor1;
  y2 = this$static.cooY[face_0][3] + (this$static.cooY[face_0][2] - this$static.cooY[face_0][3]) * factor1;
  cornersX[corner] = round_int(0.5 + x1 + (x2 - x1) * factor2);
  cornersY[corner] = round_int(0.5 + y1 + (y2 - y1) * factor2);
  mirror && (cornersX[corner] = this$static.width_0 - cornersX[corner]);
}

function $getMove(this$static, sequence, info){
  var i, infoText2, inum, lastPos, move, num, pos, pos0;
  if (info) {
    inum = 0;
    pos0 = $indexOf(sequence, fromCodePoint(123));
    while (pos0 != -1) {
      ++inum;
      pos0 = $indexOf_0(sequence, fromCodePoint(123), pos0 + 1);
    }
    if (this$static.infoText == null) {
      this$static.curInfoText = 0;
      this$static.infoText = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_6, 2, inum, 6, 1);
    }
     else {
      infoText2 = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_6, 2, this$static.infoText.length + inum, 6, 1);
      for (i = 0; i < this$static.infoText.length; i++)
        infoText2[i] = this$static.infoText[i];
      this$static.curInfoText = this$static.infoText.length;
      this$static.infoText = infoText2;
    }
  }
  num = 1;
  pos = $indexOf(sequence, fromCodePoint(59));
  while (pos != -1) {
    ++num;
    pos = $indexOf_0(sequence, fromCodePoint(59), pos + 1);
  }
  move = initUnidimensionalArray(I_classLit, $intern_2, 4, num, 0, 2);
  lastPos = 0;
  pos = $indexOf(sequence, fromCodePoint(59));
  num = 0;
  while (pos != -1) {
    move[num++] = $getMovePart(this$static, sequence.substr(lastPos, pos - lastPos), info);
    lastPos = pos + 1;
    pos = $indexOf_0(sequence, fromCodePoint(59), lastPos);
  }
  move[num] = $getMovePart(this$static, sequence.substr(lastPos), info);
  return move;
}

function $getMovePart(this$static, sequence, info){
  var i, i0, j, k, k0, length_0, mode, move, returnMove, s, skip;
  length_0 = 0;
  move = initUnidimensionalArray(I_classLit, $intern_3, 5, sequence.length, 15, 1);
  skip = initUnidimensionalArray(I_classLit, $intern_3, 5, sequence.length, 15, 1);
  for (i0 = 0; i0 < sequence.length; i0++) {
    checkCriticalStringElementIndex(i0, sequence.length);
    if (sequence.charCodeAt(i0) == 46) {
      move[length_0] = -1;
      ++length_0;
    }
     else {
      checkCriticalStringElementIndex(i0, sequence.length);
      if (sequence.charCodeAt(i0) == 123) {
        ++i0;
        s = '';
        while (i0 < sequence.length) {
          checkCriticalStringElementIndex(i0, sequence.length);
          if (sequence.charCodeAt(i0) == 125)
            break;
          info && (s += charToString((checkCriticalStringElementIndex(i0, sequence.length) , sequence.charCodeAt(i0))));
          ++i0;
        }
        if (info) {
          this$static.infoText[this$static.curInfoText] = s;
          move[length_0] = $intern_8 + this$static.curInfoText;
          ++this$static.curInfoText;
          ++length_0;
        }
      }
       else {
        for (j = 0; j < 21; j++) {
          checkCriticalStringElementIndex(i0, sequence.length);
          if (sequence.charCodeAt(i0) == (checkCriticalStringElementIndex(j, 'UDFBLRESMXYZxyzudfblr'.length) , 'UDFBLRESMXYZxyzudfblr'.charCodeAt(j))) {
            ++i0;
            mode = moveModes[j];
            move[length_0] = moveCodes[j] * 28;
            if (i0 < sequence.length) {
              if (moveModes[j] == 0) {
                for (k0 = 0; k0 < modeChar.length; k0++) {
                  checkCriticalStringElementIndex(i0, sequence.length);
                  if (sequence.charCodeAt(i0) == modeChar[k0]) {
                    mode = k0 + 1;
                    ++i0;
                    break;
                  }
                }
              }
            }
            move[length_0] += mode * 4;
            if (i0 < sequence.length) {
              checkCriticalStringElementIndex(i0, sequence.length);
              if (sequence.charCodeAt(i0) == 49)
                ++i0;
              else {
                checkCriticalStringElementIndex(i0, sequence.length);
                if (sequence.charCodeAt(i0) == 39 || (checkCriticalStringElementIndex(i0, sequence.length) , sequence.charCodeAt(i0) == 51)) {
                  move[length_0] += 2;
                  ++i0;
                }
                 else {
                  checkCriticalStringElementIndex(i0, sequence.length);
                  if (sequence.charCodeAt(i0) == 50) {
                    ++i0;
                    if (i0 < sequence.length && (checkCriticalStringElementIndex(i0, sequence.length) , sequence.charCodeAt(i0) == 39)) {
                      move[length_0] += 3;
                      ++i0;
                    }
                     else 
                      move[length_0] += 1;
                  }
                }
              }
            }
            ++length_0;
            --i0;
            break;
          }
        }
      }
    }
  }
  returnMove = initUnidimensionalArray(I_classLit, $intern_3, 5, length_0, 15, 1);
  for (i = 0 , k = 0; i < length_0; i++)
    skip[i] == 0 && (returnMove[k++] = move[i]);
  return returnMove;
}

function $getParameter(this$static, name_0){
  var parameter, paramsForName;
  parameter = !this$static.cubeDiv?(ensureListParameterMap() , paramsForName = castTo(listParamMap.get_0(name_0), 23) , !paramsForName?null:castToString(paramsForName.get_1(paramsForName.size_1() - 1))):$getAttribute(this$static.cubeDiv, name_0);
  if (parameter == null || parameter == '')
    return castToString($getStringValue(this$static.config, name_0));
  return parameter;
}

function $init(this$static){
  if (typeof(parent.InitStatic) != 'undefined')
    parent.InitStatic[4] = this$static;
  var angle, color_0, i, i0, i1, i2, i3, i4, i5, i6, initialMove, initialPosition, initialReversedMove, intscale, j, j0, j1, k, n, number, number0, number1, number10, number11, number12, number13, number14, number15, number16, number17, number18, number19, number2, number20, number21, number22, number23, number24, number25, number26, number27, number28, number29, number3, number30, number31, number32, number33, number34, number35, number36, number37, number38, number39, number4, number40, number41, number42, number43, number44, number45, number46, number47, number48, number49, number5, number50, number51, number52, number53, number54, number55, number56, number57, number58, number59, number6, number60, number61, number62, number63, number64, number65, number66, number67, number68, number69, number7, number70, number8, number9, param, rm, ti, tj;
  this$static.colors[0] = '#' + $lpad((number0 = 255 >>> 0 , number0.toString(16))) + $lpad((number1 = 128 >>> 0 , number1.toString(16))) + $lpad((number2 = 64 >>> 0 , number2.toString(16)));
  this$static.colors[1] = '#' + $lpad((number3 = 255 >>> 0 , number3.toString(16))) + $lpad((number4 = 0 >>> 0 , number4.toString(16))) + $lpad((number5 = 0 >>> 0 , number5.toString(16)));
  this$static.colors[2] = '#' + $lpad((number6 = 0 >>> 0 , number6.toString(16))) + $lpad((number7 = 255 >>> 0 , number7.toString(16))) + $lpad((number8 = 0 >>> 0 , number8.toString(16)));
  this$static.colors[3] = '#' + $lpad((number9 = 0 >>> 0 , number9.toString(16))) + $lpad((number10 = 0 >>> 0 , number10.toString(16))) + $lpad((number11 = 255 >>> 0 , number11.toString(16)));
  this$static.colors[4] = '#' + $lpad((number12 = 153 >>> 0 , number12.toString(16))) + $lpad((number13 = 153 >>> 0 , number13.toString(16))) + $lpad((number14 = 153 >>> 0 , number14.toString(16)));
  this$static.colors[5] = '#' + $lpad((number15 = 170 >>> 0 , number15.toString(16))) + $lpad((number16 = 170 >>> 0 , number16.toString(16))) + $lpad((number17 = 68 >>> 0 , number17.toString(16)));
  this$static.colors[6] = '#' + $lpad((number18 = 187 >>> 0 , number18.toString(16))) + $lpad((number19 = 119 >>> 0 , number19.toString(16))) + $lpad((number20 = 68 >>> 0 , number20.toString(16)));
  this$static.colors[7] = '#' + $lpad((number21 = 153 >>> 0 , number21.toString(16))) + $lpad((number22 = 68 >>> 0 , number22.toString(16))) + $lpad((number23 = 68 >>> 0 , number23.toString(16)));
  this$static.colors[8] = '#' + $lpad((number24 = 68 >>> 0 , number24.toString(16))) + $lpad((number25 = 119 >>> 0 , number25.toString(16))) + $lpad((number26 = 68 >>> 0 , number26.toString(16)));
  this$static.colors[9] = '#' + $lpad((number27 = 0 >>> 0 , number27.toString(16))) + $lpad((number28 = 68 >>> 0 , number28.toString(16))) + $lpad((number29 = 119 >>> 0 , number29.toString(16)));
  this$static.colors[10] = '#' + $lpad((number30 = 255 >>> 0 , number30.toString(16))) + $lpad((number31 = 255 >>> 0 , number31.toString(16))) + $lpad((number32 = 255 >>> 0 , number32.toString(16)));
  this$static.colors[11] = '#' + $lpad((number33 = 255 >>> 0 , number33.toString(16))) + $lpad((number34 = 255 >>> 0 , number34.toString(16))) + $lpad((number35 = 0 >>> 0 , number35.toString(16)));
  this$static.colors[12] = '#' + $lpad((number36 = 255 >>> 0 , number36.toString(16))) + $lpad((number37 = 96 >>> 0 , number37.toString(16))) + $lpad((number38 = 32 >>> 0 , number38.toString(16)));
  this$static.colors[13] = '#' + $lpad((number39 = 208 >>> 0 , number39.toString(16))) + $lpad((number40 = 0 >>> 0 , number40.toString(16))) + $lpad((number41 = 0 >>> 0 , number41.toString(16)));
  this$static.colors[14] = '#' + $lpad((number42 = 0 >>> 0 , number42.toString(16))) + $lpad((number43 = 144 >>> 0 , number43.toString(16))) + $lpad((number44 = 0 >>> 0 , number44.toString(16)));
  this$static.colors[15] = '#' + $lpad((number45 = 32 >>> 0 , number45.toString(16))) + $lpad((number46 = 64 >>> 0 , number46.toString(16))) + $lpad((number47 = 208 >>> 0 , number47.toString(16)));
  this$static.colors[16] = '#' + $lpad((number48 = 176 >>> 0 , number48.toString(16))) + $lpad((number49 = 176 >>> 0 , number49.toString(16))) + $lpad((number50 = 176 >>> 0 , number50.toString(16)));
  this$static.colors[17] = '#' + $lpad((number51 = 80 >>> 0 , number51.toString(16))) + $lpad((number52 = 80 >>> 0 , number52.toString(16))) + $lpad((number53 = 80 >>> 0 , number53.toString(16)));
  this$static.colors[18] = '#' + $lpad((number54 = 255 >>> 0 , number54.toString(16))) + $lpad((number55 = 0 >>> 0 , number55.toString(16))) + $lpad((number56 = 255 >>> 0 , number56.toString(16)));
  this$static.colors[19] = '#' + $lpad((number57 = 0 >>> 0 , number57.toString(16))) + $lpad((number58 = 255 >>> 0 , number58.toString(16))) + $lpad((number59 = 255 >>> 0 , number59.toString(16)));
  this$static.colors[20] = '#' + $lpad((number60 = 255 >>> 0 , number60.toString(16))) + $lpad((number61 = 160 >>> 0 , number61.toString(16))) + $lpad((number62 = 192 >>> 0 , number62.toString(16)));
  this$static.colors[21] = '#' + $lpad((number63 = 32 >>> 0 , number63.toString(16))) + $lpad((number64 = 255 >>> 0 , number64.toString(16))) + $lpad((number65 = 16 >>> 0 , number65.toString(16)));
  this$static.colors[22] = '#' + $lpad((number66 = 0 >>> 0 , number66.toString(16))) + $lpad((number67 = 0 >>> 0 , number67.toString(16))) + $lpad((number68 = 0 >>> 0 , number68.toString(16)));
  this$static.colors[23] = '#' + $lpad((number69 = 128 >>> 0 , number69.toString(16))) + $lpad((number70 = 128 >>> 0 , number70.toString(16))) + $lpad((number = 128 >>> 0 , number.toString(16)));
  param = $getParameter(this$static, 'bgcolor');
  param != null && param.length == 6?$validateColor(param)?(this$static.bgColor = '#' + param):(this$static.bgColor = 'gray'):(this$static.bgColor = 'gray');
  param = $getParameter(this$static, 'butbgcolor');
  param != null && param.length == 6?$validateColor(param)?(this$static.buttonBgColor = '#' + param):(this$static.buttonBgColor = this$static.bgColor):(this$static.buttonBgColor = this$static.bgColor);
  param = $getParameter(this$static, 'colors');
  if (param != null) {
    for (i0 = 0; i0 < 10 && i0 < (param.length / 6 | 0); i0++) {
      $validateColor(param.substr(i0 * 6, i0 * 6 + 6 - i0 * 6)) && (this$static.colors[i0] = '#' + param.substr(i0 * 6, i0 * 6 + 6 - i0 * 6));
    }
  }
  for (i1 = 0; i1 < 6; i1++)
    for (j0 = 0; j0 < 16; j0++)
      this$static.cube[i1][j0] = i1 + 10;
  superCube = false;
  borderWidth = 0;
  border[0][0] = border[0][1] = border[1][1] = border[3][0] = 0.1;
  border[1][0] = border[2][0] = border[2][1] = border[3][1] = 0.9;
  param = $getParameter(this$static, 'supercube');
  if (param != null)
    if ($equals('1', param)) {
      superCube = true;
      border[0][0] = border[0][1] = border[1][1] = border[3][0] = 0.06;
      border[1][0] = border[2][0] = border[2][1] = border[3][1] = 0.94;
      for (i0 = 0; i0 < 16; i0++)
        this$static.cube[0][i0] = 22;
      scw = 0;
      param = $getParameter(this$static, 'scw');
      param != null && ($equals('1', param)?(scw = 1):$equals('2', param) && (scw = 2));
      scw == 1 && (this$static.colors[10] = '#000000');
    }
  param = $getParameter(this$static, 'gabbacolors');
  if (param != null)
    if ($equals('1', param)) {
      if (superCube) {
        this$static.colors[11] = '#fdcf00';
        this$static.colors[12] = '#fd4e0a';
        this$static.colors[13] = '#93000d';
        this$static.colors[14] = '#00702d';
        this$static.colors[15] = '#00347a';
      }
       else {
        border[0][0] = border[0][1] = border[1][1] = border[3][0] = 0.06;
        border[1][0] = border[2][0] = border[2][1] = border[3][1] = 0.94;
        this$static.colors[11] = '#ffd90a';
        this$static.colors[12] = '#ff4f0b';
        this$static.colors[13] = '#9e0b19';
        this$static.colors[14] = '#0b7d39';
        this$static.colors[15] = '#0b4186';
      }
    }
  param = $getParameter(this$static, 'borderwidth');
  if (param != null) {
    for (i0 = 0; i0 < param.length; i0++) {
      checkCriticalStringElementIndex(i0, param.length);
      param.charCodeAt(i0) >= 48 && (checkCriticalStringElementIndex(i0, param.length) , param.charCodeAt(i0) <= 57) && (borderWidth = borderWidth * 10 + (checkCriticalStringElementIndex(i0, param.length) , param.charCodeAt(i0)) - 48);
    }
    borderWidth >= 0 && borderWidth <= 20 && $setBorderWidth(borderWidth / 100);
  }
  if (superCube) {
    for (i0 = 0; i0 < 6; i0++)
      for (j = 0; j < 16; j++)
        this$static.scube[i0][j] = 0;
  }
  initialPosition = 'lluu';
  param = $getParameter(this$static, 'colorscheme');
  if (param != null && param.length == 6) {
    for (i0 = 0; i0 < 6; i0++) {
      color_0 = 23;
      for (j1 = 0; j1 < 23; j1++) {
        if ($charAt(String.fromCharCode((checkCriticalStringElementIndex(i0, param.length) , param.charCodeAt(i0))).toLowerCase(), 0) == (checkCriticalStringElementIndex(j1, '0123456789wyorgbldmcpnk'.length) , '0123456789wyorgbldmcpnk'.charCodeAt(j1))) {
          color_0 = j1;
          break;
        }
      }
      for (j = 0; j < 16; j++)
        this$static.cube[i0][j] = color_0;
    }
  }
  scramble = 0;
  scrambleToggle = false;
  param = $getParameter(this$static, 'scramble');
  $equals('1', param)?(scramble = 1):$equals('2', param) && (scramble = 2);
  if (scramble == 2) {
    for (i0 = 0; i0 < 6; i0++)
      for (j = 0; j < 16; j++) {
        this$static.initialCube[i0][j] = this$static.cube[i0][j];
        this$static.initialSCube[i0][j] = this$static.scube[i0][j];
      }
  }
  if (scramble == 0) {
    param = $getParameter(this$static, 'pos');
    if (param != null && param.length == 96) {
      initialPosition = 'uuuuff';
      this$static.bgColor == 'gray' && (this$static.bgColor = 'white');
      for (i0 = 0; i0 < 6; i0++) {
        ti = posFaceTransform[i0];
        for (j = 0; j < 16; j++) {
          tj = posFaceletTransform[i0][j];
          this$static.cube[ti][tj] = 23;
          for (k = 0; k < 14; k++) {
            checkCriticalStringElementIndex(i0 * 16 + j, param.length);
            if (param.charCodeAt(i0 * 16 + j) == (checkCriticalStringElementIndex(k, 'DFECABdfecabgh'.length) , 'DFECABdfecabgh'.charCodeAt(k))) {
              this$static.cube[ti][tj] = k + 4;
              break;
            }
          }
        }
      }
    }
    param = $getParameter(this$static, 'facelets');
    if (param != null && param.length == 96) {
      for (i0 = 0; i0 < 6; i0++) {
        for (j = 0; j < 16; j++) {
          this$static.cube[i0][j] = 23;
          for (k = 0; k < 23; k++) {
            if ($charAt(String.fromCharCode((checkCriticalStringElementIndex(i0 * 16 + j, param.length) , param.charCodeAt(i0 * 16 + j))).toLowerCase(), 0) == (checkCriticalStringElementIndex(k, '0123456789wyorgbldmcpnk'.length) , '0123456789wyorgbldmcpnk'.charCodeAt(k))) {
              this$static.cube[i0][j] = k;
              break;
            }
          }
        }
      }
    }
    param = $getParameter(this$static, 'superfacelets');
    if (param != null && param.length == 96) {
      for (i0 = 0; i0 < 6; i0++) {
        for (j = 0; j < 16; j++) {
          for (k = 0; k < 4; k++) {
            if ($charAt(String.fromCharCode((checkCriticalStringElementIndex(i0 * 16 + j, param.length) , param.charCodeAt(i0 * 16 + j))).toLowerCase(), 0) == (checkCriticalStringElementIndex(k, '0123'.length) , '0123'.charCodeAt(k))) {
              this$static.scube[i0][j] = k;
              break;
            }
          }
        }
      }
    }
  }
  randMoveCount = 0;
  param = $getParameter(this$static, 'randmoves');
  if (param != null) {
    rm = 0;
    for (i0 = 0; i0 < param.length; i0++) {
      checkCriticalStringElementIndex(i0, param.length);
      param.charCodeAt(i0) >= 48 && (checkCriticalStringElementIndex(i0, param.length) , param.charCodeAt(i0) <= 57) && (rm = rm * 10 + (checkCriticalStringElementIndex(i0, param.length) , param.charCodeAt(i0)) - 48);
    }
    rm > 0 && (randMoveCount = rm);
  }
  param = $getParameter(this$static, 'move');
  ($equals('random', param) || scramble > 0) && (param = randMoves(randMoveCount));
  this$static.move = param == null?initMultidimensionalArray(I_classLit, [$intern_2, $intern_3], [4, 5], 15, [0, 0], 2):$getMove(this$static, param, true);
  this$static.movePos = 0;
  this$static.curInfoText = -1;
  if (scramble == 0) {
    param = $getParameter(this$static, 'initmove');
    if (param != null) {
      $equals('random', param) && (param = randMoves(randMoveCount));
      initialMove = $equals(param, '#')?this$static.move:$getMove(this$static, param, false);
      initialMove.length > 0 && $doMove(this$static, this$static.cube, initialMove[0], 0, initialMove[0].length, false);
    }
  }
  param = $getParameter(this$static, 'initrevmove');
  scramble == 1?(param = null):scramble == 2 && (param = '#');
  if (param != null) {
    $equals('random', param) && (param = randMoves(randMoveCount));
    initialReversedMove = $equals(param, '#')?this$static.move:$getMove(this$static, param, false);
    initialReversedMove.length > 0 && $doMove(this$static, this$static.cube, initialReversedMove[0], 0, initialReversedMove[0].length, true);
  }
  if (scramble == 0) {
    param = $getParameter(this$static, 'demo');
    if (param != null) {
      $equals('random', param) && (param = randMoves(randMoveCount));
      this$static.demoMove = $equals(param, '#')?this$static.move:$getMove(this$static, param, true);
      this$static.demoMove.length > 0 && this$static.demoMove[0].length > 0 && (this$static.demo = true);
    }
  }
  if (this$static.cubeDiv) {
    for (i0 = 0; i0 < 3; i0++)
      this$static.eye[i0] = this$static.eyeX[i0] = this$static.eyeY[i0] = 0;
    this$static.eye[2] = -1;
    this$static.eyeX[0] = 1;
  }
  param = $getParameter(this$static, 'position');
  vNorm(vMul(this$static.eyeY, this$static.eye, this$static.eyeX));
  param == null && (param = initialPosition);
  for (i2 = 0; i2 < param.length; i2++) {
    angle = 0.2617993877991494;
    switch ($charAt(String.fromCharCode((checkCriticalStringElementIndex(i2, param.length) , param.charCodeAt(i2))).toLowerCase(), 0)) {
      case 100:
        angle = $intern_9;
      case 117:
        vRotY(this$static.eye, angle);
        vRotY(this$static.eyeX, angle);
        break;
      case 102:
        angle = $intern_9;
      case 98:
        vRotZ(this$static.eye, angle);
        vRotZ(this$static.eyeX, angle);
        break;
      case 108:
        angle = $intern_9;
      case 114:
        vRotX(this$static.eye, angle);
        vRotX(this$static.eyeX, angle);
    }
  }
  vNorm(vMul(this$static.eyeY, this$static.eye, this$static.eyeX));
  this$static.speed = 0;
  this$static.doubleSpeed = 0;
  param = $getParameter(this$static, 'speed');
  if (param != null)
    for (i3 = 0; i3 < param.length; i3++) {
      checkCriticalStringElementIndex(i3, param.length);
      param.charCodeAt(i3) >= 48 && (checkCriticalStringElementIndex(i3, param.length) , param.charCodeAt(i3) <= 57) && (this$static.speed = this$static.speed * 10 + (checkCriticalStringElementIndex(i3, param.length) , param.charCodeAt(i3)) - 48);
    }
  param = $getParameter(this$static, 'doublespeed');
  if (param != null)
    for (i4 = 0; i4 < param.length; i4++) {
      checkCriticalStringElementIndex(i4, param.length);
      param.charCodeAt(i4) >= 48 && (checkCriticalStringElementIndex(i4, param.length) , param.charCodeAt(i4) <= 57) && (this$static.doubleSpeed = this$static.doubleSpeed * 10 + (checkCriticalStringElementIndex(i4, param.length) , param.charCodeAt(i4)) - 48);
    }
  this$static.speed == 0 && (this$static.speed = 10);
  this$static.doubleSpeed == 0 && (this$static.doubleSpeed = this$static.speed * 3 / 2 | 0);
  this$static.persp = 0;
  param = $getParameter(this$static, 'perspective');
  if (param == null)
    this$static.persp = 2;
  else 
    for (i5 = 0; i5 < param.length; i5++) {
      checkCriticalStringElementIndex(i5, param.length);
      param.charCodeAt(i5) >= 48 && (checkCriticalStringElementIndex(i5, param.length) , param.charCodeAt(i5) <= 57) && (this$static.persp = this$static.persp * 10 + (checkCriticalStringElementIndex(i5, param.length) , param.charCodeAt(i5)) - 48);
    }
  intscale = 0;
  param = $getParameter(this$static, 'scale');
  if (param != null)
    for (i6 = 0; i6 < param.length; i6++) {
      checkCriticalStringElementIndex(i6, param.length);
      param.charCodeAt(i6) >= 48 && (checkCriticalStringElementIndex(i6, param.length) , param.charCodeAt(i6) <= 57) && (intscale = intscale * 10 + (checkCriticalStringElementIndex(i6, param.length) , param.charCodeAt(i6)) - 48);
    }
  this$static.scale = 1 / (1 + intscale / 10);
  this$static.hint = false;
  param = $getParameter(this$static, 'hint');
  if (param != null) {
    this$static.hint = true;
    this$static.faceShift = 0;
    for (i0 = 0; i0 < param.length; i0++) {
      checkCriticalStringElementIndex(i0, param.length);
      param.charCodeAt(i0) >= 48 && (checkCriticalStringElementIndex(i0, param.length) , param.charCodeAt(i0) <= 57) && (this$static.faceShift = this$static.faceShift * 10 + (checkCriticalStringElementIndex(i0, param.length) , param.charCodeAt(i0)) - 48);
    }
    this$static.faceShift < 1?(this$static.hint = false):(this$static.faceShift /= 10);
  }
  this$static.buttonHeight = 13;
  param = $getParameter(this$static, 'buttonheight');
  if (param != null) {
    n = __parseAndValidateInt(param, 10);
    n >= 9 & n <= 25 && (this$static.buttonHeight = n);
  }
  this$static.progressHeight = this$static.move.length == 0?0:6;
  this$static.buttonBar = 1;
  param = $getParameter(this$static, 'buttonbar');
  if ($equals('0', param)) {
    this$static.buttonBar = 0;
    this$static.buttonHeight = 0;
    this$static.progressHeight = 0;
  }
   else if ($equals('1', param))
    this$static.buttonBar = 1;
  else if ($equals('2', param) || this$static.move.length == 0) {
    this$static.buttonBar = 2;
    this$static.progressHeight = 0;
  }
  param = $getParameter(this$static, 'edit');
  $equals('0', param)?(this$static.editable = false):(this$static.editable = true);
  param = $getParameter(this$static, 'repeat');
  $equals('0', param)?(this$static.repeatable = false):(this$static.repeatable = true);
  param = $getParameter(this$static, 'clickprogress');
  $equals('0', param)?(this$static.clickProgress = false):(this$static.clickProgress = true);
  param = $getParameter(this$static, 'movetext');
  $equals('1', param)?(this$static.moveText = 1):(this$static.moveText = 0);
  this$static.textHeight = 12;
  param = $getParameter(this$static, 'textsize');
  if (param != null) {
    n = __parseAndValidateInt(param, 10);
    n >= 5 & n <= 40 && (this$static.textHeight = n);
  }
  param = $getParameter(this$static, 'fonttype');
  param == null || $equals('1', param)?(this$static.outlined = true):(this$static.outlined = false);
  this$static.metric = 0;
  param = $getParameter(this$static, 'metric');
  param != null && ($equals('1', param)?(this$static.metric = 1):$equals('2', param)?(this$static.metric = 2):$equals('3', param) && (this$static.metric = 3));
  this$static.align_0 = 1;
  param = $getParameter(this$static, 'align');
  param != null && ($equals('0', param)?(this$static.align_0 = 0):$equals('1', param)?(this$static.align_0 = 1):$equals('2', param) && (this$static.align_0 = 2));
  ww = false;
  param = $getParameter(this$static, 'ww');
  param != null && $equals('1', param) && (ww = true);
  snap = false;
  param = $getParameter(this$static, 'snap');
  param != null && $equals('1', param) && (snap = true);
  if (scramble != 2) {
    for (i0 = 0; i0 < 6; i0++)
      for (j = 0; j < 16; j++) {
        this$static.initialCube[i0][j] = this$static.cube[i0][j];
        this$static.initialSCube[i0][j] = this$static.scube[i0][j];
      }
  }
  for (i = 0; i < 3; i++) {
    this$static.initialEye[i] = this$static.eye[i];
    this$static.initialEyeX[i] = this$static.eyeX[i];
    this$static.initialEyeY[i] = this$static.eyeY[i];
  }
  if ($colorAverage(this$static.bgColor) < 128) {
    this$static.textColor = 'white';
    this$static.hlColor = $brighter(this$static.bgColor);
  }
   else {
    this$static.textColor = 'black';
    this$static.hlColor = $darker(this$static.bgColor);
  }
  $colorAverage(this$static.buttonBgColor) < 128?(this$static.buttonBorderColor = 'white'):(this$static.buttonBorderColor = 'black');
  this$static.sliderColor = this$static.textColor;
  param = $getParameter(this$static, 'slidercolor');
  param != null && param.length == 6 && $validateColor(param) && (this$static.sliderColor = '#' + param);
  this$static.sliderBgColor = $darker(this$static.bgColor);
  param = $getParameter(this$static, 'sliderbgcolor');
  param != null && param.length == 6 && $validateColor(param) && (this$static.sliderBgColor = '#' + param);
  param = $getParameter(this$static, 'troughcolor');
  param != null && param.length == 6 && $validateColor(param) && (this$static.sliderBgColor = '#' + param);
  this$static.cubeColor = 'black';
  param = $getParameter(this$static, 'cubecolor');
  param != null && param.length == 6 && $validateColor(param) && (this$static.cubeColor = '#' + param);
  this$static.curInfoText = -1;
  ubuttonHeight = this$static.buttonHeight;
  uprogressHeight = this$static.progressHeight;
  utextHeight = this$static.textHeight;
  $init2(this$static);
  this$static.demo && $startAnimation(this$static, -1);
}

function $init2(this$static){
  var userAgent;
  if (firstTime) {
    null.$_nullMethod();
    null.$_nullMethod();
    if (!this$static.cubeDiv)
      $add_0(($clinit_RootPanel() , get_0(null)), this$static.canv);
    else {
      null.$_nullMethod().$_nullMethod();
      $add_0(get_0(cubeDivName), this$static.canv);
    }
    addNativePreviewHandler(this$static.nativePreviewHandler);
    !this$static.cubeDiv && $addDomHandler(($clinit_RootPanel() , get_0(null)), new AnimCube4$6, ($clinit_ContextMenuEvent() , $clinit_ContextMenuEvent() , TYPE));
    addResizeHandler(new AnimCube4$7(this$static));
    userAgent = $wnd.navigator.userAgent.toLowerCase();
    userAgent.indexOf('gecko') != -1 && userAgent.indexOf('webkit') == -1 && userAgent.indexOf('trident') == -1 && (isGecko = true);
    firstTime = false;
  }
  $scaleCanvas(this$static);
  this$static.height != 0 && this$static.width_0 != 0 && $paint(this$static);
}

function $initInfoText(this$static, move){
  move.length > 0 && move[0] >= $intern_8?(this$static.curInfoText = move[0] - $intern_8):(this$static.curInfoText = -1);
}

function $loadConfigFile(this$static, fname){
  var e;
  try {
    $sendRequest(new RequestBuilder(($clinit_RequestBuilder() , GET), fname), new AnimCube4$2(this$static));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 26)) {
      e = $e0;
      $printStackTraceImpl(e, ($clinit_System() , err), '');
    }
     else 
      throw toJs($e0);
  }
}

function $lpad(s){
  return $substring('00' + s, s.length);
}

function $mouseDown(this$static, npe){
  var e;
  e = npe.nativeEvent;
  this$static.lastDragX = this$static.lastX = round_int((this$static.touchEvent?!this$static.cubeDiv?(e.touches[0].clientX || 0) | 0:((e.touches[0].clientX || 0) | 0) - $getAbsoluteLeft(this$static.cubeDiv):!this$static.cubeDiv?(e.clientX || 0) | 0:((e.clientX || 0) | 0) - $getAbsoluteLeft(this$static.cubeDiv)) * dpr);
  this$static.lastDragY = this$static.lastY = round_int((this$static.touchEvent?!this$static.cubeDiv?(e.touches[0].clientY || 0) | 0:((e.touches[0].clientY || 0) | 0) - $getAbsoluteTop(this$static.cubeDiv):!this$static.cubeDiv?(e.clientY || 0) | 0:((e.clientY || 0) | 0) - $getAbsoluteTop(this$static.cubeDiv)) * dpr);
  if (this$static.cubeDiv) {
    if (this$static.lastX >= 0 && this$static.lastX <= this$static.width_0 && this$static.lastY >= 0 && this$static.lastY <= this$static.height + this$static.buttonHeight) {
      e.returnValue = false;
    }
     else {
      this$static.mouseIsDown = false;
      return;
    }
  }
  this$static.toTwist = false;
  this$static.buttonPressed = $selectButton(this$static, this$static.lastX, this$static.lastY);
  if (this$static.buttonPressed >= 0) {
    this$static.pushed = true;
    if (this$static.buttonPressed == 3) {
      this$static.animating?this$static.animating && (this$static.restarted = true):(this$static.mirrored = !this$static.mirrored);
    }
     else if (this$static.buttonPressed == 0) {
      if (scramble > 0 && this$static.buttonBar == 2) {
        if (scrambleToggle) {
          scrambleToggle = false;
          this$static.animating && (this$static.restarted = true);
          $clear(this$static);
        }
         else {
          scrambleToggle = true;
          this$static.buttonPressed = 6;
          $startAnimation(this$static, buttonAction[this$static.buttonPressed]);
        }
      }
       else {
        this$static.animating && (this$static.restarted = true);
        $clear(this$static);
      }
    }
     else if (this$static.buttonPressed == 7) {
      this$static.animating && (this$static.restarted = true);
      $clear(this$static);
      this$static.curMove = this$static.curMove < this$static.move.length - 1?this$static.curMove + 1:0;
    }
     else 
      $startAnimation(this$static, buttonAction[this$static.buttonPressed]);
    this$static.drawButtons = true;
    $paint(this$static);
  }
   else if (this$static.progressHeight > 0 && this$static.move.length > 0 && this$static.move[this$static.curMove].length > 0 && this$static.lastY >= this$static.height - this$static.progressHeight && this$static.lastY < this$static.height) {
    if (this$static.clickProgress) {
      this$static.animating && (this$static.restarted = true);
      $progress(this$static, this$static.jobNumber++);
    }
  }
   else {
    this$static.mirrored && (this$static.lastDragX = this$static.lastX = this$static.width_0 - this$static.lastX);
    this$static.editable && !this$static.animating && (e.button | 0) == 1 && !e.shiftKey && (this$static.toTwist = true);
  }
}

function $mouseMove(this$static, npe){
  var a, b, d, d1, d2, dx, dy, e, i, len, pos, x_0, x1, x2, y_0, y1, y2;
  if (this$static.pushed) {
    return;
  }
  e = npe.nativeEvent;
  if (this$static.dragging) {
    this$static.animating && (this$static.restarted = true);
    len = realMoveLength(this$static.move[this$static.curMove]);
    pos = (((round_int((this$static.touchEvent?!this$static.cubeDiv?(e.touches[0].clientX || 0) | 0:((e.touches[0].clientX || 0) | 0) - $getAbsoluteLeft(this$static.cubeDiv):!this$static.cubeDiv?(e.clientX || 0) | 0:((e.clientX || 0) | 0) - $getAbsoluteLeft(this$static.cubeDiv)) * dpr) - 1) * len * 2 / (this$static.width_0 - 2) | 0) + 1) / 2 | 0;
    pos = $wnd.Math.max(0, $wnd.Math.min(len, pos));
    pos > 0 && (pos = arrayMovePos(this$static.move[this$static.curMove], pos));
    pos > this$static.movePos && $doMove(this$static, this$static.cube, this$static.move[this$static.curMove], this$static.movePos, pos - this$static.movePos, false);
    pos < this$static.movePos && $doMove(this$static, this$static.cube, this$static.move[this$static.curMove], pos, this$static.movePos - pos, true);
    this$static.movePos = pos;
    $paint(this$static);
    return;
  }
  x_0 = this$static.mirrored?this$static.width_0 - round_int((this$static.touchEvent?!this$static.cubeDiv?(e.touches[0].clientX || 0) | 0:((e.touches[0].clientX || 0) | 0) - $getAbsoluteLeft(this$static.cubeDiv):!this$static.cubeDiv?(e.clientX || 0) | 0:((e.clientX || 0) | 0) - $getAbsoluteLeft(this$static.cubeDiv)) * dpr):round_int((this$static.touchEvent?!this$static.cubeDiv?(e.touches[0].clientX || 0) | 0:((e.touches[0].clientX || 0) | 0) - $getAbsoluteLeft(this$static.cubeDiv):!this$static.cubeDiv?(e.clientX || 0) | 0:((e.clientX || 0) | 0) - $getAbsoluteLeft(this$static.cubeDiv)) * dpr);
  y_0 = round_int((this$static.touchEvent?!this$static.cubeDiv?(e.touches[0].clientY || 0) | 0:((e.touches[0].clientY || 0) | 0) - $getAbsoluteTop(this$static.cubeDiv):!this$static.cubeDiv?(e.clientY || 0) | 0:((e.clientY || 0) | 0) - $getAbsoluteTop(this$static.cubeDiv)) * dpr);
  dx = x_0 - this$static.lastX;
  dy = y_0 - this$static.lastY;
  if (this$static.editable && this$static.toTwist && !this$static.twisting && !this$static.animating) {
    this$static.lastDragX = x_0;
    this$static.lastDragY = y_0;
    for (i = 0; i < this$static.dragAreas; i++) {
      d1 = this$static.dragCornersX[i][0];
      x1 = this$static.dragCornersX[i][1] - d1;
      y1 = this$static.dragCornersX[i][3] - d1;
      d2 = this$static.dragCornersY[i][0];
      x2 = this$static.dragCornersY[i][1] - d2;
      y2 = this$static.dragCornersY[i][3] - d2;
      a = (y2 * (this$static.lastX - d1) - y1 * (this$static.lastY - d2)) / (x1 * y2 - y1 * x2);
      b = (-x2 * (this$static.lastX - d1) + x1 * (this$static.lastY - d2)) / (x1 * y2 - y1 * x2);
      if (a > 0 && a < 1 && b > 0 && b < 1) {
        if (dx * dx + dy * dy < 144)
          return;
        this$static.dragX = this$static.dragDirsX[i];
        this$static.dragY = this$static.dragDirsY[i];
        d = $wnd.Math.abs(this$static.dragX * dx + this$static.dragY * dy) / $wnd.Math.sqrt((this$static.dragX * this$static.dragX + this$static.dragY * this$static.dragY) * (dx * dx + dy * dy));
        if (d > 0.75) {
          this$static.twisting = true;
          this$static.twistedLayer = this$static.dragLayers[i];
          this$static.twistedMode = this$static.dragModes[i];
          break;
        }
      }
    }
    this$static.toTwist = false;
    this$static.lastX = this$static.lastDragX;
    this$static.lastY = this$static.lastDragY;
  }
  dx = x_0 - this$static.lastX;
  dy = y_0 - this$static.lastY;
  dx = round_int(dx / dpr);
  dy = round_int(dy / dpr);
  if (!this$static.twisting || this$static.animating) {
    vNorm(vAdd(this$static.eye, vScale(vCopy(this$static.eyeD, this$static.eyeX), dx * -0.016)));
    vNorm(vMul(this$static.eyeX, this$static.eyeY, this$static.eye));
    vNorm(vAdd(this$static.eye, vScale(vCopy(this$static.eyeD, this$static.eyeY), dy * 0.016)));
    vNorm(vMul(this$static.eyeY, this$static.eye, this$static.eyeX));
    this$static.lastX = x_0;
    this$static.lastY = y_0;
  }
   else {
    this$static.natural && $splitCube(this$static, this$static.twistedLayer);
    this$static.currentAngle = 0.03 * (this$static.dragX * dx + this$static.dragY * dy) / $wnd.Math.sqrt(this$static.dragX * this$static.dragX + this$static.dragY * this$static.dragY);
  }
  $paint(this$static);
}

function $mouseUp(this$static){
  var angle, num;
  this$static.dragging = false;
  if (this$static.pushed) {
    this$static.pushed = false;
    this$static.drawButtons = true;
    this$static.buttonPressed == 6 && this$static.animating || $paint(this$static);
  }
   else if (this$static.twisting && !this$static.spinning) {
    this$static.twisting = false;
    this$static.originalAngle += this$static.currentAngle;
    this$static.currentAngle = 0;
    angle = this$static.originalAngle;
    while (angle < 0)
      angle += 100.53096491487338;
    num = round_int(angle * 8 / $intern_10) % 16;
    if (snap || num % 4 == 0 || num % 4 == 3) {
      num = (num + 2) / 4 | 0;
      faceTwistDirs[this$static.twistedLayer] > 0 && (num = (4 - num) % 4);
      this$static.originalAngle = 0;
      this$static.natural = true;
      $twistLayers(this$static, this$static.cube, this$static.twistedLayer, num, this$static.twistedMode);
    }
    $paint(this$static);
  }
}

function $moveLength(this$static, move, end){
  var i, length_0;
  length_0 = 0;
  for (i = 0; i < move.length && (i < end || end < 0); i++)
    length_0 += $turnLength(this$static, move[i]);
  return length_0;
}

function $moveText(this$static, move, start_0, end){
  var i, s;
  if (start_0 >= move.length)
    return '';
  s = '';
  for (i = start_0; i < end; i++)
    s += $turnText(this$static, move, i);
  return s;
}

function $onModuleLoad(this$static){
  var fname;
  fname = !this$static.cubeDiv?$getParameter(this$static, 'config'):$getAttribute(this$static.cubeDiv, 'config');
  fname != null && fname != ''?$loadConfigFile(this$static, fname):$init(this$static);
}

function $paint(this$static){
  var axis_0, botProd, cosA, cosB, i, i0, j, orderMode, sinA, sinB, topProd;
  null.$_nullMethod();
  null.$_nullMethod(this$static.bgColor);
  if (this$static.buttonBar == 1 && (this$static.progressHeight == 0 || this$static.demo)) {
    this$static.height - round_int($wnd.Math.ceil(dpr - 0.11));
    $setClip();
    null.$_nullMethod(this$static.height - round_int($wnd.Math.ceil(dpr - 0.11)));
  }
   else {
    $setClip();
    null.$_nullMethod();
  }
  this$static.dragAreas = 0;
  if (this$static.natural) {
    $fixBlock(this$static, this$static.eye, this$static.eyeX, this$static.eyeY, cubeBlocks, 3, 9);
  }
   else {
    cosA = $wnd.Math.cos(this$static.originalAngle + this$static.currentAngle);
    sinA = $wnd.Math.sin(this$static.originalAngle + this$static.currentAngle) * rotSign[this$static.twistedLayer];
    for (i0 = 0; i0 < 3; i0++) {
      this$static.tempEye[i0] = 0;
      this$static.tempEyeX[i0] = 0;
      for (j = 0; j < 3; j++) {
        axis_0 = this$static.twistedLayer / 2 | 0;
        this$static.tempEye[i0] += this$static.eye[j] * (rotVec[axis_0][i0][j] + rotCos[axis_0][i0][j] * cosA + rotSin[axis_0][i0][j] * sinA);
        this$static.tempEyeX[i0] += this$static.eyeX[j] * (rotVec[axis_0][i0][j] + rotCos[axis_0][i0][j] * cosA + rotSin[axis_0][i0][j] * sinA);
      }
    }
    vMul(this$static.tempEyeY, this$static.tempEye, this$static.tempEyeX);
    cosB = $wnd.Math.cos(this$static.originalAngle - this$static.currentAngle);
    sinB = $wnd.Math.sin(this$static.originalAngle - this$static.currentAngle) * rotSign[this$static.twistedLayer];
    for (i = 0; i < 3; i++) {
      this$static.tempEye2[i] = 0;
      this$static.tempEyeX2[i] = 0;
      for (j = 0; j < 3; j++) {
        axis_0 = this$static.twistedLayer / 2 | 0;
        this$static.tempEye2[i] += this$static.eye[j] * (rotVec[axis_0][i][j] + rotCos[axis_0][i][j] * cosB + rotSin[axis_0][i][j] * sinB);
        this$static.tempEyeX2[i] += this$static.eyeX[j] * (rotVec[axis_0][i][j] + rotCos[axis_0][i][j] * cosB + rotSin[axis_0][i][j] * sinB);
      }
    }
    vMul(this$static.tempEyeY2, this$static.tempEye2, this$static.tempEyeX2);
    this$static.eyeArray[0] = this$static.eye;
    this$static.eyeArrayX[0] = this$static.eyeX;
    this$static.eyeArrayY[0] = this$static.eyeY;
    this$static.eyeArray[1] = this$static.tempEye;
    this$static.eyeArrayX[1] = this$static.tempEyeX;
    this$static.eyeArrayY[1] = this$static.tempEyeY;
    this$static.eyeArray[2] = this$static.tempEye2;
    this$static.eyeArrayX[2] = this$static.tempEyeX2;
    this$static.eyeArrayY[2] = this$static.tempEyeY2;
    this$static.blockArray[0] = this$static.topBlocks;
    this$static.blockArray[1] = this$static.midBlocks;
    this$static.blockArray[2] = this$static.midBlocks2;
    this$static.blockArray[3] = this$static.botBlocks;
    vSub(vScale(vCopy(this$static.perspEye, this$static.eye), 5 + this$static.persp), vScale(vCopy(this$static.perspNormal, faceNormals[this$static.twistedLayer]), 0.4));
    vSub(vScale(vCopy(this$static.perspEyeI, this$static.eye), 5 + this$static.persp), vScale(vCopy(this$static.perspNormal, faceNormals[this$static.twistedLayer ^ 1]), 0.16666666666666666));
    topProd = vProd(this$static.perspEye, faceNormals[this$static.twistedLayer]);
    botProd = vProd(this$static.perspEyeI, faceNormals[this$static.twistedLayer ^ 1]);
    topProd < 0 && botProd > 0?(orderMode = 0):topProd > 0 && botProd < 0?(orderMode = 1):(orderMode = 2);
    $fixBlock(this$static, this$static.eyeArray[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][0]]], this$static.eyeArrayX[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][0]]], this$static.eyeArrayY[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][0]]], this$static.blockArray[this$static.drawOrder[orderMode][0]], this$static.blockMode[this$static.twistedMode][this$static.drawOrder[orderMode][0]], 0);
    $fixBlock(this$static, this$static.eyeArray[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][1]]], this$static.eyeArrayX[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][1]]], this$static.eyeArrayY[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][1]]], this$static.blockArray[this$static.drawOrder[orderMode][1]], this$static.blockMode[this$static.twistedMode][this$static.drawOrder[orderMode][1]], 1);
    $fixBlock(this$static, this$static.eyeArray[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][2]]], this$static.eyeArrayX[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][2]]], this$static.eyeArrayY[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][2]]], this$static.blockArray[this$static.drawOrder[orderMode][2]], this$static.blockMode[this$static.twistedMode][this$static.drawOrder[orderMode][2]], 2);
    $fixBlock(this$static, this$static.eyeArray[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][3]]], this$static.eyeArrayX[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][3]]], this$static.eyeArrayY[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][3]]], this$static.blockArray[this$static.drawOrder[orderMode][3]], this$static.blockMode[this$static.twistedMode][this$static.drawOrder[orderMode][3]], 3);
  }
  !this$static.pushed && !this$static.animating && (this$static.buttonPressed = -1);
  if (!(scramble > 0 && this$static.buttonBar == 2)) {
    if (!this$static.demo && this$static.move.length > 0) {
      if (this$static.move[this$static.curMove].length > 0) {
        if (this$static.progressHeight > 0) {
          null.$_nullMethod();
          null.$_nullMethod(this$static.buttonBorderColor);
          (this$static.width_0 - 2) * realMovePos(this$static.move[this$static.curMove], this$static.movePos) / realMoveLength(this$static.move[this$static.curMove]) | 0;
          null.$_nullMethod(this$static.sliderBgColor);
          null.$_nullMethod();
          null.$_nullMethod(this$static.sliderColor);
          null.$_nullMethod();
          null.$_nullMethod();
          null.$_nullMethod();
          null.$_nullMethod();
        }
        '' + $moveLength(this$static, this$static.move[this$static.curMove], this$static.movePos) + '/' + $moveLength(this$static, this$static.move[this$static.curMove], -1) + metricChar[this$static.metric];
        null.$_nullMethod();
        round_int(null.$_nullMethod().$_nullMethod());
        if (this$static.moveText > 0) {
          $drawString(this$static);
          $drawMoveText(this$static);
        }
         else 
          $drawString(this$static);
      }
      if (this$static.move.length > 1) {
        round_int(null.$_nullMethod().$_nullMethod());
        $drawString(this$static);
        $drawButton(this$static, 7, this$static.width_0 - (this$static.buttonHeight / 2 | 0), this$static.buttonHeight / 2 | 0);
      }
    }
    if (this$static.curInfoText >= 0) {
      null.$_nullMethod();
      $drawString(this$static);
    }
  }
  null.$_nullMethod();
  this$static.drawButtons && this$static.buttonBar != 0 && $drawButtons(this$static);
  null.$_nullMethod(null.$_nullMethod());
}

function $progress(this$static, jobNum){
  var len, pos;
  if (jobNum > this$static.nowServing) {
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new AnimCube4$5(this$static, jobNum));
    return;
  }
  if (jobNum < this$static.nowServing) {
    alert_0('jobNum ' + jobNum + ' <  nowServing ' + this$static.nowServing);
    return;
  }
  len = realMoveLength(this$static.move[this$static.curMove]);
  pos = (((this$static.lastX - 1) * len * 2 / (this$static.width_0 - 2) | 0) + 1) / 2 | 0;
  pos = $wnd.Math.max(0, $wnd.Math.min(len, pos));
  pos > 0 && (pos = arrayMovePos(this$static.move[this$static.curMove], pos));
  pos > this$static.movePos && $doMove(this$static, this$static.cube, this$static.move[this$static.curMove], this$static.movePos, pos - this$static.movePos, false);
  pos < this$static.movePos && $doMove(this$static, this$static.cube, this$static.move[this$static.curMove], pos, this$static.movePos - pos, true);
  this$static.movePos = pos;
  this$static.dragging = true;
  $paint(this$static);
  this$static.animating = false;
  ++this$static.nowServing;
}

function $run(this$static, jobNum, dir_0){
  var layer, mode, mv, num;
  if (jobNum > this$static.nowServing) {
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new AnimCube4$3(this$static, jobNum, dir_0));
    return;
  }
  if (jobNum < this$static.nowServing) {
    alert_0('jobNum ' + jobNum + ' <  nowServing ' + this$static.nowServing);
    return;
  }
  this$static.jobNumber > this$static.nowServing + 1 && (this$static.restarted = true);
  if (!this$static.moveAnimated) {
    mv = this$static.move[this$static.curMove];
    while (this$static.movePos < mv.length) {
      if (mv[this$static.movePos] >= $intern_8)
        this$static.curInfoText = mv[this$static.movePos] - $intern_8;
      else {
        num = mv[this$static.movePos] % 4 + 1;
        mode = (mv[this$static.movePos] / 4 | 0) % 7;
        layer = mv[this$static.movePos] / 28 | 0;
        $twistLayers(this$static, this$static.cube, layer, num == 4?2:num, mode);
      }
      ++this$static.movePos;
    }
    this$static.animating = false;
    this$static.drawButtons = true;
    $paint(this$static);
    ++this$static.nowServing;
    return;
  }
  this$static.interrupted = false;
  (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(new AnimCube4$4(this$static, dir_0), null);
}

function $scaleCanvas(this$static){
  var i, i0;
  if (!this$static.cubeDiv) {
    this$static.height = $getClientHeight($doc) - 1;
    this$static.width_0 = $getClientWidth($doc) - 1;
  }
   else {
    this$static.height = $strInt(this$static.cubeDiv.style['height']) - 1;
    this$static.width_0 = $strInt(this$static.cubeDiv.style['width']) - 1;
  }
  null.$_nullMethod().$_nullMethod().$_nullMethod(this$static.width_0 + ($clinit_Style$Unit() , 'px'));
  null.$_nullMethod().$_nullMethod().$_nullMethod(this$static.height + 'px');
  null.$_nullMethod().$_nullMethod().$_nullMethod(this$static.width_0 + 'px');
  null.$_nullMethod().$_nullMethod().$_nullMethod(this$static.height + 'px');
  dpr = $devicePixelRatio();
  this$static.height = round_int(this$static.height * dpr);
  this$static.width_0 = round_int(this$static.width_0 * dpr);
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  this$static.buttonHeight = round_int(ubuttonHeight * dpr);
  this$static.progressHeight = round_int(uprogressHeight * dpr);
  this$static.textHeight = round_int(utextHeight * dpr);
  this$static.buttonBar == 1 && (this$static.height -= this$static.buttonHeight);
  for (i0 = 1; i0 < 10; i0++)
    this$static.ds[i0] = i0 * dpr;
  for (i = 0; i < textOffset.length; i++)
    textOffset[i] = textOffsetInit[i] * dpr;
  this$static.drawButtons = true;
}

function $selectButton(this$static, x_0, y_0){
  var buttonWidth, buttonX, i;
  if (this$static.buttonBar == 0)
    return -1;
  if (this$static.move.length > 1 && x_0 >= this$static.width_0 - this$static.buttonHeight && x_0 < this$static.width_0 && y_0 >= 0 && y_0 < this$static.buttonHeight)
    return 7;
  if (this$static.buttonBar == 2) {
    if (x_0 >= 0 && x_0 < this$static.buttonHeight && y_0 >= this$static.height - this$static.buttonHeight && y_0 < this$static.height)
      return 0;
    return -1;
  }
  if (y_0 < this$static.height)
    return -1;
  buttonX = 0;
  for (i = 0; i < 7; i++) {
    buttonWidth = (this$static.width_0 - buttonX) / (7 - i) | 0;
    if (x_0 >= buttonX && x_0 < buttonX + buttonWidth && y_0 >= this$static.height && y_0 < this$static.height + this$static.buttonHeight)
      return i;
    buttonX += buttonWidth;
  }
  return -1;
}

function $setBorderWidth(w){
  border[0][0] = border[0][1] = border[1][1] = border[3][0] = w;
  border[1][0] = border[2][0] = border[2][1] = border[3][1] = 1 - w;
}

function $setClip(){
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
}

function $splitCube(this$static, layer){
  var i;
  for (i = 0; i < 6; i++) {
    this$static.topBlocks[i] = topBlockTable[topBlockFaceDim[layer][i]];
    this$static.botBlocks[i] = topBlockTable[botBlockFaceDim[layer][i]];
    this$static.midBlocks[i] = midBlockTable[midBlockFaceDim[layer][i]];
    this$static.midBlocks2[i] = midBlockTable[midBlockFaceDim2[layer][i]];
  }
  this$static.natural = false;
}

function $startAnimation(this$static, mode){
  this$static.animating && (this$static.restarted = true);
  if (!this$static.demo && (this$static.move.length == 0 || this$static.move[this$static.curMove].length == 0))
    return;
  if (this$static.demo && (this$static.demoMove.length == 0 || this$static.demoMove[0].length == 0))
    return;
  this$static.moveDir = 1;
  this$static.moveOne = false;
  this$static.moveAnimated = true;
  switch (mode) {
    case 1:
      this$static.moveDir = -1;
      break;
    case 2:
      this$static.moveOne = true;
      break;
    case 3:
      this$static.moveDir = -1;
      this$static.moveOne = true;
      break;
    case 4:
      this$static.moveAnimated = false;
  }
  $run(this$static, this$static.jobNumber++, this$static.moveDir);
}

function $strInt(s){
  var i;
  for (i = 0; i < s.length; i++) {
    checkCriticalStringElementIndex(i, s.length);
    if (s.charCodeAt(i) < 48 || (checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i) > 57))
      break;
  }
  return __parseAndValidateInt(s.substr(0, i), 10);
}

function $superTwist(this$static, b, inc, face_0){
  var i, n;
  for (i = b , n = 0; n < 4; i += inc , n++)
    this$static.scube[face_0][i] = (this$static.scube[face_0][i] + 2) % 4;
}

function $superTwist2(this$static, ix, tw){
  var i, j, n, v;
  for (i = 0; i < 4; i++) {
    v = this$static.superTwistArr[ix][i];
    for (j = v[0] , n = 0; n < 4; j += v[1] , n++)
      this$static.scube[v[2]][j] = (this$static.scube[v[2]][j] + tw) % 4;
  }
}

function $turnLength(this$static, turn){
  var mode, modifier, n;
  if (turn < 0 || turn >= $intern_8)
    return 0;
  modifier = turn % 4;
  mode = (turn / 4 | 0) % 7;
  n = 1;
  switch (this$static.metric) {
    case 1:
      (modifier == 1 || modifier == 3) && (n *= 2);
    case 2:
      (mode == 1 || mode > 3) && (n *= 2);
    case 3:
      mode == 3 && (n = 0);
      this$static.metric == 3 && (mode == 4 || mode == 5) && (n *= 2);
  }
  return n;
}

function $turnText(this$static, move, pos){
  var s;
  if (pos >= move.length)
    return '';
  if (move[pos] >= $intern_8)
    return '';
  if (move[pos] == -1)
    return '.';
  s = turnSymbol[this$static.moveText - 1][(move[pos] / 4 | 0) % 7][move[pos] / 28 | 0];
  checkCriticalStringElementIndex(0, s.length);
  if (s.charCodeAt(0) == 126)
    return s.substr(1) + ('' + modifierStrings[(move[pos] + 2) % 4]);
  return s + ('' + modifierStrings[move[pos] % 4]);
}

function $twistLayer(this$static, cube, layer, num, middle){
  $twistLayer2(this$static, cube, layer, num, middle);
  if (superCube && num > 0 && num < 4) {
    $twistLayer2(this$static, this$static.scube, layer, num, middle);
    $twistSuperLayer(this$static, layer, num, middle);
  }
}

function $twistLayer2(this$static, cube, layer, num, middle){
  var a, b, i, j, mv, n, opp, tmp;
  i = 0;
  n = 8;
  opp = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_3, 5, 15, [0, 3, 2, 1]);
  mv = layer;
  if (middle) {
    mv = 6 + (layer / 2 | 0);
    if (layer % 2 == 1) {
      i = 4;
      num = opp[num];
    }
     else 
      n = 4;
  }
  if (num == 1) {
    for (; i < n; i++) {
      a = this$static.twistArray[mv][i][0];
      tmp = cube[a[0]][a[1]];
      for (j = 2; j >= 0; j--) {
        b = this$static.twistArray[mv][i][j + 1];
        cube[a[0]][a[1]] = cube[b[0]][b[1]];
        a = b;
      }
      cube[a[0]][a[1]] = tmp;
    }
  }
  if (num == 2) {
    for (; i < n; i++) {
      a = this$static.twistArray[mv][i][0];
      b = this$static.twistArray[mv][i][2];
      tmp = cube[a[0]][a[1]];
      cube[a[0]][a[1]] = cube[b[0]][b[1]];
      cube[b[0]][b[1]] = tmp;
      a = this$static.twistArray[mv][i][1];
      b = this$static.twistArray[mv][i][3];
      tmp = cube[a[0]][a[1]];
      cube[a[0]][a[1]] = cube[b[0]][b[1]];
      cube[b[0]][b[1]] = tmp;
    }
  }
  if (num == 3) {
    for (; i < n; i++) {
      a = this$static.twistArray[mv][i][0];
      tmp = cube[a[0]][a[1]];
      for (j = 0; j < 3; j++) {
        b = this$static.twistArray[mv][i][j + 1];
        cube[a[0]][a[1]] = cube[b[0]][b[1]];
        a = b;
      }
      cube[a[0]][a[1]] = tmp;
    }
  }
}

function $twistLayers(this$static, cube, layer, num, mode){
  switch (mode) {
    case 3:
      $twistLayer(this$static, cube, layer, 4 - num, false);
      $twistLayer(this$static, cube, layer, 4 - num, true);
      $twistLayer(this$static, cube, layer ^ 1, num, true);
      $twistLayer(this$static, cube, layer ^ 1, num, false);
      break;
    case 2:
      $twistLayer(this$static, cube, layer, 4 - num, false);
    case 1:
      $twistLayer(this$static, cube, layer, 4 - num, true);
      break;
    case 6:
      $twistLayer(this$static, cube, layer, 4 - num, true);
      $twistLayer(this$static, cube, layer ^ 1, num, true);
      break;
    case 5:
      $twistLayer(this$static, cube, layer ^ 1, 4 - num, false);
      $twistLayer(this$static, cube, layer, 4 - num, false);
      break;
    case 4:
      $twistLayer(this$static, cube, layer ^ 1, num, false);
    default:$twistLayer(this$static, cube, layer, 4 - num, false);
  }
}

function $twistSuperLayer(this$static, layer, num, middle){
  var i;
  if (!middle)
    for (i = 0; i < 16; i++)
      this$static.scube[layer][i] = (this$static.scube[layer][i] + 4 - num) % 4;
  if (layer == 4) {
    if (!middle) {
      $superTwist(this$static, 12, 1, 3);
      num == 1?$superTwist(this$static, 0, 1, 1):num == 2?$superTwist(this$static, 0, 1, 2):num == 3 && $superTwist(this$static, 0, 4, 0);
    }
    if (middle) {
      $superTwist(this$static, 8, 1, 3);
      num == 1?$superTwist(this$static, 4, 1, 1):num == 2?$superTwist(this$static, 4, 1, 2):num == 3 && $superTwist(this$static, 1, 4, 0);
    }
  }
  if (layer == 5) {
    if (!middle) {
      $superTwist(this$static, 0, 1, 3);
      num == 1?$superTwist(this$static, 3, 4, 0):num == 2?$superTwist(this$static, 12, 1, 2):num == 3 && $superTwist(this$static, 12, 1, 1);
    }
    if (middle) {
      $superTwist(this$static, 4, 1, 3);
      num == 1?$superTwist(this$static, 2, 4, 0):num == 2?$superTwist(this$static, 8, 1, 2):num == 3 && $superTwist(this$static, 8, 1, 1);
    }
  }
  if (!middle) {
    layer == 2 && $superTwist2(this$static, 0, 4 - num);
    layer == 3 && $superTwist2(this$static, 1, num);
  }
  if (middle) {
    layer == 2 && $superTwist2(this$static, 2, 4 - num);
    layer == 3 && $superTwist2(this$static, 3, num);
  }
}

function $validateColor(s){
  var i, j, n;
  n = 0;
  for (i = 0; i < 6; i++) {
    for (j = 0; j < 16; j++) {
      if ($charAt(String.fromCharCode((checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i))).toLowerCase(), 0) == (checkCriticalStringElementIndex(j, '0123456789abcdef'.length) , '0123456789abcdef'.charCodeAt(j))) {
        ++n;
        break;
      }
    }
  }
  if (n == 6)
    return true;
  return false;
}

function AnimCube4(){
  $clinit_AnimCube4();
  $$init(this);
}

function arrayMovePos(move, realPos){
  var pos, rpos;
  pos = 0;
  rpos = 0;
  while (true) {
    while (pos < move.length && move[pos] >= $intern_8)
      ++pos;
    if (rpos == realPos)
      break;
    if (pos < move.length) {
      ++rpos;
      ++pos;
    }
  }
  return pos;
}

function drawRect(){
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod('white');
  null.$_nullMethod();
  null.$_nullMethod('black');
  null.$_nullMethod();
}

function randMoves(n){
  var face_0, i, prev, prev2, r1, r2, r3, randmoves, slice_0, twist;
  face_0 = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), {3:1}, 5, 15, [82, 76, 70, 66, 85, 68]);
  slice_0 = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), {3:1}, 5, 15, [32, 109, 110]);
  twist = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), {3:1}, 5, 15, [32, 50, 39]);
  r1 = -1;
  prev = -1;
  prev2 = -1;
  randmoves = '';
  n == 0 && (n = 40);
  for (i = 0; i < n; i++) {
    while (r1 == prev || (r1 / 2 | 0) == (prev / 2 | 0) && r1 == prev2)
      r1 = round_int($wnd.Math.random() * 6);
    prev2 = prev;
    prev = r1;
    r2 = round_int($wnd.Math.random() * 3);
    r3 = round_int($wnd.Math.random() * 2);
    randmoves += '' + String.fromCharCode(face_0[r1]) + String.fromCharCode(slice_0[r3]) + String.fromCharCode(twist[r2]) + ' ';
  }
  return randmoves;
}

function realMoveLength(move){
  var i, length_0;
  length_0 = 0;
  for (i = 0; i < move.length; i++)
    move[i] < $intern_8 && ++length_0;
  return length_0;
}

function realMovePos(move, pos){
  var i, rpos;
  rpos = 0;
  for (i = 0; i < pos; i++)
    move[i] < $intern_8 && ++rpos;
  return rpos;
}

function vAdd(vector, srcVec){
  vector[0] += srcVec[0];
  vector[1] += srcVec[1];
  vector[2] += srcVec[2];
  return vector;
}

function vCopy(vector, srcVec){
  vector[0] = srcVec[0];
  vector[1] = srcVec[1];
  vector[2] = srcVec[2];
  return vector;
}

function vMul(vector, vec1, vec2){
  vector[0] = vec1[1] * vec2[2] - vec1[2] * vec2[1];
  vector[1] = vec1[2] * vec2[0] - vec1[0] * vec2[2];
  vector[2] = vec1[0] * vec2[1] - vec1[1] * vec2[0];
  return vector;
}

function vNorm(vector){
  var length_0;
  length_0 = $wnd.Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1] + vector[2] * vector[2]);
  vector[0] /= length_0;
  vector[1] /= length_0;
  vector[2] /= length_0;
  return vector;
}

function vProd(vec1, vec2){
  return vec1[0] * vec2[0] + vec1[1] * vec2[1] + vec1[2] * vec2[2];
}

function vRotX(vector, angle){
  var cosA, sinA, y_0, z_0;
  sinA = $wnd.Math.sin(angle);
  cosA = $wnd.Math.cos(angle);
  y_0 = vector[1] * cosA - vector[2] * sinA;
  z_0 = vector[1] * sinA + vector[2] * cosA;
  vector[1] = y_0;
  vector[2] = z_0;
  return vector;
}

function vRotY(vector, angle){
  var cosA, sinA, x_0, z_0;
  sinA = $wnd.Math.sin(angle);
  cosA = $wnd.Math.cos(angle);
  x_0 = vector[0] * cosA - vector[2] * sinA;
  z_0 = vector[0] * sinA + vector[2] * cosA;
  vector[0] = x_0;
  vector[2] = z_0;
  return vector;
}

function vRotZ(vector, angle){
  var cosA, sinA, x_0, y_0;
  sinA = $wnd.Math.sin(angle);
  cosA = $wnd.Math.cos(angle);
  x_0 = vector[0] * cosA - vector[1] * sinA;
  y_0 = vector[0] * sinA + vector[1] * cosA;
  vector[0] = x_0;
  vector[1] = y_0;
  return vector;
}

function vScale(vector, value_0){
  vector[0] *= value_0;
  vector[1] *= value_0;
  vector[2] *= value_0;
  return vector;
}

function vSub(vector, srcVec){
  vector[0] -= srcVec[0];
  vector[1] -= srcVec[1];
  vector[2] -= srcVec[2];
  return vector;
}

defineClass(89, 1, {}, AnimCube4);
_.align_0 = 0;
_.animating = false;
_.buttonBar = 0;
_.buttonHeight = 0;
_.buttonPressed = -1;
_.clickProgress = false;
_.curInfoText = 0;
_.curMove = 0;
_.currentAngle = 0;
_.demo = false;
_.doubleSpeed = 0;
_.dragAreas = 0;
_.dragX = 0;
_.dragY = 0;
_.dragging = false;
_.drawButtons = true;
_.editable = false;
_.faceShift = 0;
_.height = 0;
_.hint = false;
_.interrupted = false;
_.jobNumber = 0;
_.lastDragX = 0;
_.lastDragY = 0;
_.lastX = 0;
_.lastY = 0;
_.metric = 0;
_.mirrored = false;
_.mouseIsDown = false;
_.moveAnimated = false;
_.moveDir = 0;
_.moveOne = false;
_.movePos = 0;
_.moveText = 0;
_.natural = true;
_.nowServing = 0;
_.originalAngle = 0;
_.outlined = true;
_.persp = 0;
_.progressHeight = 0;
_.pushed = false;
_.repeatable = false;
_.restarted = false;
_.scale = 0;
_.skipMouseDown = false;
_.speed = 0;
_.spinning = false;
_.textHeight = 0;
_.toTwist = false;
_.touchEvent = false;
_.twistedLayer = 0;
_.twistedMode = 0;
_.twisting = false;
_.width_0 = 0;
var adjacentFaces, areaDirs, border, borderWidth = 0, botBlockFaceDim, buttonAction, cornerCoords, cubeBlocks, cubeDivName = 'cube4', dpr = 0, dragBlocks, faceCorners, faceNormals, faceTwistDirs, factors, firstTime = true, isGecko = false, metricChar, midBlockFaceDim, midBlockFaceDim2, midBlockTable, modeChar, modifierStrings, moveCodes, moveModes, oppositeCorners, posFaceTransform, posFaceletTransform, randMoveCount = 0, rotCos, rotSign, rotSin, rotVec, scramble = 0, scrambleToggle = false, scw = 0, snap = false, superCube = false, textOffset, textOffsetInit, topBlockFaceDim, topBlockTable, turnSymbol, twistDirs, ubuttonHeight = 0, uprogressHeight = 0, utextHeight = 0, ww = false;
var Lcom_google_gwt_animcube4_client_AnimCube4_2_classLit = createForClass('com.google.gwt.animcube4.client', 'AnimCube4', 89);
function $onPreviewNativeEvent(this$static, event_0){
  var eventType;
  eventType = $eventGetTypeInt(event_0.nativeEvent.type);
  this$static.this$01.touchEvent = false;
  if (eventType == 2097152) {
    !this$static.this$01.cubeDiv && (event_0.nativeEvent.returnValue = false , undefined);
    this$static.this$01.touchEvent = true;
    this$static.this$01.mouseIsDown && $mouseMove(this$static.this$01, event_0);
  }
   else if (eventType == $intern_11) {
    !this$static.this$01.cubeDiv && (event_0.nativeEvent.returnValue = false , undefined);
    this$static.this$01.touchEvent = true;
    this$static.this$01.mouseIsDown = false;
    $mouseUp(this$static.this$01);
  }
   else if (eventType == 1048576) {
    !this$static.this$01.cubeDiv && (event_0.nativeEvent.returnValue = false , undefined);
    this$static.this$01.touchEvent = true;
    this$static.this$01.mouseIsDown = true;
    this$static.this$01.skipMouseDown = true;
    $mouseDown(this$static.this$01, event_0);
  }
   else if (eventType == 64) {
    event_0.nativeEvent.returnValue = false;
    this$static.this$01.mouseIsDown && $mouseMove(this$static.this$01, event_0);
  }
   else if (eventType == 8) {
    this$static.this$01.mouseIsDown = false;
    $mouseUp(this$static.this$01);
  }
   else if (eventType == 4) {
    if (this$static.this$01.skipMouseDown)
      this$static.this$01.skipMouseDown = false;
    else {
      ($clinit_AnimCube4() , isGecko) && !this$static.this$01.cubeDiv && (event_0.nativeEvent.returnValue = false , undefined);
      this$static.this$01.mouseIsDown = true;
      $mouseDown(this$static.this$01, event_0);
    }
  }
}

function AnimCube4$1(this$0){
  this.this$01 = this$0;
}

defineClass(92, 1, {58:1, 172:1}, AnimCube4$1);
var Lcom_google_gwt_animcube4_client_AnimCube4$1_2_classLit = createForClass('com.google.gwt.animcube4.client', 'AnimCube4/1', 92);
function $onResponseReceived(this$static, resp){
  var i, key, lines, pos, text_0, value_0;
  text_0 = resp.xmlHttpRequest.responseText;
  lines = $split(text_0, '\n', 0);
  for (i = 0; i < lines.length; i++) {
    pos = $indexOf(lines[i], fromCodePoint(61));
    if (pos > 0) {
      key = $trim(lines[i].substr(0, pos - 0));
      value_0 = $trim(lines[i].substr(pos + 1));
      $putStringValue(this$static.this$01.config, key, value_0);
    }
  }
  $init(this$static.this$01);
}

function AnimCube4$2(this$0){
  this.this$01 = this$0;
}

defineClass(93, 1, {}, AnimCube4$2);
var Lcom_google_gwt_animcube4_client_AnimCube4$2_2_classLit = createForClass('com.google.gwt.animcube4.client', 'AnimCube4/2', 93);
function AnimCube4$3(this$0, val$jobNum, val$dir){
  this.this$01 = this$0;
  this.val$jobNum2 = val$jobNum;
  this.val$dir3 = val$dir;
}

defineClass(94, 1, {}, AnimCube4$3);
_.execute_0 = function execute(){
  $run(this.this$01, this.val$jobNum2, this.val$dir3);
}
;
_.val$dir3 = 0;
_.val$jobNum2 = 0;
var Lcom_google_gwt_animcube4_client_AnimCube4$3_2_classLit = createForClass('com.google.gwt.animcube4.client', 'AnimCube4/3', 94);
function $execute(this$static){
  var clockwise, i, j, turnTime;
  if (this$static.outerLoopTop) {
    this$static.outerLoopTop = false;
    this$static.restart = false;
    if (this$static.this$01.repeatable) {
      if (this$static.val$moveDir2 > 0) {
        if (this$static.this$01.movePos >= this$static.mv.length) {
          this$static.this$01.movePos = 0;
          $initInfoText(this$static.this$01, this$static.mv);
        }
      }
       else {
        this$static.this$01.curInfoText = -1;
        this$static.this$01.movePos == 0 && (this$static.this$01.movePos = this$static.mv.length);
      }
    }
     else {
      if (this$static.val$moveDir2 > 0 && this$static.this$01.movePos >= this$static.mv.length || this$static.val$moveDir2 < 0 && this$static.this$01.movePos == 0) {
        this$static.this$01.restarted = false;
        this$static.this$01.animating = false;
        ++this$static.this$01.nowServing;
        this$static.this$01.drawButtons = true;
        $paint(this$static.this$01);
        return;
      }
    }
    this$static.this$01.animating = true;
    this$static.this$01.drawButtons = true;
  }
  if (this$static.innerLoopTop) {
    this$static.innerLoopTop = false;
    if (this$static.val$moveDir2 < 0) {
      this$static.cont = false;
      if (this$static.this$01.movePos == 0) {
        this$static.cont = true;
        this$static.outerLoopBot = true;
      }
       else 
        --this$static.this$01.movePos;
    }
    if (!this$static.cont) {
      this$static.spin = false;
      if (this$static.mv[this$static.this$01.movePos] == -1) {
        $paint(this$static.this$01);
        if (!this$static.this$01.moveOne) {
          this$static.sTime = ($clinit_System() , fromDouble_0(Date.now()));
          while (lt(sub_1(fromDouble_0(Date.now()), this$static.sTime), $intern_8))
          ;
        }
      }
       else 
        this$static.mv[this$static.this$01.movePos] >= $intern_8?(this$static.this$01.curInfoText = this$static.val$moveDir2 > 0?this$static.mv[this$static.this$01.movePos] - $intern_8:-1):(this$static.spin = true);
      if (this$static.spin) {
        this$static.num = this$static.mv[this$static.this$01.movePos] % 4 + 1;
        this$static.mode = (this$static.mv[this$static.this$01.movePos] / 4 | 0) % 7;
        clockwise = this$static.num < 3;
        this$static.num == 4 && (this$static.num = 2);
        if (this$static.val$moveDir2 < 0) {
          clockwise = !clockwise;
          this$static.num = 4 - this$static.num;
        }
        this$static.layer = this$static.mv[this$static.this$01.movePos] / 28 | 0;
        this$static.this$01.twisting = false;
        this$static.this$01.natural = true;
        this$static.this$01.spinning = true;
        this$static.this$01.originalAngle = 0;
        ($clinit_AnimCube4() , faceTwistDirs)[this$static.layer] > 0 && (clockwise = !clockwise);
        if (this$static.this$01.moveAnimated) {
          this$static.phit = 1.5707963267948966;
          this$static.phis = clockwise?1:-1;
          turnTime = 67 * this$static.this$01.speed;
          if (this$static.num == 2) {
            this$static.phit = $intern_10;
            turnTime = 67 * this$static.this$01.doubleSpeed;
          }
          this$static.this$01.twisting = true;
          this$static.this$01.twistedLayer = this$static.layer;
          this$static.this$01.twistedMode = this$static.mode;
          $splitCube(this$static.this$01, this$static.layer);
          this$static.sTime = ($clinit_System() , fromDouble_0(Date.now()));
          this$static.lTime = this$static.sTime;
          this$static.d = this$static.phis * this$static.phit / turnTime;
          this$static.this$01.currentAngle = 0;
        }
      }
       else 
        this$static.innerLoopBot = true;
    }
  }
  if (!this$static.cont) {
    if (this$static.spin) {
      if (this$static.this$01.moveAnimated) {
        if (this$static.this$01.currentAngle * this$static.phis < this$static.phit) {
          $paint(this$static.this$01);
          (this$static.this$01.interrupted || this$static.this$01.restarted) && (this$static.innerLoopBot = true);
          this$static.lTime = ($clinit_System() , fromDouble_0(Date.now()));
          this$static.this$01.currentAngle = this$static.d * toDouble_0(sub_1(this$static.lTime, this$static.sTime));
        }
         else {
          this$static.innerLoopBot = true;
          if (($clinit_AnimCube4() , ww) && !this$static.this$01.moveOne) {
            this$static.this$01.currentAngle -= this$static.phis * this$static.phit;
            $paint(this$static.this$01);
            if (this$static.this$01.movePos > 0 && this$static.this$01.movePos < this$static.mv.length - 1) {
              this$static.innerLoopBot = false;
              this$static.this$01.movePos += this$static.val$moveDir2;
              this$static.sTime = this$static.lTime;
              this$static.lTime = ($clinit_System() , fromDouble_0(Date.now()));
              this$static.this$01.currentAngle = this$static.d * toDouble_0(sub_1(this$static.lTime, this$static.sTime));
            }
          }
        }
      }
       else 
        this$static.innerLoopBot = true;
    }
    if (this$static.innerLoopBot) {
      this$static.innerLoopBot = false;
      this$static.innerLoopTop = true;
      if (this$static.spin) {
        this$static.this$01.currentAngle = 0;
        this$static.this$01.twisting = false;
        this$static.this$01.natural = true;
        $twistLayers(this$static.this$01, this$static.this$01.cube, this$static.layer, this$static.num, this$static.mode);
        this$static.this$01.spinning = false;
        this$static.this$01.moveAnimated && $paint(this$static.this$01);
        this$static.this$01.moveOne && (this$static.restart = true);
      }
      if (this$static.val$moveDir2 > 0) {
        ++this$static.this$01.movePos;
        if (this$static.this$01.movePos < this$static.mv.length && this$static.mv[this$static.this$01.movePos] >= $intern_8) {
          this$static.this$01.curInfoText = this$static.mv[this$static.this$01.movePos] - $intern_8;
          ++this$static.this$01.movePos;
        }
        if (this$static.this$01.movePos == this$static.mv.length) {
          if (this$static.this$01.demo) {
            this$static.this$01.movePos = 0;
            $initInfoText(this$static.this$01, this$static.mv);
            for (i = 0; i < 6; i++)
              for (j = 0; j < 16; j++) {
                this$static.this$01.cube[i][j] = this$static.this$01.initialCube[i][j];
                this$static.this$01.scube[i][j] = this$static.this$01.initialSCube[i][j];
              }
          }
           else {
            this$static.outerLoopBot = true;
          }
        }
      }
       else 
        this$static.this$01.curInfoText = -1;
      (this$static.this$01.interrupted || this$static.this$01.restarted || this$static.restart) && (this$static.outerLoopBot = true);
    }
  }
  if (this$static.outerLoopBot) {
    this$static.outerLoopBot = false;
    this$static.outerLoopTop = true;
    this$static.this$01.jobNumber <= this$static.this$01.nowServing + 1 && (this$static.this$01.animating = false);
    this$static.this$01.drawButtons = true;
    this$static.this$01.buttonPressed == 0 && $clear(this$static.this$01);
    $paint(this$static.this$01);
    if (this$static.this$01.demo) {
      $clear(this$static.this$01);
      this$static.this$01.demo = false;
    }
    this$static.this$01.restarted = false;
    ++this$static.this$01.nowServing;
    return;
  }
  (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(this$static, null);
}

function AnimCube4$4(this$0, val$moveDir){
  this.this$01 = this$0;
  this.val$moveDir2 = val$moveDir;
  this.mv = this.this$01.demo?this.this$01.demoMove[0]:this.this$01.move[this.this$01.curMove];
}

defineClass(95, 1, {}, AnimCube4$4);
_.execute = function execute_0(timestamp){
  $execute(this);
}
;
_.cont = false;
_.d = 0;
_.innerLoopBot = false;
_.innerLoopTop = true;
_.lTime = 0;
_.layer = 0;
_.mode = 0;
_.num = 0;
_.outerLoopBot = false;
_.outerLoopTop = true;
_.phis = 0;
_.phit = 0;
_.restart = false;
_.sTime = 0;
_.spin = false;
_.val$moveDir2 = 0;
var Lcom_google_gwt_animcube4_client_AnimCube4$4_2_classLit = createForClass('com.google.gwt.animcube4.client', 'AnimCube4/4', 95);
function AnimCube4$5(this$0, val$jobNum){
  this.this$01 = this$0;
  this.val$jobNum2 = val$jobNum;
}

defineClass(96, 1, {}, AnimCube4$5);
_.execute_0 = function execute_1(){
  $progress(this.this$01, this.val$jobNum2);
}
;
_.val$jobNum2 = 0;
var Lcom_google_gwt_animcube4_client_AnimCube4$5_2_classLit = createForClass('com.google.gwt.animcube4.client', 'AnimCube4/5', 96);
function AnimCube4$6(){
}

defineClass(97, 1, {176:1, 58:1}, AnimCube4$6);
var Lcom_google_gwt_animcube4_client_AnimCube4$6_2_classLit = createForClass('com.google.gwt.animcube4.client', 'AnimCube4/6', 97);
function AnimCube4$7(this$0){
  this.this$01 = this$0;
  this.resizeTimer = new AnimCube4$7$1(this);
}

defineClass(98, 1, {177:1, 58:1}, AnimCube4$7);
var Lcom_google_gwt_animcube4_client_AnimCube4$7_2_classLit = createForClass('com.google.gwt.animcube4.client', 'AnimCube4/7', 98);
function AnimCube4$7$1(this$1){
  this.this$11 = this$1;
  Timer.call(this);
}

defineClass(99, 57, {}, AnimCube4$7$1);
_.run = function run_0(){
  $scaleCanvas(this.this$11.this$01);
  this.this$11.this$01.height != 0 && this.this$11.this$01.width_0 != 0 && $paint(this.this$11.this$01);
}
;
var Lcom_google_gwt_animcube4_client_AnimCube4$7$1_2_classLit = createForClass('com.google.gwt.animcube4.client', 'AnimCube4/7/1', 99);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function $devicePixelRatio(){
  if (typeof devicePixelRatio !== 'undefined')
    return devicePixelRatio;
  return 1;
}

defineClass(29, 1, {46:1, 29:1});
_.toString_0 = function toString_1(){
  if (!this.element) {
    return '(null handle)';
  }
  return this.element.outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 29);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = $eventGetTypeInt(type_0.name_0);
  typeInt == -1?null:this$static.eventsToSink == -1?sinkEvents(this$static.element, typeInt | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent(this$static, event_0){
  !!this$static.handlerManager && $fireEvent_0(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw toJs(new IllegalStateException("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this$static.attached = true;
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw toJs(new IllegalStateException("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
    this$static.doDetachChildren();
  }
   finally {
    this$static.element.__listener = null;
    this$static.attached = false;
  }
}

defineClass(25, 29, $intern_12);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  var related;
  switch ($eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget || (event_0.type == 'mouseout'?event_0.toElement:event_0.fromElement);
      if (!!related && isOrHasChildImpl(this.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this, this.element);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 25);
var detector;
defineClass(196, 1, {});
var Lcom_google_gwt_canvas_client_Canvas$CanvasElementSupportDetector_2_classLit = createForClass('com.google.gwt.canvas.client', 'Canvas/CanvasElementSupportDetector', 196);
function Canvas$CanvasElementSupportDetectedNo(){
}

defineClass(67, 196, {}, Canvas$CanvasElementSupportDetectedNo);
var Lcom_google_gwt_canvas_client_Canvas$CanvasElementSupportDetectedNo_2_classLit = createForClass('com.google.gwt.canvas.client', 'Canvas/CanvasElementSupportDetectedNo', 67);
function Duration(){
  this.start_0 = now_1();
}

defineClass(83, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 83);
function $$init_0(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_0, 24, 0, 0, 1);
}

function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception);
  checkCriticalArgument(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_0, 10, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $fillInStackTrace(this$static){
  if (this$static.writetableStackTrace) {
    this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

function $initCause(this$static, cause){
  checkCriticalState(!this$static.cause);
  checkCriticalArgument(true, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $printStackTraceImpl(this$static, out, ident){
  var t, t$array, t$index, t$max, theCause;
  $printStackTraceItems(this$static);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_0, 10, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, '\t' + ident);
  }
  theCause = this$static.cause;
  !!theCause && $printStackTraceImpl(theCause, out, ident);
}

function $printStackTraceItems(this$static){
  var element$array, element$index, element$max, stackTrace;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(this$static) , dropInternalFrames(stackTrace))) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index)
  ;
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function Throwable(message, cause){
  $$init_0(this);
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

defineClass(10, 1, $intern_13);
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_2(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 10);
function Exception(message){
  $$init_0(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(31, 10, $intern_13);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 31);
function RuntimeException(){
  $$init_0(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(18, 31, $intern_13);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 18);
defineClass(61, 18, $intern_13);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 61);
defineClass(105, 61, $intern_13);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 105);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  $$init_0(this);
  $fillInStackTrace(this);
  this.backingJsObject = e;
  e != null && setPropertySafe(e, '__java$exception', this);
  this.detailMessage = e == null?'null':toString_7(e);
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(27, 105, {27:1, 3:1, 10:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 27);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(170, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 170);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function reportToBrowser(e){
  $clinit_Impl();
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_1()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && (newTasks[newTasks.length] = tasks[i] , undefined);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function SchedulerImpl(){
}

function execute_2(cmd){
  return cmd.execute_1();
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_1() && (rescheduled = push_0(rescheduled, t)):t[0].execute_0();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        $clinit_Impl();
        reportToBrowser(instanceOf(e, 27)?castTo(e, 27).getThrown():e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_2)(cmd);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(126, 170, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 126);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(127, 1, {}, SchedulerImpl$Flusher);
_.execute_1 = function execute_3(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 127);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(128, 1, {}, SchedulerImpl$Rescuer);
_.execute_1 = function execute_4(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 128);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = $wnd.Math.min(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if ($equals(stackTrace[i].methodName, dropFrameUntilFnName) || $equals(stackTrace[i].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1);
      break;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector;
defineClass(189, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 189);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(106, 189, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t['fnStack']?t['fnStack']:[]);
  length_0 = stack_0.length;
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_0, 24, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 106);
function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (stString.length == 0) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals(toReturn.substr(0, 3), 'at ') && (toReturn = toReturn.substr(3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(toReturn.substr(index_0 + 1));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = toReturn.substr(index_0 + 1));
  (toReturn.length == 0 || $equals(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(location_0.substr(lastColonIndex + 1));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(190, 189, {});
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.backingJsObject , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_0, 24, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 190);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(107, 190, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 107);
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $getAbsoluteLeft(this$static){
  var doc, scrollingElement;
  return doc = this$static.ownerDocument , $getBoundingClientRectLeft(this$static) + $getScrollLeft((scrollingElement = $equals(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body , scrollingElement?scrollingElement:doc.documentElement));
}

function $getAbsoluteTop(this$static){
  var doc, scrollingElement;
  return doc = this$static.ownerDocument , $getBoundingClientRectTop(this$static) + (((scrollingElement = $equals(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body , scrollingElement?scrollingElement:doc.documentElement).scrollTop || 0) | 0);
}

function $createScriptElement(doc, source){
  var elem;
  elem = $createElement(doc);
  elem.text = source;
  return elem;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $createElement(doc){
  var container, elem;
  if ('script'.indexOf(':') != -1) {
    container = (!doc.__gwt_container && (doc.__gwt_container = doc.createElement('div')) , doc.__gwt_container);
    container.innerHTML = '<script/>';
    elem = $getFirstChildElement(container);
    container.removeChild(elem);
    return elem;
  }
  return doc.createElement('script');
}

function $getAttribute(elem, name_0){
  var attr = elem.getAttribute(name_0);
  return attr == null?'':attr + '';
}

function $getBoundingClientRectLeft(elem){
  try {
    return elem.getBoundingClientRect().left;
  }
   catch (e) {
    return 0;
  }
}

function $getBoundingClientRectTop(elem){
  try {
    return elem.getBoundingClientRect().top;
  }
   catch (e) {
    return 0;
  }
}

function isOrHasChildImpl(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

var currentEventTarget;
function $getScrollLeft(elem){
  if (elem.currentStyle.direction == 'rtl') {
    return -((elem.scrollLeft || 0) | 0);
  }
  return (elem.scrollLeft || 0) | 0;
}

function $getClientHeight(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

defineClass(22, 1, {3:1, 20:1, 22:1});
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_3(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 22);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  this.name_0 = enum$name;
  this.ordinal = enum$ordinal;
}

function values_0(){
  $clinit_Style$Unit();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_14, 17, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(17, 22, $intern_15);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 17, values_0);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(153, 17, $intern_15, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 153, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(154, 17, $intern_15, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 154, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(155, 17, $intern_15, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 155, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(156, 17, $intern_15, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 156, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(157, 17, $intern_15, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 157, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(158, 17, $intern_15, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 158, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(159, 17, $intern_15, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 159, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(160, 17, $intern_15, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 160, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(161, 17, $intern_15, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 161, null);
defineClass(174, 1, {});
_.toString_0 = function toString_4(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 174);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(173, 174, {});
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 173);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = castTo($unsafeGet(registered, nativeEvent.type), 23);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext_0();) {
        type_0 = castTo(type$iterator.next_0(), 64);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(202, 173, {});
_.getAssociatedType = function getAssociatedType(){
  return $clinit_ContextMenuEvent() , TYPE;
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 202);
function $clinit_ContextMenuEvent(){
  $clinit_ContextMenuEvent = emptyMethod;
  TYPE = new DomEvent$Type(new ContextMenuEvent);
}

function $dispatch(this$static){
  !!this$static.nativeEvent && (this$static.nativeEvent.returnValue = false , undefined);
  this$static.nativeEvent.cancelBubble = true;
}

function ContextMenuEvent(){
}

defineClass(147, 202, {}, ContextMenuEvent);
_.dispatch = function dispatch(handler){
  var lastArg;
  $dispatch((lastArg = this , castTo(handler, 176) , lastArg));
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ContextMenuEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ContextMenuEvent', 147);
defineClass(101, 1, {});
_.hashCode_0 = function hashCode_2(){
  return this.index_0;
}
;
_.toString_0 = function toString_5(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 101);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(39, 101, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 39);
function DomEvent$Type(flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = castTo(registered.map_0['contextmenu'], 23);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, types);
  }
  types.add_0(this);
  this.name_0 = 'contextmenu';
}

defineClass(64, 39, {64:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 64);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, value_0){
  this$static.map_0['contextmenu'] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(164, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 164);
function CloseEvent_0(){
}

function fire_0(source){
  var event_0;
  if (TYPE_0) {
    event_0 = new CloseEvent_0;
    $fireEvent_0(source, event_0);
  }
}

defineClass(167, 173, {}, CloseEvent_0);
_.dispatch = function dispatch_0(handler){
  castTo(handler, 204);
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_0(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 167);
function ResizeEvent(){
}

function fire_1(source){
  var event_0;
  if (TYPE_1) {
    event_0 = new ResizeEvent;
    $fireEvent_0(source, event_0);
  }
}

defineClass(152, 173, {}, ResizeEvent);
_.dispatch = function dispatch_1(handler){
  $schedule(castTo(handler, 177).resizeTimer, 250);
}
;
_.getAssociatedType = function getAssociatedType_1(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 152);
function $addHandler(this$static, type_0, handler){
  return $doAdd(this$static.eventBus, type_0, handler) , new LegacyHandlerWrapper;
}

function $fireEvent_0(this$static, event_0){
  var e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 35)) {
      e = $e0;
      throw toJs(new UmbrellaException_0(e.causes));
    }
     else 
      throw toJs($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager(source){
  HandlerManager_0.call(this, source, false);
}

function HandlerManager_0(source, fireInReverseOrder){
  this.eventBus = new HandlerManager$Bus(fireInReverseOrder);
  this.source = source;
}

defineClass(48, 1, {38:1}, HandlerManager, HandlerManager_0);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 48);
defineClass(197, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 197);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_2(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_0('Cannot add a handler with a null type'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):(l = $ensureHandlerList(this$static, type_0, null) , l.add_0(handler));
  return new SimpleEventBus$1;
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_0(handler);
}

function $doFire(this$static, event_0){
  var causes, directHandlers, e, handler, handlers, it;
  if (!event_0) {
    throw toJs(new NullPointerException_0('Cannot fire null event'));
  }
  try {
    ++this$static.firingDepth;
    handlers = (directHandlers = $getHandlerList(this$static, event_0.getAssociatedType()) , directHandlers);
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext_0()) {
      handler = this$static.isReverseOrder?it.previous():it.next_0();
      try {
        event_0.dispatch(castTo(handler, 58));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 10)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $put(causes.map_0, e, causes);
        }
         else 
          throw toJs($e0);
      }
    }
    if (causes) {
      throw toJs(new UmbrellaException(causes));
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get(this$static.map_0, type_0), 36);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put(this$static.map_0, type_0, sourceMap);
  }
  handlers = castTo(sourceMap.get_0(source), 23);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0){
  var handlers, sourceMap;
  sourceMap = castTo($get(this$static.map_0, type_0), 36);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = castTo(sourceMap.get_0(null), 23);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new ArrayList$1(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01.array.length;) {
        c = castTo($next_1(c$iterator), 203);
        $doAddNow(c.this$01, c.val$type2, c.val$source3, c.val$handler4);
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return $containsKey(this$static.map_0, eventKey);
}

defineClass(117, 197, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 117);
function HandlerManager$Bus(fireInReverseOrder){
  this.map_0 = new HashMap;
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(118, 117, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 118);
function LegacyHandlerWrapper(){
}

defineClass(163, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 163);
function UmbrellaException(causes){
  var cause, cause$iterator, i;
  RuntimeException_1.call(this, makeMessage(causes), causes.isEmpty()?null:castTo(causes.iterator().next_0(), 10));
  this.causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext_0();) {
    cause = castTo(cause$iterator.next_0(), 10);
    if (i++ == 0) {
      continue;
    }
    $addSuppressed(this, cause);
  }
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext_0();) {
    t = castTo(t$iterator.next_0(), 10);
    first?(first = false):(b.string += '; ' , b);
    $append_0(b, t.getMessage());
  }
  return b.string;
}

defineClass(35, 18, $intern_16, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 35);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(82, 35, $intern_16, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 82);
function $cancel_0(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new Request$RequestImplIE8And9$1(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static);
  new RequestTimeoutException(this$static.timeoutMillis);
  $wnd.alert('could not read config file');
}

function Request_0(xmlHttpRequest, timeoutMillis){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw toJs(new NullPointerException);
  }
  if (timeoutMillis < 0) {
    throw toJs(new IllegalArgumentException);
  }
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(122, 1, {}, Request_0);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 122);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(125, 57, {}, Request$1);
_.run = function run_1(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 125);
defineClass(198, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 198);
defineClass(123, 198, {});
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 123);
function Request$RequestImplIE8And9$1($anonymous0){
  this.xmlHttpRequest = $anonymous0;
}

defineClass(124, 123, {}, Request$RequestImplIE8And9$1);
var Lcom_google_gwt_http_client_Request$RequestImplIE8And9$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImplIE8And9/1', 124);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  GET = new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 27)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw toJs(requestPermissionException);
    }
     else 
      throw toJs($e0);
  }
  xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request_0(xmlHttpRequest, this$static.timeoutMillis);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send('');
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 27)) {
      e = $e1;
      throw toJs(new RequestException(e.getMessage()));
    }
     else 
      throw toJs($e1);
  }
  return request;
}

function $sendRequest(this$static, callback){
  throwIfNull('callback', callback);
  return $doSend(this$static, callback);
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(68, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var GET;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 68);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(121, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 121);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(43, 1, {}, RequestBuilder$Method);
_.toString_0 = function toString_6(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 43);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(26, 31, $intern_17, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 26);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(149, 26, $intern_17, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 149);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(169, 26, $intern_17, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 169);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw toJs(new IllegalArgumentException_0(name_0 + ' cannot be empty'));
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw toJs(new NullPointerException_0(name_0 + ' cannot be null'));
  }
}

function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === 'function';
    case 12:
      return value_0 != null && (typeof value_0 === 'object' || typeof value_0 == 'function');
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initMultidimensionalArray(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, count){
  return initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, 0, count);
}

function initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count){
  var elementTypeCategory, i, isLastDimension, length_0, result;
  length_0 = dimExprs[index_0];
  isLastDimension = index_0 == count - 1;
  elementTypeCategory = isLastDimension?leafElementTypeCategory:0;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  leafElementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, count - index_0), castableTypeMapExprs[index_0], elementTypeIds[index_0], elementTypeCategory, result);
  if (!isLastDimension) {
    ++index_0;
    for (i = 0; i < length_0; ++i) {
      result[i] = initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count);
    }
  }
  return result;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_18;
  a1 = value_0 >> 22 & $intern_18;
  a2 = value_0 < 0?$intern_19:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_11 + a.h * $intern_20;
}

function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result, neg0, neg1, neg2;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_20) {
    a2 = round_int(value_0 / $intern_20);
    value_0 -= a2 * $intern_20;
  }
  a1 = 0;
  if (value_0 >= $intern_11) {
    a1 = round_int(value_0 / $intern_11);
    value_0 -= a1 * $intern_11;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && (neg0 = ~result.l + 1 & $intern_18 , neg1 = ~result.m + (neg0 == 0?1:0) & $intern_18 , neg2 = ~result.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_19 , result.l = neg0 , result.m = neg1 , result.h = neg2 , undefined);
  return result;
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_18, sum1 & $intern_18, sum2 & $intern_19);
}

function toDouble(a){
  var neg0, neg1, neg2;
  if (compare(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper((neg0 = ~a.l + 1 & $intern_18 , neg1 = ~a.m + (neg0 == 0?1:0) & $intern_18 , neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_19 , create0(neg0, neg1, neg2)));
  }
  return a.l + a.m * $intern_11 + a.h * $intern_20;
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_18, $intern_18, 524287);
  MIN_VALUE = create0(0, 0, $intern_21);
  create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function toJava(e){
  var javaException;
  if (instanceOf(e, 10)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function compare_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_11;
  }
  if (a2 == $intern_19) {
    return big_0.l + big_0.m * $intern_11 - $intern_20;
  }
  return big_0;
}

function fromDouble_0(value_0){
  if ($intern_22 < value_0 && value_0 < $intern_20) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function lt(a, b){
  return compare_0(a, b) < 0;
}

function sub_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if ($intern_22 < result && result < $intern_20) {
      return result;
    }
  }
  return createLongEmul(sub_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_20;
    a3 = $intern_19;
  }
  a1 = round_int(value_0 / $intern_11);
  a0 = round_int(value_0 - a1 * $intern_11);
  return create0(a0, a1, a3);
}

function toDouble_0(a){
  var d;
  if (isSmallLong0(a)) {
    d = a;
    return d == -0.?0:d;
  }
  return toDouble(a);
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad(new AnimCube4);
}

function dispatchEvent_1(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function previewEvent(evt){
  var ret;
  ret = fire_2(handlers_0, evt);
  if (!ret && !!evt) {
    evt.cancelBubble = true;
    evt.returnValue = false;
  }
  return ret;
}

function resolve(maybePotential){
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function sinkEvents(elem, eventBits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad_0(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function addNativePreviewHandler(handler){
  $maybeInitializeEventSystem();
  !TYPE_2 && (TYPE_2 = new GwtEvent$Type);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_0(null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler(handlers_0, TYPE_2, handler);
}

var handlers_0;
function $dispatch_0(this$static, handler){
  $onPreviewNativeEvent(handler, this$static);
  singleton.isFirstHandler = false;
}

function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent(){
}

function fire_2(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_2 && !!handlers && $isEventHandled(handlers, TYPE_2)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    $setNativeEvent_0(singleton, nativeEvent);
    $fireEvent_0(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

defineClass(100, 173, {}, Event$NativePreviewEvent);
_.dispatch = function dispatch_2(handler){
  $dispatch_0(this, castTo(handler, 172));
}
;
_.getAssociatedType = function getAssociatedType_2(){
  return TYPE_2;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE_2, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 100);
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_0?TYPE_0:(TYPE_0 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_1 && (TYPE_1 = new GwtEvent$Type) , TYPE_1), handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initHandler('function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n', new WindowImplIE$1);
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initHandler("function __gwt_initWindowResizeHandler(resize) {\n  var wnd = window, oldOnResize = wnd.onresize;\n  \n  wnd.onresize = function(evt) {\n    try {\n      resize();\n    } finally {\n      oldOnResize && oldOnResize(evt);\n    }\n  };\n  \n  // Remove the reference once we've initialize the handler\n  wnd.__gwt_initWindowResizeHandler = undefined;\n}\n", new WindowImplIE$2);
    resizeHandlersInitialized = true;
  }
}

function onClosed(){
  closeHandlersInitialized && fire_0((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_1 && $fireEvent_0(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_1((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
    }
  }
}

var closeHandlersInitialized = false, handlers_1, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_3 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(116, 173, {}, Window$ClosingEvent);
_.dispatch = function dispatch_3(handler){
  checkCriticalType(handler == null);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_3(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 116);
function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = queryString.substr(1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (key.length == 0) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull('encodedURLComponent', val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (!instanceOf($e0, 27))
          throw toJs($e0);
      }
      values = castTo(out.get_0(key), 23);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_0(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_0(), 21);
    entry.setValue(unmodifiableList(castTo(entry.getValue(), 23)));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString, href_0, hashLoc, questionLoc;
  currentQueryString = (href_0 = $wnd.location.href , hashLoc = href_0.indexOf('#') , hashLoc >= 0 && (href_0 = href_0.substring(0, hashLoc)) , questionLoc = href_0.indexOf('?') , questionLoc > 0?href_0.substring(questionLoc):'');
  if (!listParamMap || !$equals(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

var cachedQueryString = '', listParamMap;
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(63, 48, {38:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 63);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_23;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_21;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_11;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return 16777216;
    case 'gesturechange':
      return 33554432;
    case 'gestureend':
      return 67108864;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener_0(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 47)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $initEventSystem(){
  $wnd.__gwt_globalEventArray == null && ($wnd.__gwt_globalEventArray = new Array);
  $wnd.__gwt_globalEventArray[$wnd.__gwt_globalEventArray.length] = $entry(function(){
    return previewEvent($wnd.event);
  }
  );
  var dispatchEvent_0 = $entry(function(){
    var oldEventTarget = currentEventTarget;
    currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!previewEventImpl()) {
        currentEventTarget = oldEventTarget;
        return;
      }
    }
    var getEventListener = getEventListener_0;
    var listener, curElem = this;
    while (curElem && !(listener = getEventListener(curElem))) {
      curElem = curElem.parentElement;
    }
    listener && dispatchEvent_1($wnd.event, curElem, listener);
    currentEventTarget = oldEventTarget;
  }
  );
  var dispatchDblClickEvent = $entry(function(){
    var newEvent = $doc.createEventObject();
    $wnd.event.returnValue == null && $wnd.event.srcElement.fireEvent && $wnd.event.srcElement.fireEvent('onclick', newEvent);
    if (this.__eventBits & 2) {
      dispatchEvent_0.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      previewEventImpl();
    }
  }
  );
  var dispatchUnhandledEvent = $entry(function(){
    this.__gwtLastUnhandledEvent = $wnd.event.type;
    dispatchEvent_0.call(this);
  }
  );
  var moduleName = ($clinit_Impl() , $moduleName).replace(/\./g, '_');
  $wnd['__gwt_dispatchEvent_' + moduleName] = dispatchEvent_0;
  callDispatchEvent = (new Function('w', 'return function() { w.__gwt_dispatchEvent_' + moduleName + '.call(this) }'))($wnd);
  $wnd['__gwt_dispatchDblClickEvent_' + moduleName] = dispatchDblClickEvent;
  callDispatchDblClickEvent = (new Function('w', 'return function() { w.__gwt_dispatchDblClickEvent_' + moduleName + '.call(this)}'))($wnd);
  $wnd['__gwt_dispatchUnhandledEvent_' + moduleName] = dispatchUnhandledEvent;
  callDispatchUnhandledEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(this)}'))($wnd);
  callDispatchOnLoadEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(w.event.srcElement)}'))($wnd);
  var bodyDispatcher = $entry(function(){
    dispatchEvent_0.call($doc.body);
  }
  );
  var bodyDblClickDispatcher = $entry(function(){
    dispatchDblClickEvent.call($doc.body);
  }
  );
  $doc.body.attachEvent('onclick', bodyDispatcher);
  $doc.body.attachEvent('onmousedown', bodyDispatcher);
  $doc.body.attachEvent('onmouseup', bodyDispatcher);
  $doc.body.attachEvent('onmousemove', bodyDispatcher);
  $doc.body.attachEvent('onmousewheel', bodyDispatcher);
  $doc.body.attachEvent('onkeydown', bodyDispatcher);
  $doc.body.attachEvent('onkeypress', bodyDispatcher);
  $doc.body.attachEvent('onkeyup', bodyDispatcher);
  $doc.body.attachEvent('onfocus', bodyDispatcher);
  $doc.body.attachEvent('onblur', bodyDispatcher);
  $doc.body.attachEvent('ondblclick', bodyDblClickDispatcher);
  $doc.body.attachEvent('oncontextmenu', bodyDispatcher);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?callDispatchEvent:null);
  chMask & 3 && (elem.ondblclick = bits & 3?callDispatchDblClickEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?callDispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?callDispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?callDispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?callDispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?callDispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?callDispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?callDispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?callDispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?callDispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?callDispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?callDispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?callDispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?callDispatchEvent:null);
  chMask & 32768 && (elem.nodeName == 'IFRAME'?bits & 32768?elem.attachEvent('onload', callDispatchOnLoadEvent):elem.detachEvent('onload', callDispatchOnLoadEvent):(elem.onload = bits & 32768?callDispatchUnhandledEvent:null));
  chMask & $intern_23 && (elem.onerror = bits & $intern_23?callDispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?callDispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?callDispatchEvent:null);
  chMask & $intern_21 && (elem.onpaste = bits & $intern_21?callDispatchEvent:null);
}

function previewEventImpl(){
  var isCancelled = false;
  for (var i = 0; i < $wnd.__gwt_globalEventArray.length; i++) {
    !$wnd.__gwt_globalEventArray[i]() && (isCancelled = true);
  }
  return !isCancelled;
}

var callDispatchDblClickEvent, callDispatchEvent, callDispatchOnLoadEvent, callDispatchUnhandledEvent;
function $initHandler(initFunc, cmd){
  var scriptElem;
  scriptElem = $createScriptElement($doc, initFunc);
  $appendChild($doc.body, scriptElem);
  cmd.execute_0();
  $removeChild($doc.body, scriptElem);
}

function WindowImplIE$1(){
}

defineClass(150, 1, {}, WindowImplIE$1);
_.execute_0 = function execute_5(){
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$1_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/1', 150);
function WindowImplIE$2(){
}

defineClass(151, 1, {}, WindowImplIE$2);
_.execute_0 = function execute_6(){
  $wnd.__gwt_initWindowResizeHandler($entry(onResize));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$2_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/2', 151);
defineClass(201, 25, $intern_12);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 201);
function $add(this$static, child, container){
  null.$_nullMethod();
  $add_1(this$static.children, child);
  $appendChild(container, resolve(null.$_nullField));
  null.$_nullMethod();
}

defineClass(139, 201, $intern_12);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 139);
function $add_0(this$static, w){
  $add(this$static, w, this$static.element);
}

defineClass(140, 139, $intern_12);
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 140);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext_0();) {
    w = castTo(w$iterator.next_0(), 25);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $put(caught.map_0, e, caught);
      }
       else 
        throw toJs($e0);
    }
  }
  if (caught) {
    throw toJs(new AttachDetachException(caught));
  }
}

defineClass(141, 82, $intern_16, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 141);
function AttachDetachException$1(){
}

defineClass(142, 1, {}, AttachDetachException$1);
_.execute_2 = function execute_7(w){
  $onAttach(w);
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 142);
function AttachDetachException$2(){
}

defineClass(143, 1, {}, AttachDetachException$2);
_.execute_2 = function execute_8(w){
  $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 143);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  this.children = new WidgetCollection;
  this.element = elem;
  $onAttach(this);
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_0(id_0){
  $clinit_RootPanel();
  var elem, rp;
  rp = castTo($getStringValue(rootPanels, id_0), 44);
  elem = null;
  if (id_0 != null) {
    if (!(elem = $getElementById($doc, id_0))) {
      return null;
    }
  }
  if (rp) {
    if (!elem || rp.element == elem) {
      return rp;
    }
  }
  $size(rootPanels) == 0 && addCloseHandler(new RootPanel$2);
  !elem?(rp = new RootPanel$DefaultRootPanel):(rp = new RootPanel(elem));
  $putStringValue(rootPanels, id_0, rp);
  $add_3(widgetsToDetach, rp);
  return rp;
}

defineClass(44, 140, $intern_24, RootPanel);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 44);
function RootPanel$1(){
}

defineClass(145, 1, {}, RootPanel$1);
_.execute_2 = function execute_9(w){
  w.attached && $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 145);
function RootPanel$2(){
}

defineClass(146, 1, {204:1, 58:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 146);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(144, 44, $intern_24, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 144);
function $add_1(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $insert(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_25, 25, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      newArray[i0] = this$static.array[i0];
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    this$static.array[i] = this$static.array[i - 1];
  }
  this$static.array[beforeIndex] = w;
}

function WidgetCollection(){
  this.array = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_25, 25, 4, 0, 1);
}

defineClass(162, 1, {}, WidgetCollection);
_.iterator = function iterator_1(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 162);
function $next(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw toJs(new NoSuchElementException);
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(86, 1, {}, WidgetCollection$WidgetIterator);
_.next_0 = function next(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.index_0 < this.this$01.size_0;
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 86);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('ie8', runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(53, 10, $intern_13);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 53);
defineClass(19, 53, $intern_13);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 19);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_7('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 10)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 10):null);
}

defineClass(90, 19, $intern_13, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 90);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function SimpleEventBus$1(){
}

defineClass(119, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 119);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(120, 1, {203:1}, SimpleEventBus$2);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 120);
defineClass(191, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 191);
defineClass(192, 191, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 192);
function PrintStream(){
}

defineClass(109, 192, {}, PrintStream);
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 109);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(104, 1, {91:1});
_.toString_0 = function toString_8(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 104);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(114, 18, $intern_13, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 114);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

booleanCastMap = {3:1, 20:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 187);
function digit(c, radix){
  if (radix < 2 || radix > 36) {
    return -1;
  }
  if (c >= 48 && c < 48 + $wnd.Math.min(radix, 10)) {
    return c - 48;
  }
  if (c >= 97 && c < radix + 97 - 10) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < radix + 65 - 10) {
    return c - 65 + 10;
  }
  return -1;
}

function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(102, 18, $intern_13, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 102);
function __parseAndValidateInt(s, radix){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException('null'));
  }
  if (radix < 2 || radix > 36) {
    throw toJs(new NumberFormatException('radix ' + radix + ' out of range'));
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 45 || (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 43))?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit((checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i)), radix) == -1) {
      throw toJs(new NumberFormatException('For input string: "' + s + '"'));
    }
  }
  toReturn = parseInt(s, radix);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > 2147483647) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(60, 1, {3:1, 60:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 60);
doubleCastMap = {3:1, 20:1, 60:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 188);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(40, 18, $intern_13, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 40);
function IllegalStateException(s){
  RuntimeException_0.call(this, s);
}

defineClass(62, 18, $intern_13, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 62);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(49, 18, $intern_13, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 49);
function Integer(value_0){
  this.value_0 = value_0;
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(32, 60, {3:1, 20:1, 32:1, 60:1}, Integer);
_.equals_0 = function equals_1(o){
  return instanceOf(o, 32) && castTo(o, 32).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_3(){
  return this.value_0;
}
;
_.toString_0 = function toString_10(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 32);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_14, 32, 256, 0, 1);
}

var boxedValues;
defineClass(233, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(33, 61, $intern_13, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 33);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(41, 40, $intern_13, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 41);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(24, 1, {3:1, 24:1}, StackTraceElement);
_.equals_0 = function equals_2(other){
  var st;
  if (instanceOf(other, 24)) {
    st = castTo(other, 24);
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className == st.className && this.fileName == st.fileName;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_4(){
  return hashCode_10(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_25, 1, 5, [valueOf(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_11(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 24);
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

function $indexOf(this$static, str){
  return this$static.indexOf(str);
}

function $indexOf_0(this$static, str, startIndex){
  return this$static.indexOf(str, startIndex);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $split(this$static, regex, maxMatch){
  var compiled, count, lastNonEmpty, lastTrail, matchIndex, matchObj, out, trail;
  compiled = new RegExp(regex, 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_6, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      matchIndex = matchObj.index;
      out[count] = trail.substr(0, matchIndex);
      trail = $substring_0(trail, matchIndex + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty);
  }
  return out;
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && (checkCriticalStringElementIndex(start_0, this$static.length) , this$static.charCodeAt(start_0) <= 32)) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && (checkCriticalStringElementIndex(end - 1, this$static.length) , this$static.charCodeAt(end - 1) <= 32)) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_23) {
    hiSurrogate = 55296 + (codePoint - $intern_23 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - $intern_23 & 1023) & 65535;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

stringCastMap = {3:1, 91:1, 20:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $append(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function StringBuilder(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(72, 104, {91:1}, StringBuilder);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 72);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(108, 49, $intern_13, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 108);
function $clinit_System(){
  $clinit_System = emptyMethod;
  err = new PrintStream;
}

defineClass(237, 1, {});
var err;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(34, 18, $intern_13, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 34);
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

defineClass(194, 1, {});
_.add_0 = function add_0(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.toString_0 = function toString_12(){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    $add_4(joiner, e === this?'(this Collection)':e == null?'null':toString_7(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 194);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static)).this$01); iter.hasNext;) {
    entry = $next_0(iter);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_0(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_7(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(193, 1, {36:1});
_.equals_0 = function equals_3(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 36)) {
    return false;
  }
  otherMap = castTo(obj, 36);
  if (this.hashCodeMap.size_0 + this.stringMap.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_0(), 21);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_1(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode_0 = function hashCode_5(){
  return hashCode_11(new AbstractHashMap$EntrySet(this));
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.size_1 = function size_1(){
  return $size((new AbstractHashMap$EntrySet(this)).this$01);
}
;
_.toString_0 = function toString_13(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); entry$iterator.hasNext;) {
    entry = $next_0(entry$iterator);
    $add_4(joiner, $toString_0(this, entry.getKey()) + '=' + $toString_0(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 193);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $get(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_0(this$static.stringMap, key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_0(this$static.stringMap, key);
}

function $put(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0);
}

function $reset(this$static){
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  structureChanged(this$static);
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(110, 193, {36:1});
_.entrySet_0 = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_2(key){
  return $get(this, key);
}
;
_.put = function put_0(key, value_0){
  return $putStringValue(this, key, value_0);
}
;
_.size_1 = function size_2(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 110);
defineClass(195, 194, $intern_26);
_.equals_0 = function equals_4(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 37)) {
    return false;
  }
  other = castTo(o, 37);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_6(){
  return hashCode_11(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 195);
function $contains(this$static, o){
  if (instanceOf(o, 21)) {
    return $containsEntry(this$static.this$01, castTo(o, 21));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(28, 195, $intern_26, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_2(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 28);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next_0(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  rv = castTo(this$static.current.next_0(), 21);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.$modCount = this$0.$modCount;
}

defineClass(42, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_0 = function next_0(){
  return $next_0(this);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.hasNext;
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 42);
defineClass(199, 194, {23:1});
_.add_1 = function add_1(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_2(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_5(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 23)) {
    return false;
  }
  other = castTo(o, 23);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_7(){
  return hashCode_12(this);
}
;
_.iterator = function iterator_3(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 199);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(79, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_1(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_0 = function next_1(){
  checkCriticalElement(this.i < this.this$01_0.size_1());
  return this.this$01_0.get_1(this.i++);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 79);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(80, 79, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_1(--this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 80);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(113, 195, $intern_26, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_4(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_4(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 113);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(74, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_2(){
  return this.val$outerIter2.hasNext;
}
;
_.next_0 = function next_2(){
  var entry;
  entry = $next_0(this.val$outerIter2);
  return entry.getKey();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 74);
defineClass(111, 1, $intern_27);
_.equals_0 = function equals_6(other){
  var entry;
  if (!instanceOf(other, 21)) {
    return false;
  }
  entry = castTo(other, 21);
  return equals_12(this.key, entry.getKey()) && equals_12(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_8(){
  return hashCode_17(this.key) ^ hashCode_17(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString_0 = function toString_14(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 111);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(112, 111, $intern_27, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 112);
defineClass(200, 1, $intern_27);
_.equals_0 = function equals_7(other){
  var entry;
  if (!instanceOf(other, 21)) {
    return false;
  }
  entry = castTo(other, 21);
  return equals_12(this.val$entry2.value[0], entry.getKey()) && equals_12($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_9(){
  return hashCode_17(this.val$entry2.value[0]) ^ hashCode_17($getValue(this));
}
;
_.toString_0 = function toString_15(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 200);
function $add_2(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_12(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove(this$static, o){
  var i;
  i = $indexOf_1(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this$static.array.length);
  removeFrom(this$static.array, i);
  return true;
}

function $toArray(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_0(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_25, 1, 0, 5, 1);
}

defineClass(45, 199, $intern_28, ArrayList);
_.add_1 = function add_3(index_0, o){
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add_0 = function add_4(o){
  return $add_2(this, o);
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.get_1 = function get_3(index_0){
  return checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_5(){
  return new ArrayList$1(this);
}
;
_.size_1 = function size_5(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 45);
function $next_1(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(85, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_3(){
  return this.i < this.this$01.array.length;
}
;
_.next_0 = function next_3(){
  return $next_1(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 85);
function hashCode_10(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_11(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_12(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 88)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(129, 199, $intern_28, Collections$EmptyList);
_.contains_0 = function contains_3(object){
  return false;
}
;
_.get_1 = function get_4(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_6(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_6(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 129);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(130, 1, {}, Collections$EmptyListIterator);
_.hasNext_0 = function hasNext_4(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_0 = function next_4(){
  throw toJs(new NoSuchElementException);
}
;
_.previous = function previous_0(){
  throw toJs(new NoSuchElementException);
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 130);
defineClass(75, 1, {});
_.add_0 = function add_5(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.isEmpty = function isEmpty_1(){
  return this.coll.isEmpty();
}
;
_.iterator = function iterator_7(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.size_1 = function size_7(){
  return this.coll.size_1();
}
;
_.toString_0 = function toString_16(){
  return toString_7(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 75);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(77, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext_0 = function hasNext_5(){
  return this.it.hasNext_0();
}
;
_.next_0 = function next_5(){
  return this.it.next_0();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 77);
function Collections$UnmodifiableList(list){
  this.coll = list;
  this.list = list;
}

defineClass(76, 75, {23:1}, Collections$UnmodifiableList);
_.equals_0 = function equals_8(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.list, o);
}
;
_.get_1 = function get_5(index_0){
  return this.list.get_1(index_0);
}
;
_.hashCode_0 = function hashCode_13(){
  return hashCode__I__devirtual$(this.list);
}
;
_.isEmpty = function isEmpty_2(){
  return this.list.isEmpty();
}
;
_.listIterator = function listIterator_2(){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(0));
}
;
_.listIterator_0 = function listIterator_3(from){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(from));
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 76);
function Collections$UnmodifiableListIterator(lit){
  Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.lit = lit;
}

defineClass(78, 77, {}, Collections$UnmodifiableListIterator);
_.hasPrevious = function hasPrevious_1(){
  return this.lit.hasPrevious();
}
;
_.previous = function previous_1(){
  return this.lit.previous();
}
;
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableListIterator', 78);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(131, 1, {36:1}, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_0(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals_0 = function equals_9(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.map_0, o);
}
;
_.get_0 = function get_6(key){
  return this.map_0.get_0(key);
}
;
_.hashCode_0 = function hashCode_14(){
  return hashCode__I__devirtual$(this.map_0);
}
;
_.put = function put_1(key, value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.size_1 = function size_8(){
  return this.map_0.size_1();
}
;
_.toString_0 = function toString_17(){
  return toString_7(this.map_0);
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 131);
defineClass(132, 75, $intern_26);
_.equals_0 = function equals_10(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.coll, o);
}
;
_.hashCode_0 = function hashCode_15(){
  return hashCode__I__devirtual$(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 132);
function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  this.coll = s;
}

defineClass(133, 132, $intern_26, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator = function iterator_8(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 133);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(136, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.next_0 = function next_6(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(castTo(this.val$it2.next_0(), 21));
}
;
_.hasNext_0 = function hasNext_6(){
  return this.val$it2.hasNext_0();
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 136);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(134, 1, $intern_27, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals_0 = function equals_11(o){
  return this.entry.equals_0(o);
}
;
_.getKey = function getKey_0(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_0(){
  return this.entry.getValue();
}
;
_.hashCode_0 = function hashCode_16(){
  return this.entry.hashCode_0();
}
;
_.setValue = function setValue_0(value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.toString_0 = function toString_18(){
  return toString_7(this.entry);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 134);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(135, 76, {23:1, 88:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 135);
function checkStructuralChange(host, iterator){
  if (iterator.$modCount != host.$modCount) {
    throw toJs(new ConcurrentModificationException);
  }
}

function structureChanged(host){
  var modCount, modCountable;
  modCountable = host;
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(168, 18, $intern_13, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 168);
function $equals_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function HashMap(){
  $reset(this);
}

defineClass(30, 110, {3:1, 36:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 30);
function $add_3(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(65, 195, {3:1, 37:1}, HashSet);
_.add_0 = function add_6(o){
  return $add_3(this, o);
}
;
_.contains_0 = function contains_4(o){
  return $containsKey(this.map_0, o);
}
;
_.isEmpty = function isEmpty_3(){
  return $size(this.map_0) == 0;
}
;
_.iterator = function iterator_9(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_9(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 65);
function $findEntryInChain(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?new Array:chain;
}

function $getEntry(this$static, key){
  var hashCode;
  return $findEntryInChain(key, $getChainOrEmpty(this$static, key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0)));
}

function $put_0(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?new Array:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode0, chain0);
  }
   else {
    entry = $findEntryInChain(key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(148, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_10(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 148);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

defineClass(84, 1, {}, InternalHashCodeMap$1);
_.next_0 = function next_7(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_7(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 84);
function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_0(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_0(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(137, 1, {}, InternalStringMap);
_.iterator = function iterator_11(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 137);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(81, 1, {}, InternalStringMap$1);
_.next_0 = function next_8(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_8(){
  return !this.current.done;
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 81);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_0(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(138, 200, $intern_27, InternalStringMap$2);
_.getKey = function getKey_1(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_1(){
  return $getValue(this);
}
;
_.setValue = function setValue_1(object){
  return $put_1(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 138);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(50, 18, $intern_13, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 50);
function equals_12(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_17(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $add_4(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder(this$static.prefix)):$append_0(this$static.builder, this$static.delimiter);
  $append(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(73, 1, {}, StringJoiner);
_.toString_0 = function toString_19(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 73);
function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function removeFrom(array, index_0){
  array.splice(index_0, 1);
}

defineClass(235, 1, {});
function stampJavaTypeInfo_0(array, referenceType){
  return getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array) , array;
}

function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference){
  if (!reference) {
    throw toJs(new NullPointerException_0('Cannot suppress a null exception.'));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException("Can't overwrite cause"));
  }
}

function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

defineClass(232, 1, {});
function getHashCode(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = new Object_0;
  front = new Object_0;
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = (checkCriticalStringElementIndex(i + 3, str.length) , str.charCodeAt(i + 3) + (checkCriticalStringElementIndex(i + 2, str.length) , 31 * (str.charCodeAt(i + 2) + (checkCriticalStringElementIndex(i + 1, str.length) , 31 * (str.charCodeAt(i + 1) + (checkCriticalStringElementIndex(i, str.length) , 31 * (str.charCodeAt(i) + 31 * hashCode)))))));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (result != null) {
    return round_int((checkCriticalNotNull(result) , result));
  }
  result = back_0[key];
  hashCode = result == null?compute(str):round_int((checkCriticalNotNull(result) , result));
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = new Object_0;
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
var C_classLit = createForPrimitive('char', 'C');
var D_classLit = createForPrimitive('double', 'D');
var I_classLit = createForPrimitive('int', 'I');
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=animcube4-0.js

