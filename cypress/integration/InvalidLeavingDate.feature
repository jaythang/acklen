Feature: Invalid Leaving Date
    Scenario: Input Invalid Leaving Date
    Given I visit carpark calc and select Short Term Parking
    When I input Entry Date
    When I input invalid Leaving Date
    Then I should receive an error