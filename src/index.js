"use strict";

// Category
const categoryAPI = new CategoriesAdapter('http://localhost:3000/categories')
const categoriesContainer = document.querySelector('#categories-container')
const createCategoryBtn = document.querySelector('#cat-btn')
const categoryForm = document.getElementById('add-category')
const categoryInput = document.getElementById('new-cat-inp')
const description = document.getElementById('description')
const categoryFormDiv = document.getElementById('new-category-form')
categoryAPI.getCategories()
Category.addEventListeners()

// Video
const videoAPI = new VideoAdapter('http://localhost:3000/videos')
const allVideos = Video.all
const addVideoBtn = document.getElementById('vid-btn-')
const videoForm = document.getElementById('add-video-')
const embeddedVideo = document.getElementById('embedded-video')
const newVideoValue = document.getElementById('new-vid-inp')
const backToCategories = document.getElementById('back-to-categories')
const overlay = document.getElementById('overlay')
videoAPI.getVideos()

// Messages
const displayMessage = (message, duration, id) => {
    const msg = document.createElement("div")
    msg.classList.add("message")
    msg.style.color = "white"
    msg.innerHTML = `<p>${message}</p>`
    if (id) {
        document.getElementById(`new-video-form`).appendChild(msg)
        setTimeout(function () {
        msg.remove()
        }, 2000)
    } else {
        categoryForm.parentElement.append(msg)
        setTimeout(function () {
        msg.remove()
        }, duration)
    }
  }


//   When item is deleted from the db, array in JS is not updated.
//   How to update array on delete?
