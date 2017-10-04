var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.animcube;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = 'F60314C33BD4BB64DE90420106A87239';
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
var $intern_0 = {3:1, 6:1, 5:1}, $intern_1 = {8:1, 3:1}, $intern_2 = {7:1, 3:1, 6:1, 5:1}, $intern_3 = {4:1, 3:1}, $intern_4 = {3:1, 6:1, 14:1, 5:1, 13:1}, $intern_5 = {3:1, 6:1, 14:1, 55:1, 56:1, 5:1, 13:1, 54:1}, $intern_6 = {3:1, 6:1, 12:1, 11:1, 5:1, 10:1}, $intern_7 = {20:1, 3:1, 6:1, 14:1, 5:1, 13:1}, $intern_8 = 1000, $intern_9 = -0.2617993877991494, $intern_10 = 3.141592653589793, $intern_11 = 0.3333333333333333, $intern_12 = 2097152, $intern_13 = 4194304, $intern_14 = 1048576, $intern_15 = {37:1, 26:1, 29:1, 28:1, 38:1, 22:1, 19:1}, $intern_16 = {3:1, 9:1}, $intern_17 = {3:1, 6:1, 5:1, 152:1}, $intern_18 = {34:1, 3:1, 9:1}, $intern_19 = {24:1, 3:1, 9:1}, $intern_20 = 4194303, $intern_21 = 1048575, $intern_22 = 17592186044416, $intern_23 = -9223372036854775808, $intern_24 = {3:1, 5:1}, $intern_25 = 524288, $intern_26 = 65536, $intern_27 = 131072, $intern_28 = 16777216, $intern_29 = 33554432, $intern_30 = 67108864, $intern_31 = {37:1, 26:1, 29:1, 28:1, 38:1, 51:1, 22:1, 19:1}, $intern_32 = {36:1}, $intern_33 = {15:1}, $intern_34 = {3:1, 18:1, 53:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
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

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + toUnsignedRadixString(hashCode__I__devirtual$(this), 16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 183:1, 182:1, 2:1};
modernizeBrowser();
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

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
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
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
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
  prototype_0.___clazz$ = clazz;
}

defineClass(69, 1, {}, Class);
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
_.toString$ = function toString_7(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 69);
defineClass(157, 1, {});
var instance;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 157);
defineClass(57, 1, {57:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 57);
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

defineClass(65, 157, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame(callback, element){
  requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 65);
function AnimationSchedulerImplStandard$1(){
}

defineClass(147, 57, {57:1}, AnimationSchedulerImplStandard$1);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 147);
function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initDim(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {186:1, 3:1, 5:1}, 63, this$static.animationRequests.array.length, 0, 1);
  curAnimations = dynamicCast($toArray(this$static.animationRequests, curAnimations), 186);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_5(this$static.animationRequests, requestId);
    $execute(requestId.callback);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, max_0(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(66, 157, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(callback);
  $add_2(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 66);
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
    throw new IllegalArgumentException_0('must be non-negative');
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

defineClass(79, 1, {});
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
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 79);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(148, 79, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 148);
function AnimationSchedulerImplTimer$AnimationHandleImpl(callback){
  this.callback = callback;
}

defineClass(63, 57, {57:1, 63:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 63);
function $clinit_AnimCube(){
  $clinit_AnimCube = emptyMethod;
  faceNormals = initValues(getClassLiteralForArray(D_classLit, 2), $intern_0, 8, 0, [initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [0, -1, 0]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [0, 1, 0]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [0, 0, -1]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [0, 0, 1]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [-1, 0, 0]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [1, 0, 0])]);
  cornerCoords = initValues(getClassLiteralForArray(D_classLit, 2), $intern_0, 8, 0, [initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [-1, -1, -1]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [1, -1, -1]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [1, -1, 1]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [-1, -1, 1]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [-1, 1, -1]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [1, 1, -1]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [1, 1, 1]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [-1, 1, 1])]);
  faceCorners = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 2, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [4, 7, 6, 5]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 4, 5, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 6, 7, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3, 7, 4]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 5, 6, 2])]);
  oppositeCorners = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3, 2, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3, 2, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 2, 1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 2, 1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3, 2, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3, 2, 1])]);
  adjacentFaces = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 5, 3, 4]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [4, 3, 5, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [4, 1, 5, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [5, 1, 4, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3, 1, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 1, 3, 0])]);
  faceTwistDirs = initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 1, -1, -1, -1, -1]);
  posFaceTransform = initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 2, 0, 5, 1, 4]);
  posFaceletTransform = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [6, 3, 0, 7, 4, 1, 8, 5, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 5, 8, 1, 4, 7, 0, 3, 6]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 2, 3, 4, 5, 6, 7, 8]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 2, 3, 4, 5, 6, 7, 8]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [6, 3, 0, 7, 4, 1, 8, 5, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 2, 3, 4, 5, 6, 7, 8])]);
  moveModes = initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2]);
  moveCodes = initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 2, 3, 4, 5, 1, 2, 4, 5, 2, 0, 5, 2, 0, 0, 1, 2, 3, 4, 5]);
  modeChar = initValues(getClassLiteralForArray(C_classLit, 1), {3:1}, 0, 7, [109, 116, 99, 115, 97]);
  turnSymbol = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 3), $intern_4, 54, 0, [initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 2), $intern_5, 10, 0, [initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['U', 'D', 'F', 'B', 'L', 'R']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['Um', 'Dm', 'Fm', 'Bm', 'Lm', 'Rm']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['Ut', 'Dt', 'Ft', 'Bt', 'Lt', 'Rt']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['Uc', 'Dc', 'Fc', 'Bc', 'Lc', 'Rc']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['Us', 'Ds', 'Fs', 'Bs', 'Ls', 'Rs']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['Ua', 'Da', 'Fa', 'Ba', 'La', 'Ra'])]), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 2), $intern_5, 10, 0, [initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['U', 'D', 'F', 'B', 'L', 'R']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['~E', 'E', 'S', '~S', 'M', '~M']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['u', 'd', 'f', 'b', 'l', 'r']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['Z', '~Z', 'Y', '~Y', '~X', 'X']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['Us', 'Ds', 'Fs', 'Bs', 'Ls', 'Rs']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['Ua', 'Da', 'Fa', 'Ba', 'La', 'Ra'])]), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 2), $intern_5, 10, 0, [initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['U', 'D', 'F', 'B', 'L', 'R']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['~E', 'E', 'S', '~S', 'M', '~M']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['u', 'd', 'f', 'b', 'l', 'r']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['Y', '~Y', 'Z', '~Z', '~X', 'X']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['Us', 'Ds', 'Fs', 'Bs', 'Ls', 'Rs']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['Ua', 'Da', 'Fa', 'Ba', 'La', 'Ra'])]), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 2), $intern_5, 10, 0, [initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['U', 'D', 'F', 'B', 'L', 'R']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['u', 'd', 'f', 'b', 'l', 'r']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['Uu', 'Dd', 'Ff', 'Bb', 'Ll', 'Rr']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['QU', 'QD', 'QF', 'QB', 'QL', 'QR']), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ["UD'", "DU'", "FB'", "BF'", "LR'", "RL'"]), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['UD', 'DU', 'FB', 'BF', 'LR', 'RL'])])]);
  modifierStrings = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['', '2', "'", "2'"]);
  metricChar = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['', 'q', 'f', 's']);
  cubeBlocks = initValues(getClassLiteralForArray(I_classLit, 3), $intern_7, 7, 0, [initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3])])]);
  topBlockTable = initValues(getClassLiteralForArray(I_classLit, 3), $intern_7, 7, 0, [initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 3])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3])])]);
  midBlockTable = initValues(getClassLiteralForArray(I_classLit, 3), $intern_7, 7, 0, [initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 2])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3])])]);
  topBlockFaceDim = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 0, 3, 3, 2, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 5, 5, 4, 5]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 3, 1, 0, 3, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [4, 5, 0, 1, 5, 4]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 2, 2, 4, 1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [5, 4, 4, 2, 0, 1])]);
  midBlockFaceDim = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 2, 2, 1, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 2, 2, 1, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 2, 0, 0, 2, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 2, 0, 0, 2, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 1, 1, 1, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 1, 1, 1, 0, 0])]);
  botBlockFaceDim = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 5, 5, 4, 5]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 0, 3, 3, 2, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [4, 5, 0, 1, 5, 4]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 3, 1, 0, 3, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [5, 4, 4, 2, 0, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 2, 2, 4, 1, 0])]);
  cycleOrder = initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 2, 5, 8, 7, 6, 3]);
  cycleFactors = initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 3, -1, -3, 1, 3, -1, -3]);
  cycleOffsets = initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 2, 8, 6, 3, 1, 5, 7]);
  cycleLayerSides = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 3, 3, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 1, 1, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 3, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 1, 1, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 2, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 2, 0, 1])]);
  cycleCenters = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [7, 7, 7, 4]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [6, 5, 5, 5]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [7, 7, 4, 4]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [6, 5, 5, 6]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [7, 6, 4, 4]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [6, 6, 4, 5])]);
  dragBlocks = initValues(getClassLiteralForArray(I_classLit, 3), $intern_7, 7, 0, [initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 0])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 2])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 3])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 2])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 0])])]);
  areaDirs = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [-1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, -1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1])]);
  twistDirs = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 1, 1, 1, 1, -1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 1, 1, 1, 1, -1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, -1, 1, -1, 1, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, -1, 1, -1, -1, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [-1, 1, -1, 1, -1, -1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, -1, 1, -1, 1, 1])]);
  rotCos = initValues(getClassLiteralForArray(I_classLit, 3), $intern_7, 7, 0, [initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 1])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 0])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 1])])]);
  rotSin = initValues(getClassLiteralForArray(I_classLit, 3), $intern_7, 7, 0, [initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [-1, 0, 0])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [-1, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 0])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, -1, 0])])]);
  rotVec = initValues(getClassLiteralForArray(I_classLit, 3), $intern_7, 7, 0, [initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 0])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 1])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0, 0])])]);
  rotSign = initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, -1, 1, -1, 1, -1]);
  border = initValues(getClassLiteralForArray(D_classLit, 2), $intern_0, 8, 0, [initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [0.1, 0.1]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [0.9, 0.1]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [0.9, 0.9]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [0.1, 0.9])]);
  border_gabba = initValues(getClassLiteralForArray(D_classLit, 2), $intern_0, 8, 0, [initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [0.06, 0.06]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [0.94, 0.06]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [0.94, 0.94]), initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [0.06, 0.94])]);
  factors = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 0])]);
  textOffset = initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 1, -1, -1, -1, 1, 1, -1, -1, 0, 1, 0, 0, 1, 0, -1]);
  buttonAction = initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [-1, 3, 1, -1, 0, 2, 4, -1]);
}

function $$init(this$static){
  this$static.config = new HashMap;
  this$static.colors = initDim(Ljava_lang_String_2_classLit, $intern_6, 2, 24, 4, 1);
  this$static.cube = initDims(I_classLit, [$intern_2, $intern_3], [4, 0], 7, [6, 9], 2);
  this$static.scube = initDims(I_classLit, [$intern_2, $intern_3], [4, 0], 7, [6, 9], 2);
  this$static.initialSCube = initDims(I_classLit, [$intern_2, $intern_3], [4, 0], 7, [6, 9], 2);
  this$static.initialCube = initDims(I_classLit, [$intern_2, $intern_3], [4, 0], 7, [6, 9], 2);
  this$static.eye = initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [0, 0, -1]);
  this$static.eyeX = initValues(getClassLiteralForArray(D_classLit, 1), $intern_1, 0, 7, [1, 0, 0]);
  this$static.eyeY = initDim(D_classLit, $intern_1, 0, 3, 7, 1);
  this$static.initialEye = initDim(D_classLit, $intern_1, 0, 3, 7, 1);
  this$static.initialEyeX = initDim(D_classLit, $intern_1, 0, 3, 7, 1);
  this$static.initialEyeY = initDim(D_classLit, $intern_1, 0, 3, 7, 1);
  this$static.topBlocks = initDim(I_classLit, $intern_7, 7, 6, 0, 3);
  this$static.midBlocks = initDim(I_classLit, $intern_7, 7, 6, 0, 3);
  this$static.botBlocks = initDim(I_classLit, $intern_7, 7, 6, 0, 3);
  this$static.twistBuffer = initDim(I_classLit, $intern_3, 0, 12, 7, 1);
  this$static.superTwistArr = initValues(getClassLiteralForArray(I_classLit, 3), $intern_7, 7, 0, [initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 3, 4]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 5])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [6, 1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 3, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 3, 4]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [6, 1, 5])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 3, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 3, 4]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 1, 5])]), initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 3, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 3, 4]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 1, 5])])]);
  this$static.dragCornersX = initDims(I_classLit, [$intern_2, $intern_3], [4, 0], 7, [18, 4], 2);
  this$static.dragCornersY = initDims(I_classLit, [$intern_2, $intern_3], [4, 0], 7, [18, 4], 2);
  this$static.dragDirsX = initDim(D_classLit, $intern_1, 0, 18, 7, 1);
  this$static.dragDirsY = initDim(D_classLit, $intern_1, 0, 18, 7, 1);
  this$static.dragLayers = initDim(I_classLit, $intern_3, 0, 18, 7, 1);
  this$static.dragModes = initDim(I_classLit, $intern_3, 0, 18, 7, 1);
  this$static.tempEye = initDim(D_classLit, $intern_1, 0, 3, 7, 1);
  this$static.tempEyeX = initDim(D_classLit, $intern_1, 0, 3, 7, 1);
  this$static.tempEyeY = initDim(D_classLit, $intern_1, 0, 3, 7, 1);
  this$static.tempEye2 = initDim(D_classLit, $intern_1, 0, 3, 7, 1);
  this$static.tempEyeX2 = initDim(D_classLit, $intern_1, 0, 3, 7, 1);
  this$static.tempEyeY2 = initDim(D_classLit, $intern_1, 0, 3, 7, 1);
  this$static.perspEye = initDim(D_classLit, $intern_1, 0, 3, 7, 1);
  this$static.perspEyeI = initDim(D_classLit, $intern_1, 0, 3, 7, 1);
  this$static.perspNormal = initDim(D_classLit, $intern_1, 0, 3, 7, 1);
  this$static.eyeArray = initDim(D_classLit, $intern_0, 8, 3, 0, 2);
  this$static.eyeArrayX = initDim(D_classLit, $intern_0, 8, 3, 0, 2);
  this$static.eyeArrayY = initDim(D_classLit, $intern_0, 8, 3, 0, 2);
  this$static.eyeOrder = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 0, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 1, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 0, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 0, 2])]);
  this$static.blockArray = initDim(I_classLit, $intern_4, 20, 3, 0, 4);
  this$static.blockMode = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 2, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 1, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 2, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 2, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 2, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 2, 2])]);
  this$static.drawOrder = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 1, 0]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 2, 1])]);
  this$static.fillX = initDim(I_classLit, $intern_3, 0, 4, 7, 1);
  this$static.fillY = initDim(I_classLit, $intern_3, 0, 4, 7, 1);
  this$static.coordsX = initDim(D_classLit, $intern_1, 0, 8, 7, 1);
  this$static.coordsY = initDim(D_classLit, $intern_1, 0, 8, 7, 1);
  this$static.cooX = initDims(D_classLit, [$intern_0, $intern_1], [8, 0], 7, [6, 4], 2);
  this$static.cooY = initDims(D_classLit, [$intern_0, $intern_1], [8, 0], 7, [6, 4], 2);
  this$static.tempNormal = initDim(D_classLit, $intern_1, 0, 3, 7, 1);
  this$static.eyeD = initDim(D_classLit, $intern_1, 0, 3, 7, 1);
  this$static.nativePreviewHandler = new AnimCube$1(this$static);
  this$static.canv = createIfSupported();
  this$static.canv2 = createIfSupported();
}

