require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT 
const githubData={
  "login": "mdmakky",
  "id": 124259694,
  "node_id": "U_kgDOB2gNbg",
  "avatar_url": "https://avatars.githubusercontent.com/u/124259694?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mdmakky",
  "html_url": "https://github.com/mdmakky",
  "followers_url": "https://api.github.com/users/mdmakky/followers",
  "following_url": "https://api.github.com/users/mdmakky/following{/other_user}",
  "gists_url": "https://api.github.com/users/mdmakky/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mdmakky/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mdmakky/subscriptions",
  "organizations_url": "https://api.github.com/users/mdmakky/orgs",
  "repos_url": "https://api.github.com/users/mdmakky/repos",
  "events_url": "https://api.github.com/users/mdmakky/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mdmakky/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Md. Arafatuzzaman",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Ambivert, Curious and Adaptable",
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2023-02-02T11:18:29Z",
  "updated_at": "2024-11-16T04:49:17Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('This is about page')
})
app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
