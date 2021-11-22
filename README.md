# save-the-icecaps

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# My Takes about this Assignment

### Challenges

- As a Front End Developer I get the assignment from Save The Icecaps Inc!, my suggestion to achieve a better results
  - Mock-Up UI at least for reference not for the perfect-by-pixel design
  - Fake-End point API that provide dummy data (if needed)
  - Clear Technical requirement that explain point-by-point what needed to have and not have
  - Lacking in requirement tend to make multiple asumptions about the feature, which can affect on UX or Another Technical Error

### What I'm Doing

- As a Junior Front End Dev, I tried to catch the idea behind GDPR, since the concept was foreign or too little outside EU, and take into account on what's the business logic or the concept,(or at least some of it)
- I collect some of reference to improve UI (adding some photo for better UI and convert to svg for better performance also give the credits to the original artist in Ethical Ways), research from the subscribe web form (from big website)
- I'm using Bootstrap and Bootstrap Vue as UI Framework to make things easier, some native HTML/CSS will also built if needed
- Using Bootstrap validation because we don't need more library to do more (Less Library used, better, avoid complexity)
- I'm still using Javascript and try to be simple with the library used because I'm aware it will be read by others. (I never work with typescript before, and IMO Javascript are more general than Typescript)
- Because using bootstrap sometimes not get what I expected on the UI, I forced to use some inlines style which IMO was 'ugly', but it's works for now.
- Cookie Consent available, as a Proudly GDPR-Compliant it should be the first to show.(for now manage cookie disabled)
- So I'm trying to use test unit JEST, and split by Render and Functionality
- Some issues regarding the webform:
  - The validation didn't behave according to what I expected, if you wrong on the name form, all the form will give warning (it should be only name that give warning)
  - Some code aren't DRY enough, setEmpty and setNull are considered repetitive, it should be only using case, since the state are set to null, and the form are set to empty
  - Test case maybe not enough (I'm only using test unit for now, not on e2e), I'm still new to this, but I kinda enjoy it.

### In the End (Yes it does matter)

- I'm hesitate with the ethical of 'proudly GDPR-compliant organization' with asking and even seems to force their user by design with pre-check option to give their data and also personal info [I given them optional and wording it 'Help us become better', but by default these info are totally up to them].(None of it I saw are ethical with GDPR Guide I read so far)
- By design document, it 'force' the user with 'guilt-tripping text', donation shouldn't be manipulated using these means, we can use more subtle way to point our idea with a good conduct. (I change to a better wording).
- Also it's kinda questionable when Save The Icecaps Inc! trying to save the polar ice (global warming issue), by giving newsletter via post (?).(Kinda Counterproductive on what they should do)
- The task to be honest is suitable for Fresh Front End that was starting to learn vue, I enjoy it when I also learning test case with Jest (you can test first or make function first).
- In my honest opinion, TDD(Test Development Driven), are good to implement to improve not only the technical side, but also the user experience side, which will be improve the product/feature that we deliver to our customer.
