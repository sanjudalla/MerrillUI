@Login
Feature: Login Functionality 
In order to ensure Login Functionality works
I want to run the cucumber test to verify it is working

@Login @positiveScenario
Scenario: Login Functionality

Given user navigates to http://javelin-frontend.apps.javelinmc.com/#/login
When user logs in using Username as "test@merrillcorp.com" and Password "password"
And user clicks login button
Then login should be successful

@Login @negativeScenario
Scenario: Login Functionality

Given user navigates to http://javelin-frontend.apps.javelinmc.com/#/login
When user logs in using Username as "test@merrillcorp.com" and Password "password1"
And user clicks login button
Then user should not be able to login

@Login @negativeScenario
Scenario: Login Functionality

Given user navigates to http://javelin-frontend.apps.javelinmc.com/#/login
When user logs in using Username as "test@merrillcorp.com" and Password "password1"
And user clicks login button
Then login should be successful