# Lab 5 - Starter
Srinivasa Perisetla
---

## Check Your Understanding

1. I would not use only a unit test to test the full "message" feature, because sending a message involves multiple parts working together (UI input, network request, backend, and delivery to another user). That behavior is better validated with integration/end-to-end tests, while unit tests can still cover smaller helper functions used by the feature.

2. Yes, I would use a unit test for the "max message length" feature. The 80 character limit is a focused rule with a clear expected result, so unit tests are a good fit to quickly and reliably verify boundary cases (for example 79, 80, and 81 characters).
