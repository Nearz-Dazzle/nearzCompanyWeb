!function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/wp-content/themes/phorest/dist/",a(a.s=65)}({0:function(e,t){e.exports=jQuery},65:function(e,t,a){e.exports=a(66)},66:function(e,t,a){(function(e,t){var a=1,n=1;function i(t){var a=':not([name="lastname"])';"de"==e("html").attr("data-region")&&(a="");var n={};return e(".form-field").removeClass("error"),!e(t+' input:not([name="website"])'+a+", "+t+" select:visible").filter(function(){if(["firstname","email","phone","company","state","county"].includes(e(this).attr("name"))){var t=e(this).attr("name");if(!(t in n))return n[t]=!0,e(this).addClass("error"),""===e(this).val()||null===e(this).val()}}).length>0}function s(e){return/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)}function o(e,t,a){var n="";if(a){var i=new Date;i.setTime(i.getTime()+24*a*60*60*1e3),n="; expires="+i.toUTCString()}document.cookie=e+"="+(t||"")+n+"; path=/"}function r(t){var a=t.attr("id");t.parent().find("label").removeClass("selected"),e('#quiz label[for="'+a+'"]').addClass("selected"),"q4"==a||"q4-text"==a||e("[data-next]").removeClass("disabled"),i('[data-funnel="4"] .form-field')?e(".final-submit [data-next]").removeClass("non-access"):e(".final-submit [data-next]").addClass("non-access")}e("#quiz input").click(function(){r(e(this))}),e("#quiz").on("input",function(){r(e(this))}),e("#quiz select").on("change",function(){e(this).addClass("text-grey-dark"),e(this).closest(".form-field").removeClass("empty"),r(e(this))}),e(".funnel-form-wrapper").length&&o("funnel_form_section",n,7),e("#q4").change(function(){""!=e(this).val()&&s(e(this).val())&&e("[data-next]").removeClass("disabled")}),e("[data-next]").click(function(){if(!e(this).hasClass("disabled")){document.getElementById("quiz").scrollIntoView();var t=e(".questions p:visible"),o=e(".answers > div:visible");if(e("[data-next]").addClass("disabled"),t.fadeOut(function(){t.next().fadeIn()}),o.fadeOut(function(){o.next().fadeIn().css("display","flex")}),0==t.next().next().length){var r=e("html").attr("data-region");"fi"==r?e("[data-next]").html("Lähetä"):"de"==r&&e("[data-next]").html("Senden"),s(e(this).val())&&e("[data-next]").removeClass("disabled"),e(".progress [data-next]").addClass("hidden"),i('[data-funnel="4"] .form-field')?(e(".final-submit [data-next]").removeClass("non-access").removeClass("hidden"),e(".final-submit [data-next]").attr("type","submit")):(e(".final-submit [data-next]").addClass("non-access").removeClass("hidden"),e(".final-submit [data-next]").attr("type","text"))}else e(".progress [data-next]").removeClass("hidden"),e(".final-submit [data-next]").addClass("disabled").addClass("hidden");if(n%5==0?(a++,updateTitle=!0):updateTitle=!1,++n<=4)l(a,n,updateTitle);else{var d=e("#quiz").outerHeight();e("#quiz").css("min-height",d),e("#quiz-form, .titles").fadeOut(function(){e("#quizGetReport").fadeIn(),e("#generating-report").fadeIn(),e("#quiz").css("min-height","484px"),e(".ajax-loader").fadeIn(),e(".ajax-loader").css("display","block")})}n>1||a>1?e("[data-back]").removeClass("disabled"):e("[data-back]").addClass("disabled")}}),disableBack=!1,e("[data-back]").click(function(){if(!e(this).hasClass("disabled")&&!disableBack){var t=e(".questions p:visible"),i=e(".answers > div:visible");disableBack=!0,t.fadeOut(function(){t.prev().fadeIn()}),i.fadeOut(function(){i.prev().fadeIn().css("display","flex"),disableBack=!1});var s=e("html").attr("data-region");if("fi"==s?e("#q-next").html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg><span class="tooltip invisible absolute rounded-lg text-center text-white bg-grey-darkest">Seuraava</span>'):"de"==s?e("#q-next").html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg><span class="tooltip invisible absolute rounded-lg text-center text-white bg-grey-darkest">Weiter</span>'):e("#q-next").html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg><span class="tooltip invisible absolute rounded-lg text-center text-white bg-grey-darkest">NEXT</span>'),e("[data-next]").removeClass("disabled"),i.find("input").length>0){var o=i.find("input").attr("name");e('input[name="'+o+'"]').prop("checked",!1),i.find("label").removeClass("selected")}else i.find("select").length>0&&i.find("select").prop("selectedIndex",0);n%1==1&&1!=a?(a--,updateTitle=!0):updateTitle=!1,l(a,--n,updateTitle),n>1||a>1?(e("[data-back]").removeClass("disabled"),e(".progress [data-next]").removeClass("hidden"),e(".final-submit [data-next]").addClass("disabled").addClass("hidden")):e("[data-back]").addClass("disabled")}});function l(t,a,n){var i=25*a;e(".progress span").width(i+"%"),e("#currentQuestion span").html(a),e("[data-currentfunnel]").attr("data-currentfunnel",a);var s=e("html").attr("data-region");switch(t){case 1:title="fi"==s?"Verkkomarkkinointi":"Online Marketing",icon="ohs-online-marketing";break;case 2:title="fi"==s?"Sosiaalinen media":"de"==s?"Soziale Medien":"Social Media",icon="ohs-social-media";break;case 3:title="fi"==s?"Online-maine":"Online Reputation",icon="ohs-online-reputation";break;case 4:title="fi"==s?"Verkkosivut":"de"==s?"Eure Salon-Webseite":"Your Salon Website",icon="ohs-salon-website"}1==n&&e(".titles").fadeOut(function(){e("#title").html(title),e(".sectionIcon").hide(),e("#"+icon).show(),e(".titles").fadeIn()}),3!=a&&3!=t||(e("[data-next]").removeAttr("disabled"),e("[data-next]").removeClass("disabled")),o("funnel_form_section",a,7)}e(".clientButtons .button").click(function(){e(this).hasClass("active")||(e(".clientButtons .button.active").removeClass("active"),e(this).addClass("active")),e(".forms-container").fadeIn(),e(this).hasClass("client")?(e("#quizGetReport .phorest-form.notClient, #quizGetReport .form").fadeOut(function(){e("#quizGetReport .phorest-form.client-form").fadeIn()}),!0):(e("#quizGetReport .phorest-form.client-form").fadeOut(function(){e("#quizGetReport .phorest-form.notClient, #quizGetReport .form").fadeIn(),e("#quiz-form").find('.answers > div:not(".back-next")').clone().appendTo(".phorest-form.notClient"),e("#quiz-form").find("select").each(function(){var t=e(this).find(":selected").text(),a=e(this).attr("id");e(".phorest-form.notClient").find("select#"+a).find('option[value="'+t+'"]').prop("selected",!0)})}),!1)}),e("#q1").change(function(){switch(e(this).val()){case"Australia":e("#q1-region").val("AUS");break;case"Austria":e("#q1-region").val("DACH");break;case"Canada":e("#q1-region").val("CA");break;case"Finland":e("#q1-region").val("FI");break;case"Germany":e("#q1-region").val("DACH");break;case"Ireland(Rep.)":e("#q1-region").val("Ireland");break;case"United Kingdom(Northern Ireland)":e("#q1-region").val("UK");break;case"Switzerland":e("#q1-region").val("DACH");break;case"United Kingdom(Mainland)":e("#q1-region").val("UK");break;case"United States":e("#q1-region").val("US");break;default:e("#q1-region").val("Ireland")}}),e("#successSubmissionTrigger").click(function(){e("#quizGetReport").fadeOut(function(){var t=e("html").attr("data-region");e.ajax({url:ajax_object.ajax_url,type:"post",beforeSend:function(){e("[data-next]").fadeOut(),e(".generating-report, .ajax-loader").fadeIn(function(){"us"==t||"ca"==t?e("html, body").animate({scrollTop:e("#introText").length?e("#introText").offset().top-180:0},500):e("html, body").animate({scrollTop:e("#quiz").length?e("#quiz").offset().top:0},500)})},success:function(t){e("#quizReport").removeClass("hidden"),e(".generating-report").fadeOut(function(){e("#downloadAsPDF").appendTo(e("#quizReport")),e("#quizReport").fadeIn()}),e(".ajax-loader").fadeOut()}}),e(".ajax-loader").fadeOut()})}),t('<div class="quantity-nav z-10"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertBefore(".customdemo-quantity input"),t(".customdemo-quantity").each(function(){var a=t(".house-wrapper img"),n=t(this),i=n.find('input[type="number"]'),s=n.find(".quantity-up"),o=n.find(".quantity-down"),r=i.attr("min"),l=i.attr("max"),d="";s.click(function(){var t=parseFloat(i.val());t>=l?d=t:(d=t+1)<=10&&(a.clone().prependTo(".restof-houses"),e(".more-houses").hasClass("hidden")&&d>=10&&e(".more-houses").removeClass("hidden")),n.find("input").val(d),n.find("input").trigger("change"),n.find("input").trigger("input")}),o.click(function(){var t=parseFloat(i.val());if(t<=r)var a=t;else a=t-1,e(".restof-houses").length>0&&(a<=10&&e(".restof-houses img:first-child").remove(),!e(".more-houses").hasClass("hidden")&&a<=10&&e(".more-houses").addClass("hidden"));n.find("input").val(a),n.find("input").trigger("change")})})}).call(t,a(0),a(0))}});