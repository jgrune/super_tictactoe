import axios from 'axios'

class GifModel {
  static all(){
    let request = axios.get("http://api.giphy.com/v1/gifs/search?q=congratulations&api_key=dc6zaTOxFJmzC")
    return request
  }
}

export default GifModel