function $brighter(s){
  var b, g, r;
  s.substr(0, 1) != '#' && (s = s == 'white'?'#FFFFFF':s == 'black'?'#000000':s == 'gray'?'#808080':'#808080');
  r = __parseAndValidateInt(s.substr(1, 2), 16);
  g = __parseAndValidateInt(s.substr(3, 2), 16);
  b = __parseAndValidateInt(s.substr(5, 2), 16);
  r = round_int(r * 1.3);
  g = round_int(g * 1.3);
  b = round_int(b * 1.3);
  return '#' + $lpad(toUnsignedRadixString(r > 255?255:r, 16)) + $lpad(toUnsignedRadixString(g > 255?255:g, 16)) + $lpad(toUnsignedRadixString(b > 255?255:b, 16));
}

function $clear(this$static){
  var i, i0, j;
  this$static.movePos = 0;
  this$static.move.length > 0 && $initInfoText(this$static, this$static.move[this$static.curMove]);
  this$static.natural = true;
  this$static.mirrored = false;
  for (i0 = 0; i0 < 6; i0++)
    for (j = 0; j < 9; j++) {
      this$static.cube[i0][j] = this$static.initialCube[i0][j];
      this$static.scube[i0][j] = this$static.initialSCube[i0][j];
    }
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
  return ~~((r * 299 + g * 587 + b * 114) / $intern_8);
}

function $darker(s){
  var b, g, r;
  s.substr(0, 1) != '#' && (s = s == 'white'?'#FFFFFF':s == 'black'?'#000000':s == 'gray'?'#808080':'#808080');
  r = __parseAndValidateInt(s.substr(1, 2), 16);
  g = __parseAndValidateInt(s.substr(3, 2), 16);
  b = __parseAndValidateInt(s.substr(5, 2), 16);
  r = round_int(r * 0.7);
  g = round_int(g * 0.7);
  b = round_int(b * 0.7);
  return '#' + $lpad(toUnsignedRadixString(r, 16)) + $lpad(toUnsignedRadixString(g, 16)) + $lpad(toUnsignedRadixString(b, 16));
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
      mode = ~~(move[position] / 4) % 6;
      modifier == 4 && (modifier = 2);
      reversed && (modifier = 4 - modifier);
      $twistLayers(this$static, cube, ~~(move[position] / 24), modifier, mode);
    }
    if (!reversed) {
      ++position;
      if (position >= start_0 + length_0)
        break;
    }
  }
}

function $drawArrow(g, x_0, y_0, dir_0){
  var fillX, fillY;
  fillX = initDim(I_classLit, $intern_3, 0, 5, 7, 1);
  fillY = initDim(I_classLit, $intern_3, 0, 5, 7, 1);
  fillX[0] = x_0;
  fillX[1] = x_0 + dir_0;
  fillX[2] = x_0 + 4 * dir_0;
  fillX[3] = x_0 + dir_0;
  fillX[4] = x_0;
  fillY[0] = y_0 - 3;
  fillY[1] = y_0 - 3;
  fillY[2] = y_0;
  fillY[3] = y_0 + 3;
  fillY[4] = y_0 + 3;
  $drawArrow2(g, fillX, fillY);
}

function $drawArrow2(g, x_0, y_0){
  var i;
  $beginPath(g);
  g.moveTo(x_0[0] + 0.5, y_0[0] + 0.5);
  for (i = 1; i < 5; i++) {
    g.lineTo(x_0[i] + 0.5, y_0[i] + 0.5);
  }
  $closePath(g);
  $setFillStyleWeb(g, 'white');
  $setStrokeStyleWeb(g, 'black');
  $fill(g);
  $setLineWidth(g, 1);
  $stroke(g);
}

function $drawButton(this$static, g, i, x_0, y_0){
  switch (i) {
    case 0:
      drawRect(g, x_0 - 4, y_0 - 3, 3, 7);
      $drawArrow(g, x_0 + 3, y_0, -1);
      break;
    case 1:
      drawRect(g, x_0 + 2, y_0 - 3, 3, 7);
      $drawArrow(g, x_0, y_0, -1);
      break;
    case 2:
      $drawArrow(g, x_0 + 2, y_0, -1);
      break;
    case 3:
      if (this$static.animating)
        drawRect(g, x_0 - 3, y_0 - 3, 7, 7);
      else {
        drawRect(g, x_0 - 3, y_0 - 2, 7, 5);
        drawRect(g, x_0 - 1, y_0 - 4, 3, 9);
      }

      break;
    case 4:
      $drawArrow(g, x_0 - 2, y_0, 1);
      break;
    case 5:
      drawRect(g, x_0 - 4, y_0 - 3, 3, 7);
      $drawArrow(g, x_0, y_0, 1);
      break;
    case 6:
      drawRect(g, x_0 + 1, y_0 - 3, 3, 7);
      $drawArrow(g, x_0 - 4, y_0, 1);
      break;
    case 7:
      $drawArrow(g, x_0 - 2, y_0, 1);
  }
}

function $drawButtons(this$static, g){
  var buttonWidth, buttonX, i;
  if (this$static.buttonBar == 2) {
    this$static.buttonPressed == 0?$setFillStyleWeb(g, $darker(this$static.buttonBgColor)):$setFillStyleWeb(g, this$static.buttonBgColor);
    $fillRect(g, 0, this$static.height_0 - this$static.buttonHeight, this$static.buttonHeight, this$static.buttonHeight);
    $setLineWidth(g, 1);
    $setStrokeStyleWeb(g, 'gray');
    $beginPath(g);
    $rect(g, 0, this$static.height_0 - this$static.buttonHeight - 0.5, this$static.buttonHeight - 0.5, this$static.buttonHeight);
    $stroke(g);
    $drawButton(this$static, g, 0, ~~(this$static.buttonHeight / 2), this$static.height_0 - ~~((this$static.buttonHeight + 1) / 2));
    return;
  }
  if (this$static.buttonBar == 1) {
    buttonX = 0;
    for (i = 0; i < 7; i++) {
      buttonWidth = ~~((this$static.width_0 - buttonX) / (7 - i));
      this$static.buttonPressed == i?$setFillStyleWeb(g, $darker(this$static.buttonBgColor)):$setFillStyleWeb(g, this$static.buttonBgColor);
      $fillRect(g, buttonX, this$static.height_0, buttonWidth, this$static.buttonHeight);
      $setLineWidth(g, 1);
      $setStrokeStyleWeb(g, 'gray');
      $beginPath(g);
      i == 0?$rect(g, buttonX, this$static.height_0 - 0.5, buttonWidth - 0.5, this$static.buttonHeight):$rect(g, buttonX - 0.5, this$static.height_0 - 0.5, buttonWidth, this$static.buttonHeight);
      $stroke(g);
      $setStrokeStyleWeb(g, 'black');
      $drawButton(this$static, g, i, buttonX + ~~(buttonWidth / 2), this$static.height_0 + ~~(this$static.buttonHeight / 2));
      buttonX += buttonWidth;
    }
    $setStrokeStyleWeb(g, 'black');
    drawLine(g, this$static.height_0 - 1, this$static.width_0, this$static.height_0 - 1);
    this$static.drawButtons = false;
    return;
  }
}

function $drawMoveText(this$static, g, y_0){
  var pos, s1, s2, s3, w1, w2, w3, x_0;
  pos = this$static.movePos == 0?arrayMovePos(this$static.move[this$static.curMove], this$static.movePos):this$static.movePos;
  s1 = $moveText(this$static, this$static.move[this$static.curMove], 0, pos);
  s2 = $turnText(this$static, this$static.move[this$static.curMove], pos);
  s3 = $moveText(this$static, this$static.move[this$static.curMove], pos + 1, this$static.move[this$static.curMove].length);
  w1 = round_int(g.measureText(s1).width);
  w2 = round_int(g.measureText(s2).width);
  w3 = round_int(g.measureText(s3).width);
  x_0 = 1;
  if (1 + w1 + w2 + w3 > this$static.width_0) {
    x_0 = min_1(1, ~~(this$static.width_0 / 2) - w1 - ~~(w2 / 2));
    x_0 = max_0(x_0, this$static.width_0 - w1 - w2 - w3 - 2);
  }
  if (w2 > 0) {
    $setFillStyleWeb(g, this$static.hlColor);
    $setLineWidth(g, 2);
    $setStrokeStyleWeb(g, 'black');
    $beginPath(g);
    $fillRect(g, x_0 + w1 - 1, this$static.height_0 - this$static.progressHeight - this$static.textHeight, w2 + 2, this$static.textHeight);
  }
  w1 > 0 && $drawString(this$static, g, s1, x_0, y_0);
  w2 > 0 && $drawString(this$static, g, s2, x_0 + w1, y_0);
  w3 > 0 && $drawString(this$static, g, s3, x_0 + w1 + w2, y_0);
}

function $drawPolygon(g, x_0, y_0, fillColor){
  $beginPath(g);
  $moveTo(g, x_0[0], y_0[0]);
  $lineTo(g, x_0[1], y_0[1]);
  $lineTo(g, x_0[2], y_0[2]);
  $lineTo(g, x_0[3], y_0[3]);
  $closePath(g);
  $setFillStyleWeb(g, fillColor);
  $setStrokeStyleWeb(g, fillColor);
  $fill(g);
  $setLineWidth(g, 0.7);
  $stroke(g);
}

function $drawString(this$static, g, s, x_0, y_0){
  var i;
  if (this$static.outlined) {
    $setFillStyleWeb(g, 'black');
    for (i = 0; i < textOffset.length; i += 2)
      $fillText(g, s, x_0 + textOffset[i], y_0 + textOffset[i + 1]);
    $setFillStyleWeb(g, 'white');
  }
   else 
    $setFillStyleWeb(g, this$static.textColor);
  $fillText(g, s, x_0, y_0);
}

function $drawSuperArrow(g, xx, yy, face_0, superTwist, color_0){
  var A, B, C, D, E_0, F, a, b, c, d, i, n, rot, x_0, y_0;
  x_0 = initDim(I_classLit, $intern_3, 0, 4, 7, 1);
  y_0 = initDim(I_classLit, $intern_3, 0, 4, 7, 1);
  rot = initValues(getClassLiteralForArray(I_classLit, 2), $intern_2, 4, 0, [initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [0, 1, 2, 3]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [3, 0, 1, 2]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [2, 3, 0, 1]), initValues(getClassLiteralForArray(I_classLit, 1), $intern_3, 0, 7, [1, 2, 3, 0])]);
  if (scw == 1 && color_0 == '#ffffff')
    return;
  for (i = 0; i < 4; i++) {
    x_0[i] = round_int(xx[i] + (xx[rot[2][i]] - xx[i]) * 0.05);
    y_0[i] = round_int(yy[i] + (yy[rot[2][i]] - yy[i]) * 0.05);
  }
  face_0 == 0 && (superTwist = (superTwist + 1) % 4);
  face_0 == 4 && (superTwist = (superTwist + 3) % 4);
  a = rot[superTwist][0];
  b = rot[superTwist][1];
  c = rot[superTwist][2];
  d = rot[superTwist][3];
  A = (x_0[c] - x_0[b]) * 0.26;
  B = (y_0[c] - y_0[b]) * 0.26;
  C = ~~((x_0[a] - x_0[b]) / 2);
  D = y_0[b] + ~~((y_0[a] - y_0[b]) / 2);
  E_0 = y_0[c] + ~~((y_0[d] - y_0[c]) / 2);
  F = ~~((x_0[d] - x_0[c]) / 2);
  n = superTwist ^ 1;
  $setFillStyleWeb(g, color_0);
  $beginPath(g);
  g.moveTo(x_0[a] + ~~((x_0[d] - x_0[a]) / 2), y_0[a] + ~~((y_0[d] - y_0[a]) / 2));
  $lineTo(g, x_0[n] + C, D);
  g.lineTo(x_0[n] + A + C, D + B);
  g.lineTo(x_0[n] + A, y_0[n] + B);
  n = (n + 1) % 4;
  g.lineTo(x_0[n] - A, y_0[n] - B);
  g.lineTo(x_0[n] - A + F, E_0 - B);
  $lineTo(g, x_0[n] + F, E_0);
  $closePath(g);
  $fill(g);
  $setLineWidth(g, 0.6);
  $setStrokeStyleWeb(g, 'black');
  $stroke(g);
}

