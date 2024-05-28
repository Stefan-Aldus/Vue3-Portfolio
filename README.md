# Portfolio made in Vue3

This project demonstrates expertise with the Vue.js framework, specifically Vue 3.

---

## Tech stack
The tech stack used for this project includes:
- Vue3
- JavaScript/TypeScript
- TailwindCSS

The designs for this project were created using **Figma**.

---

## Usage
You are free to clone this repository and modify the props to display your own information. Below are the instructions to accomplish this:

### Prerequisites
1. Node Package Manager (NPM)
2. A text editor or IDE (e.g., VS Code)
3. GIT
4. Basic understanding of Vue (e.g., what a prop is)
5. For the Favorite Artists section, you need a Spotify developer app. [See link for more info](https://developer.spotify.com/documentation/web-api/)

### Setting up
1. Clone the repo:
   ```sh
   git clone https://github.com/Stefan-Aldus/Vue3-Portfolio.git
   ```
2. Open your text editor of choice and navigate to the directory where you cloned the repository.
3. Run the following command to install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory.

### Personalizing
1. Open the `PersonalInfo.vue` file located at `/src/views/PersonalInfo.vue`.
2. Change the props to reflect your own details. For example:
   ```vue
   <template>
     <Card
       name="Your Name"
       quote="Your Quote"
       country="Your country of residency"
       :programmingLanguages="[
         // Your programming languages formatted like this:
         'Vue - Professional'
       ]"
       jobTitle="Your job title"
       profileImg="Link to your image"
       :languages="{ English: 'Proficient', Dutch: 'Native' }"
     />
   </template>
   ```

### Favorite Artists
To set up your favorite artists, you need to have your Spotify application on the Spotify developer portal (see prerequisite number 5). After you have done that, follow these steps:

1. Copy the file `.env.public`
2. Remove the `.public` from the name, so it is named `.env`
3. Paste your `Spotify client secret` into the value on line 1 `VITE_SPOTIFY_API_SECRET`
4. Paste your `Spotify client ID` into the value on line 2 `VITE_SPOTIFY_API_ID`

To change the artists to your favorite artists, follow these steps:

1. Go to `/src/components/ArtistInfo.vue`
2. Search for `artistIds`
3. Replace the IDs that are there after cloning with the IDs of your favorite artists (retrieved from the URL, e.g., if the link is `https://open.spotify.com/artist/1Ffb6ejR6Fe5IamqA5oRUF?si=95AUfvewQsirTxAhm4lfug`, then `1Ffb6ejR6Fe5IamqA5oRUF?si=95AUfvewQsirTxAhm4lfug` is the ID)

### Congrats
Everything should be configured now.

**DISCLAIMER**
If you publish this site to a host, provide due credit to me, [@Stefan-Aldus](https://github.com/Stefan-Aldus) on GitHub. That is the only condition under which this project is open-sourced.

---

## Contributing

Got any feedback? Fork the repository or contact me through my socials, and we can converse about your feedback!
