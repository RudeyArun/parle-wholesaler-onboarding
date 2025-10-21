/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/sample/onboarding/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
