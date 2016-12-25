package cucumberTest;

import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "Feature"
		,glue={"step_Definition"}
		,format={"pretty","html:reports/test-report"}
		//,format={"junit:reports/junit/junit.xml", "html:reports/html"}
		//,format={"html:reports/html"}
		,tags={"@Login"}
		
		//,dryRun=true
		)
		
public class TestRunner {
}
