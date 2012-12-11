enyo.kind({
	name: "enyo.AppMenu",
	kind: onyx.Menu,
	classes: "enyo-appmenu",
	components: [
		{
			kind: enyo.Signals,
			onToggleAppMenu: "toggle"
		}
	],
	toggle: function() {
		// if we're visible, hide it; else, show it
		if (this.showing)
			this.hide();
		else
			this.show();
	},
	show: function() {
		this.setBounds({
			height: (30 * this.controls.length - 1 /* take the scroller out of the equation */)
		});
		this.inherited(arguments);
	}
});

enyo.kind({
	name: "sprw.AppMenuItem",
	kind: onyx.MenuItem,
	classes: "enyo-item"
});