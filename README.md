![travis badge](https://travis-ci.org/dangerdak/learn-travis.svg?branch=master)
# learn-travis/ Continuous integration

Continuous integration is a software development practice in which members of
a team integrate their work frequently - usually one or more times per day.
Each integration is verified by an automated build, including tests. This makes
it much easier to integrate when compared to rare integration, where there
could be an overwhelming number of conflicts and issues which arise as a result
of integrating.

## Travis
Travis is a continuous integration tool. It runs a set of tests for you
automatically when you push them to your remote repository. These can be tests
can be actual tests, e.g. using tape. You can also set it up to fail if the
codebase doesn't meet your linting rules.

To setup travis, go to https://travis-ci.org and sign in with github to *give
travis access to your repos*. In order to set up Travis to watch a given
repository, click the small plus icon nest to 'My Repositories' and select your
respository.

You'll also need to *put a `.travis.yml` file* in your projects root directory
like the following:
```
language: node_js
node_js:
    - "node"
```
And in your package.json, *change the `test` script* to run whatever tests you
want Travis to depend on e.g.
```
"test": "tape test.js | tap-spec",
```
It can also be setup to work with your linter.

On your Github account if you look at the commit history for your project
you'll now see a tick or cross indicating whether the build passed for that
commit.

Including a build passing/failing badge in your readme is as easy as going to
your repo on travis, click the badge and copying the URL for the image. You can
then use this image URL in your projects readme.

## Learning
* Doesn't seem to work with ES6 - if you put a really old version of node in
  your travis.yml
* Doesn't seem to work with shot - old node issue again I think :blush:

## Resources
[Continuous Integration - Martin
Fowler](https://www.martinfowler.com/articles/continuousIntegration.html)  

