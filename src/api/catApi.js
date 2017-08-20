// class cat api
class CatApi {
  // so this is a static method, so just call without instance
  static getAllCats() {
    return fetch('http://localhost:5000/api/v1/cats').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

export default CatApi;
