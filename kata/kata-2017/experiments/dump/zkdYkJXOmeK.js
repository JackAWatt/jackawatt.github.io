if (self.CavalryLogger) { CavalryLogger.start_js(["SDRzF"]); }

__d('legacy:FamilyEdit',['FamilyEditor'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.FamilyEditor=c('FamilyEditor');}),3);
__d('SwapButtonDEPRECATED',['Event','Arbiter','CSS','Focus'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){this._swapperButton=i;this._swappeeButton=j;c('Event').listen(i,'click',this.swap.bind(this));if(k)c('Event').listen(j,'click',this.unswap.bind(this));c('Arbiter').subscribe('SwapButtonDEPRECATED/focusOnJoinButton',this.setFocusOnSwapper.bind(this),c('Arbiter').SUBSCRIBE_ALL);}Object.assign(h.prototype,{_swapperButton:null,_swappeeButton:null,swap:function i(j){c('CSS').hide(this._swapperButton);c('CSS').show(this._swappeeButton);j!==false&&c('Focus').setWithoutOutline(this._swappeeButton);},unswap:function i(j){c('CSS').show(this._swapperButton);c('CSS').hide(this._swappeeButton);j!==false&&c('Focus').setWithoutOutline(this._swapperButton);},toggle:function i(){c('CSS').toggle(this._swapperButton);c('CSS').toggle(this._swappeeButton);},setFocusOnSwapper:function i(){this._swapperButton.focus();}});f.exports=h;}),null);