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

### Test Unit

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# My Takes about this Assignment

### Challenges

- As a Front End Developer I get the assignment from Save The Icecaps Inc!, my suggestion to achieve a better results
  - Mock-Up UI at least for reference not for the perfect-by-pixel design
  - Fake-End point API that provide dummy data (if needed)
  - Clear Technical requirement that explain point-by-point what needed to have and not have
  - Lacking in clear requirement tend to make multiple asumptions about the feature, which can affect on UX or Another Technical Error

### What I'm Doing

- As a Junior Front End Dev, I tried to catch the idea behind GDPR, since the concept was foreign or too little outside EU, and take into account on what's the business logic or the concept,(or at least some of it)
- I collect some of reference to improve UI (adding some photo for better UI and convert to svg for better performance also give the credits to the original artist in Ethical ways), research from the subscribe web form (from big website)
- I'm using Bootstrap and Bootstrap Vue as UI Framework to make things easier, some native HTML/CSS will also built if needed
- Using Bootstrap validation because we don't need more library to do more (Less Library used, better, avoid complexity)
- I'm still using Javascript and try to be simple with the library used because I'm aware it will be read by others. (I never work with typescript before, and IMO Javascript are more generaly known than Typescript)
- Because using bootstrap sometimes not get what I expected on the UI side, I forced to use some inlines style which IMO was 'ugly', but it's works for now.
- Cookie Consent available, as a Proudly GDPR-Compliant it should be the first to show.(for now manage cookie disabled)
- I'm trying to use test unit JEST, and split by Render and Functionality
- Some issues regarding the webform:
  - The validation didn't behave according to what I expected, if you wrong on the name form, all the form will give warning (it should be only name that give warning).
  - Some code aren't DRY enough, setEmpty and setNull are considered repetitive, it should be only using case, since the state are set to null, and the form are set to empty.
  - There are some problems with Bootstrap Vue itself, so I was kinda switch between native and normal bootstrap to get what I expected on UI.
  - Test case maybe not enough (I'm only using test unit for now, not on e2e), I'm still new to this, but I kinda enjoy it.

### In the End (Yes it does matter)

## Ethical

- I'm hesitate with the ethical of 'proudly GDPR-compliant organization' with asking and even seems to force their user by design with pre-check option to give their data and also personal info [I given them optional and wording it 'Help us become better', but by default these info are totally up to them]
- The user would discouraged by the optional info that they need to fill, (Hence by default it's hidden, and only used if the user want's to fill it)
- And accept and terms use checkbox shouldn't be used according to GDPR-EU Compliance **("GDPR requires that organizations implement a consent system that must be completely unambiguous and requires a clear opt-in. The use of pre-selected opt-in boxes has been specifically banned, and there need to be consent options for the processing of personal data in different ways.")**
- By document, it design to 'force' the user with 'guilt-tripping text', donation shouldn't be manipulated using these means, we can use more subtle way to point our idea with a good conduct. (I change to a better wording).(None of it I saw are ethical with GDPR Guide I read so far!)
- Also it's kinda questionable when Save The Icecaps Inc! trying to save the polar ice (global warming issue), by giving newsletter via post (?).(Kinda Counterproductive on what they should do). I personally would avoid this kind of companies, because it will create a legal dispute soon or later.

## The test itself

- In my honest opinion, TDD(Test Development Driven), are good to implement to improve not only the technical side, but also the user experience side, which will be improve the quality of product/feature that we deliver to our customer.
- The task to be honest is suitable for Fresh Front End that was starting to learn vue, I enjoy it when I also learning test case with Jest (which in my case improve the code, the usability, and made me think find new error to be solved).
