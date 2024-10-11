const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Mock data (in a real scenario, this would come from a database)
const manhwaList = [
  {
    id: 1,
    title: "Solo Leveling",
    genre: "Action, Fantasy",
    description: "Sung Jin-Woo, the weakest hunter in the world, becomes the strongest S-rank hunter."
  },
  {
    id: 2,
    title: "The Beginning After The End",
    genre: "Fantasy, Adventure",
    description: "A king in his past life is reincarnated into a world of magic and monsters."
  },
  {
    id: 3,
    title: "Hardcore Leveling Warrior",
    genre: "Fantasy, Adventure",
    description: "Gong Won-Ho, known as Hardcore Leveling Warrior, must reclaim his top spot in Lucid Adventure after a shocking defeat in this action-packed fantasy manhwa."
  },
];

app.get('/api/manhwa', (req, res) => {
  res.json(manhwaList);
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});