function $fixBlock(this$static, eye, eyeX, eyeY, blocks, mode){
  var dxh, dxv, dyh, dyv, i, i0, i1, i2, i3, j, k, min_0, n, o, p, q, sideH, sideW, x_0, y_0, z_0;
  for (i0 = 0; i0 < 8; i0++) {
    min_0 = this$static.width_0 < this$static.height_0?this$static.width_0:this$static.height_0 - this$static.progressHeight;
    x_0 = min_0 / 3.7 * vProd(cornerCoords[i0], eyeX) * this$static.scale;
    y_0 = min_0 / 3.7 * vProd(cornerCoords[i0], eyeY) * this$static.scale;
    z_0 = min_0 / (5 + this$static.persp) * vProd(cornerCoords[i0], eye) * this$static.scale;
    x_0 = x_0 / (1 - z_0 / min_0);
    y_0 = y_0 / (1 - z_0 / min_0);
    this$static.coordsX[i0] = this$static.width_0 / 2 + x_0;
    this$static.align_0 == 0?(this$static.coordsY[i0] = (this$static.height_0 - this$static.progressHeight) / 2 * this$static.scale - y_0):this$static.align_0 == 2?(this$static.coordsY[i0] = this$static.height_0 - this$static.progressHeight - (this$static.height_0 - this$static.progressHeight) / 2 * this$static.scale - y_0):(this$static.coordsY[i0] = (this$static.height_0 - this$static.progressHeight) / 2 - y_0);
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
        min_0 = this$static.width_0 < this$static.height_0?this$static.width_0:this$static.height_0 - this$static.progressHeight;
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
                $drawPolygon(this$static.graphics, this$static.fillX, this$static.fillY, '#fdfdfd');
                $drawSuperArrow(this$static.graphics, this$static.fillX, this$static.fillY, i2, this$static.scube[i2][p * 3 + q], this$static.colors[this$static.cube[i2][p * 3 + q]]);
              }
               else 
                $drawPolygon(this$static.graphics, this$static.fillX, this$static.fillY, this$static.colors[this$static.cube[i2][p * 3 + q]]);
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
      for (j = 0; j < 4; j++) {
        k = oppositeCorners[i3][j];
        this$static.fillX[j] = round_int(this$static.cooX[i3][j] + (this$static.cooX[i3 ^ 1][k] - this$static.cooX[i3][j]) * 2 / 3);
        this$static.fillY[j] = round_int(this$static.cooY[i3][j] + (this$static.cooY[i3 ^ 1][k] - this$static.cooY[i3][j]) * 2 / 3);
        this$static.mirrored && (this$static.fillX[j] = this$static.width_0 - this$static.fillX[j]);
      }
      $drawPolygon(this$static.graphics, this$static.fillX, this$static.fillY, 'black');
    }
     else {
      for (j = 0; j < 4; j++)
        $getCorners(this$static, i3, j, this$static.fillX, this$static.fillY, blocks[i3][0][factors[j][0]], blocks[i3][1][factors[j][1]], this$static.mirrored);
      $drawPolygon(this$static.graphics, this$static.fillX, this$static.fillY, 'black');
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
              $drawPolygon(this$static.graphics, this$static.fillX, this$static.fillY, '#fdfdfd');
              $drawSuperArrow(this$static.graphics, this$static.fillX, this$static.fillY, i, this$static.scube[i][p * 3 + q], this$static.colors[this$static.cube[i][p * 3 + q]]);
            }
             else 
              $drawPolygon(this$static.graphics, this$static.fillX, this$static.fillY, this$static.colors[this$static.cube[i][p * 3 + q]]);
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
        for (j = 0; j < 6; j++) {
          for (k = 0; k < 4; k++)
            $getCorners(this$static, i, k, this$static.dragCornersX[this$static.dragAreas], this$static.dragCornersY[this$static.dragAreas], dragBlocks[j][k][0], dragBlocks[j][k][1], false);
          this$static.dragDirsX[this$static.dragAreas] = (dxh * areaDirs[j][0] + dxv * areaDirs[j][1]) * twistDirs[i][j];
          this$static.dragDirsY[this$static.dragAreas] = (dyh * areaDirs[j][0] + dyv * areaDirs[j][1]) * twistDirs[i][j];
          this$static.dragLayers[this$static.dragAreas] = adjacentFaces[i][j % 4];
          j >= 4 && (this$static.dragLayers[this$static.dragAreas] &= -2);
          this$static.dragModes[this$static.dragAreas] = ~~(j / 4);
          ++this$static.dragAreas;
          if (this$static.dragAreas == 18)
            break;
        }
      }
       else if (mode == 0) {
        if (i != this$static.twistedLayer && sideW > 0 && sideH > 0) {
          j = sideW == 3?blocks[i][1][0] == 0?0:2:blocks[i][0][0] == 0?3:1;
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
          j = sideW == 3?4:5;
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
  factor1 /= 3;
  factor2 /= 3;
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
    pos0 = $indexOf_0(sequence, fromCodePoint(123));
    while (pos0 != -1) {
      ++inum;
      pos0 = $indexOf_1(sequence, fromCodePoint(123), pos0 + 1);
    }
    if (this$static.infoText == null) {
      this$static.curInfoText = 0;
      this$static.infoText = initDim(Ljava_lang_String_2_classLit, $intern_6, 2, inum, 4, 1);
    }
     else {
      infoText2 = initDim(Ljava_lang_String_2_classLit, $intern_6, 2, this$static.infoText.length + inum, 4, 1);
      for (i = 0; i < this$static.infoText.length; i++)
        infoText2[i] = this$static.infoText[i];
      this$static.curInfoText = this$static.infoText.length;
      this$static.infoText = infoText2;
    }
  }
  num = 1;
  pos = $indexOf_0(sequence, fromCodePoint(59));
  while (pos != -1) {
    ++num;
    pos = $indexOf_1(sequence, fromCodePoint(59), pos + 1);
  }
  move = initDim(I_classLit, $intern_2, 4, num, 0, 2);
  lastPos = 0;
  pos = $indexOf_0(sequence, fromCodePoint(59));
  num = 0;
  while (pos != -1) {
    move[num++] = $getMovePart(this$static, sequence.substr(lastPos, pos - lastPos), info);
    lastPos = pos + 1;
    pos = $indexOf_1(sequence, fromCodePoint(59), lastPos);
  }
  move[num] = $getMovePart(this$static, __substr(sequence, lastPos, sequence.length - lastPos), info);
  return move;
}

function $getMovePart(this$static, sequence, info){
  var i, i0, j, k, length_0, mode, move, returnMove, s;
  length_0 = 0;
  move = initDim(I_classLit, $intern_3, 0, sequence.length, 7, 1);
  for (i0 = 0; i0 < sequence.length; i0++) {
    if (sequence.charCodeAt(i0) == 46) {
      move[length_0] = -1;
      ++length_0;
    }
     else if (sequence.charCodeAt(i0) == 123) {
      ++i0;
      s = '';
      while (i0 < sequence.length) {
        if (sequence.charCodeAt(i0) == 125)
          break;
        info && (s += charToString(sequence.charCodeAt(i0)));
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
        if (sequence.charCodeAt(i0) == 'UDFBLRESMXYZxyzudfblr'.charCodeAt(j)) {
          ++i0;
          mode = moveModes[j];
          move[length_0] = moveCodes[j] * 24;
          if (i0 < sequence.length) {
            if (moveModes[j] == 0) {
              for (k = 0; k < modeChar.length; k++) {
                if (sequence.charCodeAt(i0) == modeChar[k]) {
                  mode = k + 1;
                  ++i0;
                  break;
                }
              }
            }
          }
          move[length_0] += mode * 4;
          if (i0 < sequence.length) {
            if (sequence.charCodeAt(i0) == 49)
              ++i0;
            else if (sequence.charCodeAt(i0) == 39 || sequence.charCodeAt(i0) == 51) {
              move[length_0] += 2;
              ++i0;
            }
             else if (sequence.charCodeAt(i0) == 50) {
              ++i0;
              if (i0 < sequence.length && sequence.charCodeAt(i0) == 39) {
                move[length_0] += 3;
                ++i0;
              }
               else 
                move[length_0] += 1;
            }
          }
          ++length_0;
          --i0;
          break;
        }
      }
    }
  }
  returnMove = initDim(I_classLit, $intern_3, 0, length_0, 7, 1);
  for (i = 0; i < length_0; i++)
    returnMove[i] = move[i];
  return returnMove;
}

function $getParameter(this$static, name_0){
  var parameter, paramsForName;
  parameter = (ensureListParameterMap() , paramsForName = dynamicCast(listParamMap.get_0(name_0), 18) , !paramsForName?null:dynamicCastToString(paramsForName.get_1(paramsForName.size_1() - 1)));
  if (parameter == null)
    return dynamicCastToString($getStringValue(this$static.config, name_0));
  return parameter;
}

