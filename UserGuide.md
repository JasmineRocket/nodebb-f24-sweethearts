# User Guide for User Stories
## Team SWEethearts

## Table of Contents

1. [User Story 2](#user-story-2)
2. 


## User Story 2
As a student, I want to receive an immediate notification when a course faculty member replies to my post, so that I can review their response within 24 hours.

### Feature Overview
* Real-time notifications: 
    * Push notifications that will appear on the notification side bar and on the main notification page when a course faculty replies to your post.
    ![Screenshot 1](user_guide_images/ins_notif_1.png)
    ![Screenshot 3](user_guide_images/ins_notif_3.png)

    * These notifications are delivered separately from non-faculty reply notifications and are indicated with the "[COURSE-FACULTY]" on the title. (As shown in the above images.)
    

* User Preferences: Like other notifications, users are able to customize their notification settings (choose between push, email, both, or turn both off) in the account settings page.
![Screenshot 2](user_guide_images/ins_notif_2.png)

### How To Use and Test User Story 2 Feature
1. Register 2 accounts: an admin and a non-admin (student). 
2. Log in to the non-admin account and make a topic in a discussion board. 
3. Go to the user settings page by clicking on the top right profile icon then "Settings".
4. Scroll down until you find the course faculty notification setting as shown below. This feature's setting should be on the "Notification Only" by default. Choose your preferred setting and press Save Changes.
5. Log out of this student account and log in to the admin account. 
6. Leave a reply to the student post.
7. Log out and log in the student account. There should now be a new notification that pops up on the notification sidebar and on the page.
* If this setting is turned off then there should be no notifications on the inbox or on the notification page.

**Note: For this feature we assume that every admin account is a course faculty.**

### Automated Tests - located in *test/notifications.js*

#### Error Tests: Testing invalid inputs
* Test for 

#### Valid Tests




#### Test Justification
We believe that these tests are sufficient because ...


## User Story 



### How to Use and Test User Story 


### Automated tests are located in (WRITE FILE NAME HERE)

#### Error Tests: Testing invalid inputs
* Test for invalid input

#### Valid Tests

#### Test Justification
We believe that these tests are sufficient because ...


