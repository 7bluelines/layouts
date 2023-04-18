function changeProperty() {
    var flexDir = document.getElementById('flex-direction');
    var mainWindow = document.getElementById('flex-main-window');
    mainWindow.style.flexDirection = flexDir.value;
}







function addItem(num) {
    let arr = document.getElementsByClassName('avitem');
    let arr2 = document.getElementsByClassName('item');
    for (let i = 0; i < arr.length; i++) {
        let thisId = arr[i].getAttribute('id')
        if (thisId.slice(-2) === num) {
            if (arr[i].style.display === 'none') {
                arr[i].style.display = 'block';
                arr2[i].style.display = 'flex';
            } else {
                arr[i].style.display = 'none';
                arr2[i].style.display = 'none';
            }
        }
    }
}