function $init(this$static){
  var angle, average, color_0, i, i0, i1, i2, i3, i4, i5, i6, i7, initialMove, initialPosition, initialReversedMove, intscale, j, j0, j1, j2, k, n, param, ti, tj, param_0, userAgent;
  this$static.colors[0] = '#' + $lpad(toUnsignedRadixString(255, 16)) + $lpad(toUnsignedRadixString(128, 16)) + $lpad(toUnsignedRadixString(64, 16));
  this$static.colors[1] = '#' + $lpad(toUnsignedRadixString(255, 16)) + $lpad(toUnsignedRadixString(0, 16)) + $lpad(toUnsignedRadixString(0, 16));
  this$static.colors[2] = '#' + $lpad(toUnsignedRadixString(0, 16)) + $lpad(toUnsignedRadixString(255, 16)) + $lpad(toUnsignedRadixString(0, 16));
  this$static.colors[3] = '#' + $lpad(toUnsignedRadixString(0, 16)) + $lpad(toUnsignedRadixString(0, 16)) + $lpad(toUnsignedRadixString(255, 16));
  this$static.colors[4] = '#' + $lpad(toUnsignedRadixString(153, 16)) + $lpad(toUnsignedRadixString(153, 16)) + $lpad(toUnsignedRadixString(153, 16));
  this$static.colors[5] = '#' + $lpad(toUnsignedRadixString(170, 16)) + $lpad(toUnsignedRadixString(170, 16)) + $lpad(toUnsignedRadixString(68, 16));
  this$static.colors[6] = '#' + $lpad(toUnsignedRadixString(187, 16)) + $lpad(toUnsignedRadixString(119, 16)) + $lpad(toUnsignedRadixString(68, 16));
  this$static.colors[7] = '#' + $lpad(toUnsignedRadixString(153, 16)) + $lpad(toUnsignedRadixString(68, 16)) + $lpad(toUnsignedRadixString(68, 16));
  this$static.colors[8] = '#' + $lpad(toUnsignedRadixString(68, 16)) + $lpad(toUnsignedRadixString(119, 16)) + $lpad(toUnsignedRadixString(68, 16));
  this$static.colors[9] = '#' + $lpad(toUnsignedRadixString(0, 16)) + $lpad(toUnsignedRadixString(68, 16)) + $lpad(toUnsignedRadixString(119, 16));
  this$static.colors[10] = '#' + $lpad(toUnsignedRadixString(255, 16)) + $lpad(toUnsignedRadixString(255, 16)) + $lpad(toUnsignedRadixString(255, 16));
  this$static.colors[11] = '#' + $lpad(toUnsignedRadixString(255, 16)) + $lpad(toUnsignedRadixString(255, 16)) + $lpad(toUnsignedRadixString(0, 16));
  this$static.colors[12] = '#' + $lpad(toUnsignedRadixString(255, 16)) + $lpad(toUnsignedRadixString(96, 16)) + $lpad(toUnsignedRadixString(32, 16));
  this$static.colors[13] = '#' + $lpad(toUnsignedRadixString(208, 16)) + $lpad(toUnsignedRadixString(0, 16)) + $lpad(toUnsignedRadixString(0, 16));
  this$static.colors[14] = '#' + $lpad(toUnsignedRadixString(0, 16)) + $lpad(toUnsignedRadixString(144, 16)) + $lpad(toUnsignedRadixString(0, 16));
  this$static.colors[15] = '#' + $lpad(toUnsignedRadixString(32, 16)) + $lpad(toUnsignedRadixString(64, 16)) + $lpad(toUnsignedRadixString(208, 16));
  this$static.colors[16] = '#' + $lpad(toUnsignedRadixString(176, 16)) + $lpad(toUnsignedRadixString(176, 16)) + $lpad(toUnsignedRadixString(176, 16));
  this$static.colors[17] = '#' + $lpad(toUnsignedRadixString(80, 16)) + $lpad(toUnsignedRadixString(80, 16)) + $lpad(toUnsignedRadixString(80, 16));
  this$static.colors[18] = '#' + $lpad(toUnsignedRadixString(255, 16)) + $lpad(toUnsignedRadixString(0, 16)) + $lpad(toUnsignedRadixString(255, 16));
  this$static.colors[19] = '#' + $lpad(toUnsignedRadixString(0, 16)) + $lpad(toUnsignedRadixString(255, 16)) + $lpad(toUnsignedRadixString(255, 16));
  this$static.colors[20] = '#' + $lpad(toUnsignedRadixString(255, 16)) + $lpad(toUnsignedRadixString(160, 16)) + $lpad(toUnsignedRadixString(192, 16));
  this$static.colors[21] = '#' + $lpad(toUnsignedRadixString(32, 16)) + $lpad(toUnsignedRadixString(255, 16)) + $lpad(toUnsignedRadixString(16, 16));
  this$static.colors[22] = '#' + $lpad(toUnsignedRadixString(0, 16)) + $lpad(toUnsignedRadixString(0, 16)) + $lpad(toUnsignedRadixString(0, 16));
  this$static.colors[23] = '#' + $lpad(toUnsignedRadixString(128, 16)) + $lpad(toUnsignedRadixString(128, 16)) + $lpad(toUnsignedRadixString(128, 16));
  param = $getParameter(this$static, 'bgcolor');
  param != null && param.length == 6?$validateColor(param)?(this$static.bgColor = '#' + param):(this$static.bgColor = 'gray'):(this$static.bgColor = 'gray');
  param = $getParameter(this$static, 'butbgcolor');
  param != null && param.length == 6?$validateColor(param)?(this$static.buttonBgColor = '#' + param):(this$static.buttonBgColor = this$static.bgColor):(this$static.buttonBgColor = this$static.bgColor);
  param = $getParameter(this$static, 'colors');
  if (param != null) {
    for (i0 = 0; i0 < 10 && i0 < ~~(param.length / 6); i0++) {
      $validateColor(param.substr(i0 * 6, i0 * 6 + 6 - i0 * 6)) && (this$static.colors[i0] = '#' + param.substr(i0 * 6, i0 * 6 + 6 - i0 * 6));
    }
  }
  for (i1 = 0; i1 < 6; i1++)
    for (j0 = 0; j0 < 9; j0++)
      this$static.cube[i1][j0] = i1 + 10;
  param = $getParameter(this$static, 'supercube');
  if (param != null)
    if ($equals('1', param)) {
      superCube = true;
      border = border_gabba;
      for (i0 = 0; i0 < 9; i0++)
        this$static.cube[0][i0] = 22;
      param = $getParameter(this$static, 'scw');
      param != null && ($equals('blank', param)?(scw = 1):$equals('black', param) && (scw = 2));
      scw == 2 && (this$static.colors[10] = '#000000');
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
        border = border_gabba;
        this$static.colors[11] = '#ffd90a';
        this$static.colors[12] = '#ff4f0b';
        this$static.colors[13] = '#9e0b19';
        this$static.colors[14] = '#0b7d39';
        this$static.colors[15] = '#0b4186';
      }
    }
  if (superCube) {
    for (i0 = 1; i0 < 6; i0++)
      for (j1 = 0; j1 < 9; j1++)
        this$static.scube[i0][j1] = 0;
  }
  initialPosition = 'lluu';
  param = $getParameter(this$static, 'colorscheme');
  if (param != null && param.length == 6) {
    for (i0 = 0; i0 < 6; i0++) {
      color_0 = 23;
      for (j1 = 0; j1 < 23; j1++) {
        if (toLowerCase(param.charCodeAt(i0)) == '0123456789wyorgbldmcpnk'.charCodeAt(j1)) {
          color_0 = j1;
          break;
        }
      }
      for (j2 = 0; j2 < 9; j2++)
        this$static.cube[i0][j2] = color_0;
    }
  }
  param = $getParameter(this$static, 'pos');
  if (param != null && param.length == 54) {
    initialPosition = 'uuuuff';
    this$static.bgColor == 'gray' && (this$static.bgColor = 'white');
    for (i0 = 0; i0 < 6; i0++) {
      ti = posFaceTransform[i0];
      for (j1 = 0; j1 < 9; j1++) {
        tj = posFaceletTransform[i0][j1];
        this$static.cube[ti][tj] = 23;
        for (k = 0; k < 14; k++) {
          if (param.charCodeAt(i0 * 9 + j1) == 'DFECABdfecabgh'.charCodeAt(k)) {
            this$static.cube[ti][tj] = k + 4;
            break;
          }
        }
      }
    }
  }
  param = $getParameter(this$static, 'facelets');
  if (param != null && param.length == 54) {
    for (i0 = 0; i0 < 6; i0++) {
      for (j1 = 0; j1 < 9; j1++) {
        this$static.cube[i0][j1] = 23;
        for (k = 0; k < 23; k++) {
          if (toLowerCase(param.charCodeAt(i0 * 9 + j1)) == '0123456789wyorgbldmcpnk'.charCodeAt(k)) {
            this$static.cube[i0][j1] = k;
            break;
          }
        }
      }
    }
  }
  param = $getParameter(this$static, 'superfacelets');
  if (param != null && param.length == 54) {
    for (i0 = 0; i0 < 6; i0++) {
      for (j1 = 0; j1 < 9; j1++) {
        for (k = 0; k < 4; k++) {
          if (toLowerCase(param.charCodeAt(i0 * 9 + j1)) == '0123'.charCodeAt(k)) {
            this$static.scube[i0][j1] = k;
            break;
          }
        }
      }
    }
  }
  param = $getParameter(this$static, 'move');
  this$static.move = param == null?initDims(I_classLit, [$intern_2, $intern_3], [4, 0], 7, [0, 0], 2):$getMove(this$static, param, true);
  this$static.movePos = 0;
  this$static.curInfoText = -1;
  param = $getParameter(this$static, 'initmove');
  if (param != null) {
    initialMove = $equals(param, '#')?this$static.move:$getMove(this$static, param, false);
    initialMove.length > 0 && $doMove(this$static, this$static.cube, initialMove[0], 0, initialMove[0].length, false);
  }
  param = $getParameter(this$static, 'initrevmove');
  if (param != null) {
    initialReversedMove = $equals(param, '#')?this$static.move:$getMove(this$static, param, false);
    initialReversedMove.length > 0 && $doMove(this$static, this$static.cube, initialReversedMove[0], 0, initialReversedMove[0].length, true);
  }
  param = $getParameter(this$static, 'demo');
  if (param != null) {
    this$static.demoMove = $equals(param, '#')?this$static.move:$getMove(this$static, param, true);
    this$static.demoMove.length > 0 && this$static.demoMove[0].length > 0 && (this$static.demo = true);
  }
  param = $getParameter(this$static, 'position');
  vNorm(vMul(this$static.eyeY, this$static.eye, this$static.eyeX));
  param == null && (param = initialPosition);
  for (i2 = 0; i2 < param.length; i2++) {
    angle = 0.2617993877991494;
    switch (toLowerCase(param.charCodeAt(i2))) {
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
    for (i3 = 0; i3 < param.length; i3++)
      param.charCodeAt(i3) >= 48 && param.charCodeAt(i3) <= 57 && (this$static.speed = this$static.speed * 10 + param.charCodeAt(i3) - 48);
  param = $getParameter(this$static, 'doublespeed');
  if (param != null)
    for (i4 = 0; i4 < param.length; i4++)
      param.charCodeAt(i4) >= 48 && param.charCodeAt(i4) <= 57 && (this$static.doubleSpeed = this$static.doubleSpeed * 10 + param.charCodeAt(i4) - 48);
  this$static.speed == 0 && (this$static.speed = 10);
  this$static.doubleSpeed == 0 && (this$static.doubleSpeed = ~~(this$static.speed * 3 / 2));
  this$static.persp = 0;
  param = $getParameter(this$static, 'perspective');
  if (param == null)
    this$static.persp = 2;
  else 
    for (i5 = 0; i5 < param.length; i5++)
      param.charCodeAt(i5) >= 48 && param.charCodeAt(i5) <= 57 && (this$static.persp = this$static.persp * 10 + param.charCodeAt(i5) - 48);
  intscale = 0;
  param = $getParameter(this$static, 'scale');
  if (param != null)
    for (i6 = 0; i6 < param.length; i6++)
      param.charCodeAt(i6) >= 48 && param.charCodeAt(i6) <= 57 && (intscale = intscale * 10 + param.charCodeAt(i6) - 48);
  this$static.scale = 1 / (1 + intscale / 10);
  this$static.hint = false;
  param = $getParameter(this$static, 'hint');
  if (param != null) {
    this$static.hint = true;
    this$static.faceShift = 0;
    for (i0 = 0; i0 < param.length; i0++)
      param.charCodeAt(i0) >= 48 && param.charCodeAt(i0) <= 57 && (this$static.faceShift = this$static.faceShift * 10 + param.charCodeAt(i0) - 48);
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
  $equals('1', param)?(this$static.moveText = 1):$equals('2', param)?(this$static.moveText = 2):$equals('3', param)?(this$static.moveText = 3):$equals('4', param)?(this$static.moveText = 4):(this$static.moveText = 0);
  param = $getParameter(this$static, 'textsize');
  if (param != null) {
    n = __parseAndValidateInt(param, 10);
    n >= 5 & n <= 40 && (this$static.textSize = n);
  }
  param = $getParameter(this$static, 'fonttype');
  param == null || $equals('1', param)?(this$static.outlined = true):(this$static.outlined = false);
  this$static.metric = 0;
  param = $getParameter(this$static, 'metric');
  param != null && ($equals('1', param)?(this$static.metric = 1):$equals('2', param)?(this$static.metric = 2):$equals('3', param) && (this$static.metric = 3));
  this$static.align_0 = 1;
  param = $getParameter(this$static, 'align');
  param != null && ($equals('0', param)?(this$static.align_0 = 0):$equals('1', param)?(this$static.align_0 = 1):$equals('2', param) && (this$static.align_0 = 2));
  param = $getParameter(this$static, 'ww');
  param != null && $equals('1', param) && (ww = true);
  param = $getParameter(this$static, 'snap');
  param != null && $equals('1', param) && (snap = true);
  for (i7 = 0; i7 < 6; i7++)
    for (j = 0; j < 9; j++) {
      this$static.initialCube[i7][j] = this$static.cube[i7][j];
      this$static.initialSCube[i7][j] = this$static.scube[i7][j];
    }
  for (i = 0; i < 3; i++) {
    this$static.initialEye[i] = this$static.eye[i];
    this$static.initialEyeX[i] = this$static.eyeX[i];
    this$static.initialEyeY[i] = this$static.eyeY[i];
  }
  average = $colorAverage(this$static.bgColor);
  if (average < 128) {
    this$static.textColor = 'white';
    this$static.hlColor = $brighter(this$static.bgColor);
  }
   else {
    this$static.textColor = 'black';
    this$static.hlColor = $darker(this$static.bgColor);
  }
  param = $getParameter(this$static, 'slidercolor');
  param != null && param.length == 6?$validateColor(param)?(this$static.sliderColor = '#' + param):(this$static.sliderColor = this$static.textColor):(this$static.sliderColor = this$static.textColor);
  param = $getParameter(this$static, 'sliderbgcolor');
  param != null && param.length == 6?$validateColor(param)?(this$static.sliderBgColor = '#' + param):(this$static.sliderBgColor = $darker(this$static.bgColor)):(this$static.sliderBgColor = $darker(this$static.bgColor));
  this$static.curInfoText = -1;
  param_0 = $getParameter(this$static, 'width');
  param_0 == null?(this$static.width_0 = $getClientWidth($doc)):(this$static.width_0 = __parseAndValidateInt(param_0, 10));
  param_0 = $getParameter(this$static, 'height');
  param_0 == null?(this$static.height_0 = $getClientHeight($doc)):(this$static.height_0 = __parseAndValidateInt(param_0, 10));
  $setCoordinateSpaceWidth(this$static.canv, this$static.width_0);
  $setCoordinateSpaceHeight(this$static.canv, this$static.height_0);
  this$static.ctx = ($clinit_DOM() , this$static.canv.element).getContext('2d');
  $setCoordinateSpaceWidth(this$static.canv2, this$static.width_0);
  $setCoordinateSpaceHeight(this$static.canv2, this$static.height_0);
  this$static.graphics = this$static.canv2.element.getContext('2d');
  this$static.buttonBar == 1 && (this$static.height_0 -= this$static.buttonHeight);
  $add_0(($clinit_RootPanel() , get_0()), this$static.canv);
  addNativePreviewHandler(this$static.nativePreviewHandler);
  $addDomHandler(get_0(), new AnimCube$6, ($clinit_ContextMenuEvent() , $clinit_ContextMenuEvent() , TYPE));
  userAgent = $wnd.navigator.userAgent.toLowerCase();
  userAgent.indexOf('gecko') != -1 && userAgent.indexOf('webkit') == -1 && (isGecko = true);
  $paint(this$static);
  this$static.demo && $startAnimation(this$static, -1);
}

function $initInfoText(this$static, move){
  move.length > 0 && move[0] >= $intern_8?(this$static.curInfoText = move[0] - $intern_8):(this$static.curInfoText = -1);
}

function $loadConfigFile(this$static, fname){
  var e;
  try {
    $sendRequest(new RequestBuilder(($clinit_RequestBuilder() , GET), fname), new AnimCube$2(this$static));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 24)) {
      e = $e0;
      $printStackTrace(e);
    }
     else 
      throw unwrap($e0);
  }
}

function $lpad(s){
  return $substring('00' + s, s.length);
}

