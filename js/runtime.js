"use strict";$(function(){var s=Math.round(new Date("4/17/2019 00:00:00").getTime()/1e3);$("#runtime").flipcountdown({size:"xs",tick:function(){function t(t){return 9<t?t:"0"+t}var e=Math.abs(Math.round((new Date).getTime()/1e3)-s),n=86400,r=3600,a=parseInt(e/n),i=parseInt(e%n/r),u=parseInt(e%n%r/60);return t(a)+" "+t(i)+" "+t(u)+" "+t(e%n%r%60)}})});