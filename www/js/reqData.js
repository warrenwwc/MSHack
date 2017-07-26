function imgUrlReq(img) {
    var req = {
     method: 'POST',
     url: 'https://mshackimageapi.azurewebsites.net/api/imageapi?code=yrlwmBHn3oGpo9Dy5h0yndytaQjZEao4Ud/OnfrEQLCdTLmJtEeIjQ==',
     headers: {
       'Content-Type': "application/json"
     },
     data: { 'img': String(img) }
    }

    return req;
}


function cvApiReq(url) {
    var req = {
     method: 'POST',
     url: 'https://southeastasia.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Description&language=en',
     headers: {
       'Content-Type': "application/json",
        'Ocp-Apim-Subscription-Key': "63fd25c94e984ee8aa65c34b59ce094a"
     },
     data: { 'url': url }
    }

    return req;
}