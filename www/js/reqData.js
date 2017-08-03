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
     //url: 'https://southeastasia.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Description&language=en',
     url: 'https://southeastasia.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Tags&language=en',
     headers: {
       'Content-Type': "application/json",
        'Ocp-Apim-Subscription-Key': "63fd25c94e984ee8aa65c34b59ce094a"
     },
     data: { 'url': url }
    }

    return req;
}

function cvApiReq2(url) {
    var req = {
     method: 'POST',
     url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/36828cac-266e-411f-be0b-74167e316ae0/url?iterationId=bc297eca-2f48-4d9b-8573-6a9445aa6033',
     headers: {
       'Content-Type': "application/json",
        'Prediction-Key': "92ef23dd78d545529ff5814c58c945cc"
     },
     data: { 'Url': url }
    }

    return req;
}