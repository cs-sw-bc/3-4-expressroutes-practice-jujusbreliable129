# 📸 Instagram Mini API – Assignment Instructions

## 🎯 Objective

Build a **mini Instagram-style REST API** using **Express.js** and a **JSON file** as your data source. You will practice:

* Routing & Endpoints
* Nested routes
* Query parameters & filtering
* CRUD operations (GET, POST, DELETE)
* Reading data from a JSON file

---

## 📁 Starter Files

You are provided with:

* `app.js` (starter server file)
* `data/insta.json` (contains 100 users)

You will extend the API by creating additional endpoints.

---

## ✅ Part 1: Users

Implement the following routes:

### **1. GET /users**

Return all users.

### **2. GET /users/:id**

Return a single user by ID.
If user not found → return 404.

---

## 🎬 Part 2: Posts (You will create this)

Extend `instagram.json` with a new `posts` array using your own data.
Each post should contain:

* `id`
* `userId`
* `caption`
* `hashtags` (array)
* `likes`
* `comments` (array of objects)

### **Required Endpoints**

#### **3. GET /posts**

Return all posts.

#### **4. GET /posts/:id**

Return a post by ID.

#### **5. GET /posts/:id/comments**

Return all comments for a post.

#### **6. GET /posts/:postId/comments/:commentId**

Return a specific comment.

---

## 🔎 Part 3: Filtering with Query Parameters

Add filtering to `/posts` using:

### **?hashtag=travel**

Return posts containing the hashtag.

### **?minLikes=20**

Return posts with at least 20 likes.

### **?user=username**

Return posts by a specific user.

### **Combine filters**

Example:

```
/posts?hashtag=travel&minLikes=10
```

---

Happy coding! 🚀
