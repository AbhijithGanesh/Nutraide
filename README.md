# Nutraide - Solving for India Challenge

![image](https://user-images.githubusercontent.com/67182544/232193401-be28f435-f0f6-4fb7-8dc4-05f1c486a352.png)

The Solving for India Challenge is a 3-month long challenge to solve for India's most pressing problems. The challenge is open to all, and is a great opportunity to learn, build, and contribute to India's growth.

## Description

This project takes medical parameters such as Height, Weight and Sodium and helps doctors, dieticians, and patients calculate daily nutritional requirements, provides personalized nutrition recommendations.

## Approach to the problem

We have trained the model using a collection of data that has the following features:

- Haemoglobin
- Urea
- Creatine
- Fasting Blood Sugar (FBS)
- HbA1c
- SGOT: Serum glutamic oxaloacetic transaminase
- SGPT: Serum glutamic pyruvic transaminase
- Sodium
- Potassium

These features will be used by our state-of-the art custom model nutriNet to predict the daily nutritional requirements of the patient. This data has been sourced from health facilities in Chennai and has been verified by several health experts in
Chennai. Through this project, we aim to provide a platform for doctors, dieticians, and patients to calculate daily nutritional requirements, and provide personalized nutrition recommendations.

We've gathered data from reputable medical centres in Chennai to make sure nutriNet delivers accurate and trustworthy nutritional data. To guarantee that it satisfies the necessary criteria for accuracy and dependability, this data has undergone a thorough review by a group of knowledgeable health professionals. We can offer our users a comprehensive platform for calculating their daily nutritional needs and getting personalised recommendations that are suited to their particular health goals by utilising this data.

## Round 1 updates

- [x] Implememnted the ML Model using [PyTorch](https://pytorch.org/)
- [x] Implemented [FastAPI](https://fastapi.tiangolo.com/) for the intermediate API
- [x] Implemented a [descriptive UI](https://nutriai-url.vercel.app/) using NextJS
- [x] Started development a more [enhanced UI](https://nutraide.vercel.app/)

### Used Resources

- [GCP Storage](https://cloud.google.com/storage)
- [GCP AMD Instances for training our model](https://cloud.google.com/compute)
- [GCP Cloud Functions for our API](https://cloud.google.com/functions)
- [GCP Cloud Run](https://cloud.google.com/run)

## Planned Items

- [ ] Implement a [Nhost](https://nhost.io/) database and authentication on [Google Cloud's Container Orchestration](https://cloud.google.com/kubernetes-engine)
- [ ] Implement Authentication with Google and GitHub
- [ ] Make a [Progressive Web App](https://web.dev/pwa) to increase accessibility

### Proposed Resources

- [Verex AI](https://vercel.com/ai)

## Tech Stack

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- Typescript
- [Tailwind CSS](https://tailwindcss.com/)

## Team - Squiggly Kraken

- [Abhijith Ganesh](https://github.com/AbhijithGanesh)
- [Jesher Joshua](https://github.com/jesherjoshua)
- [Sree Dananjay](https://github.com/dananjay996)
- [Jaskaran Walia](https://github.com/karanwxliaa)
