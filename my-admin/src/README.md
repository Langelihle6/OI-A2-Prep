Copy the create_user.jsx and argon2id.js to your src folder. Use the App.jsx
file as a guide to update your own, adding the login screen and custom route
to your application.

Run the temp_user.sql file in Trailbase to load the required table and trigger.
Create an API as temp_user and set ACL World to permit Create and Read/List.

The create user and login screens can be further customised in create_user.jsx.

The auto_profile.sql file has a trigger that can be created to initialise a
"profile" for your users if your application has such a concept. Adjust name of
profile table and foreign key column on profile table before adding the trigger.
