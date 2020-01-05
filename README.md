# css-framework

## Development Process

* create branch for component you are creating

```shell
git checkout -b component-name
```

* install dependecies

```shell
npm i
```

* start development server

```shell
npm start
```

* Add your code and commits here, once you have completed the code for component, follow next steps

* Check if there is any changes in remote master branch while you were working

```shell
git checkout master
git pull
```

* if there is any changes then merge them to your component's branch
```shell
git checkout component-branch-name
git merge master
```

* If there are any conflicts in the merge, solve them and once that is done, follow next steps

* push changes to remote

```shell
git push --set-upstream origin component-branch-name
```
component-branch-name is the same name of the branch you are currently working

* Go to Github and make pull request from component's branch to the master branch.

* once the pull request is accepted, follow next step

```shell
git checkout master
```

* pull latest changes from master

```shell
git pull
```

* For new component, follow above steps again.

## Build Process

```shell
npm run build
```
