const items = []

function addItem() {
    const itemNome = document.querySelector("#item").value
    
    const item = {
        name: itemNome,
        checked: false
    }

    items.push(item)
}