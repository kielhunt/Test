function loadLang(){document.getElementById("stringOptionTitle").textContent=chrome.i18n.getMessage("optionTitle");document.getElementById("stringOptionTitle2").innerHTML=chrome.i18n.getMessage("optionTitle");document.getElementById("stringPrimaryLanguage").innerHTML=chrome.i18n.getMessage("primaryLanguage");document.getElementById("stringSecondaryLanguage").innerHTML=chrome.i18n.getMessage("secondaryLanguage");document.getElementById("stringPageWidth").innerHTML=chrome.i18n.getMessage("pageWidth");
document.getElementById("stringOptionShowFeatureArticle").innerHTML=chrome.i18n.getMessage("optionShowFeatureArticle");document.getElementById("stringSave").innerHTML=chrome.i18n.getMessage("save");document.getElementById("stringOptionLanguageHints").innerHTML=chrome.i18n.getMessage("optionLanguageHints");document.getElementById("stringCopyright1").innerHTML=chrome.i18n.getMessage("copyright1");document.getElementById("stringCopyright2").innerHTML=chrome.i18n.getMessage("copyright2");document.getElementById("stringCopyright3").innerHTML=
chrome.i18n.getMessage("copyright3");document.getElementById("stringNormal").innerHTML=chrome.i18n.getMessage("normal");document.getElementById("stringWide").innerHTML=chrome.i18n.getMessage("wide");document.getElementById("fontSize").innerHTML=chrome.i18n.getMessage("fontSize");document.getElementById("stringNormal2").innerHTML=chrome.i18n.getMessage("normal");document.getElementById("stringLarge").innerHTML=chrome.i18n.getMessage("large")}var stringSavedTimeout;
function save_options(){localStorage.current_language=$("#primaryLang").val();localStorage.secondary_language=$("#secondaryLang").val();var a=document.getElementById("showFeatureArticle");localStorage.showFeatureArticle=a.checked;localStorage.pageWidth=$("#pageWidthSelect").val();localStorage.fontSize=$("#fontSizeSelect").val();if(localStorage.enableContextMenu!=document.getElementById("enableContextMenu").checked)localStorage.enableContextMenu=document.getElementById("enableContextMenu").checked,
chrome.contextMenus.removeAll(),localStorage.enableContextMenu!="false"&&chrome.extension.getBackgroundPage().addContextMenu();document.getElementById("stringSave").innerHTML=chrome.i18n.getMessage("saved");clearTimeout(stringSavedTimeout);stringSavedTimeout=setTimeout(function(){document.getElementById("stringSave").innerHTML=chrome.i18n.getMessage("save")},2E3)}
function restore_options(){localStorage.showFeatureArticle=="true"?$("#showFeatureArticle").attr("checked","checked"):$("#showFeatureArticle").removeAttr("checked");localStorage.enableContextMenu!="false"?$("#enableContextMenu").attr("checked","checked"):$("#enableContextMenu").removeAttr("checked");var a=localStorage.current_language;a&&($("#primaryLang").find('option[value="'+a+'"]').length==0?($("#primaryLang").val("custom"),$("#custom1").text("Custom ("+a+")"),$("#custom1").val(a)):$("#primaryLang").val(a));
if(a=localStorage.secondary_language)$("#secondaryLang").find('option[value="'+a+'"]').length==0?($("#secondaryLang").val("custom"),$("#custom2").text("Custom ("+a+")"),$("#custom2").val(a)):$("#secondaryLang").val(a);(a=localStorage.pageWidth)&&$("#pageWidthSelect").val(a);a=localStorage.fontSize||"0.8";$("#fontSizeSelect").val(a)}
$(document).ready(function(){loadLang();restore_options();$(saveOptions).click(function(){save_options()});$("#primaryLang").change(function(){$("#primaryLang option:selected")[0].id=="custom1"&&($("#langType").attr("lang","p"),$("#dialogBox").show())});$("#secondaryLang").change(function(){$("#secondaryLang option:selected")[0].id=="custom2"&&($("#langType").attr("lang","s"),$("#dialogBox").show())});$("#newLangAdd").click(function(){var a=$("#newLangValue").val();a.length==2&&($("#langType").attr("lang")==
"p"?$("#custom1").val(a):$("#langType").attr("lang")=="s"&&$("#custom2").val(a));$("#dialogBox").hide()});$("#newLangCancel").click(function(){$("#dialogBox").hide();$("#langType").attr("lang")=="p"?$("#primaryLang").val(localStorage.current_language||"en"):$("#langType").attr("lang")=="s"&&$("#secondaryLang").val(localStorage.secondary_language||null)})});