function $mouseDown(this$static, npe){
  var e, et;
  e = npe.nativeEvent;
  if (this$static.touchEvent) {
    et = e.touches[0];
    this$static.lastDragX = this$static.lastX = $touchGetSubPixelClientX(et) | 0;
    this$static.lastDragY = this$static.lastY = $touchGetSubPixelClientY(et) | 0;
  }
   else {
    this$static.lastDragX = this$static.lastX = $eventGetSubPixelClientX(e) | 0;
    this$static.lastDragY = this$static.lastY = $eventGetSubPixelClientY(e) | 0;
  }
  this$static.toTwist = false;
  this$static.buttonPressed = $selectButton(this$static, this$static.lastX, this$static.lastY);
  if (this$static.buttonPressed >= 0) {
    this$static.pushed = true;
    if (this$static.buttonPressed == 3) {
      this$static.animating?this$static.animating && (this$static.restarted = true):(this$static.mirrored = !this$static.mirrored);
    }
     else if (this$static.buttonPressed == 0) {
      this$static.animating && (this$static.restarted = true);
      $clear(this$static);
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
   else if (this$static.progressHeight > 0 && this$static.move.length > 0 && this$static.move[this$static.curMove].length > 0 && this$static.lastY >= this$static.height_0 - this$static.progressHeight && this$static.lastY < this$static.height_0) {
    if (this$static.clickProgress) {
      this$static.animating && (this$static.restarted = true);
      $progress(this$static, this$static.jobNumber++);
    }
  }
   else {
    this$static.mirrored && (this$static.lastDragX = this$static.lastX = this$static.width_0 - this$static.lastX);
    this$static.editable && !this$static.animating && $eventGetButton(e) == 1 && !e.shiftKey && (this$static.toTwist = true);
  }
}

function $mouseMove(this$static, npe){
  var a, b, d, d1, d2, dx, dy, e, et, i, len, pos, x_0, x1, x2, y_0, y1, y2;
  if (this$static.pushed) {
    return;
  }
  e = npe.nativeEvent;
  if (this$static.dragging) {
    this$static.animating && (this$static.restarted = true);
    len = realMoveLength(this$static.move[this$static.curMove]);
    if (this$static.touchEvent) {
      x_0 = (e.touches[0].clientX || 0) | 0;
      pos = ~~((~~((x_0 - 1) * len * 2 / (this$static.width_0 - 2)) + 1) / 2);
    }
     else 
      pos = ~~((~~((($eventGetSubPixelClientX(e) | 0) - 1) * len * 2 / (this$static.width_0 - 2)) + 1) / 2);
    pos = 0 > (len < pos?len:pos)?0:len < pos?len:pos;
    pos > 0 && (pos = arrayMovePos(this$static.move[this$static.curMove], pos));
    pos > this$static.movePos && $doMove(this$static, this$static.cube, this$static.move[this$static.curMove], this$static.movePos, pos - this$static.movePos, false);
    pos < this$static.movePos && $doMove(this$static, this$static.cube, this$static.move[this$static.curMove], pos, this$static.movePos - pos, true);
    this$static.movePos = pos;
    $paint(this$static);
    return;
  }
  if (this$static.touchEvent) {
    et = e.touches[0];
    x_0 = this$static.mirrored?this$static.width_0 - ($touchGetSubPixelClientX(et) | 0):$touchGetSubPixelClientX(et) | 0;
    y_0 = $touchGetSubPixelClientY(et) | 0;
  }
   else {
    x_0 = this$static.mirrored?this$static.width_0 - ($eventGetSubPixelClientX(e) | 0):$eventGetSubPixelClientX(e) | 0;
    y_0 = $eventGetSubPixelClientY(e) | 0;
  }
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
        d = abs_0(this$static.dragX * dx + this$static.dragY * dy) / sqrt_0((this$static.dragX * this$static.dragX + this$static.dragY * this$static.dragY) * (dx * dx + dy * dy));
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
    this$static.currentAngle = 0.03 * (this$static.dragX * dx + this$static.dragY * dy) / sqrt_0(this$static.dragX * this$static.dragX + this$static.dragY * this$static.dragY);
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
      num = ~~((num + 2) / 4);
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
  fname = $getParameter(this$static, 'config');
  fname != null?$loadConfigFile(this$static, fname):$init(this$static);
}

function $paint(this$static){
  var axis_0, botProd, cosA, cosB, i, i0, j, orderMode, progress, s, sinA, sinB, topProd, w, x_0, y_0;
  this$static.graphics.save();
  $setClip(this$static.graphics, this$static.width_0, this$static.height_0);
  $setFillStyleWeb(this$static.graphics, this$static.bgColor);
  $fillRect(this$static.graphics, 0, 0, this$static.width_0, this$static.height_0);
  this$static.dragAreas = 0;
  if (this$static.natural) {
    $fixBlock(this$static, this$static.eye, this$static.eyeX, this$static.eyeY, cubeBlocks, 3);
  }
   else {
    cosA = cos_0(this$static.originalAngle + this$static.currentAngle);
    sinA = sin_0(this$static.originalAngle + this$static.currentAngle) * rotSign[this$static.twistedLayer];
    for (i0 = 0; i0 < 3; i0++) {
      this$static.tempEye[i0] = 0;
      this$static.tempEyeX[i0] = 0;
      for (j = 0; j < 3; j++) {
        axis_0 = ~~(this$static.twistedLayer / 2);
        this$static.tempEye[i0] += this$static.eye[j] * (rotVec[axis_0][i0][j] + rotCos[axis_0][i0][j] * cosA + rotSin[axis_0][i0][j] * sinA);
        this$static.tempEyeX[i0] += this$static.eyeX[j] * (rotVec[axis_0][i0][j] + rotCos[axis_0][i0][j] * cosA + rotSin[axis_0][i0][j] * sinA);
      }
    }
    vMul(this$static.tempEyeY, this$static.tempEye, this$static.tempEyeX);
    cosB = cos_0(this$static.originalAngle - this$static.currentAngle);
    sinB = sin_0(this$static.originalAngle - this$static.currentAngle) * rotSign[this$static.twistedLayer];
    for (i = 0; i < 3; i++) {
      this$static.tempEye2[i] = 0;
      this$static.tempEyeX2[i] = 0;
      for (j = 0; j < 3; j++) {
        axis_0 = ~~(this$static.twistedLayer / 2);
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
    this$static.blockArray[2] = this$static.botBlocks;
    vSub(vScale(vCopy(this$static.perspEye, this$static.eye), 5 + this$static.persp), vScale(vCopy(this$static.perspNormal, faceNormals[this$static.twistedLayer]), $intern_11));
    vSub(vScale(vCopy(this$static.perspEyeI, this$static.eye), 5 + this$static.persp), vScale(vCopy(this$static.perspNormal, faceNormals[this$static.twistedLayer ^ 1]), $intern_11));
    topProd = vProd(this$static.perspEye, faceNormals[this$static.twistedLayer]);
    botProd = vProd(this$static.perspEyeI, faceNormals[this$static.twistedLayer ^ 1]);
    topProd < 0 && botProd > 0?(orderMode = 0):topProd > 0 && botProd < 0?(orderMode = 1):(orderMode = 2);
    $fixBlock(this$static, this$static.eyeArray[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][0]]], this$static.eyeArrayX[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][0]]], this$static.eyeArrayY[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][0]]], this$static.blockArray[this$static.drawOrder[orderMode][0]], this$static.blockMode[this$static.twistedMode][this$static.drawOrder[orderMode][0]]);
    $fixBlock(this$static, this$static.eyeArray[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][1]]], this$static.eyeArrayX[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][1]]], this$static.eyeArrayY[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][1]]], this$static.blockArray[this$static.drawOrder[orderMode][1]], this$static.blockMode[this$static.twistedMode][this$static.drawOrder[orderMode][1]]);
    $fixBlock(this$static, this$static.eyeArray[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][2]]], this$static.eyeArrayX[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][2]]], this$static.eyeArrayY[this$static.eyeOrder[this$static.twistedMode][this$static.drawOrder[orderMode][2]]], this$static.blockArray[this$static.drawOrder[orderMode][2]], this$static.blockMode[this$static.twistedMode][this$static.drawOrder[orderMode][2]]);
  }
  !this$static.pushed && !this$static.animating && (this$static.buttonPressed = -1);
  if (!this$static.demo && this$static.move.length > 0) {
    if (this$static.move[this$static.curMove].length > 0) {
      $setLineWidth(this$static.graphics, 1);
      $setStrokeStyleWeb(this$static.graphics, 'black');
      $beginPath(this$static.graphics);
      $rect(this$static.graphics, 0.5, this$static.height_0 - this$static.progressHeight + 0.5, this$static.width_0 - 1, this$static.progressHeight - 1);
      $stroke(this$static.graphics);
      progress = ~~((this$static.width_0 - 2) * realMovePos(this$static.move[this$static.curMove], this$static.movePos) / realMoveLength(this$static.move[this$static.curMove]));
      $setFillStyleWeb(this$static.graphics, this$static.sliderColor);
      $fillRect(this$static.graphics, 1, this$static.height_0 - this$static.progressHeight + 1, progress, this$static.progressHeight - 2);
      $setFillStyleWeb(this$static.graphics, this$static.sliderBgColor);
      $fillRect(this$static.graphics, 1 + progress, this$static.height_0 - this$static.progressHeight + 1.5, this$static.width_0 - 2 - progress, this$static.progressHeight - 3);
      s = '' + $moveLength(this$static, this$static.move[this$static.curMove], this$static.movePos) + '/' + $moveLength(this$static, this$static.move[this$static.curMove], -1) + metricChar[this$static.metric];
      $setFont(this$static.graphics, 'bold ' + this$static.textSize + 'px helvetica');
      w = round_int($measureText(this$static.graphics, s).width);
      this$static.textSize >= 15?(this$static.textHeight = this$static.textSize + 2):this$static.textSize >= 12?(this$static.textHeight = this$static.textSize + 4):(this$static.textHeight = this$static.textSize + 6);
      x_0 = this$static.width_0 - w - 2;
      y_0 = this$static.height_0 - this$static.progressHeight - 3;
      if (this$static.moveText > 0) {
        $drawString(this$static, this$static.graphics, s, x_0, y_0 - this$static.textHeight);
        $drawMoveText(this$static, this$static.graphics, y_0);
      }
       else 
        $drawString(this$static, this$static.graphics, s, x_0, y_0);
    }
    if (this$static.move.length > 1) {
      y_0 = this$static.textHeight - 4;
      s = '' + (this$static.curMove + 1) + '/' + this$static.move.length;
      w = round_int($measureText(this$static.graphics, s).width);
      x_0 = this$static.width_0 - w - this$static.buttonHeight - 2;
      $drawString(this$static, this$static.graphics, s, x_0, y_0);
      $setFillStyleWeb(this$static.graphics, this$static.buttonBgColor);
      $fillRect(this$static.graphics, this$static.width_0 - this$static.buttonHeight, 0, this$static.buttonHeight, this$static.buttonHeight);
      $drawButton(this$static, this$static.graphics, 7, this$static.width_0 - ~~(this$static.buttonHeight / 2), ~~(this$static.buttonHeight / 2));
    }
  }
  if (this$static.curInfoText >= 0) {
    y_0 = this$static.textHeight - 4;
    $drawString(this$static, this$static.graphics, this$static.infoText[this$static.curInfoText], 0, y_0);
  }
  this$static.graphics.restore();
  this$static.drawButtons && this$static.buttonBar != 0 && $drawButtons(this$static, this$static.graphics);
  $drawImage(this$static.ctx, this$static.graphics.canvas, 0, 0);
}

function $progress(this$static, jobNum){
  var len, pos;
  if (jobNum > this$static.nowServing) {
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new AnimCube$5(this$static, jobNum));
    return;
  }
  if (jobNum < this$static.nowServing) {
    alert_0('jobNum ' + jobNum + ' <  nowServing ' + this$static.nowServing);
    return;
  }
  len = realMoveLength(this$static.move[this$static.curMove]);
  pos = ~~((~~((this$static.lastX - 1) * len * 2 / (this$static.width_0 - 2)) + 1) / 2);
  pos = 0 > (len < pos?len:pos)?0:len < pos?len:pos;
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
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new AnimCube$3(this$static, jobNum, dir_0));
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
        mode = ~~(mv[this$static.movePos] / 4) % 6;
        layer = ~~(mv[this$static.movePos] / 24);
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
  (!instance && (instance = $isNativelySupported()?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance).requestAnimationFrame_0(new AnimCube$4(this$static, dir_0), null);
}

function $selectButton(this$static, x_0, y_0){
  var buttonWidth, buttonX, i;
  if (this$static.buttonBar == 0)
    return -1;
  if (this$static.move.length > 1 && x_0 >= this$static.width_0 - this$static.buttonHeight && x_0 < this$static.width_0 && y_0 >= 0 && y_0 < this$static.buttonHeight)
    return 7;
  if (this$static.buttonBar == 2) {
    if (x_0 >= 0 && x_0 < this$static.buttonHeight && y_0 >= this$static.height_0 - this$static.buttonHeight && y_0 < this$static.height_0)
      return 0;
    return -1;
  }
  if (y_0 < this$static.height_0)
    return -1;
  buttonX = 0;
  for (i = 0; i < 7; i++) {
    buttonWidth = ~~((this$static.width_0 - buttonX) / (7 - i));
    if (x_0 >= buttonX && x_0 < buttonX + buttonWidth && y_0 >= this$static.height_0 && y_0 < this$static.height_0 + this$static.buttonHeight)
      return i;
    buttonX += buttonWidth;
  }
  return -1;
}

function $setClip(g, width_0, height){
  $beginPath(g);
  $moveTo(g, 0, 0);
  $lineTo(g, width_0, 0);
  $lineTo(g, width_0, height);
  $lineTo(g, 0, height);
  $lineTo(g, 0, 0);
  $closePath(g);
  g.clip();
}

