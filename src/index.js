// Creates a new instance of App
const app = new App()


// document.addEventListener("DOMContentLoaded", () => {
    // category and video button
    // const formBtn = document.querySelector('.create-form-btn')
    // const formContainer = document.querySelector(".form-container")

    // function for each category 
        // <div class="row">
        //     <div class="column">
        //         <p>Thumbnails</p>
        //          function for each category.video display thumbnail in this column
                    // on thumbnail click, display video as embedded video to the right of thumbnails
        //     </div>
        //     <div class="column">
        //         <p>Embedded video</p>
        //          retrived from tiktok embedded api
        //     </div>
        // </div>
// })

// function clickBtn() {
//     let btn = document.querySelector('.create-btn')
//     btn.addEventListener('click', e => {
//         if (e.target.innerText === "Create Category") {
//             categoryForm()
//         } else {
//             // form for new vid
//         }
//     })
// }
// clickBtn()


// function categoryForm() {
//     createCategory.innerHTML = `
//         <form class="add-category">
//             <h3>Create Category</h3>
//             <input type="text" name="name" value="" placeholder="i.e: Cats" class="user-input"/>
//             <input type="submit" name="submit" value="go arrow" class="submit"/>
//         </form>`

// }


// {/* <div class="column" id="thumbnail">
//                 thumbnails of all videos in this category (from API)
//             </div>
//             <div class="column" id="embed">
//                 embedded video of this tiktok
//             </div> */}

// const createCategory = document.querySelector('.create-cat')
// createCategory.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let categoryName = e.target.name.value

//     // POST
//     fetch('http://localhost:3000/categories', {
//         method: "POST",
        // headers: {
        //     "Content-Type": "application/json",
        //     "Accept": "application/json"
        // },
//         body: JSON.stringify({
//             "name": categoryName
//         })
//     })
//     .then(resp => {
//         resp.json()
//     })
//     .then(category => {
//         console.log(category)
//         // category is undefined????
//         let categoryHTML = ` 
//         <div class="list">
//             <h3>${category.name}</h3>
//             <div class="column" id="thumbnail">
//                 thumbnails of all videos in this category (from API)
//             </div>
//             <div class="column" id="embed">
//                 embedded video of this tiktok</a>
//             </div>
//         </div>`
//         categoryCollection.innerHTML += categoryHTML
//     })
//     console.log(createCategory)
// })