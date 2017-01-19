Presets = function (gui, master, parent) {

    var me = this;

    me.presets = [];
    me.master = master;
    me.gui = gui;

    me.dom = document.createElement('div');
    me.dom.setAttribute('id', 'presets');
    // me.dom.style.position = 'fixed';
    // me.dom.style.top = 10;
    // me.dom.style.left = 0;
    // me.dom.style.zIndex = 1002;
    me.dom.style.color = 'black';
    me.dom.style.backgroundColor = 'gray';
    me.dom.style.padding = '3px';
    me.dom.innerHTML = 'presets: ';
    // parent.appendChild(me.dom);

    me.add = function(preset) {
        var but = document.createElement('span');
        me.presets.push(preset);
        but.innerHTML = String(me.presets.length) + ' ';
	but.style.cursor = 'pointer';
	but.onclick = function() {
	    for (parm in preset) {
		me.master[parm] = preset[parm];
	    }
            me.gui.listenAll();
	}
	me.dom.appendChild(but);
    };
    me.trigger = function(preset) {
	for (parm in preset) {
	    me.master[parm] = preset[parm];
	}
        me.gui.listenAll();
    };
}