function $splitCube(this$static, layer){
  var i;
  for (i = 0; i < 6; i++) {
    this$static.topBlocks[i] = topBlockTable[topBlockFaceDim[layer][i]];
    this$static.botBlocks[i] = topBlockTable[botBlockFaceDim[layer][i]];
    this$static.midBlocks[i] = midBlockTable[midBlockFaceDim[layer][i]];
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

function $superTwist(this$static, b, inc, face_0){
  var i, n;
  for (i = b , n = 0; n < 3; i += inc , n++)
    this$static.scube[face_0][i] = (this$static.scube[face_0][i] + 2) % 4;
}

function $superTwist2(this$static, ix, tw){
  var i, j, n, v;
  for (i = 0; i < 4; i++) {
    v = this$static.superTwistArr[ix][i];
    for (j = v[0] , n = 0; n < 3; j += v[1] , n++)
      this$static.scube[v[2]][j] = (this$static.scube[v[2]][j] + tw) % 4;
  }
}

function $turnLength(this$static, turn){
  var mode, modifier, n;
  if (turn < 0 || turn >= $intern_8)
    return 0;
  modifier = turn % 4;
  mode = ~~(turn / 4) % 6;
  n = 1;
  switch (this$static.metric) {
    case 1:
      (modifier == 1 || modifier == 3) && (n *= 2);
    case 2:
      (mode == 1 || mode == 4 || mode == 5) && (n *= 2);
    case 3:
      mode == 3 && (n = 0);
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
  s = turnSymbol[this$static.moveText - 1][~~(move[pos] / 4) % 6][~~(move[pos] / 24)];
  if (s.charCodeAt(0) == 126)
    return __substr(s, 1, s.length - 1) + modifierStrings[(move[pos] + 2) % 4];
  return s + modifierStrings[move[pos] % 4];
}

function $twistLayer(this$static, cube, layer, num, middle){
  $twistLayer2(this$static, cube, layer, num, middle);
  if (superCube && num > 0 && num < 4) {
    $twistLayer2(this$static, this$static.scube, layer, num, middle);
    $twistSuperLayer(this$static, layer, num, middle);
  }
}

function $twistLayer2(this$static, cube, layer, num, middle){
  var c, factor, i, i0, i1, i2, j, k, n, offset;
  if (!middle) {
    for (i0 = 0; i0 < 8; i0++)
      this$static.twistBuffer[(i0 + num * 2) % 8] = cube[layer][cycleOrder[i0]];
    for (i1 = 0; i1 < 8; i1++)
      cube[layer][cycleOrder[i1]] = this$static.twistBuffer[i1];
  }
  k = num * 3;
  for (i2 = 0; i2 < 4; i2++) {
    n = adjacentFaces[layer][i2];
    c = middle?cycleCenters[layer][i2]:cycleLayerSides[layer][i2];
    factor = cycleFactors[c];
    offset = cycleOffsets[c];
    for (j = 0; j < 3; j++) {
      this$static.twistBuffer[k % 12] = cube[n][j * factor + offset];
      ++k;
    }
  }
  k = 0;
  for (i = 0; i < 4; i++) {
    n = adjacentFaces[layer][i];
    c = middle?cycleCenters[layer][i]:cycleLayerSides[layer][i];
    factor = cycleFactors[c];
    offset = cycleOffsets[c];
    j = 0;
    while (j < 3) {
      cube[n][j * factor + offset] = this$static.twistBuffer[k];
      ++j;
      ++k;
    }
  }
}

function $twistLayers(this$static, cube, layer, num, mode){
  switch (mode) {
    case 3:
      $twistLayer(this$static, cube, layer ^ 1, num, false);
    case 2:
      $twistLayer(this$static, cube, layer, 4 - num, false);
    case 1:
      $twistLayer(this$static, cube, layer, 4 - num, true);
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
    for (i = 0; i < 9; i++)
      this$static.scube[layer][i] = (this$static.scube[layer][i] + 4 - num) % 4;
  if (layer == 4) {
    if (!middle) {
      $superTwist(this$static, 6, 1, 3);
      num == 1?$superTwist(this$static, 0, 1, 1):num == 2?$superTwist(this$static, 0, 1, 2):num == 3 && $superTwist(this$static, 0, 3, 0);
    }
    if (middle) {
      $superTwist(this$static, 3, 1, 3);
      num == 1?$superTwist(this$static, 3, 1, 1):num == 2?$superTwist(this$static, 3, 1, 2):num == 3 && $superTwist(this$static, 1, 3, 0);
    }
  }
  if (layer == 5) {
    if (!middle) {
      $superTwist(this$static, 0, 1, 3);
      num == 1?$superTwist(this$static, 2, 3, 0):num == 2?$superTwist(this$static, 6, 1, 2):num == 3 && $superTwist(this$static, 6, 1, 1);
    }
    if (middle) {
      $superTwist(this$static, 3, 1, 3);
      num == 1?$superTwist(this$static, 1, 3, 0):num == 2?$superTwist(this$static, 3, 1, 2):num == 3 && $superTwist(this$static, 3, 1, 1);
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
      if (toLowerCase(s.charCodeAt(i)) == '0123456789abcdef'.charCodeAt(j)) {
        ++n;
        break;
      }
    }
  }
  if (n == 6)
    return true;
  else 
    alert_0('Invalid color code, must be 6 hex digits: ' + s);
  return false;
}

function AnimCube(){
  $clinit_AnimCube();
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

function drawLine(g, y1, x2, y2){
  $setLineWidth(g, 1);
  $beginPath(g);
  $moveTo(g, 0.5, y1 + 0.5);
  $lineTo(g, x2 + 0.5, y2 + 0.5);
  $closePath(g);
  $stroke(g);
}

function drawRect(g, x_0, y_0, width_0, height){
  $setLineWidth(g, 1);
  $beginPath(g);
  g.rect(x_0 + 0.5, y_0 + 0.5, width_0 - 1, height - 1);
  $setFillStyleWeb(g, 'white');
  $fill(g);
  $setStrokeStyleWeb(g, 'black');
  $stroke(g);
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
  length_0 = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1] + vector[2] * vector[2]);
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
  sinA = sin_0(angle);
  cosA = cos_0(angle);
  y_0 = vector[1] * cosA - vector[2] * sinA;
  z_0 = vector[1] * sinA + vector[2] * cosA;
  vector[1] = y_0;
  vector[2] = z_0;
  return vector;
}

function vRotY(vector, angle){
  var cosA, sinA, x_0, z_0;
  sinA = sin_0(angle);
  cosA = cos_0(angle);
  x_0 = vector[0] * cosA - vector[2] * sinA;
  z_0 = vector[0] * sinA + vector[2] * cosA;
  vector[0] = x_0;
  vector[2] = z_0;
  return vector;
}

function vRotZ(vector, angle){
  var cosA, sinA, x_0, y_0;
  sinA = sin_0(angle);
  cosA = cos_0(angle);
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

defineClass(90, 1, {}, AnimCube);
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
_.height_0 = 0;
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
_.progressHeight = 6;
_.pushed = false;
_.repeatable = false;
_.restarted = false;
_.scale = 0;
_.speed = 0;
_.spinning = false;
_.textHeight = 0;
_.textSize = 12;
_.toTwist = false;
_.touchEvent = false;
_.twistedLayer = 0;
_.twistedMode = 0;
_.twisting = false;
_.width_0 = 0;
var adjacentFaces, areaDirs, border, border_gabba, botBlockFaceDim, buttonAction, cornerCoords, cubeBlocks, cycleCenters, cycleFactors, cycleLayerSides, cycleOffsets, cycleOrder, dragBlocks, faceCorners, faceNormals, faceTwistDirs, factors, isGecko = false, metricChar, midBlockFaceDim, midBlockTable, modeChar, modifierStrings, moveCodes, moveModes, oppositeCorners, posFaceTransform, posFaceletTransform, rotCos, rotSign, rotSin, rotVec, scw = 0, snap = false, superCube = false, textOffset, topBlockFaceDim, topBlockTable, turnSymbol, twistDirs, ww = false;
var Lcom_google_gwt_animcube_client_AnimCube_2_classLit = createForClass('com.google.gwt.animcube.client', 'AnimCube', 90);
function $onPreviewNativeEvent(this$static, event_0){
  var eventType;
  eventType = $getTypeInt(event_0.nativeEvent);
  this$static.this$01.touchEvent = false;
  if (eventType == $intern_12) {
    $eventPreventDefault(event_0.nativeEvent);
    this$static.this$01.touchEvent = true;
    this$static.this$01.mouseIsDown && $mouseMove(this$static.this$01, event_0);
  }
   else if (eventType == $intern_13) {
    $eventPreventDefault(event_0.nativeEvent);
    this$static.this$01.touchEvent = true;
    this$static.this$01.mouseIsDown = false;
    $mouseUp(this$static.this$01);
  }
   else if (eventType == $intern_14) {
    $eventPreventDefault(event_0.nativeEvent);
    this$static.this$01.touchEvent = true;
    this$static.this$01.mouseIsDown = true;
    $mouseDown(this$static.this$01, event_0);
  }
   else if (eventType == 64) {
    $eventPreventDefault(event_0.nativeEvent);
    this$static.this$01.mouseIsDown && $mouseMove(this$static.this$01, event_0);
  }
   else if (eventType == 8) {
    this$static.this$01.mouseIsDown = false;
    $mouseUp(this$static.this$01);
  }
   else if (eventType == 4) {
    ($clinit_AnimCube() , isGecko) && $eventPreventDefault(event_0.nativeEvent);
    this$static.this$01.mouseIsDown = true;
    $mouseDown(this$static.this$01, event_0);
  }
}

function AnimCube$1(this$0){
  this.this$01 = this$0;
}

defineClass(84, 1, {67:1, 153:1}, AnimCube$1);
var Lcom_google_gwt_animcube_client_AnimCube$1_2_classLit = createForClass('com.google.gwt.animcube.client', 'AnimCube/1', 84);
function $onResponseReceived(this$static, resp){
  var i, key, lines, pos, text_0, value_0;
  text_0 = resp.xmlHttpRequest.responseText;
  lines = $split(text_0, '\n', 0);
  for (i = 0; i < lines.length; i++) {
    pos = $indexOf_0(lines[i], fromCodePoint(61));
    if (pos > 0) {
      key = $trim(lines[i].substr(0, pos));
      value_0 = $trim($substring(lines[i], pos + 1));
      $putStringValue(this$static.this$01.config, key, value_0);
    }
  }
  $init(this$static.this$01);
}

function AnimCube$2(this$0){
  this.this$01 = this$0;
}

defineClass(85, 1, {}, AnimCube$2);
var Lcom_google_gwt_animcube_client_AnimCube$2_2_classLit = createForClass('com.google.gwt.animcube.client', 'AnimCube/2', 85);
function AnimCube$3(this$0, val$jobNum, val$dir){
  this.this$01 = this$0;
  this.val$jobNum2 = val$jobNum;
  this.val$dir3 = val$dir;
}

defineClass(86, 1, {}, AnimCube$3);
_.execute_0 = function execute(){
  $run(this.this$01, this.val$jobNum2, this.val$dir3);
}
;
_.val$dir3 = 0;
_.val$jobNum2 = 0;
var Lcom_google_gwt_animcube_client_AnimCube$3_2_classLit = createForClass('com.google.gwt.animcube.client', 'AnimCube/3', 86);
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
          this$static.sTime = fromDouble(now_1());
          while (lt(sub_0(fromDouble(now_1()), this$static.sTime), {l:$intern_8, m:0, h:0}))
          ;
        }
      }
       else 
        this$static.mv[this$static.this$01.movePos] >= $intern_8?(this$static.this$01.curInfoText = this$static.val$moveDir2 > 0?this$static.mv[this$static.this$01.movePos] - $intern_8:-1):(this$static.spin = true);
      if (this$static.spin) {
        this$static.num = this$static.mv[this$static.this$01.movePos] % 4 + 1;
        this$static.mode = ~~(this$static.mv[this$static.this$01.movePos] / 4) % 6;
        clockwise = this$static.num < 3;
        this$static.num == 4 && (this$static.num = 2);
        if (this$static.val$moveDir2 < 0) {
          clockwise = !clockwise;
          this$static.num = 4 - this$static.num;
        }
        this$static.layer = ~~(this$static.mv[this$static.this$01.movePos] / 24);
        this$static.this$01.twisting = false;
        this$static.this$01.natural = true;
        this$static.this$01.spinning = true;
        this$static.this$01.originalAngle = 0;
        ($clinit_AnimCube() , faceTwistDirs)[this$static.layer] > 0 && (clockwise = !clockwise);
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
          this$static.sTime = fromDouble(now_1());
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
          this$static.lTime = fromDouble(now_1());
          this$static.this$01.currentAngle = this$static.d * toDouble(sub_0(this$static.lTime, this$static.sTime));
        }
         else {
          this$static.innerLoopBot = true;
          if (($clinit_AnimCube() , ww) && !this$static.this$01.moveOne) {
            this$static.this$01.currentAngle -= this$static.phis * this$static.phit;
            $paint(this$static.this$01);
            if (this$static.this$01.movePos > 0 && this$static.this$01.movePos < this$static.mv.length - 1) {
              this$static.innerLoopBot = false;
              this$static.this$01.movePos += this$static.val$moveDir2;
              this$static.sTime = this$static.lTime;
              this$static.lTime = fromDouble(now_1());
              this$static.this$01.currentAngle = this$static.d * toDouble(sub_0(this$static.lTime, this$static.sTime));
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
              for (j = 0; j < 9; j++) {
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

function AnimCube$4(this$0, val$moveDir){
  this.this$01 = this$0;
  this.val$moveDir2 = val$moveDir;
  this.mv = this.this$01.demo?this.this$01.demoMove[0]:this.this$01.move[this.this$01.curMove];
}

defineClass(87, 1, {}, AnimCube$4);
_.execute = function execute_0(timestamp){
  $execute(this);
}
;
_.cont = false;
_.d = 0;
_.innerLoopBot = false;
_.innerLoopTop = true;
_.lTime = {l:0, m:0, h:0};
_.layer = 0;
_.mode = 0;
_.num = 0;
_.outerLoopBot = false;
_.outerLoopTop = true;
_.phis = 0;
_.phit = 0;
_.restart = false;
_.sTime = {l:0, m:0, h:0};
_.spin = false;
_.val$moveDir2 = 0;
var Lcom_google_gwt_animcube_client_AnimCube$4_2_classLit = createForClass('com.google.gwt.animcube.client', 'AnimCube/4', 87);
function AnimCube$5(this$0, val$jobNum){
  this.this$01 = this$0;
  this.val$jobNum2 = val$jobNum;
}

defineClass(88, 1, {}, AnimCube$5);
_.execute_0 = function execute_1(){
  $progress(this.this$01, this.val$jobNum2);
}
;
_.val$jobNum2 = 0;
var Lcom_google_gwt_animcube_client_AnimCube$5_2_classLit = createForClass('com.google.gwt.animcube.client', 'AnimCube/5', 88);
function AnimCube$6(){
}

defineClass(89, 1, {158:1, 67:1}, AnimCube$6);
var Lcom_google_gwt_animcube_client_AnimCube$6_2_classLit = createForClass('com.google.gwt.animcube.client', 'AnimCube/6', 89);
function $setElement(this$static, elem){
  this$static.element = elem;
}

function $sinkBitlessEvent(this$static, eventTypeName){
  $clinit_DOM();
  $sinkBitlessEvent_0(this$static.element, eventTypeName);
}

defineClass(22, 1, {28:1, 22:1});
_.toString$ = function toString_1(){
  if (!this.element) {
    return '(null handle)';
  }
  return $toString(($clinit_DOM() , this.element));
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 22);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent(this$static, type_0.name_0):this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this$static.element, typeInt | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent(this$static, event_0){
  !!this$static.handlerManager && $fireEvent_0(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw new IllegalStateException("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?$sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw new IllegalStateException("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.doDetachChildren();
  }
   finally {
    $clinit_DOM();
    setEventListener(this$static.element, null);
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (this$static.parent_0) {
    $remove_0(this$static.parent_0, this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException("This widget's parent does not implement HasWidgets");
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.attached && $onDetach(this$static);
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.attached && $onAttach_0(this$static);
  }
}

defineClass(19, 22, $intern_15);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = $eventGetRelatedTarget(event_0);
      if (!!related && $isOrHasChild(this.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this, this.element);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 19);
function $onAttach_0(this$static){
  var tabIndex;
  $onAttach(this$static);
  tabIndex = ($clinit_DOM() , this$static.element).tabIndex;
  -1 == tabIndex && (this$static.element.tabIndex = 0 , undefined);
}

defineClass(174, 19, $intern_15);
_.onAttach = function onAttach_0(){
  $onAttach_0(this);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 174);
function $setCoordinateSpaceHeight(this$static, height){
  $setHeight(($clinit_DOM() , this$static.element), height);
}

function $setCoordinateSpaceWidth(this$static, width_0){
  $setWidth(($clinit_DOM() , this$static.element), width_0);
}

function Canvas_0(element){
  $setElement(this, ($clinit_DOM() , element));
}

function createIfSupported(){
  var element;
  !detector && (detector = new Canvas$CanvasElementSupportDetectedMaybe);
  element = $doc.createElement('canvas');
  if (!element.getContext) {
    return null;
  }
  return new Canvas_0(element);
}

defineClass(102, 174, $intern_15, Canvas_0);
var detector;
var Lcom_google_gwt_canvas_client_Canvas_2_classLit = createForClass('com.google.gwt.canvas.client', 'Canvas', 102);
defineClass(175, 1, {});
var Lcom_google_gwt_canvas_client_Canvas$CanvasElementSupportDetector_2_classLit = createForClass('com.google.gwt.canvas.client', 'Canvas/CanvasElementSupportDetector', 175);
function Canvas$CanvasElementSupportDetectedMaybe(){
}

defineClass(103, 175, {}, Canvas$CanvasElementSupportDetectedMaybe);
var Lcom_google_gwt_canvas_client_Canvas$CanvasElementSupportDetectedMaybe_2_classLit = createForClass('com.google.gwt.canvas.client', 'Canvas/CanvasElementSupportDetectedMaybe', 103);
function $beginPath(this$static){
  this$static.beginPath();
}

function $closePath(this$static){
  this$static.closePath();
}

function $drawImage(this$static, image, dx, dy){
  this$static.drawImage(image, dx, dy);
}

function $fill(this$static){
  this$static.fill();
}

function $fillRect(this$static, x_0, y_0, w, h){
  this$static.fillRect(x_0, y_0, w, h);
}

function $fillText(this$static, text_0, x_0, y_0){
  this$static.fillText && this$static.fillText(text_0, x_0, y_0);
}

function $lineTo(this$static, x_0, y_0){
  this$static.lineTo(x_0, y_0);
}

function $measureText(this$static, text_0){
  return this$static.measureText(text_0);
}

function $moveTo(this$static, x_0, y_0){
  this$static.moveTo(x_0, y_0);
}

function $rect(this$static, x_0, y_0, w, h){
  this$static.rect(x_0, y_0, w, h);
}

function $setFillStyleWeb(this$static, fillStyle){
  this$static.fillStyle = fillStyle;
}

function $setFont(this$static, f){
  this$static.font = f;
}

function $setLineWidth(this$static, lineWidth){
  this$static.lineWidth = lineWidth;
}

function $setStrokeStyleWeb(this$static, strokeStyle){
  this$static.strokeStyle = strokeStyle;
}

function $stroke(this$static){
  this$static.stroke();
}

function Duration(){
  this.start_0 = now_1();
}

defineClass(82, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 82);
function isScript(){
  return true;
}

function $fillInStackTrace(this$static){
  this$static.stackTrace = null;
  captureStackTrace(this$static, this$static.detailMessage);
  return this$static;
}

function $initCause(this$static, cause){
  checkState(!this$static.cause);
  checkCriticalArgument(cause != this$static, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $printStackTrace(this$static){
  var element$array, element$index, element$max, t, stackTrace;
  for (t = this$static; t; t = t.cause) {
    for (element$array = (t.stackTrace == null && (t.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(t) , dropInternalFrames(stackTrace))) , t.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index)
    ;
  }
}

function Throwable(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(9, 1, $intern_16);
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_2(){
  var className, msg;
  className = $getName(this.___clazz$);
  msg = this.getMessage();
  return msg != null?className + ': ' + msg:className;
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 9);
function Exception(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(39, 9, $intern_16);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 39);
function RuntimeException(){
  $fillInStackTrace(this);
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(16, 39, $intern_16);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 16);
defineClass(94, 16, $intern_16);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 94);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
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

defineClass(21, 94, {21:1, 3:1, 9:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 21);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(156, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 156);
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
  return function(){
    if (isScript()) {
      return entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = entry0(jsFunction, this, arguments);
      __0 != null && (__0 = __0.val);
      return __0;
    }
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

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function reportToBrowser(e){
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

var entryDepth = 0, sNextHashId = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
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
      !!tasks[i] && $push(newTasks, tasks[i]);
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
  $push(queue, task);
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
      $e0 = wrap($e0);
      if (instanceOf($e0, 9)) {
        e = $e0;
        reportToBrowser(instanceOf(e, 21)?dynamicCast(e, 21).getThrown():e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_2)(cmd);
    !isScript() && (ret = ret == true);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(131, 156, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 131);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(132, 1, {}, SchedulerImpl$Flusher);
_.execute_1 = function execute_3(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 132);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(133, 1, {}, SchedulerImpl$Rescuer);
_.execute_1 = function execute_4(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 133);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, i, numberOfFrameToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  numberOfFrameToSearch = min_1(stackTrace.length, 5);
  for (i = 0; i < numberOfFrameToSearch; i++) {
    if ($equals(stackTrace[i].methodName, dropFrameUntilFnName)) {
      return dynamicCast((stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1) , stackTrace), 152);
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

var collector;
defineClass(169, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 169);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(95, 169, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
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
  stack_0 = ($clinit_StackTraceCreator() , t && t.fnStack && t.fnStack instanceof Array?t.fnStack:[]);
  length_0 = stack_0.length;
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_17, 25, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 95);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (!stString.length) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals(toReturn.substr(0, 3), 'at ') && (toReturn = __substr(toReturn, 3, toReturn.length - 3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(__substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf_0(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = __substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
  (!toReturn.length || $equals(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(__substr(location_0, lastColonIndex + 1, location_0.length - (lastColonIndex + 1)));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(170, 169, {});
_.collect = function collect_0(t, jsThrown){
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

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.__gwt$backingJsError , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_17, 25, 0, 0, 1);
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
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 170);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(96, 170, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 96);
function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (!reference) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException("Can't overwrite cause");
  }
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $setHeight(this$static, height){
  this$static.height = height;
}

function $setWidth(this$static, width_0){
  this$static.width = width_0;
}

function $eventGetSubPixelClientX(evt){
  return evt.clientX || 0;
}

function $eventGetSubPixelClientY(evt){
  return evt.clientY || 0;
}

function $eventStopPropagation(evt){
  evt.stopPropagation();
}

function $touchGetSubPixelClientX(touch){
  return touch.clientX || 0;
}

function $touchGetSubPixelClientY(touch){
  return touch.clientY || 0;
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function $eventPreventDefault(evt){
  evt.preventDefault();
}

function $eventGetRelatedTarget(evt){
  var relatedTarget = evt.relatedTarget;
  if (!relatedTarget) {
    return null;
  }
  try {
    var nodeName = relatedTarget.nodeName;
    return relatedTarget;
  }
   catch (e) {
    return null;
  }
}

function $isOrHasChild(parent_0, child){
  return parent_0 === child || !!(parent_0.compareDocumentPosition(child) & 16);
}

function $toString(elem){
  var doc = elem.ownerDocument;
  var temp = elem.cloneNode(true);
  var tempDiv = doc.createElement('DIV');
  tempDiv.appendChild(temp);
  outer = tempDiv.innerHTML;
  temp.innerHTML = '';
  return outer;
}

function $getClientHeight(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

defineClass(155, 1, {});
_.toString$ = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 155);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(154, 155, {});
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 154);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 18);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next(), 61);
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

defineClass(181, 154, {});
_.getAssociatedType = function getAssociatedType(){
  return $clinit_ContextMenuEvent() , TYPE;
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 181);
function $clinit_ContextMenuEvent(){
  $clinit_ContextMenuEvent = emptyMethod;
  TYPE = new DomEvent$Type(new ContextMenuEvent);
}

function $dispatch(this$static){
  $eventPreventDefault(this$static.nativeEvent);
  $eventStopPropagation(this$static.nativeEvent);
}

function ContextMenuEvent(){
}

defineClass(142, 181, {}, ContextMenuEvent);
_.dispatch = function dispatch(handler){
  $dispatch(this, dynamicCast(handler, 158));
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ContextMenuEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ContextMenuEvent', 142);
defineClass(92, 1, {});
_.hashCode$ = function hashCode_1(){
  return this.index_0;
}
;
_.toString$ = function toString_4(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 92);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(46, 92, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 46);
function DomEvent$Type(flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = dynamicCast(registered.map_0['contextmenu'], 18);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, types);
  }
  types.add_1(this);
  this.name_0 = 'contextmenu';
}

defineClass(61, 46, {61:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 61);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, value_0){
  this$static.map_0['contextmenu'] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(146, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 146);
function CloseEvent_0(){
}

function fire_0(source){
  var event_0;
  if (TYPE_0) {
    event_0 = new CloseEvent_0;
    $fireEvent_0(source, event_0);
  }
}

defineClass(149, 154, {}, CloseEvent_0);
_.dispatch = function dispatch_0(handler){
  dynamicCast(handler, 185);
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_0(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 149);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
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
    $e0 = wrap($e0);
    if (instanceOf($e0, 34)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap($e0);
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

defineClass(47, 1, {26:1}, HandlerManager, HandlerManager_0);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 47);
defineClass(178, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 178);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_2(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  if (!type_0) {
    throw new NullPointerException_0('Cannot add a handler with a null type');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):$doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1;
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_1(handler);
}

function $doFire(this$static, event_0){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_0('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    handlers = $getDispatchList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next();
      try {
        event_0.dispatch(dynamicCast(handler, 67));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 9)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_3(causes, e);
        }
         else 
          throw unwrap($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get(this$static.map_0, type_0), 35);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put(this$static.map_0, type_0, sourceMap);
  }
  handlers = dynamicCast(sourceMap.get_0(source), 18);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type_0){
  var directHandlers;
  directHandlers = $getHandlerList(this$static, type_0);
  return directHandlers;
}

function $getHandlerList(this$static, type_0){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get(this$static.map_0, type_0), 35);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.get_0(null), 18);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01_0.size_1();) {
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_1(c$iterator.i++), 184));
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

defineClass(117, 178, {});
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

defineClass(145, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 145);
function UmbrellaException(causes){
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
  this.causes = causes;
}

function makeCause(causes){
  var iterator;
  iterator = causes.iterator();
  if (!iterator.hasNext()) {
    return null;
  }
  return dynamicCast(iterator.next(), 9);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext();) {
    t = dynamicCast(t$iterator.next(), 9);
    first?(first = false):(b.string += '; ' , b);
    $append(b, t.getMessage());
  }
  return b.string;
}

defineClass(34, 16, $intern_18, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 34);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(81, 34, $intern_18, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 81);
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
  response = new ResponseImpl(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static);
  new RequestTimeoutException(this$static.timeoutMillis);
  alert_0('could not read config file');
}

function Request(xmlHttpRequest, timeoutMillis){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw new NullPointerException;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException;
  }
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(122, 1, {}, Request);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 122);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(124, 79, {}, Request$1);
_.run = function run_0(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 124);
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
    $e0 = wrap($e0);
    if (instanceOf($e0, 21)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw requestPermissionException;
    }
     else 
      throw unwrap($e0);
  }
  xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request(xmlHttpRequest, this$static.timeoutMillis);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send('');
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 21)) {
      e = $e1;
      throw new RequestException(e.getMessage());
    }
     else 
      throw unwrap($e1);
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

defineClass(64, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var GET;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 64);
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

defineClass(42, 1, {}, RequestBuilder$Method);
_.toString$ = function toString_5(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 42);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(24, 39, $intern_19, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 24);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(143, 24, $intern_19, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 143);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(151, 24, $intern_19, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 151);
defineClass(179, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 179);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(123, 179, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 123);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw new IllegalArgumentException_0(name_0 + ' cannot be empty');
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw new NullPointerException_0(name_0 + ' cannot be null');
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initDims(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, count){
  return initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, 0, count);
}

function initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count){
  var elementTypeCategory, i, isLastDim, length_0, result;
  length_0 = dimExprs[index_0];
  isLastDim = index_0 == count - 1;
  elementTypeCategory = isLastDim?leafElementTypeCategory:0;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, count - index_0), castableTypeMapExprs[index_0], elementTypeIds[index_0], elementTypeCategory, result);
  if (!isLastDim) {
    ++index_0;
    for (i = 0; i < length_0; ++i) {
      result[i] = initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count);
    }
  }
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function charToString(x_0){
  return String.fromCharCode(x_0);
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, 2147483647), -2147483648);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException;
  }
  return null;
}

var stringCastMap;
function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap(e){
  var jse;
  if (instanceOf(e, 21)) {
    jse = dynamicCast(e, 21);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 9)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_20;
  a1 = value_0 >> 22 & $intern_20;
  a2 = value_0 < 0?$intern_21:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_13 + a.h * $intern_22;
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result, neg0, neg1, neg2;
  if (isNaN(value_0)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value_0 < $intern_23) {
    return $clinit_LongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_LongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_22) {
    a2 = round_int(value_0 / $intern_22);
    value_0 -= a2 * $intern_22;
  }
  a1 = 0;
  if (value_0 >= $intern_13) {
    a1 = round_int(value_0 / $intern_13);
    value_0 -= a1 * $intern_13;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && (neg0 = ~result.l + 1 & $intern_20 , neg1 = ~result.m + (neg0 == 0?1:0) & $intern_20 , neg2 = ~result.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_21 , result.l = neg0 , result.m = neg1 , result.h = neg2 , undefined);
  return result;
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_24, 197, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create(value_0));
    return result;
  }
  return create(value_0);
}

function gte(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function lt(a, b){
  return !gte(a, b);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & $intern_20, m:sum1 & $intern_20, h:sum2 & $intern_21};
}

function toDouble(a){
  var neg0, neg1, neg2;
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return $intern_23;
  }
  if (!gte(a, ZERO)) {
    return -toDoubleHelper((neg0 = ~a.l + 1 & $intern_20 , neg1 = ~a.m + (neg0 == 0?1:0) & $intern_20 , neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_21 , create0(neg0, neg1, neg2)));
  }
  return a.l + a.m * $intern_13 + a.h * $intern_22;
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_20, $intern_20, 524287);
  MIN_VALUE = create0(0, 0, $intern_25);
  fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad(new AnimCube);
}

