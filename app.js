import express from "express";
import insta from "./data/insta.json" with { type: "json" };


const app = express();
const PORT = 3000;

/* ---------------------------------------------
   SERVER LISTEN
---------------------------------------------- */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


//User ID

app.get("/users", (req, res) => {
  let instaUsers = [...insta.users];
  res.json(instaUsers);
});

app.get("/users/:id", (req, res) => {
  let userId = Number(req.params.id);
  let result = null;

  for (let i = 0; i < insta.users.length; i++) { // Corrected from instaUsers to insta
    if (insta.users[i].id == userId) { // Corrected from instaUsers to insta
      result = insta.users[i]; // Corrected from instaUsers to insta
      break;
    }
  }

  if (result) {
    res.json(result);
  } else {
    res.status(404).json({
      message: "User not found"
    });
  }
});


//Post Id


app.get("/posts", (req, res) => {
  let instaPost = [...insta.posts];
  res.json(instaPost);
});

app.get("/posts/:id", (req, res) => {
  let userId = Number(req.params.id)
  let results = null;

  for(let i=0;i<insta.posts.length;i++){
  if(insta.posts[i].id==userId) {
    results = insta.posts[i];
    break;
  }
}

  if(results) {
    res.json(results)
  } else {
    res.status(404).json({
      message: "Post not found"
    });
  }

});

app.get("/posts/:id/comments", (req, res) => {
  let postId = Number(req.params.id);
  let result = null;

  for(let i=0; i<insta.posts.length;i++) {
    if(insta.posts[i].id == postId){
      result = insta.posts[i]
      break;

        }
  }

  if(result) {
    res.json(result)
  } else {
    res.status(404).json({
      message:"Comment not found"
    });
  }

});

app.get("/posts/:id/comments/:commentId", (req, res) => {
  let postId = Number(req.params.id);
  let actualCommentId = Number(req.params.commentId);

  let results = null;

  let foundPost = insta.posts.find(post => post.id === postId);

  if (foundPost) {
    results = foundPost.comments.find(comment => comment.id === actualCommentId);
  }

  if(results) {
    res.json(results)
  } else {
    res.status(404).json({
      message:"Comment not found"
    })
  }
});

app.get("/posts", (req, res) => {


  const { hashtag, minLikes, user } = req.query;

  let results = [...insta.posts];

  if (hashtag) {
    results = results.filter((post) => {
      return post.hashtags.some(tag => tag.toLowerCase().includes(hashtag.toLowerCase()));
    });
  }

  if (minLikes) {
    results = results.filter((post) => post.likes >= Number(minLikes));
  }

  if (user) {
    const userObj = insta.users.find((u) => u.username === user);
    if (userObj) {
      results = results.filter((post) => post.userId === userObj.id);
    } else {
      results = [];
    }
  }

  res.json(results);
})