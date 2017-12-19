# Hounter

## Introduction

Hounter is built to search for apartments in Finland using Sato API *(this is a personal project so I hope this doesn't violate stuff)*. It's built using React-Native, Redux with some other 3rd-part plugins. Its purpose is to browse only houses / apartments and skip other stuff like recommendations, FAQs and whatnot as on Sato's own site.

## How to use

Load it up, input the city name you want to rent an apartment. Check all the bedroom options (BR) you want. Adjust the price and tick the extra features. Press Search and profit!

## Develop

This used [Expo](https://expo.io/) at first but then it required Apple Team ID to build so I switched back to Xcode. Works and builds well with some hiccups (like **react-native-vector-icons** being unlinked and such).

Run this with `npm run ios`.

## To-Do

Not much. It's supposedly an MVP app for personal use so probably just some fine tuning. Maybe it should support `save` option and `municipality` as search input as well.

## Notes to Self

Next time double check branch name you wanna push so you don't freaking delete the whole commit history when 'porting'.