function saveData(name, code) {
    const data = {
        name: name,
        code: code
    }

    localStorage.setItem('data', JSON.stringify(data))

    window.location.href='file:///C:/Users/User/%D0%9A%D0%9F%D0%86/3%20%D0%BA%D1%83%D1%80%D1%81%201%20%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80/%D0%92%D0%B5%D0%B1/html/destination.html';
}