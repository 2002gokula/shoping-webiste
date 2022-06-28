const removeCart = document.querySelectorAll(".removeCart")
const remove = document.createElement('tbody')
remove.addEventListener("click", function() {
    const remo = e.target.dataset.id
    remove.classList.remove('tr')
})