function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplMozilla();
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function previewEvent(evt){
  $clinit_DOM();
  var ret;
  ret = fire_1(handlers_0, evt);
  if (!ret && !!evt) {
    $eventStopPropagation(evt);
    $eventPreventDefault(evt);
  }
  return ret;
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad_0(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function $getTypeInt(this$static){
  return $clinit_DOM() , $eventGetTypeInt(this$static.type);
}

function addNativePreviewHandler(handler){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  !TYPE_1 && (TYPE_1 = new GwtEvent$Type);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_0(null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler(handlers_0, TYPE_1, handler);
}

function getTypeInt(typeName){
  return $eventGetTypeInt(($clinit_DOM() , typeName));
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

function fire_1(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_1 && !!handlers && $isEventHandled(handlers, TYPE_1)) {
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

defineClass(91, 154, {}, Event$NativePreviewEvent);
_.dispatch = function dispatch_1(handler){
  $dispatch_0(this, dynamicCast(handler, 153));
}
;
_.getAssociatedType = function getAssociatedType_1(){
  return TYPE_1;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE_1, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 91);
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_0?TYPE_0:(TYPE_0 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), type_0, handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
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

var closeHandlersInitialized = false, handlers_1;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_2 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(116, 154, {}, Window$ClosingEvent);
_.dispatch = function dispatch_2(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_2(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 116);
function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = __substr(queryString, 1, queryString.length - 1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (!key.length) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull('encodedURLComponent', val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (!instanceOf($e0, 21))
          throw unwrap($e0);
      }
      values = dynamicCast(out.get_0(key), 18);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_1(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next(), 15);
    entry.setValue(unmodifiableList(dynamicCast(entry.getValue(), 18)));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = $wnd.location.search;
  if (!listParamMap || !$equals(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

var cachedQueryString = '', listParamMap;
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(78, 47, {26:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 78);
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
      return $intern_26;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return $intern_27;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_25;
    case 'touchstart':
      return $intern_14;
    case 'touchmove':
      return $intern_12;
    case 'touchend':
      return $intern_13;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_28;
    case 'gesturechange':
      return $intern_29;
    case 'gestureend':
      return $intern_30;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    $initSyntheticMouseUpEvents();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 29)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_2, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $initEventSystem(){
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $sinkBitlessEvent_0(elem, eventTypeName){
  var dispatchMap, dispatcher;
  $maybeInitializeEventSystem();
  dispatchMap = bitlessEventDispatchers;
  dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & $intern_26 && (elem.onerror = bits & $intern_26?dispatchEvent_1:null);
  chMask & $intern_27 && (elem.onmousewheel = bits & $intern_27?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_25 && (elem.onpaste = bits & $intern_25?dispatchEvent_1:null);
  chMask & $intern_14 && (elem.ontouchstart = bits & $intern_14?dispatchEvent_1:null);
  chMask & $intern_12 && (elem.ontouchmove = bits & $intern_12?dispatchEvent_1:null);
  chMask & $intern_13 && (elem.ontouchend = bits & $intern_13?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_28 && (elem.ongesturestart = bits & $intern_28?dispatchEvent_1:null);
  chMask & $intern_29 && (elem.ongesturechange = bits & $intern_29?dispatchEvent_1:null);
  chMask & $intern_30 && (elem.ongestureend = bits & $intern_30?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  previewEvent(evt);
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOMImplStandard();
  !previewEvent(evt);
  return;
}

function dispatchDragEvent(evt){
  $eventPreventDefault(evt);
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = evt.currentTarget;
  element['__gwtLastUnhandledEvent'] = evt.type;
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = evt.currentTarget;
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureElem, captureEventDispatchers, dispatchEvent_1, dispatchUnhandledEvent;
function $clinit_DOMImplMozilla(){
  $clinit_DOMImplMozilla = emptyMethod;
  $clinit_DOMImplStandard();
  captureEventDispatchers['DOMMouseScroll'] = dispatchCapturedMouseEvent;
}

function $initSyntheticMouseUpEvents(){
  $wnd.addEventListener('mouseout', $entry(function(evt){
    var cap = ($clinit_DOMImplStandard() , captureElem);
    if (cap && !evt.relatedTarget) {
      if ('html' == evt.target.tagName.toLowerCase()) {
        var muEvent = $doc.createEvent('MouseEvents');
        muEvent.initMouseEvent('mouseup', true, true, $wnd, 0, evt.screenX, evt.screenY, evt.clientX, evt.clientY, evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, evt.button, null);
        cap.dispatchEvent(muEvent);
      }
    }
  }
  ), true);
}

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
  bits & $intern_27 && elem.addEventListener('DOMMouseScroll', ($clinit_DOMImplStandard() , dispatchEvent_1), false);
}

function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire_0((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

defineClass(180, 19, $intern_15);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 180);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_1(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove(this$static, w){
  var elem, parent_0;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , parent_0 = elem.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0), elem);
    $remove_2(this$static.children, w);
  }
  return true;
}

defineClass(134, 180, $intern_15);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 134);
function $add_0(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function $remove_0(this$static, w){
  var removed;
  removed = $remove(this$static, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(135, 134, $intern_15);
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 135);
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
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next(), 19);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 9)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_3(caught, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(136, 81, $intern_18, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 136);
function AttachDetachException$1(){
}

defineClass(137, 1, {}, AttachDetachException$1);
_.execute_2 = function execute_5(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 137);
function AttachDetachException$2(){
}

defineClass(138, 1, {}, AttachDetachException$2);
_.execute_2 = function execute_6(w){
  $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 138);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  this.children = new WidgetCollection;
  $setElement(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    $onDetach(widget);
  }
   finally {
    $remove_6(widgetsToDetach, widget);
  }
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

function get_0(){
  $clinit_RootPanel();
  var rp;
  rp = dynamicCast($get(rootPanels, null), 51);
  if (rp) {
    return rp;
  }
  rootPanels.size_0 == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  $put(rootPanels, null, rp);
  $add_3(widgetsToDetach, rp);
  return rp;
}

defineClass(51, 135, $intern_31);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 51);
function RootPanel$1(){
}

defineClass(140, 1, {}, RootPanel$1);
_.execute_2 = function execute_7(w){
  w.attached && $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 140);
function RootPanel$2(){
}

defineClass(141, 1, {185:1, 67:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 141);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(139, 51, $intern_31, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 139);
function $add_1(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_24, 19, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_1(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_2(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_1(this$static, index_0);
}

function WidgetCollection(){
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_24, 19, 4, 0, 1);
}

defineClass(144, 1, {}, WidgetCollection);
_.iterator = function iterator_1(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 144);
function $next(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(83, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next = function next(){
  return $next(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 83);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('gecko1_8', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(58, 9, $intern_16);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 58);
defineClass(17, 58, $intern_16);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 17);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 9)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 9):null);
}

defineClass(93, 17, $intern_16, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 93);
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

defineClass(120, 1, {184:1}, SimpleEventBus$2);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 120);
defineClass(70, 1, {});
_.toString$ = function toString_6(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 70);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(48, 16, $intern_16, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 48);
function digit(c, radix){
  if (radix < 2 || radix > 36) {
    return -1;
  }
  if (c >= 48 && c < 48 + (radix < 10?radix:10)) {
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

function toLowerCase(c){
  return String.fromCharCode(c).toLowerCase().charCodeAt(0);
}

function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(30, 16, $intern_16, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 30);
function __parseAndValidateInt(s, radix){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  if (radix < 2 || radix > 36) {
    throw new NumberFormatException('radix ' + radix + ' out of range');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit(s.charCodeAt(i), radix) == -1) {
      throw new NumberFormatException('For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, radix);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
   else if (isTooLow || toReturn > 2147483647) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
  return toReturn;
}

defineClass(68, 1, {3:1, 68:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 68);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(40, 16, $intern_16, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 40);
function IllegalStateException(s){
  RuntimeException_0.call(this, s);
}

defineClass(44, 16, $intern_16, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 44);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(52, 16, $intern_16, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 52);
function Integer(value_0){
  this.value_0 = value_0;
}

function toUnsignedRadixString(value_0, radix){
  return (value_0 >>> 0).toString(radix);
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(31, 68, {3:1, 182:1, 31:1, 68:1}, Integer);
_.equals$ = function equals_0(o){
  return instanceOf(o, 31) && dynamicCast(o, 31).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_2(){
  return this.value_0;
}
;
_.toString$ = function toString_8(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 31);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, {3:1, 6:1, 11:1, 5:1}, 31, 256, 0, 1);
}

var boxedValues_0;
function abs_0(x_0){
  return x_0 <= 0?0 - x_0:x_0;
}

function cos_0(x_0){
  return Math.cos(x_0);
}

function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function min_1(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function sin_0(x_0){
  return Math.sin(x_0);
}

function sqrt_0(x_0){
  return Math.sqrt(x_0);
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(33, 16, $intern_16, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 33);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(43, 40, $intern_16, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 43);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(25, 1, {3:1, 25:1}, StackTraceElement);
_.equals$ = function equals_1(other){
  var st;
  if (instanceOf(other, 25)) {
    st = dynamicCast(other, 25);
    return this.lineNumber == st.lineNumber && equals_11(this.methodName, st.methodName) && equals_11(this.className, st.className) && equals_11(this.fileName, st.fileName);
  }
  return false;
}
;
_.hashCode$ = function hashCode_3(){
  return hashCode_9(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_24, 1, 3, [valueOf(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.toString$ = function toString_9(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 25);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return this$static === other;
}

function $indexOf_0(this$static, str){
  return this$static.indexOf(str);
}

function $indexOf_1(this$static, str, startIndex){
  return this$static.indexOf(str, startIndex);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_6, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_26) {
    hiSurrogate = 55296 + (codePoint - $intern_26 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - $intern_26 & 1023) & 65535;
    return valueOf_0(hiSurrogate) + valueOf_0(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

function valueOf_0(x_0){
  return String.fromCharCode(x_0);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(s){
  this.string = s;
}

defineClass(49, 70, {183:1}, StringBuilder);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 49);
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(41, 16, $intern_16, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 41);
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

function $toString_0(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(172, 1, {});
_.contains = function contains(o){
  return $advanceToFind(this, o);
}
;
_.toString$ = function toString_10(){
  return $toString_0(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 172);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static)).this$01); $hasNext(iter);) {
    entry = (checkStructuralChange(iter.this$01, iter) , checkCriticalElement($hasNext(iter)) , dynamicCast(iter.current.next(), 15));
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_1(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(171, 1, {35:1});
_.equals$ = function equals_2(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 35)) {
    return false;
  }
  otherMap = dynamicCast(obj, 35);
  if (this.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next(), 15);
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
_.hashCode$ = function hashCode_4(){
  return hashCode_10(new AbstractHashMap$EntrySet(this));
}
;
_.put = function put(key, value_0){
  throw new UnsupportedOperationException_0('Put not supported on this map');
}
;
_.size_1 = function size_1(){
  return (new AbstractHashMap$EntrySet(this)).this$01.size_0;
}
;
_.toString$ = function toString_11(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder('{');
  comma = false;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , dynamicCast(entry$iterator.current.next(), 15));
    comma?(sb.string += ', ' , sb):(comma = true);
    $append(sb, $toString_1(this, entry.getKey()));
    sb.string += '=';
    $append(sb, $toString_1(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 171);
function $containsKey(this$static, key){
  return isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get(this$static, key){
  return isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_2(key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_2(key) === undefined);
}

function $put(this$static, key, value_0){
  return isJavaString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):this$static.stringMap.put_0(key, value_0);
}

function $remove_3(this$static, key){
  return $remove_7(this$static.hashCodeMap, key);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

defineClass(97, 171, {35:1});
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
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 97);
defineClass(173, 172, $intern_32);
_.equals$ = function equals_3(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 36)) {
    return false;
  }
  other = dynamicCast(o, 36);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_5(){
  return hashCode_10(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 173);
function $contains(this$static, o){
  if (instanceOf(o, 15)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 15));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(32, 173, $intern_32, AbstractHashMap$EntrySet);
_.contains = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_2(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 32);
function $hasNext(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function $next_0(this$static){
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext(this$static)) , dynamicCast(this$static.current.next(), 15);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(50, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_0(){
  return $hasNext(this);
}
;
_.next = function next_0(){
  return $next_0(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 50);
defineClass(176, 172, {18:1});
_.add_0 = function add_0(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_1 = function add_1(obj){
  this.add_0(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_4(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 18)) {
    return false;
  }
  other = dynamicCast(o, 18);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next();
    elemOther = iterOther.next();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_6(){
  return hashCode_11(this);
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
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 176);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(59, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_1(){
  return this.i < this.this$01_0.size_1();
}
;
_.next = function next_1(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_1(this.i++);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 59);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(76, 59, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_1(--this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 76);
function $iterator(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(71, 173, $intern_32, AbstractMap$1);
_.contains = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_4(){
  return $iterator(this);
}
;
_.size_1 = function size_4(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 71);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(100, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_2(){
  return $hasNext(this.val$outerIter2);
}
;
_.next = function next_2(){
  var entry;
  entry = $next_0(this.val$outerIter2);
  return entry.getKey();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 100);
defineClass(98, 1, $intern_33);
_.equals$ = function equals_5(other){
  var entry;
  if (!instanceOf(other, 15)) {
    return false;
  }
  entry = dynamicCast(other, 15);
  return equals_11(this.key, entry.getKey()) && equals_11(this.value_0, entry.getValue());
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
_.hashCode$ = function hashCode_7(){
  return hashCode_16(this.key) ^ hashCode_16(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_12(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 98);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(99, 98, $intern_33, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 99);
defineClass(177, 1, $intern_33);
_.equals$ = function equals_6(other){
  var entry;
  if (!instanceOf(other, 15)) {
    return false;
  }
  entry = dynamicCast(other, 15);
  return equals_11(this.getKey(), entry.getKey()) && equals_11(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_8(){
  return hashCode_16(this.getKey()) ^ hashCode_16(this.getValue());
}
;
_.toString$ = function toString_13(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 177);
function $add_2(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $indexOf_2(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_11(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_4(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $remove_5(this$static, o){
  var i;
  i = $indexOf_2(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  this$static.remove(i);
  return true;
}

function $toArray(this$static, out){
  var i, size_0, result;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = initializeArrayElementsWithDefaults(0, size_0) , initValues(getClass__Ljava_lang_Class___devirtual$(out), out.castableTypeMap$, out.__elementTypeId$, out.__elementTypeCategory$, result) , result));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initDim(Ljava_lang_Object_2_classLit, $intern_24, 1, 0, 3, 1);
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(27, 176, $intern_34, ArrayList);
_.add_0 = function add_2(index_0, o){
  checkPositionIndex(index_0, this.array.length);
  splice_0(this.array, index_0, 0, o);
}
;
_.add_1 = function add_3(o){
  return $add_2(this, o);
}
;
_.contains = function contains_2(o){
  return $indexOf_2(this, o, 0) != -1;
}
;
_.get_1 = function get_3(index_0){
  return checkElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.remove = function remove(index_0){
  return $remove_4(this, index_0);
}
;
_.size_1 = function size_5(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 27);
function hashCode_9(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_10(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_11(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 53)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(104, 176, $intern_34, Collections$EmptyList);
_.contains = function contains_3(object){
  return false;
}
;
_.get_1 = function get_4(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_5(){
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
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 104);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(105, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_3(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next = function next_3(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_1(){
  throw new NoSuchElementException;
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 105);
function Collections$UnmodifiableCollection(coll){
  this.coll = coll;
}

defineClass(72, 1, {});
_.add_1 = function add_4(o){
  throw new UnsupportedOperationException;
}
;
_.iterator = function iterator_6(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.size_1 = function size_7(){
  return this.coll.size_1();
}
;
_.toString$ = function toString_14(){
  return this.coll.toString$();
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 72);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(74, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext = function hasNext_4(){
  return this.it.hasNext();
}
;
_.next = function next_4(){
  return this.it.next();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 74);
function Collections$UnmodifiableList(list){
  Collections$UnmodifiableCollection.call(this, list);
  this.list = list;
}

defineClass(73, 72, {18:1}, Collections$UnmodifiableList);
_.equals$ = function equals_7(o){
  return this.list.equals$(o);
}
;
_.get_1 = function get_5(index_0){
  return this.list.get_1(index_0);
}
;
_.hashCode$ = function hashCode_12(){
  return this.list.hashCode$();
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
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 73);
function Collections$UnmodifiableListIterator(lit){
  Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.lit = lit;
}

defineClass(75, 74, {}, Collections$UnmodifiableListIterator);
_.hasPrevious = function hasPrevious_1(){
  return this.lit.hasPrevious();
}
;
_.previous = function previous_2(){
  return this.lit.previous();
}
;
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableListIterator', 75);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(106, 1, {35:1}, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_0(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals$ = function equals_8(o){
  return this.map_0.equals$(o);
}
;
_.get_0 = function get_6(key){
  return this.map_0.get_0(key);
}
;
_.hashCode$ = function hashCode_13(){
  return this.map_0.hashCode$();
}
;
_.put = function put_1(key, value_0){
  throw new UnsupportedOperationException;
}
;
_.size_1 = function size_8(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_15(){
  return this.map_0.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 106);
defineClass(107, 72, $intern_32);
_.equals$ = function equals_9(o){
  return this.coll.equals$(o);
}
;
_.hashCode$ = function hashCode_14(){
  return this.coll.hashCode$();
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 107);
function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  Collections$UnmodifiableCollection.call(this, s);
}

defineClass(108, 107, $intern_32, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator = function iterator_7(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 108);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(111, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.hasNext = function hasNext_5(){
  return this.val$it2.hasNext();
}
;
_.next = function next_5(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(dynamicCast(this.val$it2.next(), 15));
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 111);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(109, 1, $intern_33, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals$ = function equals_10(o){
  return this.entry.equals$(o);
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
_.hashCode$ = function hashCode_15(){
  return this.entry.hashCode$();
}
;
_.setValue = function setValue_0(value_0){
  throw new UnsupportedOperationException;
}
;
_.toString$ = function toString_16(){
  return this.entry.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 109);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(110, 73, {18:1, 53:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 110);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(150, 16, $intern_16, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 150);
function $equals_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function $getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}

function HashMap(){
  $reset(this);
}

defineClass(23, 97, {3:1, 35:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 23);
function $add_3(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_6(this$static, o){
  return $remove_3(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(62, 173, {3:1, 36:1}, HashSet);
_.contains = function contains_4(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_8(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.size_1 = function size_9(){
  return this.map_0.size_0;
}
;
_.toString$ = function toString_17(){
  return $toString_0(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 62);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + $getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_0(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key == null?'0':'' + $getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_7(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + $getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if ($equals_0(key, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(80, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 80);
function $hasNext_0(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_24, 15, 0, 0, 1);
}

defineClass(130, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_6(){
  return $hasNext_0(this);
}
;
_.next = function next_6(){
  return checkCriticalElement($hasNext_0(this)) , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 130);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(128, 80, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_1(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 128);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(129, 27, $intern_34, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove = function remove_0(index_0){
  var removed;
  return removed = dynamicCast($remove_4(this, index_0), 15) , $remove_7(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 129);
function InternalJsMapFactory(){
}

defineClass(125, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 125);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto(){
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
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(127, 125, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 127);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(126, 125, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 126);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_8(this$static, key){
  var value_0;
  value_0 = this$static.backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(60, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_2 = function get_7(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put_0 = function put_2(key, value_0){
  return $put_1(this, key, value_0);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 60);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(115, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_7(){
  return this.i < this.val$keys2.length;
}
;
_.next = function next_7(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.i++]);
}
;
_.i = 0;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 115);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(77, 177, $intern_33, InternalJsStringMap$2);
_.getKey = function getKey_1(){
  return this.val$key2;
}
;
_.getValue = function getValue_1(){
  return this.this$01.get_2(this.val$key2);
}
;
_.setValue = function setValue_1(object){
  return this.this$01.put_0(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 77);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(112, 60, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_1(entry);
    }
  }
  return list.iterator();
}
;
_.get_2 = function get_8(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.put_0 = function put_3(key, value_0){
  return $put_1(this, ':' + key, value_0);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 112);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(114, 27, $intern_34, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove = function remove_1(index_0){
  var removed;
  return removed = dynamicCast($remove_4(this, index_0), 15) , $remove_8(this.this$11, ':' + dynamicCastToString(removed.getKey())) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 114);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(113, 60, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 113);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(45, 16, $intern_16, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 45);
function equals_11(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_16(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

var D_classLit = createForPrimitive('double', 'D'), I_classLit = createForPrimitive('int', 'I'), C_classLit = createForPrimitive('char', 'C'), Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 160), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 162), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 165), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'gecko1_8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=animcube-0.js

