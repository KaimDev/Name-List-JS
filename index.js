
function nameList() {
    const name = document.getElementById('name');

    if(!name.value.trim()){
        name.value = '';
        alert('enter a name');
        return;
    }

    var node = document.createElement('li');
    node.appendChild(document.createTextNode(name.value))
    document.querySelector('ol').appendChild(node);
    name.value = '';

}

