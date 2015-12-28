## A Fun Restaurant waiting app.
This is a fun tutorial that I used to help learn AngularJS

## The app uses these technologies:

* AngularJS 1.4.x
* Firebase 2.2.x
* AngularFire 1.1.x
* Bootstrap 3.3.x
* Zapier


## Run the application

1. You can use any server you like, but I prefer Python 2's built-in server for its simplicity.
Navigate to the /src folder and enter, `python -m SimpleHTTPServer`, in your terminal.
3. Now browse to the app at `http://localhost:8000`.
4. Replace the url in `src/app/core/constants.js` with your own Firebase URL.
5. Log in to your Firebase.com account and paste the content from `security_rules.json` into the Firebase rules section for your app.

There are also setup videos for Mac and Windows users.

* [Mac](https://watchandcode.com/courses/angular-course/lectures/162289)
* [Windows](https://watchandcode.com/courses/angular-course/lectures/162288)



## Style and structure

This app is a great resource if you want to learn the latest best practices for
AngularJS code style and application structure.

That's because it follows [John Papa's AngularJS style guide](https://github.com/johnpapa/angular-styleguide),
which is the style guide recommended by the AngularJS core team.

## What you'll learn

The main thing you'll learn is how to build and structure a large Angular app that
works with remote data, user authentication, and has all the major Angular features such as:

* Controllers
* Services
* Directives

By reading and experimenting with the code, you'll also learn how to:

* Create separate modules for each feature.
* Create controllers that use services for most of the work.
* Safely inject dependencies that work after minification.
* Use `promises` to get data from a server.
* Use `resolve` in your routes to get data before your controllers run.
* Use `controllerAs` view syntax instead of $scope.
* Use `controllerAs` with `vm` instead of using `this`.
* Use `bindToController` in directives.
* Use `transclusion` in directives.

## Contact

gordon@watchandcode.com.