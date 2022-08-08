# GitHub User's Favourite Programming Language

This application allows users to enter an arbitrary Github username and be presented with a best guess of the Github user's favourite programming language.

I've used https://api.github.com/users/username/repos API in Detail component to get repos' laguages 
that signifies the most-used programming language in the repos. 
If no languages are detected that would be null.

### Documentation
Documentation for the Github API can be found at [https://developer.github.com/v3/](https://developer.github.com/v3/)

### API
https://api.github.com/users/username/repos

### Reference
[About repository languages](https://bit.ly/3SxEwdu)