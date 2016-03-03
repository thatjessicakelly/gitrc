# gitrc

Create different git profiles and switch between them

## Usage

First install `gitrc`:

```sh
$ npm install -g gitrc
```

Then create a `~/.gitrcs` folder and add some profiles.

```sh
$ ls -1 ~/.gitrcs
personal
work
```

Profiles are actually just shell scripts that can have anything in them:

```sh
$ cat ~/.gitrcs/personal
git config --global user.name "Jessica Kelly"
git config --global user.email "thatjessicakelly@gmail.com"
```

```sh
$ cat ~/.gitrcs/work
git config --global user.name "Jessica Kelly"
git config --global user.email "jkelly@enterprise.biz"
```

You can list what gitrcs you have by running

```sh
$ gitrc
personal
work
```

Then you can activate one by running:

```sh
$ gitrc work
```

```sh
$ gitrc
personal
work (active)
$ git config --global --get user.email
jkelly@enterprise.biz
```
