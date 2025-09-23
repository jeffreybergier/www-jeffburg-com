// Created by iWeb 3.0.2 local-build-20250923

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="283" height="562" style="height: 546px; left: 0px; position: absolute; top: 345px; width: 283px; z-index: 1; "><param name="src" value="../../../../Media/apps-video-waterme.mp4" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="283" height="562" style="height: 546px; left: 0px; position: absolute; top: 345px; width: 283px; z-index: 1; "><param name="src" value="15_WaterMe__Gardening_Reminders_files/apps-video-waterme.jpg"/><param name="target" value="myself"/><param name="href" value="../../../../../Media/apps-video-waterme.mp4"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="283" height="562" data="../../../../Media/apps-video-waterme.mp4" style="height: 546px; left: 0px; position: absolute; top: 345px; width: 283px; z-index: 1; "><param name="src" value="../../../../Media/apps-video-waterme.mp4"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('../../../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:-13.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{dynamicallyPopulate();loadMozillaCSS('15_WaterMe__Gardening_Reminders_files/15_WaterMe__Gardening_RemindersMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../../../../Media/transparent.gif');fixupIECSS3Opacity('id5');BlogFixupPreviousNext();applyEffects()}
function onPageUnload()
{Widget.onunload();}
