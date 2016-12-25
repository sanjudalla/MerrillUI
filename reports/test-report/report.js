$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "id": "login-functionality",
  "tags": [
    {
      "name": "@Login",
      "line": 1
    }
  ],
  "description": "In order to ensure Login Functionality works\r\nI want to run the cucumber test to verify it is working",
  "name": "Login Functionality",
  "keyword": "Feature",
  "line": 2
});
formatter.before({
  "duration": 55874302559,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \n5690423\taddons.xpi\tDEBUG\tUpdating database with changes to installed add-ons\r\n1482685690423\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1482685690444\taddons.xpi-utils\tDEBUG\tWriting add-ons list\r\n1482685690484\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files (x86)\\Mozilla Firefox\\browser\\features\\e10srollout@mozilla.org.xpi\r\n1482685690485\taddons.xpi\tDEBUG\tCalling bootstrap method startup on e10srollout@mozilla.org version 1.0\r\n1482685690485\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files (x86)\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1482685690486\taddons.xpi\tDEBUG\tCalling bootstrap method startup on firefox@getpocket.com version 1.0\r\n1482685690488\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files (x86)\\Mozilla Firefox\\browser\\features\\loop@mozilla.org.xpi\r\n1482685690489\taddons.xpi\tDEBUG\tCalling bootstrap method startup on loop@mozilla.org version 1.2.6\r\n1482685690525\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1482685690525\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1482685690525\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1482685690525\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1482685690526\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1482685690526\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1482685690578\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1482685690578\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1482685690578\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1482685690578\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1482685690579\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1482685690579\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1482685693789\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\r\n1482685693789\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n1482685693789\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\r\n1482685695214\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1482685695214\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 17\r\n1482685695215\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1482685695237\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1482685695254\taddons.repository\tDEBUG\tNo addons.json found.\r\n1482685695255\tDeferredSave.addons.json\tDEBUG\tSave changes\r\n1482685695289\tDeferredSave.addons.json\tDEBUG\tStarting timer\r\n1482685696119\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\r\n1482685696119\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\r\n1482685696119\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\r\n1482685696125\tDeferredSave.addons.json\tDEBUG\tStarting write\r\n1482685696248\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1482685696546\tDeferredSave.addons.json\tDEBUG\tWrite succeeded\r\n1482685707321\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on e10srollout@mozilla.org version 1.0\r\n1482685707322\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on firefox@getpocket.com version 1.0\r\n1482685707322\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on loop@mozilla.org version 1.2.6\r\n1482685708038\taddons.manager\tDEBUG\tshutdown\r\n1482685708038\taddons.manager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1482685708039\taddons.xpi\tDEBUG\tshutdown\r\n1482685708039\taddons.xpi-utils\tDEBUG\tshutdown\r\n1482685708040\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1482685708041\taddons.manager\tDEBUG\tCalling shutdown blocker for GMPProvider\r\n1482685708043\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1482685708043\taddons.manager\tDEBUG\tCalling shutdown blocker for \u003cunnamed-provider\u003e\r\n1482685708045\taddons.manager\tDEBUG\tCalling shutdown blocker for PreviousExperimentProvider\r\n1482685708048\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1482685708051\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd\u0027, time: \u00272015-10-09 19:55:52\u0027\nSystem info: host: \u0027DEL1-LHP-N00036\u0027, ip: \u0027192.168.43.31\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:134)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:271)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:117)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:218)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:211)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:207)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:124)\r\n\tat step_Definition.Test_Steps.buildDriver(Test_Steps.java:37)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\n5690423\taddons.xpi\tDEBUG\tUpdating database with changes to installed add-ons\r\n1482685690423\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1482685690444\taddons.xpi-utils\tDEBUG\tWriting add-ons list\r\n1482685690484\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files (x86)\\Mozilla Firefox\\browser\\features\\e10srollout@mozilla.org.xpi\r\n1482685690485\taddons.xpi\tDEBUG\tCalling bootstrap method startup on e10srollout@mozilla.org version 1.0\r\n1482685690485\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files (x86)\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1482685690486\taddons.xpi\tDEBUG\tCalling bootstrap method startup on firefox@getpocket.com version 1.0\r\n1482685690488\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files (x86)\\Mozilla Firefox\\browser\\features\\loop@mozilla.org.xpi\r\n1482685690489\taddons.xpi\tDEBUG\tCalling bootstrap method startup on loop@mozilla.org version 1.2.6\r\n1482685690525\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1482685690525\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1482685690525\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1482685690525\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1482685690526\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1482685690526\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1482685690578\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1482685690578\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1482685690578\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1482685690578\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1482685690579\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1482685690579\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1482685693789\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\r\n1482685693789\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n1482685693789\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\r\n1482685695214\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1482685695214\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 17\r\n1482685695215\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1482685695237\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1482685695254\taddons.repository\tDEBUG\tNo addons.json found.\r\n1482685695255\tDeferredSave.addons.json\tDEBUG\tSave changes\r\n1482685695289\tDeferredSave.addons.json\tDEBUG\tStarting timer\r\n1482685696119\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\r\n1482685696119\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\r\n1482685696119\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\r\n1482685696125\tDeferredSave.addons.json\tDEBUG\tStarting write\r\n1482685696248\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1482685696546\tDeferredSave.addons.json\tDEBUG\tWrite succeeded\r\n1482685707321\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on e10srollout@mozilla.org version 1.0\r\n1482685707322\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on firefox@getpocket.com version 1.0\r\n1482685707322\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on loop@mozilla.org version 1.2.6\r\n1482685708038\taddons.manager\tDEBUG\tshutdown\r\n1482685708038\taddons.manager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1482685708039\taddons.xpi\tDEBUG\tshutdown\r\n1482685708039\taddons.xpi-utils\tDEBUG\tshutdown\r\n1482685708040\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1482685708041\taddons.manager\tDEBUG\tCalling shutdown blocker for GMPProvider\r\n1482685708043\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1482685708043\taddons.manager\tDEBUG\tCalling shutdown blocker for \u003cunnamed-provider\u003e\r\n1482685708045\taddons.manager\tDEBUG\tCalling shutdown blocker for PreviousExperimentProvider\r\n1482685708048\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1482685708051\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:122)\r\n\t... 44 more\r\n"
});
formatter.scenario({
  "id": "login-functionality;login-functionality",
  "tags": [
    {
      "name": "@Login",
      "line": 6
    },
    {
      "name": "@positiveScenario",
      "line": 6
    }
  ],
  "description": "",
  "name": "Login Functionality",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "user navigates to http://javelin-frontend.apps.javelinmc.com/#/login",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "user logs in using Username as \"test@merrillcorp.com\" and Password \"password\"",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "user clicks login button",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "login should be successful",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "arguments": [
    {
      "val": "http://javelin-frontend.apps.javelinmc.com/#/login",
      "offset": 18
    }
  ],
  "location": "Test_Steps.user_is_on_Home_Page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test@merrillcorp.com",
      "offset": 32
    },
    {
      "val": "password",
      "offset": 68
    }
  ],
  "location": "Test_Steps.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test_Steps.loginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test_Steps.login_success()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 95525,
  "status": "failed",
  "error_message": "java.lang.NullPointerException\r\n\tat step_Definition.Test_Steps.destroyDriver(Test_Steps.java:43)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:204)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:50)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n"
});
formatter.before({
  "duration": 48565585589,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \np-global\",\"version\":\"9.2\",\"type\":\"extension\",\"internalName\":null,\"updateURL\":null,\"updateKey\":null,\"optionsURL\":null,\"optionsType\":null,\"aboutURL\":null,\"icons\":{},\"iconURL\":null,\"icon64URL\":null,\"defaultLocale\":{\"name\":\"ManageSoft Usage Agent Web Tracker\",\"description\":\"Tracks web based application usage\",\"creator\":\"ManageSoft Corp.\",\"homepageURL\":\"http://www.managesoft.com\"},\"visible\":true,\"active\":false,\"userDisabled\":true,\"appDisabled\":true,\"descriptor\":\"C:\\\\Program Files (x86)\\\\ManageSoft\\\\Usage Agent\\\\mgsusageagent\",\"installDate\":1432351582741,\"updateDate\":1432351582741,\"applyBackgroundUpdates\":1,\"bootstrap\":false,\"skinnable\":false,\"size\":24732,\"sourceURI\":null,\"releaseNotesURI\":null,\"softDisabled\":false,\"foreignInstall\":true,\"hasBinaryComponents\":false,\"strictCompatibility\":false,\"locales\":[],\"targetApplications\":[{\"id\":\"{ec8030f7-c20a-464f-9b0e-13a3a9e97384}\",\"minVersion\":\"1.5\",\"maxVersion\":\"3.*\"}],\"targetPlatforms\":[],\"multiprocessCompatible\":false,\"signedState\":0,\"seen\":true}\r\n1482685740990\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1482685740991\taddons.xpi\tDEBUG\tUpdating database with changes to installed add-ons\r\n1482685740991\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1482685741022\taddons.xpi-utils\tDEBUG\tWriting add-ons list\r\n1482685741063\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files (x86)\\Mozilla Firefox\\browser\\features\\e10srollout@mozilla.org.xpi\r\n1482685741064\taddons.xpi\tDEBUG\tCalling bootstrap method startup on e10srollout@mozilla.org version 1.0\r\n1482685741064\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files (x86)\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1482685741065\taddons.xpi\tDEBUG\tCalling bootstrap method startup on firefox@getpocket.com version 1.0\r\n1482685741065\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files (x86)\\Mozilla Firefox\\browser\\features\\loop@mozilla.org.xpi\r\n1482685741066\taddons.xpi\tDEBUG\tCalling bootstrap method startup on loop@mozilla.org version 1.2.6\r\n1482685741095\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1482685741095\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1482685741095\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1482685741095\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1482685741095\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1482685741096\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1482685741145\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1482685741146\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1482685741146\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1482685741146\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1482685741146\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1482685741147\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1482685743437\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\r\n1482685743437\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n1482685743437\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\r\n1482685744784\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1482685744784\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 17\r\n1482685744784\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1482685744807\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1482685744820\taddons.repository\tDEBUG\tNo addons.json found.\r\n1482685744821\tDeferredSave.addons.json\tDEBUG\tSave changes\r\n1482685744841\tDeferredSave.addons.json\tDEBUG\tStarting timer\r\n1482685744975\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\r\n1482685744975\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\r\n1482685744976\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\r\n1482685744982\tDeferredSave.addons.json\tDEBUG\tStarting write\r\n1482685745001\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1482685745269\tDeferredSave.addons.json\tDEBUG\tWrite succeeded\r\n\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd\u0027, time: \u00272015-10-09 19:55:52\u0027\nSystem info: host: \u0027DEL1-LHP-N00036\u0027, ip: \u0027192.168.43.31\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:134)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:271)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:117)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:218)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:211)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:207)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:124)\r\n\tat step_Definition.Test_Steps.buildDriver(Test_Steps.java:37)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\np-global\",\"version\":\"9.2\",\"type\":\"extension\",\"internalName\":null,\"updateURL\":null,\"updateKey\":null,\"optionsURL\":null,\"optionsType\":null,\"aboutURL\":null,\"icons\":{},\"iconURL\":null,\"icon64URL\":null,\"defaultLocale\":{\"name\":\"ManageSoft Usage Agent Web Tracker\",\"description\":\"Tracks web based application usage\",\"creator\":\"ManageSoft Corp.\",\"homepageURL\":\"http://www.managesoft.com\"},\"visible\":true,\"active\":false,\"userDisabled\":true,\"appDisabled\":true,\"descriptor\":\"C:\\\\Program Files (x86)\\\\ManageSoft\\\\Usage Agent\\\\mgsusageagent\",\"installDate\":1432351582741,\"updateDate\":1432351582741,\"applyBackgroundUpdates\":1,\"bootstrap\":false,\"skinnable\":false,\"size\":24732,\"sourceURI\":null,\"releaseNotesURI\":null,\"softDisabled\":false,\"foreignInstall\":true,\"hasBinaryComponents\":false,\"strictCompatibility\":false,\"locales\":[],\"targetApplications\":[{\"id\":\"{ec8030f7-c20a-464f-9b0e-13a3a9e97384}\",\"minVersion\":\"1.5\",\"maxVersion\":\"3.*\"}],\"targetPlatforms\":[],\"multiprocessCompatible\":false,\"signedState\":0,\"seen\":true}\r\n1482685740990\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1482685740991\taddons.xpi\tDEBUG\tUpdating database with changes to installed add-ons\r\n1482685740991\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1482685741022\taddons.xpi-utils\tDEBUG\tWriting add-ons list\r\n1482685741063\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files (x86)\\Mozilla Firefox\\browser\\features\\e10srollout@mozilla.org.xpi\r\n1482685741064\taddons.xpi\tDEBUG\tCalling bootstrap method startup on e10srollout@mozilla.org version 1.0\r\n1482685741064\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files (x86)\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1482685741065\taddons.xpi\tDEBUG\tCalling bootstrap method startup on firefox@getpocket.com version 1.0\r\n1482685741065\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files (x86)\\Mozilla Firefox\\browser\\features\\loop@mozilla.org.xpi\r\n1482685741066\taddons.xpi\tDEBUG\tCalling bootstrap method startup on loop@mozilla.org version 1.2.6\r\n1482685741095\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1482685741095\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1482685741095\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1482685741095\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1482685741095\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1482685741096\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1482685741145\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1482685741146\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1482685741146\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1482685741146\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1482685741146\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1482685741147\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1482685743437\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\r\n1482685743437\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n1482685743437\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\r\n1482685744784\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1482685744784\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 17\r\n1482685744784\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1482685744807\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1482685744820\taddons.repository\tDEBUG\tNo addons.json found.\r\n1482685744821\tDeferredSave.addons.json\tDEBUG\tSave changes\r\n1482685744841\tDeferredSave.addons.json\tDEBUG\tStarting timer\r\n1482685744975\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\r\n1482685744975\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\r\n1482685744976\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\r\n1482685744982\tDeferredSave.addons.json\tDEBUG\tStarting write\r\n1482685745001\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1482685745269\tDeferredSave.addons.json\tDEBUG\tWrite succeeded\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:122)\r\n\t... 44 more\r\n"
});
formatter.scenario({
  "id": "login-functionality;login-functionality",
  "tags": [
    {
      "name": "@Login",
      "line": 14
    },
    {
      "name": "@negativeScenario",
      "line": 14
    }
  ],
  "description": "",
  "name": "Login Functionality",
  "keyword": "Scenario",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "user navigates to http://javelin-frontend.apps.javelinmc.com/#/login",
  "keyword": "Given ",
  "line": 17
});
formatter.step({
  "name": "user logs in using Username as \"test@merrillcorp.com\" and Password \"password1\"",
  "keyword": "When ",
  "line": 18
});
formatter.step({
  "name": "user clicks login button",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "user should not be able to login",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "arguments": [
    {
      "val": "http://javelin-frontend.apps.javelinmc.com/#/login",
      "offset": 18
    }
  ],
  "location": "Test_Steps.user_is_on_Home_Page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test@merrillcorp.com",
      "offset": 32
    },
    {
      "val": "password1",
      "offset": 68
    }
  ],
  "location": "Test_Steps.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test_Steps.loginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test_Steps.login_error()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 86446,
  "status": "failed",
  "error_message": "java.lang.NullPointerException\r\n\tat step_Definition.Test_Steps.destroyDriver(Test_Steps.java:43)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:204)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:50)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n"
});
