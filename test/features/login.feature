Feature: User authontication test

    # If we want to execute anything before beforeEach we will use Background keyword.
    Background:
        Given User open the webpage
        And User clicks on login button

    Scenario: Login is successful
        And User enter username as ""
        And User enter password as ""
        When User clicks on the login button
        Then Login should be successful

    Scenario: Login is successful
       And User enter username as ""
       And User enter password as ""
       When User clicks on the login button
       Then Login should not be successful