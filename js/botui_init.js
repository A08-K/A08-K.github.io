function botui_init() {
  var botui = new BotUI("hello-akilar");
  botui.message.add({
    delay: 800,
    content: "Hi, æ¬¢è¿åä¸´ð"
  }).then(function() {
    botui.message.add({
      delay: 1100,
      content: "ææ¯åºé¿Augenstern_Yð"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "å¾æè°¢æ¨è¯å¨è¿éé©»è¶³çå»â¤ï¸~ð"
      }).then(function() {
        botui.action.button({
          delay: 1600,
          action: [{
            text: "ç¶åå¢~ð",
            value: "sure"
          }, {
            text: "å°±è¿æ ·å§ï¼ææï¼ð",
            value: "skip"
          }]
        }).then(function(a) {
          "sure" == a.value && sure();
          "skip" == a.value && end()
        })
      })
    })
  })
}
// function botui_init() {
//   var botui = new BotUI("hello-akilar");
//   botui.message.add({
//     delay: 800,
//     content: "Hi, æ¬¢è¿åä¸´Akilarã®ç³æå±ð"
//   }).then(function() {
//     botui.message.add({
//       delay: 1100,
//       content: "ææ¯åºé¿Akilarð"
//     }).then(function() {
//       botui.message.add({
//         delay: 1100,
//         content: "ä½ ä¹å¯ä»¥å«æAki~ð"
//       }).then(function() {
//         botui.action.button({
//           delay: 1600,
//           action: [{
//             text: "ææ³ç¥éæ´å¤å³äºç³æå±çæäº!ð",
//             value: "sure"
//           }, {
//             text: "å¥½çï¼å°±è¿æ ·å§ï¼ææï¼ð",
//             value: "skip"
//           }]
//         }).then(function(a) {
//           "sure" == a.value && sure();
//           "skip" == a.value && end()
//         })
//       })
//     })
//   });
//   var sure = function() {
//       botui.message.add({
//         delay: 600,
//         content: "ðððððð"
//       }).then(function() {
//         secondpart()
//       })
//     },
//     end = function() {
//       botui.message.add({
//         delay: 600,
//         content: "w(ï¾Ðï¾)w ä¸è¦èµ°ï¼åççåï¼"
//       })
//     },
//     secondpart = function() {
//       botui.message.add({
//         delay: 5000,
//         content: "é¦åå¢ï¼å¾æè°¢æ¨è¯å¨è¿éé©»è¶³çå»â¤ï¸ãAkilarã®ç³æå±æ¯ä¸ä¸ªä¸ªäººæ§è´¨çåå®¢ï¼æä¼å¨è¿éåè¡¨åç§åæ ·çåå®¹ã"
//       }).then(function() {
//         botui.message.add({
//           delay: 15000,
//           content: "èµ·è¿ä¸ªåå­æ¯å ä¸ºæ³å°äºå®åçå½åæ¹å¼ï¼å®ååä»£çæ¬é½ç¨çåçåå­å½åð°ï¼ä¾å¦9æ¯Pineapple cake(è èèç³)ð°ï¼8æ¯Oreo(å¥¥å©å¥¥)ð©ï¼é£æå¹²èå°±çå°åºäºãå æ­¤å¯ä»¥çå°æçåç±»éé¢é½æ¯ç³ãä¹åå°±åç°äºä¸ä¸ªå¾çº ç»çé®é¢ï¼é¤äºå·§ååï¼ææ³ä¸å°å¶ä»çä¸å¸¦ç³å­çç³æãå½ç¶äºï¼æ ä¼¤å¤§éãææªå¯ï¼è¶é¾åçå¥½ä¹ï¼ååæé£ä¹åæ¬¢å·§ååð«ï¼ææ¯ä¸ä¼æå®å æçã"
//         }).then(function() {
//           botui.message.add({
//             delay: 5000,
//             content: "åç±»ä¹æä¸ç¹æçæ¶è¶£å³å¨ãð"
//           }).then(function() {
//             botui.message.add({
//               delay: 8000,
//               content: "æ¯å¦å·§ååæ¯Ubuntuçæç¨ï¼æ£è±ç³æ¯windowsçæç¨ï¼ç³è«è¦å°±æ¯åç§éç¨æç¨å¦ï¼ð"
//             }).then(function() {
//               botui.message.add({
//                 delay: 5000,
//                 content: "æ³¡æ³¡ç³æ¯ä¸ªäººæ¥è®°å¦ï¼æµæ°´è´¦ä¸æ ·çï¼ä¸è¦çï¼å¾ç¾è»çãð¶"
//               }).then(function() {
//                 botui.message.add({
//                   delay: 4000,
//                   content: "æä¸ªäººææ¨èçæ¯å¤ªå¦ç³çåå¦ï¼è¿éå¯é½æ¯æå¼ä»¥ä¸ºè±ªçä½åå¢ðï¼é©¬å¡é¾éæè§çå§ï¼é¿ç¯è¿è½½å¯¹ææ¥è¯´æ¯ä¸ªææï¼å¾å¯è½æ­æ´ãð»"
//                 }).then(function() {
//                   botui.action.button({
//                     delay: 1100,
//                     action: [{
//                       text: "ä¸ºä»ä¹å«Akilarã®ç³æå±å¢ï¼ð¤",
//                       value: "why-mashiro"
//                     }]
//                   }).then(function(a) {
//                     thirdpart()
//                   })
//                 })
//               })
//             })
//           })
//         })
//       })
//     },
//     thirdpart = function() {
//       botui.message.add({
//         delay: 1e3,
//         content: "è¯¶ï¼Akilaræ¯æçè±æååðï¼ç³æå±ï¼emmð¤ï¼å¤§æ¦æ¯å ä¸ºæå¨ç°å®ä¸­ä¹å¾æ³å¼ä¸å®¶ç³æå±å§ã"
//       }).then(function() {
//         botui.action.button({
//           delay: 1500,
//           action: [{
//             text: "ð²ï¼é£è±æåä¸ºä»ä¹å«Akilarå¢ï¼",
//             value: "why-cat"
//           }]
//         }).then(function(a) {
//           fourthpart()
//         })
//       })
//     },
//     fourthpart = function() {
//       botui.message.add({
//         delay: 3000,
//         content: "è¿ä¸ªæ¯å ä¸ºæçåå­çéä¹ç¨æ¥æåé³ï¼å¶ä¸­æä¸èæ¯Akiraï¼ç¨è±æè°é³æ¼åå°±æ¯Akilaräº "
//       }).then(function() {
//         botui.message.add({
//           delay: 3000,
//           content: "çµææ¥èªäºååç¥å~"
//         }).then(function() {
//           botui.action.button({
//             delay: 1500,
//             action: [{
//               text: "æ¹ä¾¿éé²ä¸ä¸çååï¼ð",
//               value: "why-domain"
//             }]
//           }).then(function(a) {
//             fifthpart()
//           })
//         })
//       })
//     },
//     fifthpart = function() {
//       botui.message.add({
//         delay: 5000,
//         content: "emmmm,æµæ°´å¹½åç»è³è¾¹ï¼ç¦é£é¦¨è¯­æå¿å¼¦ï¼æ¥èæ¬²æ½å°é©æï¼é¶ææééäººæ¶~"
//       }).then(function() {
//         botui.message.add({
//           delay: 3000,
//           content: "åªæ¯ä¸ä»æ åå°åèå·²^_^"
//         })
//       })
//     }
// }
