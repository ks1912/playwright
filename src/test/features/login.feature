Feature: User authontication test

    # If we want to execute anything before beforeEach we will use Background keyword.
    Background:
        Given User open the webpage
        And User clicks on login button

    Scenario: Login is successful
        And User enter username as "testUserBdd"
        And User enter password as "Test@123"
        When User clicks on the login button
        Then Login should be successful

    Scenario: Login is unsuccessful
       And User enter username as "testUserBdd"
       And User enter password as "Test@1234"
       When User clicks on the login button
       Then Login should not be successful