!function(e){function t(a){if(o[a])return o[a].exports;var i=o[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}(function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))switch(typeof e[t]){case"function":break;case"object":e[t]=function(t){var o=t.slice(1),a=e[t[0]];return function(e,t,i){a.apply(this,[e,t,i].concat(o))}}(e[t]);break;default:e[t]=e[e[t]]}return e}([function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}o(1),o(5);var i=o(7),n=a(i),r=r||{};r=function(){var e=new n["default"]("jnr-game",960,540);e.init()}()},function(e,t){},,,,1,,function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(8),n=a(i),r=o(9),d=a(r),s=o(10),c=a(s),l=l||{};l.GameController=function(e,t,o){function a(){i.state.add("Boot",n["default"]),i.state.add("Preloader",d["default"]),i.state.add("Game",c["default"]),i.state.start("Boot")}var i=new Phaser.Game(t,o,Phaser.AUTO,e);return i.init=a,i},t["default"]=l.GameController},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=o||{};o.Boot=function(e){function t(){e.stage.backgroundColor="#DAF0F3",e.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,e.scale.pageAlignHorizontally=!0,e.scale.pageAlignVertically=!0,e.physics.startSystem(Phaser.Physics.ARCADE)}function o(){i.load.image("preloadBar","res/img/preloader.png")}function a(){i.state.start("Preloader")}var i={};return i.init=t,i.preload=o,i.create=a,i},t["default"]=o.Boot},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=o||{};o.Preloader=function(){function e(){a=this.add.sprite(this.game.world.centerX,this.game.world.centerY,"preloadBar"),a.anchor.setTo(.5),a.scale.setTo(3),o.load.setPreloadSprite(a),o.load.tilemap("level1","res/map/level1.json",null,Phaser.Tilemap.TILED_JSON),o.load.image("tiles","res/img/tiles.png"),o.load.image("spikes","res/img/spikes.png"),o.load.image("coin","res/img/coin.png"),o.load.spritesheet("player","res/img/player.png",66,90,14,3,2)}function t(){o.state.start("Game")}var o={},a=void 0;return o.preload=e,o.create=t,o},t["default"]=o.Preloader},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=o||{};o.Game=function(e){function t(){e.time.advancedTiming=!0}function o(){m=e.add.tilemap("level1"),m.addTilesetImage("tiles","tiles"),m.createLayer("bgLayer"),m.createLayer("fgLayer"),h=m.createLayer("groundLayer"),w=m.createLayer("waterLayer"),m.setCollisionBetween(1,1e4,!0,"groundLayer"),m.setCollisionBetween(1,1e4,!0,"waterLayer"),h.resizeWorld(),d(),s(),_={},_.space=e.input.keyboard.addKey(32),_.esc=e.input.keyboard.addKey(27),_.esc.onDown.add(g,b),D=0,O=e.add.text(e.width-60,100,D,{fontSize:"80px",fill:"#40E8AC",align:"right"}),O.anchor.set(1,.5),O.rotation=.15,j=e.add.tween(O.scale).to({x:1.2,y:1.2},80,"Sine.easeIn"),j.chain(e.add.tween(O.scale).to({x:1,y:1},160,"Sine.easeOut")),k=e.add.sprite(60,e.world.height-250,"player"),e.physics.arcade.enable(k),k.body.gravity.y=1800,k.animations.add("run",[1,3,5,7,9],10,!0),k.body.velocity.x=450,k.isRunning=!0,e.camera.follow(k)}function a(){e.physics.arcade.collide(k,h,c,function(){return!k.isDead},b),e.physics.arcade.collide(k,w,l,function(){return!k.isDrowning},b),e.physics.arcade.overlap(k,x,u,function(){return!k.isDead},b),e.physics.arcade.overlap(k,P,y,function(){return!k.isDead},b),L=k.body.velocity.x,O.x=e.camera.view.x+e.width-60,O.text=D,k.body.y+k.body.height>=e.world.height-m.tileHeight&&l(),k.isRunning?(k.body.blocked.down&&k.animations.play("run"),_.space.isDown&&f(),k.x>=e.world.width-60&&(k.isRunning=!1,k.frame=0,e.time.events.add(1500,v,b))):(k.body.velocity.x-=.025*k.body.velocity.x,k.isDrowning&&(k.body.velocity.y-=.033*k.body.velocity.y))}function i(){e.debug.text((e.time.fps||"--")+" fps",20,40,"#40E8AC","20px Courier")}function n(e,t,o){return t.objects[o].filter(function(t){return t.properties.type===e})}function r(e,t){var o=t.create(e.x,e.y-m.tileHeight/2,e.properties.sprite);Object.keys(e.properties).forEach(function(t){o[t]=e.properties[t]})}function d(){x=e.add.group(),x.enableBody=!0,n("spikes",m,"obstacles").forEach(function(e){r(e,x)},b)}function s(){P=e.add.group(),P.enableBody=!0,n("coin",m,"collectibles").forEach(function(e){r(e,P)},b)}function c(){k.body.blocked.right&&(k.body.velocity.x=L*-.666,k.body.bounce.y=.5,p())}function l(){k.isDrowning=!0,k.body.velocity.x=.333*L,k.body.velocity.y=300,k.body.gravity.y=150,p()}function u(){k.isDead=!0,k.body.velocity.x=.25*L,k.body.velocity.y=-450,p()}function y(e,t){t.kill(),D+=10,j.start()}function f(){k.body.blocked.down&&(k.body.velocity.y-=700,k.animations.stop(),k.frame=11)}function p(){k.isRunning=!1,k.animations.stop(),k.frame=13,e.time.events.add(2e3,v,b)}function v(){e.state.start("Game")}function g(){e.paused=!e.paused}var b={},m=void 0,h=void 0,w=void 0,x=void 0,P=void 0,_=void 0,k=void 0,L=void 0,D=void 0,O=void 0,j=void 0;return b.preload=t,b.create=o,b.update=a,b.render=i,b},t["default"]=o.Game}]));
//# sourceMappingURL=script.js.map